// Biographical coverage is independent of comparable scoring coverage.
// A role, party affiliation or historical reputation never fills a missing score.
const source=(title,url)=>({title,url});
const presidencia='https://www.gub.uy/presidencia/';
const archivo='https://archivo.presidencia.gub.uy/';
const historia='https://uuee.ejercito.mil.uy/eehh/2024/11/';
const anep='https://uruguayeduca.anep.edu.uy/';
const education='https://contenidoseducativosdigitales.edu.uy/files/';
const unknown='Sin evidencia comparable suficiente para ubicar este eje.';
const historicalUnknown='No se trasladan las propuestas de esta época a la escala contemporánea del test.';

const entries=[
 {id:'astori',name:'Danilo Astori',party:'fa',period:'Vicepresidencia 2010–2015 · Economía 2005–2008 y 2015–2020',
  bio:'Economista, docente y dirigente del Frente Amplio. Fue decano de Ciencias Económicas, ministro de Economía y vicepresidente durante el gobierno de José Mujica.',
  actions:['Ejerció la Vicepresidencia entre 2010 y 2015.','Ocupó el Ministerio de Economía en los gobiernos de Tabaré Vázquez.'],
  sources:[source('Udelar · Trayectoria académica y política de Danilo Astori','https://www.fcea.udelar.edu.uy/acerca-de-biblioteca/decanos/426-danilo-astori.html')],formula:'mujica'},
 {id:'bergara',name:'Mario Bergara',party:'fa',period:'Economía y Banco Central · Intendencia desde 2025',
  bio:'Economista y contador, con trayectoria docente y en la regulación económica. Fue presidente del Banco Central, ministro de Economía y senador; asumió como intendente de Montevideo en julio de 2025.',
  actions:['Presidió el Banco Central en 2008–2013 y 2015–2018.','Fue ministro de Economía en 2013–2015.','Asumió la Intendencia de Montevideo el 8 de julio de 2025.'],
  sources:[source('Intendencia de Montevideo · Biografía de Mario Bergara','https://montevideo.gub.uy/institucional/mario-bergara')]},
 {id:'alejandro-sanchez',name:'Alejandro Sánchez',party:'fa',period:'Secretaría de la Presidencia desde 2025',
  bio:'Dirigente del Frente Amplio designado secretario de la Presidencia en marzo de 2025. Su actividad institucional incluye la coordinación del gobierno y la participación en debates sobre desarrollo e infraestructura digital.',
  actions:['Fue designado secretario de la Presidencia el 1.º de marzo de 2025.','Participó en el encuentro regional Certal de 2026 sobre telecomunicaciones y desarrollo digital.'],
  sources:[source('Presidencia · Designación de Alejandro Sánchez',presidencia+'institucional/normativa/resolucion-sn025-se-designa-secretario-presidencia-republica-alejandro'),source('Presidencia · Participación en Certal, 2026',presidencia+'comunicacion/publicaciones/palabras-del-secretario-presidencia-alejandro-sanchez-encuentro-certal')]},
 {id:'topolansky',name:'Lucía Topolansky',party:'fa',period:'Vicepresidencia desde septiembre de 2017 hasta 2020',
  bio:'Dirigente del Frente Amplio con trayectoria como edila, diputada y senadora. Asumió la Vicepresidencia en septiembre de 2017, como sucesora constitucional de Raúl Sendic.',
  actions:['Fue la primera mujer en asumir la Vicepresidencia de la República.','Defendió el acceso colectivo a tierras del Instituto Nacional de Colonización en 2019.'],
  sources:[source('Presidencia · Asunción de Lucía Topolansky, 2017',presidencia+'comunicacion/noticias/lucia-topolansky-asumio-vicepresidenta-uruguay-titular-asamblea-general'),source('Presidencia · Topolansky y el acceso a tierras de Colonización, 2019',presidencia+'comunicacion/noticias/vicepresidenta-lucia-topolansky-colonizacion-es-emblema-para-pais')],
  basis:'Declaración sobre Colonización, 2019',known:[[0,75,1,'Defiende ampliar el acceso a tierras estatales mediante Colonización. Es evidencia sectorial de intervención pública en el medio rural, no una descripción de toda su política económica.']]},
 {id:'andrade',name:'Óscar Andrade',party:'fa',period:'Actividad parlamentaria · Vivienda, 2026',
  bio:'Senador del Frente Amplio. En 2026 presentó una iniciativa para agilizar la expropiación de inmuebles urbanos vacíos con deudas compensables, orientada al acceso a la vivienda.',
  actions:['Presentó la iniciativa de abreviación del trámite expropiatorio para inmuebles con deuda compensable.','El proyecto recibió apoyo unánime en el Senado en junio de 2026.'],
  sources:[source('Frente Amplio · Iniciativa de vivienda presentada por Andrade, 2026','https://www.frenteamplio.uy/senado-aprueba-por-unanimidad-ley-que-agiliza-la-expropiacion-de-viviendas-vacias-y-en-desuso/')],
  basis:'Propuesta de vivienda, 2026',known:[[0,75,0,'Propone intervención estatal para movilizar viviendas desocupadas con deuda compensable. Esta lectura es sectorial y no completa sus otros ejes.']]},
 {id:'blanca-rodriguez',name:'Blanca Rodríguez',party:'fa',period:'Actividad parlamentaria desde 2025',
  bio:'Senadora del Frente Amplio. Su actividad parlamentaria documentada incluye iniciativas de lectura para jóvenes y la difusión de la investigación científica nacional.',
  actions:['Promovió la cooperación parlamentaria vinculada al programa de lectura «25 para el 25».','Destacó ante el Senado la expedición científica Uruguay Sub 200 en 2025.'],
  sources:[source('MEC · Intervención de Blanca Rodríguez sobre Uruguay Sub 200','https://www.gub.uy/ministerio-educacion-cultura/comunicacion/noticias/expedicion-uruguay-sub-200-parlamento-0'),source('MEC · Programa internacional de lectura «25 para el 25»','https://www.gub.uy/ministerio-educacion-cultura/comunicacion/noticias/programa-internacional-25-para-25-promueve-lectura-forma-integracion-juventud'),source('Frente Amplio · Referencia a la senadora Blanca Rodríguez','https://www.frenteamplio.uy/mesa-politica-nacional-del-frente-amplio-rechaza-agresiones-contra-la-senadora-blanca-rodriguez/')]},
 {id:'lema',name:'Martín Lema',party:'pn',period:'Ministerio de Desarrollo Social 2021–2024 · Senado',
  bio:'Dirigente del Partido Nacional. Fue ministro de Desarrollo Social entre 2021 y 2024 y forma parte de la representación nacionalista en el Senado.',
  actions:['Asumió el Ministerio de Desarrollo Social en mayo de 2021.','Su renuncia al ministerio fue aceptada en marzo de 2024.'],
  sources:[source('MIDES · Asunción de Martín Lema','https://www.gub.uy/ministerio-desarrollo-social/comunicacion/noticias/martin-lema-asumio-ministro-desarrollo-social'),source('Presidencia · Renuncia al ministerio, 2024',presidencia+'institucional/normativa/resolucion-sn024-se-acepta-renuncia-presentada-martin-lema-cargo-ministro'),source('Partido Nacional · Representación parlamentaria','https://partidonacional.org.uy/')]},
 {id:'raffo',name:'Laura Raffo',party:'pn',period:'Precandidatura de 2024 · Directorio de Antel desde 2025',
  bio:'Economista y dirigente del Partido Nacional. En su precandidatura de 2024 presentó propuestas para reducir el costo de vida mediante competencia, menos trámites y facilidades al comercio. En 2025 fue designada en el Directorio de Antel.',
  actions:['Presentó su propuesta económica sobre costo de vida en junio de 2024.','Fue designada integrante del Directorio de Antel en mayo de 2025.'],
  sources:[source('Laura Raffo · Propuesta económica sobre costo de vida, 2024','https://lauraraffo.uy/files/Formula_Raffo.pdf'),source('Presidencia · Designación de Laura Raffo en Antel',presidencia+'institucional/normativa/resolucion-sn025-se-designa-integrante-directorio-administracion-nacional')],
  basis:'Propuesta económica de precandidatura, 2024',known:[[0,25,0,'Propone fortalecer la competencia y reducir trabas a emprendimientos, manteniendo una autoridad pública de defensa de la competencia.',3],[6,15,0,'Propone simplificar importaciones y comercio fronterizo y reducir barreras de acceso a productos.',2]]},
 {id:'argimon',name:'Beatriz Argimón',party:'pn',period:'Vicepresidencia 2020–2025',
  bio:'Dirigente del Partido Nacional y vicepresidenta durante el gobierno de Luis Lacalle Pou. Fue la primera mujer elegida por voto popular para ese cargo.',
  actions:['Integró la fórmula nacionalista que asumió en marzo de 2020.','En 2020 fue elegida para integrar el Comité Ejecutivo de la Unión Interparlamentaria.'],
  sources:[source('Cancillería · Beatriz Argimón y la Unión Interparlamentaria, 2020','https://www.gub.uy/ministerio-relaciones-exteriores/comunicacion/comunicados/11520-eleccion-sra-vicepresidenta-republica-esc-beatriz-argimon-miembro')],formula:'lacalle'},
 {id:'da-silva',name:'Sebastián Da Silva',aliases:['Sebastián da Silva','Da Silva'],party:'pn',period:'Actividad parlamentaria contemporánea',
  bio:'Senador del Partido Nacional. Integra la representación de esa colectividad en la Cámara de Senadores.',
  actions:['Figura en el directorio público de representantes parlamentarios del Partido Nacional.'],
  sources:[source('Partido Nacional · Nómina de senadores','https://partidonacional.org.uy/')]},
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
  sources:[source('Partido Colorado · Nómina de legisladores','https://www.partidocolorado.uy/blank-4'),source('Pedro Bordaberry · Informe de actuación parlamentaria, 2017','https://partidocolorado.uy/documentos/Informe-Actuacion-2017-Pedro-Bordaberry.pdf'),source('Pedro Bordaberry · Discurso en la Universidad de Columbia, 2014','https://vamosuruguay.com.uy/discurso-de-pedro-bordaberry-en-universidad-de-columbia/')]},
 {id:'pacheco-areco',name:'Jorge Pacheco Areco',party:'pc',period:'Presidencia 1967–1972',historical:true,
  bio:'Presidente colorado que asumió tras la muerte de Óscar Gestido en 1967. Su gobierno transcurrió durante la crisis económica y social de fines de los sesenta, con medidas prontas de seguridad, restricciones a organizaciones y cierres de prensa.',
  actions:['Pasó de la Vicepresidencia a la Presidencia tras el fallecimiento de Gestido.','Recurrió a medidas prontas de seguridad y clausuras de medios.'],
  sources:[source('Colección educativa · Jorge Pacheco Areco',education+'jorge-pacheco-areco.pdf'),source('Reseña biográfica de Jorge Pacheco Areco','https://www.buscabiografias.com/biografia/verDetalle/4005/Jorge%20Pacheco%20Areco')]},
 {id:'artigas',name:'José Artigas',party:null,partyName:'Artiguismo',period:'Revolución oriental y Liga Federal · 1811–1820',historical:true,
  bio:'Jefe de los Orientales y referente del federalismo rioplatense. Las Instrucciones de 1813 y el Reglamento de Tierras de 1815 forman parte de su proyecto político, situado en el contexto de las guerras de independencia.',
  actions:['Impulsó las Instrucciones del Año XIII.','Promulgó el Reglamento de Tierras de 1815.'],
  sources:[source('ANEP · Reglamento de Tierras de Artigas',anep+'efemerides/reglamento-de-tierras-de-artigas'),source('Estudios Históricos del Ejército · José Artigas',historia+'22/artigas-jose-gervasio-general/')]},
 {id:'rivera',name:'Fructuoso Rivera',party:'pc',period:'Formación del Estado · Primeras presidencias',historical:true,
  bio:'Militar y primer presidente constitucional del Uruguay, vinculado al origen de la divisa colorada. Su trayectoria comprende las guerras de independencia y los conflictos del nuevo Estado. Durante su presidencia ocurrió la masacre de Salsipuedes de 1831.',
  actions:['Fue el primer presidente constitucional de la República.','La memoria de Salsipuedes integra la revisión de su gobierno y de la violencia estatal contra los charrúas.'],
  sources:[source('Estudios Históricos del Ejército · Fructuoso Rivera',historia+'25/rivera-fructuoso-brigadier-general/'),source('INDDHH · Paso de Salsipuedes, territorio de la masacre','https://www.gub.uy/institucion-nacional-derechos-humanos-uruguay/comision-nacional-honoraria-sitios-memoria/sitios-memoria/paso-salsipuedes-territorio-masacre')]},
 {id:'oribe',name:'Manuel Oribe',party:'pn',period:'Presidencia 1835–1838 · Gobierno del Cerrito',historical:true,
  bio:'Militar, segundo presidente constitucional del Uruguay y referente del origen de la divisa blanca. Tras su salida de la Presidencia encabezó el Gobierno del Cerrito durante la Guerra Grande.',
  actions:['Ejerció la segunda presidencia constitucional del país.','Encabezó el Gobierno del Cerrito durante la Guerra Grande.'],
  sources:[source('Intendencia de Montevideo · Reseña de Manuel Oribe','https://montevideo.gub.uy/monumento-al-brigadier-general-manuel-oribe')]},
 {id:'lavalleja',name:'Juan Antonio Lavalleja',party:'pn',period:'Cruzada de 1825 · Triunvirato de 1853',historical:true,
  bio:'Jefe militar de la Cruzada Libertadora de 1825. Participó en las guerras de independencia y, más adelante, en los conflictos políticos y militares del Estado oriental. Integró el Triunvirato de 1853.',
  actions:['Encabezó la Cruzada Libertadora de 1825 y combatió en Sarandí.','Integró el Triunvirato de gobierno de 1853.'],
  sources:[source('Estudios Históricos del Ejército · Juan Antonio Lavalleja',historia+'24/lavalleja-juan-a-brigadier-general/'),source('Biblioteca del Parlamento · Documentos del Triunvirato de 1853','https://pmb.parlamento.gub.uy/pmb/opac_css/index.php?id=17578&lvl=notice_display')]},
 {id:'berro',name:'Bernardo Prudencio Berro',aliases:['Bernardo Berro','Berro'],party:'pn',period:'Presidencia 1860–1864',historical:true,
  bio:'Político y escritor de la tradición blanca. Antes de ejercer la Presidencia fue senador y ministro. Su gobierno de 1860–1864 se desarrolló en medio de las disputas entre blancos y colorados del siglo XIX.',
  actions:['Ejerció la Presidencia entre 1860 y 1864.','Tuvo actividad legislativa y responsabilidades ministeriales antes de su presidencia.'],
  sources:[source('Biblioteca del Parlamento · Gobierno de Bernardo P. Berro','https://pmb.parlamento.gub.uy/pmb/opac_css/index.php?id=90251&lvl=notice_display'),source('Reseña biográfica de Bernardo Prudencio Berro','https://www.biografiasyvidas.com/biografia/b/berro.htm')]},
 {id:'saravia',name:'Aparicio Saravia',aliases:['Aparicio Sarabia'],party:'pn',period:'Revoluciones de 1897 y 1904',historical:true,
  bio:'Caudillo del Partido Nacional con actuación militar y política en las disputas por la representación y el poder a fines del siglo XIX y comienzos del XX. Fue protagonista de las revoluciones de 1897 y 1904.',
  actions:['Participó en las revoluciones nacionalistas de 1897 y 1904.','Su trayectoria está ligada al departamento de Cerro Largo y a la estancia El Cordobés.'],
  sources:[source('ANEP · Aparicio Saravia',anep+'efemerides/nace-aparicio-saravia')]},
 {id:'herrera',name:'Luis Alberto de Herrera',party:'pn',period:'Actividad política en la primera mitad del siglo XX',historical:true,
  bio:'Dirigente, diplomático e historiador del Partido Nacional. Fue una figura central de esa colectividad durante la primera mitad del siglo XX y referente del herrerismo.',
  actions:['Ejerció responsabilidades legislativas y de dirección partidaria.','Su trayectoria dio nombre a la corriente herrerista dentro del Partido Nacional.'],
  sources:[source('Biblioteca del Parlamento · Biobibliografía de Luis Alberto de Herrera','https://omeka.parlamento.gub.uy/omeka-s/s/biobibliografias/item/3541')]},
 {id:'haedo',name:'Eduardo Víctor Haedo',party:'pn',period:'Consejo Nacional de Gobierno · Presidencia 1961–1962',historical:true,
  bio:'Periodista, pintor y político del Partido Nacional. Fue diputado, senador y ministro de Instrucción Pública; presidió el Consejo Nacional de Gobierno entre marzo de 1961 y marzo de 1962.',
  actions:['Presidió el Consejo Nacional de Gobierno en 1961–1962.','Promovió iniciativas educativas y culturales y rechazó la instalación de bases militares extranjeras.'],
  sources:[source('Museo Nacional de Artes Visuales · Biografía de Eduardo Víctor Haedo','https://mnav.gub.uy/cms.php?a=1016')]},
 {id:'batlle',name:'José Batlle y Ordóñez',aliases:['Batlle y Ordoñez'],party:'pc',period:'Presidencias 1903–1907 y 1911–1915',historical:true,
  bio:'Presidente colorado en dos períodos y referente del reformismo batllista. Fue periodista y fundador del diario El Día. Su proyecto político se estudia en el contexto de las transformaciones del Uruguay de comienzos del siglo XX.',
  actions:['Ejerció la Presidencia en 1903–1907 y 1911–1915.','Fundó el diario El Día y fue una figura central del batllismo.'],
  sources:[source('Intendencia de Montevideo · José Batlle y Ordóñez','https://montevideo.gub.uy/monumento-jose-batlle-y-ordonez'),source('Biblioteca del Parlamento · José Batlle y Ordóñez','https://biblioteca.parlamento.gub.uy/eventos/ver/353')]},
 {id:'terra',name:'Gabriel Terra',party:'pc',period:'Crisis institucional y golpe de Estado de 1933',historical:true,
  bio:'Presidente colorado que encabezó el golpe de Estado de 1933, en el marco de la crisis económica e institucional. Ese proceso incluyó persecución política y ruptura del orden constitucional.',
  actions:['Encabezó el golpe de Estado de 1933.','Su gobierno forma parte del estudio de la crisis institucional uruguaya de los años treinta.'],
  sources:[source('ANEP · Crisis y golpe de Estado de 1933',anep+'recursos/educacion-media-basica/crisis-y-golpe-de-estado-de-1933')]},
 {id:'latorre',name:'Lorenzo Latorre',party:null,partyName:'Militarismo del siglo XIX',period:'Gobierno 1876–1880',historical:true,
  bio:'Militar que asumió el poder en 1876, primero como gobernador provisorio, durante el período conocido como Militarismo. Su gobierno impulsó cambios administrativos, rurales y educativos y terminó con su renuncia en 1880.',
  actions:['Asumió el poder en marzo de 1876.','Durante su gobierno avanzaron la reforma educativa, el alambramiento rural y la secularización del registro civil.'],
  sources:[source('Estudios Históricos del Ejército · Lorenzo Latorre',historia+'25/latorre-lorenzo-coronel/'),source('ANEP · Militarismo y modernización','https://liceo11.ces.edu.uy/images/Materiales_Historia/Militarismo_y_Modernizacion.pdf')]}
];

export function completeFigureCatalog(base,parties){
 const existing=new Set(base.map(f=>f.id));
 const additions=entries.filter(e=>!existing.has(e.id)).map(entry=>{
  const {known=[],formula,...data}=entry;
  const entity={...data,partyName:data.partyName||parties.find(p=>p.id===data.party)?.name,
   era:data.period,sector:data.partyName||parties.find(p=>p.id===data.party)?.name,summary:data.bio,quotes:[],
   profile:Array(12).fill(null),rationale:Array(12).fill(data.historical?historicalUnknown:unknown),evidence:[],
   eligible:false,rankEligible:false,comparable:false,editorial:true,cohort:data.historical?'contexto-historico':'catalogo-ampliado',
   comparisonNote:data.historical?'Ficha histórica de contexto. No participa del ranking ni se proyecta al mapa contemporáneo. Sus fuentes no permiten atribuirle posturas sobre instituciones posteriores a su época.':'Ficha con cobertura parcial. Solo se puntúan propuestas documentadas; todavía no tiene los cinco ejes comunes necesarios para el ranking. No se completa el resto con el programa de su partido.'};
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
