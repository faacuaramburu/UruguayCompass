import {ADDITIONAL_FIGURES} from './additional-figures.js';
import {migratePoliticalEntity} from './axis-model.js';
import {extendServiceEvidence} from './service-evidence.js';
// Editorial dataset. The source documents support the proposals; the numbers are our estimates.
import {expandFigures} from './figure-expansion.js';
import {extendComparisons} from './comparison-profiles.js';
import {completeFigureCatalog} from './figure-catalog.js';
import {expandRankedReferences} from './ranking-expansion.js';
import {extendGovernmentReferences} from './government-references.js';
import {extendStatementReferences} from './statement-references.js';
const PROGRAM_ROOT = 'https://www.gub.uy/corte-electoral/sites/corte-electoral/files/documentos/publicaciones/';
const REPRESENTATION = {title:'Cámara de Representantes · Diario de Sesiones, 18/02/2025, pp. 209–212',url:'https://documentos.diputados.gub.uy/docs/L50/Diario/d4549.pdf#page=209'};
const CANDIDATURES = {title:'Corte Electoral · Acta 10739, elección nacional de 2024',url:'https://www.gub.uy/corte-electoral/sites/corte-electoral/files/2024-11/ACTA%20N%C2%BA%2010739%20-%20Declaraci%C3%B3n%20de%20segunda%20elecci%C3%B3n.pdf'};
const UNKNOWN = 'Sin ubicación: evidencia insuficiente en esta edición.';
function party(id,name,short,file,summary,profile,notes,pages){
  const source = {title:`${name} · Programa presentado para 2025–2030`,url:PROGRAM_ROOT+file};
  return {id,name,short,period:'Programa 2025–2030',era:'2025–2030',summary,bio:summary,
    sources:[source,REPRESENTATION],profile,rationale:notes.map((n,i)=>profile[i]===null?UNKNOWN:n),
    evidence:notes.flatMap((note,axis)=>profile[axis]===null?[]:[{axis,source:0,page:pages[axis],note}]),
    editorial:true,updatedAt:'2026-11-03',eligible:true,comparisonNote:'Estimación del programa de 2024; no describe a cada integrante ni cada votación.'};
}
const LEGACY_PARTIES = [
  party('fa','Frente Amplio','FA','Partido%20Frente%20Amplio_1.pdf',
    'Fuerza fundada en 1971 que reúne sectores de izquierda y progresistas. Su programa articula desarrollo, derechos y redistribución.',
    [80,80,80,40,15,10,40,20,85,10,20,25],
    ['Estado conductor del desarrollo.','Distribución del ingreso y la riqueza.','Derechos laborales y sindicalización.','Prevención y convivencia junto al combate al delito.','Igualdad de género y diversidades.','Educación sexual expresamente laica.','Apertura con integración regional y soberanía.','Autodeterminación y autonomía ante potencias.','Inclusión de poblaciones migrantes.','Investigación, verdad y justicia del pasado reciente.','Educación como derecho y provisión pública.','Transición ecológica como orientación del desarrollo.'],
    [8,15,23,53,67,68,100,9,60,87,39,10]),
  party('pn','Partido Nacional','PN','Partido%20Nacional_1.pdf',
    'Colectividad de tradición nacionalista. El programa de 2024 propone continuar reformas de competitividad, apertura y gestión estatal.',
    [35,30,45,70,null,null,15,null,80,null,75,55],
    ['Competencia, inversión y adaptación de regulaciones.','Bajas tributarias vinculadas a las cuentas públicas.','Consejos de Salarios con modernización laboral.','Mayor capacidad policial y prevención.','','','Ampliación de tratados y apertura unilateral.','','Integración, regularización y atracción de migrantes.','','Continuidad del sistema previsional mixto.','Desarrollo productivo con gestión ambiental.'],
    [14,6,16,146,null,null,52,null,61,null,119,166]),
  party('pc','Partido Colorado','PC','Partido%20Colorado_1.pdf',
    'Colectividad de tradición colorada y batllista. Su programa de 2024 combina competencia, reformas de gestión y políticas sociales.',
    [30,30,35,75,null,null,10,null,null,null,75,50],
    ['Competencia privada y presencia pública en áreas esenciales.','Reducciones impositivas sujetas a mejora fiscal.','Descuelgues y negociación ajustada a cada empresa.','Videovigilancia y respaldo policial.','','','Acuerdos comerciales y reducción de aranceles.','','','','Defensa del sistema previsional mixto.','Equilibrio entre producción y protección ambiental.'],
    [189,196,183,211,null,null,102,null,null,null,205,161]),
  party('ca','Cabildo Abierto','CA','Partido%20Cabildo%20Abierto_1.pdf',
    'Partido de orientación nacional y social. Su programa de 2024 enfatiza seguridad, familia, producción nacional e inclusión.',
    [55,35,45,80,80,null,70,null,75,null,55,50],
    ['Apoyo industrial público con capitalización empresarial.','Rebajas tributarias sectoriales.','Negociación colectiva con adaptación del trabajo.','Seguridad pública como emergencia.','Protección del matrimonio, natalidad y familia.','','Preferencia nacional en compras públicas.','','Regularización y no discriminación de migrantes.','','Educación pública y opciones de gestión.','Protección de cuencas y desarrollo productivo.'],
    [67,65,89,8,27,null,67,null,39,null,40,85]),
  party('pi','Partido Independiente','PI','Partido%20Independiente.pdf',
    'Partido fundado en 2002. Su programa propone crecimiento sostenible, modernización social y reformas con evaluación pública.',
    [45,null,null,50,25,null,25,null,null,null,65,35],
    ['Inversión pública y privada en innovación.','','','Prevención integral, garantías y rehabilitación.','Igualdad de género y revisión del prohibicionismo.','','Apertura y fortalecimiento del multilateralismo comercial.','','','','Oferta educativa diversa y continuidad previsional.','Metas ambientales y desarrollo sostenible.'],
    [36,null,null,56,48,null,13,null,null,null,32,62]),
  party('is','Identidad Soberana','IS','Partido%20Identidad%20Soberana.pdf',
    'Partido que prioriza soberanía y control de los acuerdos públicos. Su programa incorpora producción local y reforma previsional estatal.',
    [65,null,null,40,null,10,70,10,null,null,20,20],
    ['Decisiones productivas nacionales frente a condicionamientos externos.','','','Rechazo de allanamientos nocturnos y combate al narcotráfico.','','Laicidad de la educación pública.','Promoción productiva y consumo locales.','Autonomía frente a potencias y organismos externos.','','','Reparto estatal, junto a educación en el hogar regulada.','Revisión de monocultivos y protección de suelos.'],
    [2,null,null,27,null,7,17,1,null,null,13,18])
];

