// Catalog additions have dated programs completed in ranking-expansion.js.
// A role, party affiliation or historical reputation never fills a missing score.
const source=(title,url)=>({title,url});
const presidencia='https://www.gub.uy/presidencia/';
const unknown='Sin evidencia comparable suficiente para ubicar este eje.';

const entries=[
 {id:'sanguinetti',name:'Julio María Sanguinetti',party:'pc',period:'Gobierno 1995–2000',
  bio:'Presidente de Uruguay en 1985–1990 y 1995–2000. Esta referencia se limita a medidas de su segunda administración, incluidas la reforma previsional, la promoción de inversiones y la creación del sistema de áreas protegidas.',
  actions:['Durante su segunda presidencia se aprobó el régimen previsional mixto de 1995.','Promulgó la Ley de Inversiones de 1998 y la ley de áreas naturales protegidas de febrero de 2000.'],
  sources:[source('IMPO · Reforma previsional de 1995','https://www.impo.com.uy/bases/leyes-originales/16713-1995')]},
 {id:'jorge-batlle',name:'Jorge Batlle',party:'pc',period:'Gobierno 2000–2005',
  bio:'Presidente de Uruguay entre 2000 y 2005. La referencia compara medidas y declaraciones de esa administración sobre inversión, seguridad, comercio, previsión y protección ambiental, sin reconstruir toda su trayectoria.',
  actions:['Promulgó la Ley 17.243 de 2000, sobre inversión, competencia y otras materias.','Durante su administración se aprobó el tratado de libre comercio con México en 2004.'],
  sources:[source('IMPO · Ley de Urgencia de 2000','https://www.impo.com.uy/bases/leyes-originales/17243-2000')]},
 {id:'astori',name:'Danilo Astori',party:'fa',period:'Vicepresidencia 2010–2015 · Economía 2005–2008 y 2015–2020',
  bio:'Economista, docente y dirigente del Frente Amplio. Fue decano de Ciencias Económicas, ministro de Economía y vicepresidente durante el gobierno de José Mujica.',
  actions:['Ejerció la Vicepresidencia entre 2010 y 2015.','Ocupó el Ministerio de Economía en los gobiernos de Tabaré Vázquez.'],
  sources:[source('Udelar · Trayectoria académica y política de Danilo Astori','https://www.fcea.udelar.edu.uy/acerca-de-biblioteca/decanos/426-danilo-astori.html')],formula:'mujica'},
 {id:'raffo',name:'Laura Raffo',party:'pn',period:'Precandidatura de 2024 · Directorio de Antel desde 2025',
  bio:'Economista y dirigente del Partido Nacional. En su precandidatura de 2024 presentó propuestas para reducir el costo de vida mediante competencia, menos trámites y facilidades al comercio. En 2025 fue designada en el Directorio de Antel.',
  actions:['Presentó su propuesta económica sobre costo de vida en junio de 2024.','Fue designada integrante del Directorio de Antel en mayo de 2025.'],
  sources:[source('Laura Raffo · Propuesta económica sobre costo de vida, 2024','https://lauraraffo.uy/files/Formula_Raffo.pdf'),source('Presidencia · Designación de Laura Raffo en Antel',presidencia+'institucional/normativa/resolucion-sn025-se-designa-integrante-directorio-administracion-nacional')],
  basis:'Propuesta económica de precandidatura, 2024',known:[[0,25,0,'Propone fortalecer la competencia y reducir trabas a emprendimientos, manteniendo una autoridad pública de defensa de la competencia.',3],[6,15,0,'Propone simplificar importaciones y comercio fronterizo y reducir barreras de acceso a productos.',2]]},
 {id:'argimon',name:'Beatriz Argimón',party:'pn',period:'Vicepresidencia 2020–2025',
  bio:'Dirigente del Partido Nacional y vicepresidenta durante el gobierno de Luis Lacalle Pou. Fue la primera mujer elegida por voto popular para ese cargo.',
  actions:['Integró la fórmula nacionalista que asumió en marzo de 2020.','En 2020 fue elegida para integrar el Comité Ejecutivo de la Unión Interparlamentaria.'],
  sources:[source('Cancillería · Beatriz Argimón y la Unión Interparlamentaria, 2020','https://www.gub.uy/ministerio-relaciones-exteriores/comunicacion/comunicados/11520-eleccion-sra-vicepresidenta-republica-esc-beatriz-argimon-miembro')],formula:'lacalle'},
 {id:'sartori',name:'Juan Sartori',party:'pn',period:'Precandidatura de 2019 · Senado 2020–2025',
  bio:'Empresario y dirigente del Partido Nacional. Se presentó a la elección interna de 2019 y luego integró el Senado durante la legislatura 2020–2025.',
  actions:['Participó en la competencia interna nacionalista de 2019.','Ejerció como senador en la legislatura iniciada en 2020.'],
  sources:[source('Juan Sartori · Trayectoria y referencias públicas','https://es.wikipedia.org/wiki/Juan_Sartori')]},
 {id:'larranaga',name:'Jorge Larrañaga',party:'pn',period:'Intendencia de Paysandú · Senado · Interior 2020–2021',
  bio:'Dirigente del Partido Nacional, intendente de Paysandú, senador y ministro del Interior. Ocupó este último cargo desde marzo de 2020 hasta su fallecimiento en mayo de 2021.',
  actions:['Fue intendente de Paysandú y senador por el Partido Nacional.','Ejerció el Ministerio del Interior desde el 1.º de marzo de 2020.'],
  sources:[source('Presidencia · Trayectoria de Jorge Larrañaga, 2021','https://medios.presidencia.gub.uy/tav_portal/2021/noticias/AH_671/Documento%20oficial.pdf'),source('Intendencia de Montevideo · Fallecimiento de Jorge Larrañaga','https://montevideo.gub.uy/noticias/institucional/la-intendencia-de-montevideo-lamenta-el-fallecimiento-de-jorge-larranaga')]},
 {id:'bordaberry',name:'Pedro Bordaberry',party:'pc',period:'Actividad ministerial, electoral y parlamentaria',
  bio:'Dirigente del Partido Colorado y referente de Vamos Uruguay. Su trayectoria incluye responsabilidades ministeriales, candidaturas presidenciales y actividad en el Senado.',
  actions:['Representó al Partido Colorado en las elecciones presidenciales de 2009 y 2014.','Integra la nómina de senadores publicada por su partido.'],
  sources:[source('Partido Colorado · Nómina de legisladores','https://www.partidocolorado.uy/blank-4'),source('Pedro Bordaberry · Informe de actuación parlamentaria, 2017','https://partidocolorado.uy/documentos/Informe-Actuacion-2017-Pedro-Bordaberry.pdf'),source('Pedro Bordaberry · Discurso en la Universidad de Columbia, 2014','https://vamosuruguay.com.uy/discurso-de-pedro-bordaberry-en-universidad-de-columbia/')]}
];

