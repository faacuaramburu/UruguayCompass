import {questionConcept,evidenceQuestionId} from './question-audit.js';
export const validPosition=v=>Number.isInteger(v)&&v>=0&&v<=4;
export function compatibilityPoints(answer,position){
 if(!validPosition(answer)||!validPosition(position))return null;
 // Signed agreement: ±4 at matching/opposite extremes, ±1 for moderate
 // answers, zero for an explicitly neutral answer or position. Unknown is null.
 const points=(answer-2)*(position-2);
 return points===0?0:points;
}
export function compatibilityLabel(points){
 if(points===null)return 'Sin evidencia';
 if(points>=3)return 'Compatibilidad muy alta';
 if(points>=2)return 'Compatibilidad alta';
 if(points>0)return 'Compatibilidad parcial';
 if(points===0)return 'Neutral o sin señal direccional';
 return points>-3?'Incompatibilidad parcial':'Incompatibilidad alta';
}
export function conceptGroups(questions){
 const groups=new Map(),seen=new Set();
 for(const q of questions){
  if(seen.has(q.id))continue;seen.add(q.id);
  if(!Number.isInteger(q.axis)||q.axis<0||q.axis>11||![1,-1].includes(q.direction))throw Error('Pregunta política inválida');
  const key=`${q.axis}/${questionConcept(q)}`;
  if(!groups.has(key))groups.set(key,{axis:q.axis,key,questions:[]});
  groups.get(key).questions.push(q);
 }
 return [...groups.values()];
}
const mean=values=>values.reduce((sum,n)=>sum+n,0)/values.length;
export function questionEvaluation(q,answer,entity){
 const entry=entity.positions?.[evidenceQuestionId(q)],known=entry?.status==='documented'&&validPosition(entry.position);
 return {question:q,answer:validPosition(answer)?answer:null,position:known?entry.position:null,
  points:known?compatibilityPoints(answer,entry.position):null,
  confidence:known?entry.confidence:'desconocida',evidenceIds:entry?.evidenceIds||[],status:known?'documented':entry?.status||'unknown'};
}
export function evaluatePoliticalAnswers(questions,answers,entity){
 const groups=conceptGroups(questions),axes=[...new Set(groups.map(g=>g.axis))],axisCounts=new Map(axes.map(axis=>[axis,groups.filter(g=>g.axis===axis).length]));
 let weightedPoints=0,coverage=0,knownQuestions=0,knownConcepts=0,informative=0,missingAmplitude=0;
 const details=groups.map(g=>{
  const evaluations=g.questions.map(q=>questionEvaluation(q,answers?.[q.id],entity)),known=evaluations.filter(x=>x.points!==null),weight=1/(axes.length*axisCounts.get(g.axis));
  knownQuestions+=known.length;informative+=known.filter(x=>x.answer!==2&&x.position!==2).length;
  const points=known.length?mean(known.map(x=>x.points)):null;
  // Knowing one variant does not establish every statement in its concept.
  // Missing variants retain their share in coverage and identification bounds.
  const observedWeight=weight*known.length/evaluations.length;
  if(points!==null){coverage+=observedWeight;weightedPoints+=observedWeight*points;knownConcepts++}
  missingAmplitude+=weight/evaluations.length*evaluations.filter(x=>x.points===null).reduce((sum,x)=>{
   // An answered neutral statement cannot contribute directional points,
   // regardless of the missing political position. A moderate answer caps
   // missing points at ±2 rather than ±4. Missing user answers are symmetric.
   const amplitude=x.answer!==null?2*Math.abs(x.answer-2):x.position!==null?2*Math.abs(x.position-2):4;
   return sum+amplitude;
  },0);
  return {...g,weight,observedWeight,points,evaluations};
 });
 const rawScore=coverage?50+12.5*weightedPoints/coverage:null;
 // Conservative bounds vary missing evidence through its entire range.
 // They are identification bounds, not statistical confidence intervals.
 const lower=50+12.5*(weightedPoints-missingAmplitude),upper=50+12.5*(weightedPoints+missingAmplitude);
 const knownAxes=axes.filter(axis=>details.some(g=>g.axis===axis&&g.points!==null));
 const evidenceConfidence=details.flatMap(g=>g.evaluations.filter(x=>x.points!==null).map(x=>x.confidence));
 const confidence=!coverage?'desconocida':coverage<.5||knownAxes.length<3||evidenceConfidence.includes('baja')?'baja':evidenceConfidence.every(x=>x==='alta')?'alta':'media';
 return {entity,rawScore,score:rawScore===null?null:Math.round(rawScore),coverage,knownQuestions,knownConcepts,informative,axes:knownAxes,confidence,
  bounds:{lower:Math.max(0,lower),upper:Math.min(100,upper)},details};
}
export function rankPoliticalAnswers(questions,answers,entities){
 if(!Array.isArray(questions)||!answers||Array.isArray(answers)||!Array.isArray(entities))throw Error('La afinidad requiere preguntas, respuestas individuales y referentes');
 const evaluated=entities.map(entity=>evaluatePoliticalAnswers(questions,answers,entity));
 const ranked=evaluated.filter(x=>x.rawScore!==null).sort((a,b)=>b.rawScore-a.rawScore||a.entity.name.localeCompare(b.entity.name,'es'));
 const unknown=evaluated.filter(x=>x.rawScore===null).sort((a,b)=>a.entity.name.localeCompare(b.entity.name,'es'));
 const closest=ranked.filter(x=>Math.abs(x.rawScore-(ranked[0]?.rawScore??0))<1e-10);
 const lead=ranked[0];
 const conclusive=!!lead&&lead.informative>0&&evaluated.every(x=>x===lead||lead.bounds.lower>x.bounds.upper+1e-10);
 return {ranked,unknown,closest,conclusive,axes:[...new Set(ranked.flatMap(x=>x.axes))].sort((a,b)=>a-b),revision:'question-evidence-v1'};
}
