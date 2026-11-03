// These references describe a defined administration, not an election platform.
// The dated original texts document public measures; placements are editorial.
const law=(number,year)=>({title:`IMPO · Ley ${number}, texto original (${year})`,url:`https://www.impo.com.uy/bases/leyes-originales/${number}-${year}`});
const records=[
 {id:'sanguinetti',period:'1995–2000',sources:[
  law(16906,1998),law(16707,1995),
  {title:'OEA/SICE · Acuerdo comercial Chile–Mercosur, firmado en 1996',url:'https://sice.oas.org/TPD/CHL_MER/CHL_MER_s.asp'},
  law(16713,1995),law(17234,2000)
 ],positions:[
  [0,35,0,'La Ley 16.906 promueve inversión privada nacional y extranjera, con garantías y beneficios fiscales (arts. 1–5 y 8).'],
  [3,75,1,'La Ley 16.707 endurece respuestas penales y condiciones de excarcelación, y exige uso policial proporcional de la fuerza (arts. 25–28).'],
  [6,25,2,'Durante esta administración Uruguay participa del acuerdo Chile–Mercosur de 1996, que amplía el intercambio regional. No implica apertura comercial sin restricciones.'],
  [10,80,3,'La Ley 16.713 introduce el régimen previsional mixto: solidaridad intergeneracional y ahorro individual obligatorio (art. 4). Este puntaje describe previsión, no su política educativa.'],
  [11,20,4,'La Ley 17.234, promulgada en febrero de 2000, crea el sistema de áreas naturales protegidas y permite limitar actividades que dañen esos espacios (arts. 1 y 8).']
 ]},
 {id:'jorge-batlle',period:'2000–2005',sources:[
  law(17243,2000),law(17726,2003),law(17766,2004),
  {title:'Archivo de Presidencia · Jorge Batlle defiende el sistema con AFAP, 28/5/2004',url:'https://archivo.presidencia.gub.uy/noticias/archivo/2004/mayo/2004052810.htm'},
  law(17283,2000)
 ],positions:[
  [0,25,0,'La Ley 17.243 favorece inversión y competencia e incorpora capital privado a la terminal de contenedores del puerto (arts. 13–15 y 20).'],
  [3,65,0,'La Ley 17.243 amplía efectivos policiales y endurece penas (arts. 62–65). La Ley 17.726 de su misma gestión también habilita alternativas a la prisión preventiva.'],
  [3,65,1,'Como contrapeso a las medidas penales de 2000, la Ley 17.726 permite alternativas a la prisión preventiva para determinados casos (arts. 1–3); no elimina controles judiciales.'],
  [6,10,2,'La Ley 17.766 aprueba el tratado de libre comercio con México, firmado en 2003 y aprobado en 2004. Es evidencia concreta de apertura bilateral.'],
  [10,75,3,'En mayo de 2004 Batlle defiende expresamente la reforma previsional y las AFAP. Se documenta su respaldo al sistema mixto, sin atribuirle la creación de la reforma de 1995 ni resumir educación.'],
  [11,25,4,'La Ley 17.283 establece prevención y precaución ambiental, participación e integración del ambiente al desarrollo (art. 6). No equivale a rechazar toda actividad productiva.']
 ]}
];

export function extendGovernmentReferences(figures){
 return figures.map(figure=>{
  const record=records.find(r=>r.id===figure.id);if(!record)return figure;
  const offset=figure.sources.length,profile=Array(12).fill(null),rationale=Array(12).fill('Sin evidencia comparable seleccionada de esta administración para este eje.');
  const evidence=record.positions.map(([axis,value,source,note])=>{
   profile[axis]=value;
   if(!rationale[axis]||rationale[axis].startsWith('Sin evidencia'))rationale[axis]=note;
   return {axis,source:offset+source,page:null,note};
  });
  const comparisonLabel=`Medidas de gobierno ${record.period}`;
  return {...figure,profile,rationale,evidence,sources:[...figure.sources,...record.sources],
   historical:false,cohort:'gobierno-documentado',comparisonType:'government',comparisonLabel,mapBasis:comparisonLabel,
   comparisonNote:`Esta referencia describe medidas y declaraciones del gobierno de ${record.period}, no un programa electoral ni todas las ideas personales del presidente. Las leyes fueron aprobadas por el Parlamento y promulgadas durante esa administración; no se atribuye su autoría exclusiva. Se comparan los mismos cinco temas, pero las decisiones de gobierno y las promesas electorales son fuentes distintas. Los puntajes son interpretaciones editoriales y no califican los resultados de la gestión.`};
 });
}
