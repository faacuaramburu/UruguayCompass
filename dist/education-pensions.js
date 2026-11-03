import {validAnswer} from './core.js';

export const EDUCATION_ORDERS=new Set([1,2,5,6,9,10,13,14,15,16,19]);
export const SOCIAL_TOPICS=[
 {id:'education',name:'Educación',left:'Provisión pública',right:'Elección y opciones mixtas'},
 {id:'pensions',name:'Jubilaciones',left:'Fondo público y reparto',right:'Ahorro individual y sistema mixto'}
];

export function scoreEducationPensions(questions,answers){
 return Object.fromEntries(SOCIAL_TOPICS.map(topic=>{
  const selected=questions.filter(q=>q.axis===10&&q.topic===topic.id&&validAnswer(answers[q.id]));
  const mean=selected.length?selected.reduce((sum,q)=>sum+(answers[q.id]-2)*q.direction,0)/selected.length:null;
  return [topic.id,{score:mean===null?null:Math.round(50+25*mean),count:selected.length}];
 }));
}

// Audit of every reference's former combined axis. Topic notes retain their own
// source/page; a school proposal never supplies a pension position (or vice versa).
// No numeric sub-topic placement is inferred from the old composite placement.
const onlyEducation=new Set(['ca','raffo','lust','vega','lacalle-herrera','andrade']);
const onlyPensions=new Set(['pn','pc','lacalle','gonzalo-martinez','bergara','sanguinetti','jorge-batlle','larranaga','bordaberry']);
const aliases={orsi:'fa',cosse:'fa',delgado:'pn',ripoll:'pn',ojeda:'pc',silva:'pc',manini:'ca',quintana:'ca',mieres:'pi',bottero:'pi',salle:'is',canoniero:'is',argimon:'lacalle',astori:'mujica'};
const both={
 fa:{education:['Defiende la educación como derecho y el fortalecimiento público.',39],pensions:['Propone un diálogo social y tres pilares: solidario, reparto intergeneracional y ahorro no lucrativo.',35]},
 pi:{education:['Propone una oferta educativa diversa.',32],pensions:['Respalda la reforma previsional y la sostenibilidad del sistema.',43]},
 is:{education:['Propone educación en el hogar regulada.',9],pensions:['Propone un sistema estatal de reparto.',13]},
 vazquez:{education:['Defiende el fortalecimiento de la educación pública.',68],pensions:['Defiende seguridad social universal y solidaria, sin lucro.',91]},
 mujica:{education:['Propone fortalecer la educación pública.',86],pensions:['Propone cobertura universal y una reforma para eliminar el lucro previsional.',72]},
 martinez:{education:['Prioriza la provisión pública de educación.',116],pensions:['Propone sustituir el ahorro individual lucrativo por mecanismos solidarios.',146]},
 talvi:{education:['Propone liceos públicos modelo.',177],pensions:['Propone mayor competencia en el ahorro previsional mixto.',33]},
 sartori:{education:['Propone ampliar la educación pública.',16],pensions:['Propone incentivar la capitalización individual.',9]}
};

export function separateSocialPolicies(entities){
 return entities.map(entity=>{
  const origin=entities.find(e=>e.id===entity.comparisonGroup)||entity;
  const key=aliases[entity.id]||entity.id;
  const previous=origin.evidence.find(e=>e.axis===10);
  if(!previous)throw Error(`Falta auditar educación/previsión: ${entity.id}`);
  const originalSource=origin.sources[previous.source];
  const source=entity.sources.findIndex(s=>s.url===originalSource.url);
  if(source<0)throw Error(`Fuente de educación/previsión ausente: ${entity.id}`);
  const socialPolicy={education:null,pensions:null};
  if(onlyEducation.has(key))socialPolicy.education={note:previous.note,source,page:previous.page};
  else if(onlyPensions.has(key))socialPolicy.pensions={note:previous.note,source,page:previous.page};
  else if(both[key])for(const [topic,[note,page]] of Object.entries(both[key]))socialPolicy[topic]={note,source,page};
  else throw Error(`Referencia sin clasificación temática: ${entity.id}`);
  const profile=[...entity.profile],rationale=[...entity.rationale];
  profile[10]=null;
  rationale[10]='Educación y jubilaciones se describen por separado. No hay un puntaje conjunto comparable para esta referencia.';
  return {...entity,profile,rationale,socialPolicy,evidence:entity.evidence.filter(e=>e.axis!==10)};
 });
}
