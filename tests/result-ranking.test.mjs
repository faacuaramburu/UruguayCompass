import test from 'node:test';
import assert from 'node:assert/strict';
import {compatibilityPoints,evaluatePoliticalAnswers,rankPoliticalAnswers} from '../dist/political-scoring.js';
import {scoreProfile,questionSet,restoreState} from '../dist/core.js';
import {QUESTIONS} from '../dist/questions.js';
import {FIGURES} from '../dist/politics.js';
import {evidenceQuestionId} from '../dist/question-audit.js';
import {politicalDifferenceDetails} from '../dist/political-differences.js';
const q=(id,axis=0,concept=id,direction=1)=>({id,axis,concept,direction});
const entity=(id,values,party='same')=>({id,name:id,party,positions:Object.fromEntries(Object.entries(values).map(([key,position])=>[key,{position,status:'documented',confidence:'alta',evidenceIds:[]}]))});
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-9,`${a} ≈ ${b}`);

test('all 25 answer pairs are symmetric, bounded and reverse sign with opposition',()=>{
 for(let a=0;a<=4;a++)for(let p=0;p<=4;p++){
  const points=compatibilityPoints(a,p);close(points,(a-2)*(p-2));assert.equal(points,compatibilityPoints(p,a));assert.equal(points,compatibilityPoints(4-a,4-p));assert.ok(Math.abs(points)<=4);
  close(points,-compatibilityPoints(4-a,p));if(a===2||p===2)assert.equal(points,0);
 }
 for(const invalid of [null,undefined,NaN,Infinity,-1,5,2.5,'2']){assert.equal(compatibilityPoints(4,invalid),null);assert.equal(compatibilityPoints(invalid,0),null)}
 assert.equal(compatibilityPoints(4,4),4);assert.equal(compatibilityPoints(0,4),-4);assert.equal(compatibilityPoints(3,3),1);
});
test('unknown and explicit neutral differ; missing information neither rewards nor penalizes',()=>{
 const qs=[q('one'),q('two')],a={one:4,two:4};
 const known=evaluatePoliticalAnswers(qs,a,entity('known',{one:4}));
 assert.equal(known.score,100);assert.equal(known.coverage,.5);assert.equal(known.knownQuestions,1);assert.equal(known.confidence,'baja');close(known.bounds.lower,50);close(known.bounds.upper,100);
 const neutral=evaluatePoliticalAnswers(qs,a,entity('neutral',{one:2}));assert.equal(neutral.score,50);assert.equal(neutral.informative,0);
 const unknown=evaluatePoliticalAnswers(qs,a,entity('unknown',{}));assert.equal(unknown.score,null);assert.equal(unknown.coverage,0);assert.deepEqual(unknown.bounds,{lower:0,upper:100});
 assert.deepEqual(evaluatePoliticalAnswers(qs,{one:2,two:2},unknown.entity).bounds,{lower:50,upper:50});
 assert.deepEqual(evaluatePoliticalAnswers(qs,{one:3,two:1},unknown.entity).bounds,{lower:25,upper:75});
 assert.equal(rankPoliticalAnswers(qs,a,[known.entity,unknown.entity]).conclusive,false);assert.equal(evaluatePoliticalAnswers(qs,{},known.entity).score,null);
});
test('equal axis/concept weights limit repeated evidence; missing variants remain missing',()=>{
 const qs=[q('a',0,'repeat'),q('b',0,'repeat'),q('c',1)],answers={a:4,b:4,c:4},e=entity('e',{a:4,b:4,c:0});
 const result=evaluatePoliticalAnswers(qs,answers,e);close(result.rawScore,50);close(result.coverage,1);
 close(evaluatePoliticalAnswers([qs[0],qs[2]],answers,e).rawScore,result.rawScore);close(evaluatePoliticalAnswers([...qs,qs[0]],answers,e).rawScore,result.rawScore);
 const partial=evaluatePoliticalAnswers(qs,answers,entity('partial',{a:4,c:0}));close(partial.coverage,.75);close(partial.bounds.lower,25);close(partial.bounds.upper,50);
 const axisOnly=evaluatePoliticalAnswers(Array.from({length:12},(_,i)=>q('q'+i,i)),Object.fromEntries(Array.from({length:12},(_,i)=>['q'+i,4])),entity('one',{q0:4}));close(axisOnly.coverage,1/12);assert.ok(axisOnly.bounds.lower<9&&axisOnly.bounds.upper===100);
});
test('ranking uses unrounded values, discloses exact ties and ignores a preferred ID',()=>{
 const qs=Array.from({length:130},(_,i)=>q('q'+i)),answers=Object.fromEntries(qs.map(x=>[x.id,3]));
 const base=Object.fromEntries(qs.map(x=>[x.id,4])),a=entity('Alfa',{...base,q0:3}),b=entity('Beta',base);
 const r=rankPoliticalAnswers(qs,answers,[a,b]);assert.equal(r.ranked[0].score,r.ranked[1].score);assert.equal(r.ranked[0].entity.id,'Beta');assert.equal(r.closest.length,1);assert.equal(r.conclusive,true);
 assert.equal(rankPoliticalAnswers(qs,answers,[a,b],'Alfa').ranked[0].entity.id,'Beta');
 const ties=rankPoliticalAnswers(qs,answers,[b,entity('Gamma',base)]);assert.equal(ties.closest.length,2);assert.equal(ties.conclusive,false);
});
test('question order, axis direction, party and candidate counts do not enter compatibility',()=>{
 const qs=[q('a',0),q('b',1),q('c',2)],answers={a:4,b:1,c:3},e=entity('one',{a:3,b:0,c:1}),copy=entity('two',{a:3,b:0,c:1},'opponent');
 const before=structuredClone({qs,answers,e}),score=evaluatePoliticalAnswers(qs,answers,e).rawScore;
 close(evaluatePoliticalAnswers([...qs].reverse(),answers,e).rawScore,score);close(evaluatePoliticalAnswers(qs.map(x=>({...x,direction:-1})),answers,e).rawScore,score);
 const r=rankPoliticalAnswers(qs,answers,[e,copy,entity('third',{a:4,b:4,c:4})]);close(r.ranked.find(x=>x.entity.id==='one').rawScore,r.ranked.find(x=>x.entity.id==='two').rawScore);assert.deepEqual({qs,answers,e},before);
 const different=rankPoliticalAnswers(qs,answers,[e,entity('same-party',{a:0,b:4,c:4})]);assert.notEqual(different.ranked[0].rawScore,different.ranked[1].rawScore);
});
test('left to right hypothetical profiles mirror one another without prescribing real winners',()=>{
 const qs=Array.from({length:12},(_,i)=>q('q'+i,i)),left=entity('left',Object.fromEntries(qs.map(x=>[x.id,0]))),right=entity('right',Object.fromEntries(qs.map(x=>[x.id,4]))),expected=[[100,0],[75,25],[50,50],[25,75],[0,100]];
 for(let level=0;level<=4;level++){const answers=Object.fromEntries(qs.map(x=>[x.id,level]));close(evaluatePoliticalAnswers(qs,answers,left).rawScore,expected[level][0]);close(evaluatePoliticalAnswers(qs,answers,right).rawScore,expected[level][1])}
});
test('identical axis averages need not imply compatible answers; neutrality cannot fabricate positive matches',()=>{
 const qs=[q('x'),q('y')],answers={x:4,y:0},a=entity('a',{x:4,y:0}),b=entity('b',{x:0,y:4});assert.deepEqual(scoreProfile(qs,answers),scoreProfile(qs,{x:0,y:4}));
 assert.deepEqual(rankPoliticalAnswers(qs,answers,[a,b]).ranked.map(x=>x.score),[100,0]);const neutral=rankPoliticalAnswers(qs,{x:2,y:2},[a,b]);assert.ok(neutral.ranked.every(x=>x.score===50));assert.equal(neutral.conclusive,false);
});
test('production rankings retain source-backed knowns, no fallback and saved current-schema answers',()=>{
 for(const version of ['short','full','extreme']){
  const qs=questionSet(QUESTIONS,version),answers=Object.fromEntries(qs.map((x,i)=>[x.id,i%5])),restored=restoreState(JSON.stringify({schema:3,version,answers,cursor:0,completed:true}),QUESTIONS);assert.deepEqual(restored.answers,answers);assert.ok(restored.completed);
  const r=rankPoliticalAnswers(qs,restored.answers,FIGURES);assert.equal(r.ranked.length+r.unknown.length,31);assert.equal(r.conclusive,false);
  for(const row of r.ranked){assert.ok(row.score>=0&&row.score<=100);assert.ok(row.coverage>0&&row.coverage<=1+1e-10);for(const g of row.details)for(const x of g.evaluations)if(x.points!==null){assert.ok(x.evidenceIds.length);assert.equal(x.position,row.entity.positions[evidenceQuestionId(x.question)].position)}}
  const diff=politicalDifferenceDetails(r.ranked[0]);assert.ok(diff.near.every(x=>x.points>0));assert.ok(diff.far.every(x=>x.points<0));
 }
 assert.throws(()=>rankPoliticalAnswers(Array(12).fill(50),FIGURES),/respuestas individuales/);
});

test('identification bounds contain any completion of missing variants, with deterministic randomized cases',()=>{
 let seed=90871;const next=()=>{seed=(1664525*seed+1013904223)>>>0;return seed/2**32};
 const qs=Array.from({length:72},(_,i)=>q('case'+i,i%12,'group'+Math.floor(i/24)));
 for(let run=0;run<100;run++){
  const answers=Object.fromEntries(qs.map(q=>[q.id,Math.floor(next()*5)])),truth=Object.fromEntries(qs.map(q=>[q.id,Math.floor(next()*5)])),partial=Object.fromEntries(Object.entries(truth).filter(()=>next()<.45));
  const full=evaluatePoliticalAnswers(qs,answers,entity('full',truth)),observed=evaluatePoliticalAnswers(qs,answers,entity('partial',partial));
  assert.ok(full.rawScore>=observed.bounds.lower-1e-9&&full.rawScore<=observed.bounds.upper+1e-9);
  close(full.coverage,1);close(evaluatePoliticalAnswers([...qs].reverse(),answers,entity('partial',partial)).rawScore,observed.rawScore);
 }
});