const byParty = id => LEGACY_PARTIES.find(p=>p.id===id);
function candidate(id,name,partyId,bio,actions,extraSources=[]){
  const p=byParty(partyId);
  return {id,name,party:partyId,partyName:p.name,sector:p.name,era:'Candidatura nacional de 2024',period:'2024',bio,summary:bio,actions,quotes:[],
    profile:[...p.profile],rationale:[...p.rationale],evidence:p.evidence.map(e=>({...e})),
    sources:[p.sources[0],CANDIDATURES,...extraSources],eligible:true,rankEligible:true,comparable:true,cohort:'candidaturas-2024',editorial:true,
    comparisonNote:'En esta comparación se usa el programa que representó su candidatura en 2024. No se atribuye cada propuesta a una convicción personal ni se reconstruye toda su trayectoria.'};
}
function documented(id,name,partyId,era,bio,actions,sources,known=[]){
  const profile=Array(12).fill(null), rationale=Array(12).fill(UNKNOWN),evidence=[];
  known.forEach(([axis,value,note,source=0,page=null])=>{profile[axis]=value;rationale[axis]=note;evidence.push({axis,source,page,note});});
  return {id,name,party:partyId,partyName:partyId?byParty(partyId).name:'Anterior a los partidos actuales',sector:partyId?byParty(partyId).name:'Artiguismo',era,period:era,bio,summary:bio,actions,quotes:[],sources,profile,rationale,evidence,
    eligible:false,comparable:false,cohort:'enciclopedia',editorial:true,
    comparisonNote:'Ficha de contexto. No participa del ranking mientras no haya evidencia comparable en los cinco ejes comunes; los ejes sin evidencia quedan sin puntaje.'};
}

