import test from 'node:test';
import assert from 'node:assert/strict';
import {AXES} from '../dist/context.js';
import {QUESTIONS} from '../dist/questions.js';
import {FIGURES,PARTIES} from '../dist/politics.js';
import {migratePoliticalEntity,PREVIOUS_AXES,REVERSED_AXES,CURRENT_COMPARISON_AXES} from '../dist/axis-model.js';
import {questionSet,restoreState,scoreProfile,sharedAxes} from '../dist/core.js';
import {compassCoordinates} from '../dist/compass.js';

test('the current questionnaire uses the twelve requested axes and their specified pole order',()=>{
 assert.deepEqual(AXES.map(a=>a.name),['Economía','Impuestos','Trabajo','Seguridad','Instituciones','Valores sociales','Religión','Comercio exterior','Política exterior','Inmigración','Educación y servicios','Ambiente']);
 assert.deepEqual(AXES.map(a=>[a.left,a.right]),[
  ['Intervencionismo estatal','Libre mercado'],['Redistribución','Impuestos bajos'],['Protección laboral','Flexibilidad laboral'],['Libertades individuales','Control y autoridad'],['Gobierno controlado','Gobierno fuerte'],['Progresismo','Conservadurismo'],['Laicismo','Tradicionalismo religioso'],['Apertura comercial','Proteccionismo'],['No alineamiento','Alineamiento internacional'],['Apertura migratoria','Restricción migratoria'],['Provisión pública','Libertad de elección'],['Protección ambiental','Desarrollo productivo']]);
 assert.ok(AXES.every(a=>a.leftIcon&&a.rightIcon));
 assert.deepEqual(AXES.map(a=>[a.leftIcon,a.rightIcon]),[['🏛️','💼'],['🤝','🪙'],['🛡️','🔄'],['🕊️','🚔'],['⚖️','🏛️'],['🌈','🏡'],['⚖️','🕯️'],['🌐','🏭'],['🧭','🤝'],['🌍','🛂'],['🏫','🔀'],['🌿','🏗️']]);
 for(const [version,count] of [['short',36],['full',60],['extreme',240]]){
  const qs=questionSet(QUESTIONS,version);assert.equal(qs.length,count);
  assert.ok(qs.some(q=>q.axis===4)&&qs.some(q=>q.axis===10));
  assert.ok(qs.filter(q=>q.axis===4||q.axis===10).every(q=>q.legacyId===null));
 }
 assert.ok(!QUESTIONS.some(q=>/dictadura|archivos militares|jubilaci|AFAP|previsional/i.test(q.text)));
});

test('legacy answers follow unchanged question identities and never fill the two new topics',()=>{
 for(const version of ['short','full','extreme']){
  const count={short:3,full:5,extreme:20}[version],answers={};
  for(let axis=0;axis<12;axis++)for(let order=1;order<=count;order++)answers[`a${axis}q${order}`]=(axis+order)%5;
  const raw=JSON.stringify({schema:1,version,answers,cursor:0,completed:true}),state=restoreState(raw,QUESTIONS);
  assert.equal(state.schema,2);assert.equal(state.completed,false);assert.equal(state.migrated,true);
  assert.equal(Object.keys(state.answers).length,count*10);
  assert.equal(questionSet(QUESTIONS,version)[state.cursor].axis,4);
  for(const q of questionSet(QUESTIONS,version)){
   if(q.legacyId)assert.equal(state.answers[q.id],answers[q.legacyId]);
   else assert.equal(state.answers[q.id],undefined);
  }
  const profile=scoreProfile(questionSet(QUESTIONS,version),state.answers);
  assert.equal(profile[4],null);assert.equal(profile[10],null);
 }
});

test('documented profiles remap their evidence, reverse the specified poles and leave new topics unknown',()=>{
 const old={id:'example',profile:[20,30,40,50,60,70,80,90,10,15,25,35],rationale:Array.from({length:12},(_,i)=>`Old axis ${i}`),sources:[{url:'https://example.org/source'}],evidence:Array.from({length:12},(_,axis)=>({axis,source:0,note:`Evidence ${axis}`})),rankEligible:true};
 const before=structuredClone(old),current=migratePoliticalEntity(old);
 assert.deepEqual(current.profile,[80,70,60,50,null,60,70,80,90,90,null,35]);
 assert.deepEqual(old,before);
 for(const axis of [4,10]){assert.equal(current.profile[axis],null);assert.ok(!current.evidence.some(e=>e.axis===axis))}
 PREVIOUS_AXES.forEach((previous,axis)=>{if(previous!==null){assert.equal(current.rationale[axis],old.rationale[previous]);assert.ok(current.evidence.some(e=>e.axis===axis&&e.note===`Evidence ${previous}`))}});
 const oldX=60+(100-old.profile[0])*2.6;
 assert.equal(compassCoordinates(current.profile[0],current.profile[3]).x,oldX);
 for(const entity of [...FIGURES,...PARTIES]){assert.equal(entity.profile[4],null);assert.ok(Number.isFinite(entity.profile[10]));assert.ok(!entity.evidence.some(e=>e.axis===4));assert.ok(entity.evidence.some(e=>e.axis===10&&entity.sources[e.source]?.url))}
 assert.deepEqual(sharedAxes(FIGURES),CURRENT_COMPARISON_AXES);assert.deepEqual(sharedAxes(PARTIES),CURRENT_COMPARISON_AXES);
});

test('reversed question directions preserve the meaning of the same answers',()=>{
 const qs=questionSet(QUESTIONS,'full').filter(q=>q.legacyId);
 const answers=Object.fromEntries(qs.map(q=>[q.id,(q.axis+q.order)%5]));
 const before=qs.map(q=>({...q,axis:PREVIOUS_AXES[q.axis],direction:q.direction*(REVERSED_AXES.has(q.axis)?-1:1)}));
 const oldProfile=scoreProfile(before,answers),current=scoreProfile(qs,answers);
 PREVIOUS_AXES.forEach((previous,axis)=>{if(previous!==null)assert.equal(current[axis],REVERSED_AXES.has(axis)?100-oldProfile[previous]:oldProfile[previous])});
});
