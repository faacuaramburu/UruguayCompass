import test from 'node:test';
import assert from 'node:assert/strict';
import {FIGURES,PARTIES} from '../dist/politics.js';
import {QUESTIONS} from '../dist/questions.js';
import {COMPARISON_AXES} from '../dist/comparison-profiles.js';
import {scoreEducationPensions} from '../dist/education-pensions.js';
import {questionSet,scoreProfile,restoreState,rankProfiles,sameAffinity} from '../dist/core.js';
import {rankFigures} from '../dist/result-ranking.js';

test('the short test can distinguish public education from individual pension savings',()=>{
 const qs=questionSet(QUESTIONS,'short'),answers=Object.fromEntries(qs.map(q=>[q.id,2]));
 Object.assign(answers,{a10q1:4,a10q2:0,a10q3:0});
 assert.equal(scoreProfile(qs,answers)[10],33,'the old combined score hides opposing preferences');
 assert.deepEqual(scoreEducationPensions(qs,answers),{education:{score:0,count:2},pensions:{score:100,count:1}});
 const saved=JSON.stringify({schema:1,version:'short',completed:true,cursor:35,answers});
 assert.deepEqual(restoreState(saved,QUESTIONS).answers,answers);
});

test('every existing question keeps its topic, direction and identity across all test versions',()=>{
 for(const version of ['short','full','extreme']){
  const qs=questionSet(QUESTIONS,version);
  for(const q of qs.filter(q=>q.axis===10))assert.ok(['education','pensions'].includes(q.topic));
  for(const topic of ['education','pensions']){
   const answers=Object.fromEntries(qs.map(q=>[q.id,q.axis===10&&q.topic===topic?2+2*q.direction:2]));
   const scores=scoreEducationPensions(qs,answers);
   assert.equal(scores[topic].score,100);assert.equal(scores[topic==='education'?'pensions':'education'].score,50);
   assert.equal(scores.education.count+scores.pensions.count,qs.filter(q=>q.axis===10).length);
  }
 }
 assert.deepEqual(scoreEducationPensions([],{}),{education:{score:null,count:0},pensions:{score:null,count:0}});
});

test('all 31 figures and six parties have audited topic evidence and no composite reference score',()=>{
 assert.deepEqual(COMPARISON_AXES,[0,3,6,11]);
 for(const f of [...FIGURES,...PARTIES]){
  assert.equal(f.profile[10],null,f.id);assert.ok(!f.evidence.some(e=>e.axis===10),f.id);
  assert.ok(f.socialPolicy.education||f.socialPolicy.pensions,f.id);
  for(const topic of Object.values(f.socialPolicy))if(topic){assert.ok(topic.note.length>15);assert.ok(f.sources[topic.source]?.url.startsWith('https://'));assert.ok(!('score' in topic))}
 }
 for(const id of ['raffo','lust','vega','andrade','lacalle-herrera'])assert.equal(FIGURES.find(f=>f.id===id).socialPolicy.pensions,null,id);
 for(const id of ['bergara','sanguinetti','jorge-batlle'])assert.equal(FIGURES.find(f=>f.id===id).socialPolicy.education,null,id);
 const is=PARTIES.find(p=>p.id==='is');assert.ok(is.socialPolicy.education.note.includes('hogar'));assert.ok(is.socialPolicy.pensions.note.includes('reparto'));
 const pi=PARTIES.find(p=>p.id==='pi');assert.equal(pi.socialPolicy.education.page,32);assert.equal(pi.socialPolicy.pensions.page,43);
});

test('education and pension answers cannot advantage any candidate through an incomparable topic',()=>{
 for(const f of FIGURES){
  const profile=f.profile.map(v=>v??50),base=rankFigures(profile,FIGURES);
  assert.deepEqual(base.axes,COMPARISON_AXES);
  for(const n of [0,33,50,67,100]){
   const p=[...profile];p[10]=n;
   assert.deepEqual(rankFigures(p,FIGURES).ranked.map(x=>[x.entity.id,x.distance]),base.ranked.map(x=>[x.entity.id,x.distance]),f.id);
  }
 }
 for(const n of [0,100]){const p=Array(12).fill(50);p[10]=n;assert.deepEqual(rankProfiles(p,PARTIES).axes,COMPARISON_AXES)}
});

test('rounding a percentage cannot promote a more distant reference or turn it into a true tie',()=>{
 const p=Array(12).fill(50),make=(id,name,value)=>({id,name,rankEligible:true,profile:[value,50,50,...Array(9).fill(null)]});
 const entities=[make('laura','Laura',51),make('luis','Luis',50)];
 const r=rankFigures(p,entities,'laura');
 assert.deepEqual(r.ranked.map(x=>x.score),[100,100]);
 assert.equal(r.ranked[0].entity.id,'luis');assert.equal(r.closest.length,1);
 assert.equal(sameAffinity(r.ranked[0],r.ranked[1]),false);
});
