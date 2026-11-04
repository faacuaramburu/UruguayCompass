// Nuevas ubicaciones: se vuelven a leer las propuestas educativas; no se reciclan
// los antiguos puntajes de jubilaciones. El eje incluye servicios: una fuente
// educativa no permite inferir todas las posiciones sobre salud o cuidados.
import {CURRENT_COMPARISON_AXES} from './axis-model.js';
const root='https://www.gub.uy/corte-electoral/sites/corte-electoral/files/documentos/publicaciones/';
const education=[
 {ids:['orsi','cosse','fa'],file:'Partido%20Frente%20Amplio_1.pdf',value:20,page:39,note:'Defiende la educación pública, participación de la comunidad y ampliación de su oferta; capítulo de educación, pp. 39–42.'},
 {ids:['delgado','ripoll','pn'],file:'Partido%20Nacional_1.pdf',value:35,page:176,note:'Propone extender centros públicos de tiempo completo y continuar los centros María Espínola; pp. 176–178. La autonomía de gestión no equivale a privatización.'},
 {ids:['ojeda','silva','pc'],file:'Partido%20Colorado_1.pdf',value:35,page:10,note:'Propone 80 nuevos centros de tiempo completo y universalizar la jornada extendida; pp. 8–12. Se interpreta la provisión educativa, no el régimen jubilatorio.'},
 {ids:['manini','quintana','ca'],file:'Partido%20Cabildo%20Abierto_1.pdf',value:35,page:41,note:'Propone fortalecer ANEP y la oferta pública inicial y rural, junto con diversidad de instituciones terciarias; pp. 41–44.'},
 {ids:['mieres','bottero','pi'],file:'Partido%20Independiente.pdf',value:45,page:32,note:'Respalda centros públicos con autonomía y articulación territorial, y opciones de formación cultural privadas con apoyo público; pp. 31–34 y 50. Esquema mixto, no sustitución total de ANEP.'},
 {ids:['salle','canoniero','is'],file:'Partido%20Identidad%20Soberana.pdf',value:45,page:7,note:'Defiende gratuidad de la educación pública y contempla educación en el hogar bajo supervisión estatal; pp. 7–9. Se conservan ambos componentes.'},
 {ids:['vazquez'],file:'Programa_nacional_FA_2015_2020.pdf',value:20,page:68,note:'Propone defender y transformar la educación pública, ampliar presupuesto y coordinar sus instituciones; pp. 68–71.'},
 {ids:['mujica','astori'],url:'https://www.frenteamplio.uy/wp-content/uploads/programa_2010_2015_1_0-2.pdf',value:20,page:86,note:'Programa de 2009: fortalecimiento y ampliación de la educación pública, en el capítulo educativo; pp. 86–90. No se usa la propuesta previsional de la p. 72.'},
 {ids:['lacalle','argimon'],file:'Programa%2Bde%2BGobierno%2B2019%2B-%2BP%2BNacional.pdf',value:40,page:104,note:'Propone reforma de la educación pública, ampliar el tiempo pedagógico y dar autonomía a centros y equipos; capítulo educativo, pp. 104–118.'},
 {ids:['martinez'],file:'Programa%2Bde%2BGobierno%2BFrente%2BAmplio.pdf',value:20,page:116,note:'Defiende la educación como derecho y responsabilidad pública; amplía recursos, cobertura y coordinación institucional; capítulo educativo, desde p. 116.'},
 {ids:['talvi'],file:'Programa%2BPartido%2BColorado%2B-%2BWeb_compressed.pdf',value:30,page:177,note:'Propone 136 liceos públicos modelo y extender la educación inicial, con nuevas formas de gestión; pp. 166–179. No se interpreta como provisión privada ni como propuesta de AFAP.'},
 {ids:['gonzalo-martinez'],file:'Partido%20Asamblea%20Popular.pdf',value:10,page:47,note:'Prioriza un sistema educativo público y su función de transformación social; sección Dimensión Educativa Pública, pp. 47–51.'},
 {ids:['lust'],file:'Partido%20Constitucional%20Ambientalista_1.pdf',value:25,page:47,note:'Defiende enseñanza gratuita, becas y mayor asignación de recursos públicos, junto con libertad de elección mutual; pp. 47–51. Se reconoce que educación y salud tienen matices distintos.'},
 {ids:['vega'],file:'Partido%20Ecologista%20Radical%20Intransigente_1.pdf',value:20,page:19,note:'Centra las propuestas en coordinar organismos públicos, reducir grupos y mejorar recursos e infraestructura educativa; pp. 19–20.'},
 {ids:['lacalle-herrera'],url:'https://impo.com.uy/diariooficial/2009/10/01/avisosdeldia.pdf',value:60,page:20,note:'Programa de fórmula de 2009: cooperación estatal y privada en educación, reconocimiento de títulos docentes privados y expansión de cobertura; pp. 20–21.'},
 {ids:['sartori'],url:'https://enperspectiva.uy/wp-content/uploads/2019/05/plan-de-todos-bases-programaticas-juan-sartori.pdf',value:40,page:16,note:'Propone universalizar CAIF, educación temprana e incentivos para completar ciclos, junto con un sistema educativo por competencias; pp. 16–17.'},
 {ids:['larranaga'],file:'Programa%20de%20Gobierno%202015%20-%20P%20Nacional%20-%20Imprenta.pdf',value:40,page:2,note:'Programa de fórmula de 2014: escuelas de tiempo completo, evaluación y financiación pública de proyectos educativos; pp. 2–3.'},
 {ids:['bordaberry'],file:'Plan_Uruguay_2015_2020_Partido_Colorado_compressed%20%281%29_0.pdf',value:40,page:15,note:'Propone una alianza entre centros, docentes y familias y ampliar ofertas de educación pública con autonomía y evaluación; capítulo educativo, desde p. 15.'},
 {ids:['bergara'],url:'https://semanariovoces.com/mario-bergara-los-cucos-de-bolches-y-tupas-insultan-la-inteligencia-de-la-gente/',value:25,page:null,note:'Entrevista del 4/5/2024: propone recomponer presupuestos de educación, salud y vivienda y una reforma integral a partir de Ceibal. No se reutiliza su defensa de un pilar de AFAP.'},
 {ids:['andrade'],url:'https://semanariovoces.com/oscar-andrade-si-esperas-la-bendicion-de-los-sectores-mas-poderosos-no-vas-a-hacer-nada/',value:15,page:null,note:'Entrevista del 8/6/2019: defiende más recursos, becas y educación artística pública. La lectura se limita al componente educativo documentado.'},
 {ids:['sanguinetti','jorge-batlle'],url:'https://www.gub.uy/presidencia/comunicacion/noticias/dos-anos-se-crearon-66-escuelas-tiempo-pedagogico-extendido',value:30,page:null,note:'Balance del MEC publicado el 21/8/2012: expansión de escuelas públicas de tiempo completo en 1995–1999 y 2000–2004. Se documenta una medida de ANEP durante cada administración, sin atribuir autoría exclusiva al presidente ni inferir toda su política de servicios.'},
 {ids:['raffo'],file:'Partido%20Nacional_1.pdf',value:35,page:176,note:'Referencia educativa de 2024: expansión de centros públicos y continuidad de María Espínola, pp. 176–178 del programa del PN. Se incorpora tras su respaldo público a ese programa en la entrevista de Radio Uruguay del 14/8/2024; no se atribuye este texto a su documento de precandidatura de abril.',endorsement:{title:'Radio Uruguay · Entrevista a Laura Raffo, 14/8/2024',url:'https://mediospublicos.uy/los-uruguayos-quieren-mas-en-cinco-anos-no-se-puede-hacer-todo-afirmo-raffo/'}}
];
const taxes=[
 {ids:['orsi','cosse'],value:20,page:29,note:'Propone reducir impuestos al consumo y fortalecer la imposición progresiva sobre renta, grandes patrimonios y capital; p. 29.'},
 {ids:['delgado','ripoll'],value:70,page:6,note:'Defiende rebajas tributarias a trabajadores, jubilados y microempresas y aliviar costos de importación; pp. 6 y 34.'},
 {ids:['ojeda','silva'],value:70,page:197,note:'Propone ampliar deducciones de IRPF y revisar su estructura de tasas; p. 197.'},
 {ids:['manini','quintana'],value:65,page:62,note:'Propone revisar franjas del IRPF y reducir la carga tributaria de micro y pequeñas empresas; p. 62.'},
 {ids:['mieres','bottero'],value:45,page:20,note:'Propone más progresividad y nuevos tramos para la tributación de micro y pequeñas empresas; p. 20. Se limita al régimen citado, no a una suba general de impuestos.'},
 {ids:['salle','canoniero'],value:75,page:17,note:'Propone reducir carga tributaria y aportes de micro, pequeñas y medianas empresas; p. 17.'},
 {ids:['vazquez'],value:20,page:27,note:'Defiende una tributación progresiva para financiar servicios públicos y equidad; pp. 27–28.'},
 {ids:['lacalle','argimon'],value:70,page:28,note:'Propone alivios y exoneraciones de IRAE para micro y pequeñas empresas, especialmente sin facturación; p. 28.'},
 {ids:['martinez'],value:20,page:28,note:'Defiende progresividad fiscal y reducir desigualdad, con menor peso de impuestos al consumo; p. 28.'},
 {ids:['gonzalo-martinez'],value:10,page:12,note:'Plantea reforma tributaria redistributiva y cuestiona beneficios fiscales al gran capital; pp. 12–13.'},
 {ids:['lust'],value:75,page:31,note:'Propone rebajas significativas de IRPF e IASS e incentivos a la inversión; p. 31.'},
 {ids:['sartori'],value:85,page:8,note:'Propone reducir IRAE hasta cinco puntos, eliminar progresivamente IMESI de combustibles y reducir otras cargas; pp. 8–10.'},
 {ids:['larranaga'],value:65,page:5,note:'Programa de fórmula de 2014: deducciones de IRPF por gastos educativos y mayores deducciones de alquiler; p. 5.'},
 {ids:['andrade'],value:10,page:null,note:'Entrevista del 8/6/2019: defiende mayor imposición a grandes patrimonios y rentas empresariales para financiar vivienda e inversión social. No se deriva de su pertenencia partidaria.'}
];
export function extendServiceEvidence(entities,{includeTaxes=false}={}){return entities.map(entity=>{
 const record=education.find(x=>x.ids.includes(entity.id));if(!record)throw new Error(`Falta evidencia educativa: ${entity.id}`);
 const profile=[...entity.profile],rationale=[...entity.rationale],sources=[...entity.sources],url=record.url||root+record.file;
 let source=sources.findIndex(s=>s.url===url);if(source<0){source=sources.length;sources.push({title:record.file?'Programa electoral · Educación y servicios':'Referencia educativa fechada',url})}
 if(record.endorsement)sources.push(record.endorsement);
 profile[10]=record.value;rationale[10]=record.note;
 const comparisonNote=entity.comparisonNote.replaceAll('cuatro temas','cinco temas').replaceAll('cuatro puntajes','cinco puntajes').replace('Los cinco puntajes son','Las ubicaciones documentadas son').replace('Cuando un eje reúne educación y previsión se indica qué componente está documentado.','').replace(' Instituciones y Educación y servicios no tienen una ubicación asignada en esta edición: no se reutilizan puntajes de memoria histórica ni de previsión.','')+' Educación y servicios se fundamenta en las propuestas educativas citadas, con sus matices; no reconstruye por sí sola toda la política de salud y cuidados. Instituciones continúa sin evidencia comparable.';
 let evidence=[...entity.evidence.filter(e=>e.axis!==10),{axis:10,source,page:record.page,note:record.note}];
 const tax=includeTaxes&&taxes.find(x=>x.ids.includes(entity.id));
 if(tax){profile[1]=tax.value;rationale[1]=tax.note;evidence=[...evidence.filter(e=>e.axis!==1),{axis:1,source,page:tax.page,note:tax.note}]}
 const comparable=CURRENT_COMPARISON_AXES.every(axis=>Number.isFinite(profile[axis])&&evidence.some(e=>e.axis===axis&&sources[e.source]?.url));
 return {...entity,profile,rationale,sources,comparisonNote,evidence:evidence.sort((a,b)=>a.axis-b.axis),updatedAt:'2026-11-04',...(record.endorsement?{comparisonLabel:'Propuestas y declaraciones de 2024',mapBasis:'Propuestas y declaraciones de 2024'}:{}),comparable,eligible:comparable,...(Object.hasOwn(entity,'rankEligible')?{rankEligible:comparable}:{})};
})}
