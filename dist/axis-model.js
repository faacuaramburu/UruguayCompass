// The previous editorial tables keep their source coordinates internally.
// Public profiles use the current order; new topics never inherit unrelated evidence.
export const AXIS_SCHEMA=2;
export const PREVIOUS_AXES=[0,1,2,3,null,4,5,6,7,8,null,11];
export const REVERSED_AXES=new Set([0,1,2,9]);
export const CURRENT_COMPARISON_AXES=[0,3,7,11];

export function migratePoliticalEntity(entity){
 const profile=Array(12).fill(null),rationale=Array(12).fill('Sin evidencia comparable seleccionada para este eje en la nueva edición.');
 const evidence=[];
 PREVIOUS_AXES.forEach((previous,axis)=>{
  if(previous===null)return;
  const value=entity.profile[previous];
  if(Number.isFinite(value)){profile[axis]=REVERSED_AXES.has(axis)?100-value:value;rationale[axis]=entity.rationale[previous]}
  for(const item of entity.evidence||[])if(item.axis===previous)evidence.push({...item,axis});
 });
 const comparable=CURRENT_COMPARISON_AXES.every(axis=>Number.isFinite(profile[axis])&&evidence.some(e=>e.axis===axis&&entity.sources[e.source]?.url));
 return {...entity,profile,rationale,evidence,
  ...(Object.hasOwn(entity,'rankEligible')?{rankEligible:comparable}:{}),eligible:comparable,comparable,
  comparisonNote:(entity.comparisonNote||'').replaceAll('cinco temas','cuatro temas').replaceAll('cinco puntajes','cuatro puntajes')+' Instituciones y Educación y servicios no tienen una ubicación asignada en esta edición: no se reutilizan puntajes de memoria histórica ni de previsión.'};
}
