import {LEGACY_COMPARISON_AXES as COMPARISON_AXES} from './comparison-profiles.js';

// A biography alone never enables a result. Every ranked reference needs dated
// evidence for the same five topics; unknown positions stay unknown.
const root='https://www.gub.uy/corte-electoral/sites/corte-electoral/files/documentos/publicaciones/';
const programs=[
 {id:'lacalle-herrera',year:2009,kind:'Programa de fórmula',formula:true,title:'Lacalle Herrera–Larrañaga · Programa 2010–2015, Diario Oficial del 1/10/2009',url:'https://impo.com.uy/diariooficial/2009/10/01/avisosdeldia.pdf',positions:[
  [0,25,14,'Prioriza libertad económica, propiedad privada y competencia, con regulación y protección social.'],
  [3,85,25,'Propone ampliar la Guardia Republicana y elevar penas, junto con rehabilitación y alternativas para infractores primarios.'],
  [6,10,14,'Propone apertura comercial, más acuerdos bilaterales y flexibilizar el Mercosur.'],
  [10,60,20,'Propone cooperación educativa estatal y privada y reconocer títulos docentes privados (p. 21), junto con ampliar escuelas públicas. Evidencia educativa, no una reforma previsional.'],
  [11,35,18,'Propone controles ambientales, un instituto de biodiversidad y evaluaciones de impacto, buscando equilibrar conservación y desarrollo.']
 ]},
 {id:'bordaberry',year:2014,title:'Pedro Bordaberry · Plan Uruguay 2015–2020',url:root+'Plan_Uruguay_2015_2020_Partido_Colorado_compressed%20%281%29_0.pdf',positions:[
  [0,35,138,'Promueve inversión y emprendimientos, reduce obstáculos al sector privado y conserva herramientas públicas.'],
  [3,85,224,'Amplía vigilancia tecnológica y capacidad policial; exige cumplimiento de condenas, junto con rehabilitación (p. 222).'],
  [6,15,331,'Defiende apertura comercial y acuerdos que amplíen mercados, ante las limitaciones del Mercosur.'],
  [10,75,71,'Defiende la continuidad y los ajustes del sistema previsional mixto creado en 1995. Evidencia previsional, no todos los debates educativos.'],
  [11,25,294,'Reconoce límites ecológicos y propone fortalecer controles ambientales y una cartera especializada (p. 295).']
 ]},
 {id:'sartori',year:2019,title:'Juan Sartori · Plan de Todos, 2019',url:'https://enperspectiva.uy/wp-content/uploads/2019/05/plan-de-todos-bases-programaticas-juan-sartori.pdf',positions:[
  [0,20,4,'Da prioridad a la empresa privada y a un Estado promotor y subsidiario; propone reducir regulaciones.'],
  [3,80,14,'Propone vigilancia, cumplimiento efectivo de penas y presunción de legítima defensa, junto con rehabilitación.'],
  [6,5,11,'Propone una zona de libre comercio, abandonar el arancel externo común y reducir aranceles unilateralmente (p. 12).'],
  [10,75,9,'Incentiva la capitalización individual en la reforma previsional. También propone ampliar la educación pública (p. 16).'],
  [11,40,20,'Combina infraestructura e inversión privada con sustentabilidad y estímulos a tecnologías renovables.']
 ]},
 {id:'raffo',year:2024,kind:'Propuestas de precandidatura',title:'Laura Raffo · Propuestas para hacer historia, 2024',url:'https://lauraraffo.uy/files/Propuestas_Para_Hacer_Historia.pdf',positions:[
  [0,25,null,'Propone facilitar emprendimientos y competencia y reducir burocracia. Capítulo «Sumar empleo y bajar el costo de vida».'],
  [3,80,null,'Propone allanamientos nocturnos con orden judicial y ampliar videovigilancia. Capítulo «Sumar para una convivencia en paz».'],
  [6,15,null,'Defiende regionalismo abierto y acuerdos externos a distintas velocidades. Capítulo «Apertura internacional».'],
  [10,30,null,'Amplía escuelas públicas de tiempo completo y centros María Espínola. Lectura del componente educativo; no atribuye una reforma previsional.'],
  [11,55,null,'Combina facilidades para insumos productivos con movilidad eléctrica y reutilización de baterías. Capítulos de agro y movilidad.']
 ]},
 {id:'larranaga',year:2014,kind:'Programa de fórmula',title:'Lacalle Pou–Larrañaga · Programa 2015–2020',url:root+'Programa%20de%20Gobierno%202015%20-%20P%20Nacional%20-%20Imprenta.pdf',formula:true,positions:[
  [0,40,4,'Impulsa asociaciones público-privadas y financiamiento de empresas públicas mediante el mercado.'],
  [3,75,1,'Propone una Guardia Nacional y reforma policial, junto con prevención y rehabilitación.'],
  [6,20,6,'Busca flexibilizar el Mercosur y negociar con la Unión Europea y otros mercados.'],
  [10,65,1,'Propone elección del régimen jubilatorio al final de la vida activa y mantiene fondos de ahorro e inversión (p. 4).'],
  [11,30,7,'Propone juzgados ambientales, protección de cuencas, controles de agrotóxicos y estímulos a energías limpias.']
 ]},
 {id:'gonzalo-martinez',year:2024,title:'Unidad Popular · Programa 2025–2030',url:root+'Partido%20Asamblea%20Popular.pdf',positions:[
  [0,95,9,'Propone estatizar bancos y recuperar servicios privatizados.'],
  [3,20,73,'Rechaza vigilancia con El Guardián y prioriza prevención e inclusión social de personas liberadas.'],
  [6,95,11,'Propone control estatal del comercio exterior y protección de la industria nacional; rechaza los TLC (p. 9).'],
  [10,5,11,'Propone eliminar las AFAP y un sistema estatal solidario sin lucro.'],
  [11,10,32,'Propone limitar monocultivos, aplicar precaución a transgénicos y reforzar la protección ambiental.']
 ]},
 {id:'vega',year:2024,title:'César Vega · Programa del PERI 2025–2030',url:root+'Partido%20Ecologista%20Radical%20Intransigente_1.pdf',positions:[
  [0,50,23,'Combina reducción del costo estatal con inversión en infraestructura y producción nacional. Es una propuesta mixta documentada.'],
  [3,25,7,'Prioriza derechos, rehabilitación y políticas comunitarias frente a una respuesta centrada en el encierro.'],
  [6,50,23,'Rechaza el proteccionismo como solución general, pero promueve producción local que sustituya importaciones (p. 25).'],
  [10,20,19,'Centra sus propuestas educativas en los organismos públicos, con coordinación y reducción de grupos. No completa el componente previsional.'],
  [11,5,24,'Subordina la producción a límites de la biosfera y propone control de agrotóxicos (p. 27).']
 ]},
 {id:'lust',year:2024,title:'Eduardo Lust · Programa del PCA 2025–2030',url:root+'Partido%20Constitucional%20Ambientalista_1.pdf',positions:[
  [0,35,62,'Propone concesiones de obra pública e inversión privada junto con proyectos públicos y mixtos.'],
  [3,85,41,'Propone patrullaje mixto con militares y mayores penas para delitos vinculados al narcotráfico.'],
  [6,15,14,'Propone flexibilizar el Mercosur y estudiar rebajas unilaterales de aranceles (p. 15).'],
  [10,25,47,'Defiende enseñanza gratuita con becas y mayor inversión educativa (p. 49). No completa sus posiciones previsionales.'],
  [11,25,22,'Propone cuidado de ecosistemas, gestión de residuos y desarrollo dentro de criterios de sustentabilidad.']
 ]}
];