const BASE_FIGURES = [
  candidate('orsi','Yamandú Orsi','fa','Profesor de Historia y dirigente del Frente Amplio. Fue intendente de Canelones y asumió la Presidencia para el período 2025–2030.',
    ['Encabezó la fórmula presidencial del Frente Amplio en 2024.','Su comparación utiliza las bases programáticas presentadas por esa candidatura.'],
    [{title:'Presidencia · Trayectoria de Yamandú Orsi',url:'https://www.gub.uy/presidencia/institucional/estructura-del-organismo/yamandu-orsi'}]),
  candidate('delgado','Álvaro Delgado','pn','Dirigente del Partido Nacional y candidato presidencial en 2024. Su candidatura propuso continuar las reformas del gobierno de coalición iniciado en 2020.',
    ['Representó al Partido Nacional en la elección nacional de 2024.','El programa planteó continuidad de reformas y apertura comercial.']),
  candidate('ojeda','Andrés Ojeda','pc','Candidato presidencial del Partido Colorado en la elección nacional de 2024. Su ficha comparativa representa el programa registrado para esa elección.',
    ['Encabezó la candidatura presidencial colorada de 2024.','El programa combina reformas económicas, sociales y de seguridad.']),
  candidate('manini','Guido Manini Ríos','ca','Excomandante en jefe del Ejército y candidato presidencial de Cabildo Abierto en 2024. Su comparación se limita al programa de esa candidatura.',
    ['Asumió la comandancia en jefe del Ejército en 2015.','Encabezó la candidatura cabildante en la elección de 2024.'],
    [{title:'Presidencia · Asunción como comandante en jefe, 2015',url:'https://www.gub.uy/presidencia/comunicacion/noticias/mujica-impuso-cargo-comandante-jefe-del-ejercito-guido-manini-rios'}]),
  candidate('mieres','Pablo Mieres','pi','Dirigente del Partido Independiente y candidato presidencial en 2024. Integró el gobierno de coalición como ministro de Trabajo y Seguridad Social.',
    ['El programa partidario registra su gestión en el Ministerio de Trabajo.','Representó al Partido Independiente en la elección de 2024.'],
    [{title:'MTSS · Renuncia al cargo ministerial, 2024',url:'https://www.gub.uy/ministerio-trabajo-seguridad-social/institucional/normativa/resolucion-n-1125024-renuncia-del-sr-pablo-mieres'}]),
  candidate('salle','Gustavo Salle','is','Candidato presidencial de Identidad Soberana en la elección nacional de 2024. La comparación usa sus propuestas electorales sobre soberanía y políticas públicas.',
    ['Encabezó la candidatura de Identidad Soberana en 2024.','El programa propone un sistema previsional estatal y mayor autonomía nacional.']),
  documented('vazquez','Tabaré Vázquez','fa','2005–2010 · 2015–2020','Médico y dirigente del Frente Amplio, fue intendente de Montevideo y presidente en dos períodos. Su primer gobierno impulsó reformas tributarias y sanitarias.',
    ['Impulsó el nuevo sistema tributario de 2007.','Promovió la reforma de salud y la ampliación de políticas sociales.'],
    [{title:'Archivo de Presidencia · Biografía de Tabaré Vázquez',url:'https://archivo.presidencia.gub.uy/_web/pages/vazquez01.htm'},{title:'Archivo de Presidencia · Reforma tributaria y reforma de salud, 2007',url:'https://archivo.presidencia.gub.uy/_web/noticias/2007/10/2007101002.htm'}],
    [[1,80,'Defensa de una reforma tributaria con atención a los ingresos menores.',1]]),
  documented('mujica','José Mujica','fa','2010–2015','Dirigente del Frente Amplio, fue ministro y presidente entre 2010 y 2015. Su trayectoria abarca militancia en el MLN, prisión y actividad parlamentaria democrática.',
    ['Ejerció la Presidencia entre 2010 y 2015.','Promulgó la ley de matrimonio igualitario de 2013.'],
    [{title:'Archivo de Presidencia · Biografía de José Mujica',url:'https://archivo.presidencia.gub.uy/sci/pages/mujica01.htm'},{title:'IMPO · Ley 19.075 de matrimonio igualitario',url:'https://www.impo.com.uy/bases/leyes/19075-2013'},{title:'Presidencia · Fallecimiento de José Mujica, 2025',url:'https://www.gub.uy/presidencia/comunicacion/noticias/uruguay-luto-murio-expresidente-jose-pepe-mujica'}],
    [[4,15,'Promulgación del matrimonio igualitario; evidencia específica, no todas sus posiciones sociales.',1]]),
  documented('lacalle','Luis Lacalle Pou','pn','2020–2025','Dirigente del Partido Nacional y presidente entre 2020 y 2025. Encabezó un gobierno de coalición luego de la elección nacional de 2019.',
    ['Asumió la Presidencia el 1.º de marzo de 2020.','Su trayectoria se distingue del programa de la candidatura nacionalista de 2024.'],
    [{title:'Presidencia · Asunción de Luis Lacalle Pou, 2020',url:'https://www.gub.uy/presidencia/comunicacion/noticias/luis-lacalle-pou-asumio-presidente-republica-periodo-2020-2025'}]),
  documented('cosse','Carolina Cosse','fa','Trayectoria contemporánea','Dirigente del Frente Amplio e integrante de la fórmula electa en 2024. Asumió la Vicepresidencia de la República para el período 2025–2030.',
    ['Integró la fórmula presidencial con Yamandú Orsi en 2024.','Asumió la Vicepresidencia en la transición democrática de 2025.'],
    [{title:'Presidencia · Proclamación de la fórmula Orsi–Cosse',url:'https://www.gub.uy/presidencia/institucional/estructura-del-organismo/yamandu-orsi'},{title:'Uruguay XXI · Transición presidencial de 2025',url:'https://www.uruguayxxi.gub.uy/es/noticias/articulo/uruguay-celebra-su-continuidad-democratica-y-estabilidad-con-la-asuncion-de-yamandu-orsi-a-la-presidencia/'}])
];

