import {AXIS_SCHEMA} from './axis-model.js';
import {questionConcept} from './question-audit.js';
export const VERSIONS={short:{label:'Corta',count:36,perAxis:3,minutes:5},full:{label:'Completa',count:60,perAxis:5,minutes:9},extreme:{label:'Extrema',count:240,perAxis:20,minutes:30}};
export function questionSet(bank,version='short'){const v=VERSIONS[version];if(!v)throw Error('Versión desconocida');return bank.filter(q=>q.order<=v.perAxis).sort((a,b)=>a.order-b.order||a.axis-b.axis)}
export function validAnswer(v){return Number.isInteger(v)&&v>=0&&v<=4}
export function scoreProfile(questions,answers){return Array.from({length:12},(_,axis)=>{const groups=new Map(),seen=new Set();for(const q of questions){if(q.axis!==axis||seen.has(q.id)||!validAnswer(answers[q.id]))continue;seen.add(q.id);const key=questionConcept(q);if(!groups.has(key))groups.set(key,[]);groups.get(key).push((answers[q.id]-2)*q.direction)}if(!groups.size)return null;const means=[...groups.values()].map(xs=>xs.reduce((s,v)=>s+v,0)/xs.length);return Math.round(50+25*means.reduce((s,v)=>s+v,0)/means.length)})}
export function isComplete(questions,answers){return questions.length>0&&questions.every(q=>validAnswer(answers[q.id]))}
export function sharedAxes(entities){return Array.from({length:12},(_,i)=>i).filter(i=>entities.every(e=>Number.isFinite(e.profile[i])))}
export function rankProfiles(profile,entities){const axes=sharedAxes(entities).filter(i=>Number.isFinite(profile[i]));if(axes.length<3)return{axes,ranked:[]};const ranked=entities.map(entity=>({entity,score:Math.round(100-axes.reduce((s,i)=>s+Math.abs(profile[i]-entity.profile[i]),0)/axes.length)})).sort((a,b)=>b.score-a.score||a.entity.name.localeCompare(b.entity.name,'es'));return{axes,ranked}}
export function restoreState(raw,bank){
 try{
  const d=JSON.parse(raw);if(![1,2,AXIS_SCHEMA].includes(d?.schema)||!Object.hasOwn(VERSIONS,d.version))return null;
  const set=questionSet(bank,d.version),answers={};
  for(const q of set){const id=d.schema===1?q.legacyId:q.id;if(id&&validAnswer(d.answers?.[id]))answers[q.id]=d.answers[id]}
  const migrated=d.schema!==AXIS_SCHEMA,firstMissing=set.findIndex(q=>!validAnswer(answers[q.id]));
  const cursor=migrated?Math.max(0,firstMissing):Number.isInteger(d.cursor)?Math.min(Math.max(0,d.cursor),set.length-1):0;
  return {schema:AXIS_SCHEMA,version:d.version,answers,cursor,completed:!migrated&&isComplete(set,answers)&&d.completed===true,migrated:migrated||d.migrated===true};
 }catch{return null}
}
