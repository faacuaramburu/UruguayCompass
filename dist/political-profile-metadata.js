import {AXES} from './context.js';
import {describeAxisPosition} from './axis-presentation.js';
import {hypothesisAxes} from './political-hypotheses.js';

export function withResearchMetadata(entities){return entities.map(entity=>{
 const axes=hypothesisAxes(entity),originalNote=entity.comparisonNote||'';
 const originalBio=entity.bio||entity.summary||'';
 const bio=originalBio.split(/(?<=\.)\s+/).filter(s=>! /^(Esta referencia|La referencia|La comparación|Su comparación|El mapa|Su ubicación|Su punto|Su ficha comparativa|La ficha)/.test(s)).join(' ');
 return {...entity,bio:bio||originalBio,originalBio,
  originalComparisonNote:originalNote,
  comparisonNote:`Perfil compuesto de doce ejes, con fuentes fechadas e inferencias identificadas. ${axes.length?`${axes.length} ${axes.length===1?'ubicación es una hipótesis contrafáctica asistida':'ubicaciones son hipótesis contrafácticas asistidas'} por IA, de confianza muy baja; sus referencias aportan contexto, no prueban esa postura.`:'Las coordenadas son interpretaciones editoriales de fuentes temáticas, no respuestas medidas.'} Los períodos de cada eje pueden ser distintos; no es una fotografía simultánea ni una predicción comprobada.`,
  axisResearch:AXES.map((axis,i)=>{
   const placement=entity.placementResearch?.[i],old=entity.axisResearch?.[i],hypothesis=placement?.kind==='hypothesis';
   const refs=placement?.refs||entity.evidence.filter(e=>e.axis===i).map(e=>({source:e.source,page:e.page??null}));
   return {axis:i,value:entity.profile[i],position:describeAxisPosition(axis,entity.profile[i]).label,
    kind:hypothesis?'hypothesis':'interpreted',confidence:placement?.confidence??old?.confidence??null,
    period:placement?.period||entity.period||entity.era,
    basis:entity.rationale[i],refs,referenceRole:hypothesis?'context':'topical'};
  })};
})}

export function inferenceSummary(entity){const n=hypothesisAxes(entity).length;return n?`${n} de 12 ejes son hipótesis de confianza muy baja.`:'Doce ejes con fuentes temáticas; coordenadas editoriales.'}
