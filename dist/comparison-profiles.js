// One dated program per reference. All ranked references share these five axes.
// Values are editorial interpretations in steps of five, not numbers in the sources.
export const COMPARISON_AXES=[0,3,6,10,11];
const root='https://www.gub.uy/corte-electoral/sites/corte-electoral/files/documentos/publicaciones/';
const programs=[
 {id:'mujica',year:2009,period:'2010–2015',title:'Frente Amplio · Programa 2010–2015',url:'https://www.frenteamplio.uy/wp-content/uploads/programa_2010_2015_1_0-2.pdf',positions:[
  [0,75,49,'Propone regulación económica y empresas públicas como herramientas del desarrollo.'],
  [3,40,136,'Plantea seguridad basada en convivencia, acceso a la justicia y protección de los derechos ciudadanos.'],
  [6,45,150,'Combina apertura dentro del Mercosur, protección moderada y acuerdos externos que preserven capacidades nacionales.'],
  [10,20,72,'Propone cobertura social universal y una reforma para eliminar el lucro previsional. Educación: fortalecimiento público (p. 86).'],
  [11,30,39,'Exige proteger suelo, agua y aire en la producción y orientar el desarrollo hacia la sustentabilidad.']
 ]},
 {id:'vazquez',year:2014,period:'2015–2020',title:'Frente Amplio · Programa 2015–2020',url:root+'Programa_nacional_FA_2015_2020.pdf',positions:[
  [0,75,21,'Asigna al Estado la conducción estratégica del desarrollo y la orientación de la inversión privada.'],
  [3,35,131,'Prioriza prevención, participación comunitaria y derechos; rechaza la saturación policial como respuesta general.'],
  [6,40,26,'Busca nuevos mercados desde el Mercosur, con límites a tratados bilaterales que contradigan la integración regional.'],
  [10,20,91,'Defiende seguridad social universal y solidaria, sin lucro, y educación pública (pp. 68–71).'],
  [11,25,64,'Propone planificación ambiental, control de impactos productivos y promoción de la agroecología.']
 ]},
 {id:'lacalle',year:2019,period:'2020–2025',title:'Partido Nacional · Programa 2020–2025',url:root+'Programa%2Bde%2BGobierno%2B2019%2B-%2BP%2BNacional.pdf',positions:[
  [0,35,45,'Promueve capital privado y financiamiento de inversiones mediante el mercado, manteniendo control público en empresas subsidiarias.'],
  [3,80,82,'Propone reforzar la autoridad policial, modificar procedimientos y aumentar penas.'],
  [6,15,30,'Impulsa libre comercio, acuerdos externos del Mercosur y diversificación de mercados.'],
  [10,75,88,'Propone fortalecer el ahorro individual junto al componente solidario del sistema previsional.'],
  [11,55,97,'Combina protección ambiental con desarrollo productivo y regulaciones proporcionales al impacto.']
 ]},
 {id:'martinez',year:2019,period:'2020–2025',title:'Frente Amplio · Programa 2020–2025',url:root+'Programa%2Bde%2BGobierno%2BFrente%2BAmplio.pdf',positions:[
  [0,80,39,'Sitúa a las empresas públicas como actores centrales del desarrollo, con cooperación privada.'],
  [3,35,169,'Prioriza derechos y prevención de las causas del delito en las políticas de seguridad.'],
  [6,40,196,'Prioriza negociación comercial regional y en bloque, vinculada al desarrollo productivo y los derechos.'],
  [10,20,146,'Prioriza provisión pública en educación (p. 116) y sustituir ahorro individual lucrativo por mecanismos solidarios.'],
  [11,20,64,'Incorpora criterios ecológicos desde la planificación y propone fortalecer controles y agroecología.']
 ]},
 {id:'talvi',year:2019,period:'2020–2025',title:'Partido Colorado · Programa 2020–2025',url:root+'Programa%2BPartido%2BColorado%2B-%2BWeb_compressed.pdf',positions:[
  [0,25,94,'Promueve competencia en combustibles y reformas para ampliar la actividad privada.'],
  [3,65,268,'Combina fortalecimiento policial y comisarías con prevención y servicios de cercanía.'],
  [6,15,50,'Propone abrir mercados, flexibilizar el Mercosur y reducir barreras comerciales.'],
  [10,70,33,'Propone mayor competencia en el ahorro previsional mixto y liceos públicos modelo (pp. 177–179).'],
  [11,35,75,'Propone fortalecer la autoridad ambiental, proteger biodiversidad y alinear producción con conservación.']
 ]}
];
export function extendComparisons(figures){
 return figures.map(figure=>{
  const program=programs.find(p=>p.id===figure.id);
  if(!program)return figure.rankEligible?{...figure,comparisonLabel:'Programa de candidatura de 2024'}:figure;
  const profile=Array(12).fill(null),rationale=Array(12).fill('Sin evidencia comparable de este programa para este eje.');
  const source=figure.sources.length;
  const evidence=program.positions.map(([axis,value,page,note])=>{profile[axis]=value;rationale[axis]=note;return {axis,source,page,note}});
  const comparisonLabel=`Programa de candidatura de ${program.year}`;
  return {...figure,profile,rationale,evidence,sources:[...figure.sources,{title:program.title,url:program.url}],
   rankEligible:true,eligible:true,comparable:true,cohort:`candidaturas-${program.year}`,comparisonLabel,mapBasis:comparisonLabel,
   era:`Candidatura nacional de ${program.year}`,period:program.period,
   comparisonNote:`Se compara el programa ${program.period} que representó su candidatura de ${program.year}, sobre los mismos cinco ejes que las demás referencias. No se mezclan medidas de otros gobiernos ni se reconstruye toda su trayectoria.`};
 });
}
