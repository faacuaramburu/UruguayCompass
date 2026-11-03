// Dated, attributed public statements. These are neither party-program proxies
// nor measurements of a whole political identity.
const bergara='https://semanariovoces.com/mario-bergara-los-cucos-de-bolches-y-tupas-insultan-la-inteligencia-de-la-gente/';
const andrade='https://semanariovoces.com/oscar-andrade-si-esperas-la-bendicion-de-los-sectores-mas-poderosos-no-vas-a-hacer-nada/';
const references=[
 {id:'bergara',period:'2024',sources:[{title:'Semanario Voces · Entrevista a Mario Bergara, 4/5/2024',url:bergara}],positions:[
  [0,65,0,'Propone recuperar inversión pública en educación, vivienda y cuidados, junto con políticas productivas e innovación.'],
  [3,35,0,'Rechaza allanamientos nocturnos y prioriza prevención, rehabilitación civil e inteligencia policial, sin excluir la represión del delito.'],
  [6,25,0,'Defiende ampliar mercados desde el Mercosur y acuerdos graduales como el TIFA, sin depender exclusivamente de un TLC con China.'],
  [10,65,0,'Defiende mantener un pilar de ahorro individual junto con solidaridad y reparto. Se documenta previsión; no resume todas sus propuestas educativas.'],
  [11,35,0,'Defiende integrar producción y cuidado ambiental. Pide estudiar el impacto hídrico del hidrógeno; no se le atribuye apoyo ni rechazo a ese proyecto.']
 ]},
 {id:'andrade',period:'2016–2019',sources:[
  {title:'Semanario Voces · Entrevista a Óscar Andrade, 8/6/2019',url:andrade},
  {title:'El Observador · Declaraciones de Andrade sobre un TLC con China, 2/10/2016',url:'https://www.elobservador.com.uy/nota/posible-tlc-con-china-divide-y-pone-en-alerta-al-pit-cnt-20161022500'}
 ],positions:[
  [0,85,0,'Propone ampliar inversión pública en vivienda y regular alquileres para atender necesidades sociales.'],
  [3,25,0,'Prioriza integración urbana, educación y prevención frente a una respuesta centrada en la cárcel.'],
  [6,70,1,'Cuestiona un TLC bilateral con China por la asimetría y dependencia. Evidencia de 2016 sobre ese acuerdo, no rechazo de todo intercambio exterior.'],
  [10,15,0,'Propone ampliar becas, educación artística y recursos de la enseñanza pública. Evidencia educativa; no completa sus posiciones previsionales.'],
  [11,20,0,'Defiende controles previos de impacto, agroecología y apoyo a pequeños productores; cuestiona la mercantilización del agua.']
 ]}
];

export function extendStatementReferences(figures){
 return figures.map(figure=>{
  const reference=references.find(r=>r.id===figure.id);if(!reference)return figure;
  const sources=[...figure.sources],sourceIndices=reference.sources.map(source=>{let index=sources.findIndex(s=>s.url===source.url);if(index<0){index=sources.length;sources.push(source)}else sources[index]=source;return index}),profile=Array(12).fill(null),rationale=Array(12).fill('Sin evidencia comparable seleccionada de estas declaraciones para este eje.');
  const evidence=reference.positions.map(([axis,value,source,note])=>{profile[axis]=value;rationale[axis]=note;return {axis,source:sourceIndices[source],page:null,note}});
  const comparisonLabel=`Declaraciones públicas de ${reference.period}`;
  return {...figure,profile,rationale,evidence,sources,
   cohort:'declaraciones-documentadas',comparisonType:'statements',comparisonLabel,mapBasis:comparisonLabel,
   comparisonNote:`Se comparan declaraciones públicas fechadas en ${reference.period}, identificadas en cada fuente. No se copia el programa de su partido ni se presume que estas posiciones sigan vigentes. Son fuentes distintas de un programa electoral o de medidas de gobierno. Los cuatro puntajes son interpretaciones editoriales de esos temas; no describen toda su trayectoria ni todas sus ideas.`};
 });
}
