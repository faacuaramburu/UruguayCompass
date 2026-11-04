import {POLITICAL_EVIDENCE,POLITICAL_SOURCES,RESEARCH_NOTES,EVIDENCE_REVISION} from './political-evidence.js';
import {QUESTIONS} from './questions.js';
import {scoreProfile} from './core.js';
import {evidenceQuestionId} from './question-audit.js';
export function auditedProfiles(catalog,{party=false}={}){
 return catalog.map(entity=>{
  const key=party?'partido-'+entity.id:entity.id,research=RESEARCH_NOTES[key];
  if(!research)throw Error('Falta investigación de '+key);
  const records=POLITICAL_EVIDENCE.filter(r=>r.person===key),positions=Object.fromEntries(QUESTIONS.map(q=>[evidenceQuestionId(q),{position:null,status:'unknown',confidence:'desconocida',evidenceIds:[]}]));
  for(const r of records){
   if(!POLITICAL_SOURCES[r.source]||!r.note||!r.locator)throw Error('Evidencia incompleta: '+r.id);
   if(r.status!=='documented'||!['alta','media','baja'].includes(r.confidence))throw Error('Estado o confianza inválidos: '+r.id);
   if(!party&&POLITICAL_SOURCES[r.source].kind==='party-platform')throw Error('Un programa partidario no acredita una posición individual: '+r.id);
   for(const [id,value] of Object.entries(r.positions)){
    if(!Object.hasOwn(positions,id)||!Number.isInteger(value)||value<0||value>4)throw Error('Ubicación inválida: '+r.id+'/'+id);
    const existing=positions[id];
    if(existing.position!==null&&existing.position!==value)throw Error('Contradicción pendiente de resolución: '+key+'/'+id);
    const confidenceOrder=['desconocida','baja','media','alta'];
    const confidence=existing.position===null?r.confidence:confidenceOrder[Math.min(confidenceOrder.indexOf(existing.confidence),confidenceOrder.indexOf(r.confidence))];
    positions[id]={position:value,status:r.status,confidence,evidenceIds:[...existing.evidenceIds,r.id]};
   }
  }
  const sources=research.sources.map(id=>POLITICAL_SOURCES[id]),sourceIndex=new Map(sources.map((s,i)=>[s.id,i]));
  for(const r of records)if(!sourceIndex.has(r.source)){sourceIndex.set(r.source,sources.length);sources.push(POLITICAL_SOURCES[r.source])}
  const answers=Object.fromEntries(QUESTIONS.filter(q=>positions[evidenceQuestionId(q)].status==='documented').map(q=>[q.id,positions[evidenceQuestionId(q)].position]));
  const profile=scoreProfile(QUESTIONS,answers);
  const evidence=records.flatMap(r=>[...new Set(Object.keys(r.positions).map(id=>Number(id.match(/^a(\d+)q/)[1])))].map(axis=>({axis,source:sourceIndex.get(r.source),page:null,note:r.note,locator:r.locator,recordId:r.id})));
  const rationale=profile.map((value,axis)=>value===null?'Sin evidencia individual seleccionada que responda estas preguntas.':evidence.filter(e=>e.axis===axis).map(e=>e.note).join(' '));
  const known=Object.values(positions).filter(p=>p.status==='documented').length;
  return {...entity,profile,rationale,evidence,sources,positions,research,evidenceRevision:EVIDENCE_REVISION,
   comparisonLabel:`${party?'Programa oficial':'Evidencia individual'} · ${research.period}`,mapBasis:`Resumen parcial de preguntas documentadas · ${research.period}`,
   comparisonType:party?'program':'individual-evidence',rankEligible:known>0,eligible:known>0,comparable:known>0,
   comparisonNote:`${research.note} ${party?'El programa no se atribuye automáticamente a sus integrantes.':'No se heredan posiciones del partido ni de compañeros de fórmula.'} El porcentaje compara respuestas específicas; las coordenadas por eje son resúmenes parciales y no calculan la afinidad. Los vacíos son desconocidos y no valen 50.`,
   updatedAt:'2026-11-04'};
 });
}