const formulas=[
 ['cosse','orsi',2024],['ripoll','delgado',2024],['silva','ojeda',2024],
 ['quintana','manini',2024],['bottero','mieres',2024],['canoniero','salle',2024],
 ['astori','mujica',2009],['argimon','lacalle',2019]
];

export function expandRankedReferences(figures){
 const expanded=figures.map(f=>({...f,profile:[...f.profile],rationale:[...f.rationale],sources:[...f.sources],evidence:f.evidence.map(e=>({...e}))}));
 for(const program of programs){
  const f=expanded.find(f=>f.id===program.id),offset=f.sources.length;
  f.sources.push({title:program.title,url:program.url});
  for(const [axis,value,page,note] of program.positions){
   f.profile[axis]=value;f.rationale[axis]=note;
   f.evidence=f.evidence.filter(e=>e.axis!==axis);
   f.evidence.push({axis,source:offset,page,note});
  }
  f.comparisonLabel=`${program.kind||'Programa de candidatura'} de ${program.year}`;
  f.mapBasis=f.comparisonLabel;f.comparisonGroup=f.id;
  f.comparisonNote=`Esta comparación utiliza ${f.comparisonLabel.toLocaleLowerCase('es')}, sobre los mismos cinco temas que las demás referencias. ${program.formula?'Es el programa de la fórmula que integró; no una medición personal. ':'No se mezclan propuestas de otras elecciones. '}Los valores son interpretaciones editoriales de las fuentes. Cuando un eje reúne educación y previsión se indica qué componente está documentado.`;
 }
 for(const [id,referenceId,year] of formulas){
  const f=expanded.find(f=>f.id===id),reference=expanded.find(f=>f.id===referenceId),offset=f.sources.length;
  f.sources.push(...reference.sources);
  for(const axis of COMPARISON_AXES){
   const evidence=reference.evidence.find(e=>e.axis===axis);
   const note=`${evidence.note} Referencia del programa compartido de la fórmula de ${year}; no una posición personal independiente.`;
   f.profile[axis]=reference.profile[axis];f.rationale[axis]=note;
   f.evidence=f.evidence.filter(e=>e.axis!==axis);
   f.evidence.push({...evidence,source:offset+evidence.source,note});
  }
  f.comparisonLabel=`Programa de fórmula de ${year}`;f.mapBasis=f.comparisonLabel;f.comparisonGroup=referenceId;
  f.comparisonNote=`Representa el programa de la fórmula que integró en ${year}, no una reconstrucción de sus ideas personales. Comparte esos cinco puntajes con ${reference.name}; si quedan más cerca, el resultado muestra el empate. No se asigna una diferencia que la fuente no documenta.`;
 }
 return expanded.map(f=>{
  const eligible=!f.historical&&COMPARISON_AXES.every(axis=>Number.isFinite(f.profile[axis])&&f.evidence.some(e=>e.axis===axis&&f.sources[e.source]?.url));
  return {...f,rankEligible:eligible,eligible,comparable:eligible,comparisonGroup:f.comparisonGroup||f.id,
   photoUnavailable:null};
 });
}