const LEGACY_FIGURES=expandRankedReferences(extendStatementReferences(extendGovernmentReferences(completeFigureCatalog(extendComparisons(expandFigures(BASE_FIGURES,LEGACY_PARTIES,CANDIDATURES,PROGRAM_ROOT)),LEGACY_PARTIES))));

export const PARTIES=extendServiceEvidence(LEGACY_PARTIES.map(migratePoliticalEntity));
export const FIGURES=[...extendServiceEvidence(LEGACY_FIGURES.map(migratePoliticalEntity),{includeTaxes:true}),...ADDITIONAL_FIGURES];

export const POLITICAL_META = {
  updatedAt:'2026-11-03',
  period:'Programas de 2009, 2014, 2019 y 2024, medidas de gobiernos de 1995–2005 y declaraciones de 2016–2019 y 2024',
  representationSource:REPRESENTATION,
  candidateSource:CANDIDATURES,
  cohort:`${FIGURES.filter(f=>f.rankEligible).length} referentes con los mismos cinco temas documentados, incluidos programas presidenciales, precandidaturas, fórmulas, medidas de gobiernos y declaraciones públicas identificadas. Educación y servicios se añade con evidencia educativa específica.`,
  figuresInRanking:FIGURES.filter(f=>f.rankEligible).map(f=>f.id),
  balanceNote:'La comparación entre personas incluye programas de distintas elecciones, medidas de gobiernos concretos y declaraciones públicas fechadas: no mide apoyo actual ni reparte el mismo número de referencias por partido. La comparación entre partidos mantiene seis programas de 2024.',
  limits:'Las fuentes documentan propuestas y trayectorias. Los valores de 0 a 100 son estimaciones editoriales, no mediciones ni puntuaciones emitidas por las personas o los partidos. Un dato desconocido es null y nunca se reemplaza por 50.',
  individualLimit:'Los perfiles comparables representan programas, medidas de gobierno o declaraciones públicas fechadas, no biografías ideológicas completas. Dos dirigentes pueden compartir un programa y discrepar en temas concretos.',
  historicalLimit:'El ranking conserva 31 referentes con cinco temas comunes documentados. Las 22 fichas documentales adicionales distinguen posiciones cualitativas y desconocidas, sin afinidad numérica ni coordenadas en el mapa. No se asignan posiciones contemporáneas a figuras históricas sin evidencia comparable.',
  missing:'Sin base documental suficiente en esta edición; excluido de la distancia.',
  precision:'Escala editorial orientativa, en pasos de cinco puntos; no implica una precisión empírica de cinco puntos.'
};
