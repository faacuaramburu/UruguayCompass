import test from 'node:test';
import assert from 'node:assert/strict';
import {FIGURES} from '../dist/politics.js';
import {QUESTIONS} from '../dist/questions.js';
import {COMPARISON_AXES} from '../dist/comparison-profiles.js';
import {rankFigures} from '../dist/result-ranking.js';
import {questionSet,scoreProfile,restoreState} from '../dist/core.js';

test('the automatically featured reference minimizes distance before rounded percentages',()=>{
 const make=(id,name,economy)=>({id,name,rankEligible:true,profile:Array.from({length:12},(_,i)=>COMPARISON_AXES.includes(i)?(i===0?economy:50):null)});
 const a=make('a','Alfa',48),b=make('b','Beta',49),p=Array(12).fill(50);
 const result=rankFigures(p,[a,b]);
 assert.equal(result.ranked[0].score,100);assert.equal(result.ranked[1].score,100);
 assert.equal(result.ranked[0].entity.id,'b');assert.deepEqual(result.closest.map(x=>x.entity.id),['b']);
 assert.equal(rankFigures(p,[a,b],'a').ranked[0].entity.id,'b');
});

test('every eligible reference can appear among the closest results with sourced common axes',()=>{
 const eligible=FIGURES.filter(f=>f.rankEligible);
 assert.equal(eligible.length,31);
 for(const f of eligible){
  const r=rankFigures(f.profile.map(v=>v??50),FIGURES);
  assert.deepEqual(r.axes,COMPARISON_AXES);
  assert.ok(r.closest.some(x=>x.entity.id===f.id),`${f.id} can actually be a result`);
  assert.equal(r.ranked[0].score,100);
  for(const axis of COMPARISON_AXES){const e=f.evidence.find(e=>e.axis===axis);assert.ok(e&&f.sources[e.source]?.url,`${f.id}: source for axis ${axis}`)}
 }
});

test('independent sourced references can win without copying a current party program',()=>{
 for(const id of ['bordaberry','sartori','raffo','larranaga','vega','lust','gonzalo-martinez','lacalle-herrera','sanguinetti','jorge-batlle','bergara','andrade']){
  const f=FIGURES.find(f=>f.id===id),r=rankFigures(f.profile.map(v=>v??50),FIGURES);
  assert.ok(r.closest.some(x=>x.entity.id===id),id);assert.equal(r.ranked[0].score,100);
 }
});

test('dated shared programs preserve exact ties and a preference cannot alter the automatic result',()=>{
 const f=FIGURES.find(f=>f.id==='mujica'),p=f.profile.map(v=>v??50);
 const original=rankFigures(p,FIGURES),selected=rankFigures(p,FIGURES,'mujica');
 assert.deepEqual(original.closest.map(x=>x.entity.id).sort(),['astori','mujica']);
 assert.equal(selected.ranked[0].entity.id,original.ranked[0].entity.id);
 assert.deepEqual(new Map(selected.ranked.map(x=>[x.entity.id,x.score])),new Map(original.ranked.map(x=>[x.entity.id,x.score])));
 assert.equal(rankFigures(p,FIGURES,'sartori').ranked[0].entity.id,original.ranked[0].entity.id,'A lower match cannot be promoted');
});

test('a saved current-schema test reproduces its reference matches without changing answers',()=>{
 for(const id of ['raffo','lacalle-herrera','sanguinetti','jorge-batlle','bergara','andrade']){
 const qs=questionSet(QUESTIONS,'short'),target=FIGURES.find(f=>f.id===id).profile,answers={};
 for(let axis=0;axis<12;axis++){
  const group=qs.filter(q=>q.axis===axis);let best=null;
  for(let a=0;a<5;a++)for(let b=0;b<5;b++)for(let c=0;c<5;c++){
   const values=[a,b,c],score=50+25*group.reduce((sum,q,i)=>sum+(values[i]-2)*q.direction,0)/3;
   const distance=Math.abs(score-(target[axis]??50));if(!best||distance<best.distance)best={distance,values};
  }
  group.forEach((q,i)=>{answers[q.id]=best.values[i]});
 }
 const saved=JSON.stringify({schema:3,version:'short',completed:true,cursor:35,answers});
 const state=restoreState(saved,QUESTIONS),p=scoreProfile(qs,state.answers);
 assert.equal(state.completed,true);assert.deepEqual(state.answers,answers);
 const result=rankFigures(p,FIGURES);assert.equal(result.ranked[0].entity.id,id);
 assert.ok(result.ranked[0].score>=97);assert.deepEqual(state.answers,JSON.parse(saved).answers);
 }
});
