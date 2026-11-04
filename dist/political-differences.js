import {scoreProfile} from './core.js';
// Compare the same documented questions on both sides. Axis summaries are only
// illustrations; affinity comes from the signed question-level evaluations.
export function politicalDifferenceDetails(evaluation){
 const items=evaluation.axes.map(axis=>{
  const groups=evaluation.details.filter(g=>g.axis===axis&&g.points!==null),entries=groups.flatMap(g=>g.evaluations.filter(x=>x.points!==null)),questions=entries.map(x=>x.question);
  const user=scoreProfile(questions,Object.fromEntries(entries.map(x=>[x.question.id,x.answer])))[axis];
  const reference=scoreProfile(questions,Object.fromEntries(entries.map(x=>[x.question.id,x.position])))[axis];
  const points=groups.reduce((sum,g)=>sum+g.points,0)/groups.length;
  return {axis,user,reference,points,count:entries.length,gap:Math.abs(user-reference)};
 });
 return {near:items.filter(x=>x.points>0).sort((a,b)=>b.points-a.points||a.axis-b.axis).slice(0,3),far:items.filter(x=>x.points<0).sort((a,b)=>a.points-b.points||a.axis-b.axis).slice(0,2)};
}
