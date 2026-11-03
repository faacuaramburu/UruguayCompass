// Ampliación editorial: las fuentes respaldan propuestas, no las coordenadas numéricas.
// Solo se completan los ejes documentados. Las comparaciones adicionales se completan en comparison-profiles.js.
const unknown='Sin ubicación: evidencia insuficiente en esta edición.';
const source=(title,url)=>({title,url});
const impo=(number,year)=>source(`IMPO · Ley ${number} (${year}), texto original`,`https://www.impo.com.uy/bases/leyes-originales/${number}-${year}`);
export function expandFigures(base,parties,candidatures,root){
 const figures=base.map(e=>({...e,profile:[...e.profile],rationale:[...e.rationale],sources:[...e.sources],evidence:e.evidence.map(v=>({...v}))}));
 const party=id=>parties.find(p=>p.id===id);
 function locate(id,basis,sources,known){
  const e=figures.find(f=>f.id===id),offset=e.sources.length;
  e.mapBasis=basis;e.sources.push(...sources);
  for(const [axis,value,note,sourceIndex=0,page=null] of known){
   e.profile[axis]=value;e.rationale[axis]=note;
   e.evidence=e.evidence.filter(v=>v.axis!==axis);
   e.evidence.push({axis,source:offset+sourceIndex,page,note});
  }
 }
 function add(id,name,partyId,partyName,period,bio,actions,sources,known=[],basis=''){
  figures.push({id,name,party:partyId,partyName,sector:partyName,era:period,period,bio,summary:bio,actions,quotes:[],sources:[],profile:Array(12).fill(null),rationale:Array(12).fill(unknown),evidence:[],eligible:false,rankEligible:false,comparable:false,cohort:'catalogo-ampliado',editorial:true,comparisonNote:'Referencia de contexto. El mapa utiliza solo los ejes documentados del período indicado; esta ficha solo se suma al ranking si tiene los cinco ejes comunes documentados.'});
  locate(id,basis,sources,known);
 }
 const formula=(id,name,partyId,role)=>{
  const p=party(partyId),basis='Programa de la fórmula de 2024';
  const known=[0,3].map(axis=>[axis,p.profile[axis],`${p.rationale[axis]} Se usa el programa compartido de la fórmula, no una posición personal medida.`,0,p.evidence.find(v=>v.axis===axis)?.page]);
  add(id,name,partyId,p.name,'Fórmula nacional de 2024',`${name} integró como ${role} la fórmula nacional de ${p.name} en 2024. Su punto representa el programa de esa fórmula.`,['Integró una fórmula nacional registrada por la Corte Electoral en 2024.','La ubicación compartida no implica pensar igual en todos los temas.'],[p.sources[0],candidatures],known,basis);
 };
 for(const e of figures.filter(e=>e.rankEligible))e.mapBasis='Programa de candidatura de 2024';
 formula('ripoll','Valeria Ripoll','pn','candidata a la Vicepresidencia');
 formula('silva','Robert Silva','pc','candidato a la Vicepresidencia');
 formula('quintana','Lorena Quintana','ca','candidata a la Vicepresidencia');
 formula('bottero','Mónica Bottero','pi','candidata a la Vicepresidencia');
 formula('canoniero','María Elvira Canoniero','is','candidata a la Vicepresidencia');
 locate('cosse','Programa de la fórmula de 2024',[party('fa').sources[0],candidatures],[0,3].map(axis=>[axis,party('fa').profile[axis],`${party('fa').rationale[axis]} Referencia del programa compartido por Orsi y Cosse en 2024.`,0,party('fa').evidence.find(v=>v.axis===axis)?.page]));

 const election2019=source('Corte Electoral · Candidaturas presidenciales de 2019','https://www.gub.uy/corte-electoral/comunicacion/comunicados/proclamacion-candidatos-unicos-partidos-politicos-presidencia-republica');
 const fa2019=source('Frente Amplio · Programa 2020–2025, registrado en 2019',root+'Programa%2Bde%2BGobierno%2BFrente%2BAmplio.pdf');
 const pn2019=source('Partido Nacional · Programa 2020–2025, registrado en 2019',root+'Programa%2Bde%2BGobierno%2B2019%2B-%2BP%2BNacional.pdf');
 const pc2019=source('Partido Colorado · Programa 2020–2025, registrado en 2019',root+'Programa%2BPartido%2BColorado%2B-%2BWeb_compressed.pdf');
 locate('lacalle','Programa de candidatura de 2019',[pn2019,election2019],[[0,35,'El programa propone capital privado en empresas subsidiarias y financiamiento de inversiones mediante el mercado, conservando control público.',0,45],[3,80,'El programa propone reforzar la autoridad policial, cambios en procedimientos y mayores penas.',0,82]]);
 add('martinez','Daniel Martínez','fa','Frente Amplio','Candidatura nacional de 2019','Candidato presidencial del Frente Amplio en 2019. Su ubicación corresponde al programa presentado para esa elección.',['Fue proclamado candidato presidencial por la Corte Electoral en 2019.'],[fa2019,election2019],[[0,80,'Empresas públicas como actores centrales del desarrollo, junto a cooperación con el sector privado.',0,39],[3,35,'Seguridad con enfoque de derechos y prevención de las causas del delito.',0,169]],'Programa de candidatura de 2019');
 add('talvi','Ernesto Talvi','pc','Partido Colorado','Candidatura nacional de 2019','Candidato presidencial del Partido Colorado en 2019. Su ubicación representa el programa electoral de ese año.',['Fue proclamado candidato presidencial por la Corte Electoral en 2019.'],[pc2019,election2019],[[0,25,'El programa propone competencia en combustibles y reformas para la actividad privada.',0,94],[3,65,'Fortalecimiento de comisarías y recursos policiales combinado con prevención y servicios de cercanía.',0,268]],'Programa de candidatura de 2019');

 const up=source('Asamblea Popular · Programa 2025–2030',root+'Partido%20Asamblea%20Popular.pdf');
 const pca=source('Partido Constitucional Ambientalista · Programa 2025–2030',root+'Partido%20Constitucional%20Ambientalista_1.pdf');
 const peri=source('Partido Ecologista Radical Intransigente · Programa 2025–2030',root+'Partido%20Ecologista%20Radical%20Intransigente_1.pdf');
 add('gonzalo-martinez','Gonzalo Martínez','ap','Asamblea Popular / Unidad Popular','Candidatura nacional de 2024','Encabezó la fórmula de Asamblea Popular en 2024. El mapa representa su programa de Unidad Popular.',['El programa propone estatizar bancos privados.','La propuesta de seguridad rechaza herramientas de vigilancia como El Guardián.'],[up,candidatures],[[0,95,'Estatización de bancos y de empresas y servicios privatizados.',0,9],[3,20,'Rechazo de vigilancia con El Guardián, prevención e inclusión de personas liberadas.',0,73]],'Programa de candidatura de 2024');
 add('lust','Eduardo Lust','pca','Partido Constitucional Ambientalista','Candidatura nacional de 2024','Encabezó la fórmula del Partido Constitucional Ambientalista en 2024. Su ubicación utiliza el programa registrado para esa elección.',['Su programa incluye concesiones de obra pública con inversión privada.','Propone patrullaje policial con apoyo militar.'],[pca,candidatures],[[0,35,'Concesiones de obra pública e inversión privada, junto a proyectos públicos y mixtos.',0,62],[3,85,'Patrullaje mixto con militares y aumento de penas vinculadas al narcotráfico.',0,41]],'Programa de candidatura de 2024');
 add('vega','César Vega','peri','Partido Ecologista Radical Intransigente','Candidatura nacional de 2024','Encabezó la fórmula del PERI en 2024. Su programa combina producción nacional, reforma estatal y un enfoque social de la seguridad.',['El programa plantea reorganizar el Estado y orientar inversiones a la producción.','Vincula seguridad con derechos, rehabilitación y políticas integrales.'],[peri,candidatures],[[0,50,'Combina reducir costos del Estado con orientar inversión e impulsar producción nacional. Lectura mixta documentada, no un dato desconocido reemplazado por 50.',0,23],[3,25,'Enfoque garantista, rehabilitación y políticas sociales además de la actuación policial.',0,7]],'Programa de candidatura de 2024');

 locate('mujica','Medidas del gobierno 2010–2015',[
  source('Presidencia · Mujica y la participación público-privada, 2011','https://archivo.presidencia.gub.uy/sci/noticias/2011/03/2011031404.htm'),
  source('Presidencia · Estrategia por la vida y la convivencia, 2012','https://www.gub.uy/presidencia/comunicacion/noticias/gabinete-seguridad-presento-documento-medidas-promueven-convivencia-social')
 ],[[0,60,'Defensa de inversión público-privada bajo regulación, sin privatizar las empresas públicas. Aproximación parcial a la gestión.',0],[3,55,'La estrategia combina mayores penas y capacidad policial con mediación, inclusión y regulación del cannabis. Lectura de medidas combinadas.',1]]);
 locate('vazquez','Medidas del gobierno 2005–2010',[impo(18211,2007),impo(18315,2008)],[[0,65,'El Sistema Nacional Integrado de Salud amplía regulación y financiamiento públicos manteniendo prestadores públicos y privados. Evidencia sectorial, no toda su política económica.',0],[3,50,'La ley de procedimiento policial combina facultades operativas y garantías, proporcionalidad y controles. Lectura intermedia de esa norma, no ausencia de información.',1]]);
 locate('sanguinetti','Leyes del gobierno 1995–2000',[impo(16906,1998),impo(16707,1995)],[[0,35,'Promoción y protección de inversiones privadas nacionales y extranjeras. Evidencia parcial de la Ley de Inversiones.',0],[3,75,'La Ley de Seguridad Ciudadana modifica delitos, penas y herramientas de seguridad. Aproximación a ese conjunto de medidas.',1]]);

 add('jorge-batlle','Jorge Batlle','pc','Partido Colorado','Presidencia 2000–2005','Presidente de Uruguay entre 2000 y 2005. La ficha distingue su gobierno de los otros referentes de apellido Batlle.',['Ejerció la Presidencia entre marzo de 2000 y marzo de 2005.','Promulgó la Ley de Urgencia 17.243 de 2000.'],[source('Presidencia · Trayectoria de Jorge Batlle','https://www.gub.uy/presidencia/comunicacion/noticias/gobierno-decreta-duelo-oficial-extiende-condolencias-fallecimiento-del'),impo(17243,2000)]);
 add('lacalle-herrera','Luis Alberto Lacalle Herrera','pn','Partido Nacional','Presidencia 1990–1995','Presidente de Uruguay entre 1990 y 1995. Su ficha se distingue de la de Luis Alberto de Herrera y de la de Luis Lacalle Pou.',['Durante su presidencia se promulgó la Ley de Empresas Públicas de 1991.'],[source('Presidencia · Sucesión de gobiernos democráticos','https://www.gub.uy/presidencia/comunicacion/noticias/pueblo-uruguayo-celebra-40-anos-democracia-ininterrumpida'),impo(16211,1991)],[[0,25,'La ley de 1991 permite concesiones de servicios públicos y promueve la libre concurrencia. Evidencia económica parcial; falta una referencia comparable en seguridad.',1]],'Ley de Empresas Públicas de 1991');
 return figures;
}