export function completeFigureCatalog(base,parties){
 const existing=new Set(base.map(f=>f.id));
 const additions=entries.filter(e=>!existing.has(e.id)).map(entry=>{
  const {known=[],formula,...data}=entry;
  const entity={...data,partyName:data.partyName||parties.find(p=>p.id===data.party)?.name,
   era:data.period,sector:data.partyName||parties.find(p=>p.id===data.party)?.name,summary:data.bio,quotes:[],
   profile:Array(12).fill(null),rationale:Array(12).fill(unknown),evidence:[],
   eligible:false,rankEligible:false,comparable:false,editorial:true,cohort:'catalogo-ampliado',
   comparisonNote:'Los cinco temas comunes se completan con el programa fechado en ranking-expansion.js.'};
  for(const [axis,value,index,note,page=null] of known){entity.profile[axis]=value;entity.rationale[axis]=note;entity.evidence.push({axis,source:index,note,page})}
  if(known.length)entity.mapBasis=data.basis;
  if(formula){
   const reference=base.find(f=>f.id===formula),offset=entity.sources.length;
   entity.sources=[...entity.sources,...reference.sources];
   entity.mapBasis=reference.comparisonLabel.replace('candidatura','fórmula');
   entity.comparisonNote='El mapa utiliza dos ejes del programa compartido por la fórmula que integró. Es una referencia programática de esa elección, no una medición personal. El ranking conserva una candidatura presidencial por programa para evitar duplicar esa referencia.';
   for(const axis of [0,3]){
    const ev=reference.evidence.find(e=>e.axis===axis),note=`${ev.note} Se utiliza el programa de la fórmula que integró, no el conjunto de sus posiciones personales.`;
    entity.profile[axis]=reference.profile[axis];entity.rationale[axis]=note;entity.evidence.push({...ev,source:offset+ev.source,note});
   }
  }
  return entity;
 });
 return [...base,...additions];
}
