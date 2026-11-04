// Individual evidence only. Positions code agreement with the exact statement
// (0..4), not an axis coordinate. A party, ticket or biography supplies no answer.
export const EVIDENCE_REVISION='2026-11-04.1';
const sources={};
function source(id,title,url,date,kind='interview'){sources[id]={id,title,url,date,kind,reviewedAt:'2026-11-04'};return id}
const voces=(id,title,slug,date)=>source(id,`Voces · ${title}`,`https://semanariovoces.com/${slug}/`,date);
const law=(id,number,year,date)=>source(id,`IMPO · Ley ${number}, texto original`,`https://www.impo.com.uy/bases/leyes-originales/${number}-${year}`,date,'enacted-action');
const orsi=voces('orsi-2024','Entrevista a Yamandú Orsi','yamandu-orsi-quiero-ministros-con-hambre-de-hacer','2024-12-13');
const delgado=voces('delgado-2024','Entrevista a Álvaro Delgado','alvaro-delgado-no-tengo-ni-anteojeras-ni-prejuicios','2024-11-23');
const manini=voces('manini-2020','Entrevista a Guido Manini Ríos','guido-manini-rios-senador-nazis-fascistas-partido-militar-un-engendro-del-pepe-en-un-ano-fuimos-de-todo','2020-02-29');
const silva=voces('silva-2022','Entrevista a Robert Silva','robert-silva-presidente-del-codicen-no-le-cedo-la-derecha-a-nadie-en-la-defensa-de-la-educacion-publica','2022-12-18');
const mieres=voces('mieres-2022','Entrevista a Pablo Mieres','pablo-mieres-no-creo-que-este-sea-un-gobierno-de-derecha-ni-que-gobierne-para-los-poderosos','2022-10-22');
const lacalle=voces('lacalle-2022','Entrevista a Luis Lacalle Pou','luis-lacalle-pou-no-se-puede-ser-tan-soberbio-de-decir-que-se-hizo-todo-perfecto','2022-10-01');
const herrera=voces('herrera-2009','Entrevista a Luis Alberto Lacalle','luis-alberto-lacalle-creo-que-ideas-hay-que-tener-pocas-pero-ideologia-ninguna','2009-06-11');
const talvi=voces('talvi-2019','Entrevista a Ernesto Talvi','ernesto-talvi-hay-vacas-sagradas-a-las-que-nadie-quiere-tocar','2019-05-31');
const larranaga=voces('larranaga-2012','Entrevista a Jorge Larrañaga (fecha original; republicada en 2021)','jorge-larranaga-no-creo-en-un-partido-blanquicolorado-ni-en-las-familias-ideologicas','2012-03-15');
const bordaberry=voces('bordaberry-2014','Entrevista a Pedro Bordaberry','pedro-bordaberry-gane-quien-gane-nosotros-vamos-a-ir-por-la-gobernabilidad','2014-10-16');
const bergara=voces('bergara-2024','Entrevista a Mario Bergara','mario-bergara-los-cucos-de-bolches-y-tupas-insultan-la-inteligencia-de-la-gente','2024-05-04');
const andrade=voces('andrade-2019','Entrevista a Óscar Andrade','oscar-andrade-si-esperas-la-bendicion-de-los-sectores-mas-poderosos-no-vas-a-hacer-nada','2019-06-08');
const martinez=voces('martinez-2015','Entrevista a Daniel Martínez','daniel-martinez-gestionar-bien-no-se-compra-en-una-farmacia-ni-se-aprende-en-la-facultad','2015-05-07');
const argimon=voces('argimon-2021','Entrevista a Beatriz Argimón','beatriz-argimon-estoy-convencida-que-no-es-un-referendum-a-favor-o-en-contra-del-gobierno','2021-09-25');
const astori=voces('astori-2010','Entrevista a Danilo Astori','danilo-astori-no-nos-sacamos-del-todo-la-mentalidad-de-oposicion-no-somos-una-fuerza-de-gobierno-todavia','2010-08-12');
const batlle=voces('batlle-2012','Entrevista a Jorge Batlle','jorge-batlle-este-gobierno-es-el-mas-derechista-que-he-visto-en-mi-vida-porque-jode-a-los-que-menos-tienen','2012-04-12');
const sanguinetti=voces('sanguinetti-2025','Entrevista a Julio María Sanguinetti','julio-maria-sanguinetti-los-blancos-no-reconocen-la-realidad','2025-11-27');
const debate=source('debate-2024','Telemundo · Debate presidencial, intervenciones identificadas','https://www.teledoce.com/telemundo/nacionales/en-vivo-debate-entre-delgado-y-orsi-los-candidatos-ya-llegaron/','2024-11-17','public-statement');
const ojeda=source('ojeda-2024','El País · Declaraciones de Ojeda en La Nación+','https://www.elpais.com.uy/informacion/politica/andres-ojeda-en-entrevista-con-un-canal-de-argentina-la-comparacion-con-milei-me-cae-muy-bien','2024-10-14','attributed-statement');
const quintana=source('quintana-2024','Búsqueda · Entrevista a Lorena Quintana (2024; día no confirmado)','https://www.busqueda.com.uy/politica/lorena-quintana-detesto-que-las-mujeres-tengan-que-decidir-si-abortan-un-tema-economico-n5392340','2024');
const quintanaDirect=source('quintana-adopcion','Desayunos Informales · Entrevista a Lorena Quintana','https://www.teledoce.com/programas/desayunos-informales/primera-manana/no-estoy-de-acuerdo-con-la-adopcion-por-parejas-homosexuales-lorena-quintana/','2024-09-30');
const mieresWages=source('mieres-salarios','Presidencia · Presentación de pautas de Consejos de Salarios por Pablo Mieres','https://www.gub.uy/presidencia/comunicacion/noticias/poder-ejecutivo-presento-pautas-para-decima-ronda-consejos-salarios','2023-06-30','public-statement');
const lustInterview=source('lust-2024','Hoy Canelones · Entrevista a Eduardo Lust','https://hoycanelones.com.uy/?p=55158','2024-03-29');
const gonzaloInterview=source('gonzalo-2024','APU · Entrevista a Gonzalo Martínez','https://www.apu.uy/noticias/martinez-si-no-triunfa-el-plebiscito-no-va-ser-por-falta-de-compromiso-en-nuestro-pueblo','2024-07-14');
const bottero=source('bottero-2019','El País · Intervenciones de candidatas en encuentro del PIT-CNT','https://www.elpais.com.uy/informacion/politica/acuerdo-la-agenda-de-derechos-se-mantendra','2019-09-20','attributed-statement');
const bottero2024=source('bottero-2024','El Pueblo · Entrevista a Mónica Bottero','https://elpueblodigital.uy/monica-bottero-periodista-y-vicepresidenciable-por-el-partido-independiente/','2024-09-15');
const ripoll=source('ripoll-2024','Semanario Hebreo · Entrevista a Valeria Ripoll','https://www.semanariohebreojai.com/articulo/8173','2024-10-25');
const raffo=source('raffo-2024','Radio Uruguay · Entrevista a Laura Raffo','https://mediospublicos.uy/los-uruguayos-quieren-mas-en-cinco-anos-no-se-puede-hacer-todo-afirmo-raffo/','2024-08-14');
const sartori=source('sartori-2019','Juan Sartori · Plan de Todos, documento de su precandidatura','https://enperspectiva.uy/wp-content/uploads/2019/05/plan-de-todos-bases-programaticas-juan-sartori.pdf','2019-05-07','personal-platform');
const cosse=source('cosse-2024','Carolina Cosse · Plan PAIS II','https://enperspectiva.uy/wp-content/uploads/2024/06/gacetilla_de_prensa_-_plan_pais_2_0-1.pdf','2024-06-10','personal-platform');
const snis=law('snis-2007',18211,2007,'2007-12-05');
const marriage=law('matrimonio-2013',19075,2013,'2013-05-03');
const cannabis=law('cannabis-2013',19172,2013,'2013-12-20');
const utec=law('utec-2012',19043,2012,'2012-12-28');
const investment=law('inversion-1998',16906,1998,'1998-01-07');
const urgency=law('urgencia-2000',17243,2000,'2000-06-29');
const abortion=law('aborto-2012',18987,2012,'2012-10-22');
const programRoot='https://www.gub.uy/corte-electoral/sites/corte-electoral/files/documentos/publicaciones/';
const programFiles={fa:'Partido%20Frente%20Amplio_1.pdf',pn:'Partido%20Nacional_1.pdf',pc:'Partido%20Colorado_1.pdf',ca:'Partido%20Cabildo%20Abierto_1.pdf',pi:'Partido%20Independiente.pdf',is:'Partido%20Identidad%20Soberana.pdf'};
const programs=Object.fromEntries(Object.entries(programFiles).map(([id,file])=>[id,source('programa-'+id,`Corte Electoral · Programa ${id.toUpperCase()} presentado en 2024`,programRoot+file,'2024','party-platform')]));

const records=[];
function fact(person,source,positions,note,locator,confidence='media',basis='explicit'){
 records.push({id:`${person}-${records.filter(r=>r.person===person).length+1}`,person,source,positions,note,locator,confidence,basis,status:'documented'});
}
// Qualified support is 3 (qualified opposition 1); 4/0 requires a direct,
// unqualified policy position. Coding strength is editorial, not a quoted answer.
fact('orsi',orsi,{'a0q6':4,'a0q8':4},'Defiende empresas públicas como servicio y motor del desarrollo.','Pregunta sobre el papel de las empresas públicas.');
fact('orsi',orsi,{'a0q14':3},'Propone incentivos estatales a formación, ciencia y tecnología.','Discusión sobre inversión, COMAP y nuevos incentivos.');
fact('orsi',debate,{'a3q13':4},'Propone mejorar rehabilitación y cárceles.','Eje seguridad; segunda intervención.');
fact('delgado',delgado,{'a4q6':3},'Defiende la coordinación de acuerdos desde el Ejecutivo.','Discusión sobre iniciativa del Ejecutivo y Parlamento.');
fact('delgado',delgado,{'a10q9':3},'Respalda descentralización universitaria y polo público en Paysandú.','Pasaje sobre oportunidades de formación terciaria.');
fact('delgado',debate,{'a7q5':3},'Defiende concretar acuerdos comerciales con distintos países.','Eje economía.');
fact('ojeda',ojeda,{'a5q11':3,'a5q19':3},'Respalda acceso legal a cannabis y eutanasia; no se deduce su postura sobre toda la salud reproductiva.','Declaraciones sobre libertad individual.');
fact('manini',manini,{'a0q2':4},'Rechaza la desmonopolización propuesta para ANCAP y defiende su continuidad estatal.','Discusión de la LUC y del carácter estratégico de ANCAP.');
fact('manini',manini,{'a0q6':4},'Defiende presencia estatal y empresas estratégicas junto con mercado.','Pregunta sobre empresas estatales fuertes.');
fact('mieres',mieres,{'a5q11':3},'Defiende liberalizar drogas con control sanitario, prevención y rehabilitación.','Discusión sobre la Junta Nacional de Drogas.');
fact('lacalle',lacalle,{'a1q8':0,'a1q16':1},'Cuestiona gravar patrimonio y prefiere renta real; oposición calificada al aumento sobre propiedades.','Discusión sobre depósitos, inversiones y tributación.');
fact('lacalle',lacalle,{'a1q17':3},'Respalda estímulos a inversión mediante COMAP.','Discusión sobre inversión y generación de empleo.');
fact('lacalle-herrera',herrera,{'a0q15':4},'Defiende competencia y elección de aseguradora.','Pasaje sobre apertura del mercado de seguros.');
fact('talvi',talvi,{'a3q13':4},'Defiende educación, oficios, vínculos familiares y tratamiento de adicciones en reclusión.','Segunda vaca sagrada: policías y cárceles.');
fact('larranaga',larranaga,{'a0q8':3,'a0q14':3},'Defiende apoyo estatal al desarrollo territorial y orientación de ALUR en Bella Unión.','Discusión sobre ALUR y desarrollo rural.');
fact('larranaga',larranaga,{'a10q9':4},'Defiende universidad pública y descentralización de facultades en el interior.','Discusión sobre desarrollo rural y universidad en el interior.');
fact('martinez',martinez,{'a0q2':4},'Defiende ANCAP pública y cuestiona una gestión orientada a venderla.','Balance de su paso por ANCAP.');
fact('cosse',cosse,{'a11q1':4,'a11q5':4},'Propone controlar fertilización y zonas de protección contra nutrientes contaminantes.','PDF p. 4, estrategia de riego sostenible.');
fact('cosse',cosse,{'a11q19':4},'Propone recuperar ecosistemas costeros y proteger costa sin infraestructura.','PDF p. 13, turismo costero sostenible.');
fact('cosse',cosse,{'a0q14':3},'Propone inversión y planificación pública del riego, con proyectos individuales y asociativos.','PDF pp. 3–4, estrategia nacional de riego.');
fact('bottero',bottero,{'a5q1':3,'a5q4':1},'Respalda consolidar derechos, incluidos matrimonio igualitario y aborto legal.','Intervención identificada de Bottero en encuentro de candidatas.');
fact('sartori',sartori,{'a0q17':4,'a4q16':3},'Propone simplificar regulaciones y trámites; silencio administrativo para algunos casos.','PDF p. 6, punto 4.');
fact('sartori',sartori,{'a0q13':4},'Prioriza inversión privada y un Estado promotor y subsidiario.','PDF p. 5 y comienzo de actividad económica.');
fact('sartori',sartori,{'a1q5':4},'Propone liberalizar combustibles y reducir hasta cinco puntos el IRAE.','PDF p. 8, puntos 3 y 5.');
fact('sartori',sartori,{'a1q13':4},'Propone rebajas iniciales para microempresas y pymes.','PDF p. 10, punto 7.');
fact('sartori',sartori,{'a7q1':4,'a7q19':4,'a7q12':3},'Propone bajar aranceles unilateralmente, con cronograma de adaptación productiva.','PDF p. 13, punto 9.');
fact('sartori',sartori,{'a7q3':4,'a7q5':4,'a7q20':0},'Propone abandonar negociación externa conjunta y arancel común; promover acuerdos externos.','PDF pp. 12–13, puntos 7–8.');
fact('cosse',cosse,{'a0q6':4,'a0q8':4,'a11q11':4},'Propone empresas públicas como motores del desarrollo y transición energética menos dependiente del carbono.','PDF pp. 11 y 15–16, energía y empresas públicas.');
fact('bergara',bergara,{'a3q13':4},'Defiende rehabilitación e inteligencia policial junto con prevención y represión del delito.','Discusión de políticas de seguridad después de los plebiscitos.');
fact('bergara',bergara,{'a0q14':3},'Defiende políticas productivas públicas de innovación, ciencia y recapacitación.','Discusión de prioridades presupuestales y productivas.');
fact('bergara',bergara,{'a11q3':3},'Pide estudiar impactos ambientales, especialmente sobre agua; declara incertidumbre sobre hidrógeno.','Pregunta sobre hidrógeno verde.');
fact('andrade',andrade,{'a1q2':4,'a1q8':4,'a1q12':4,'a1q20':4},'Defiende progresividad, cambios al patrimonio y mayor aporte de rentas empresariales para redistribuir.','Discusión tributaria, patrimonio, renta empresarial y desigualdad.');
fact('andrade',andrade,{'a1q18':3},'Cuestiona exoneraciones a inversiones que se realizarían de todos modos.','Discusión sobre exoneraciones del impuesto al patrimonio.');
fact('andrade',andrade,{'a11q3':4},'Respalda control previo del impacto y participación de la población.','Discusión sobre riego, agroecología y límites ambientales.');
fact('ojeda',ojeda,{'a5q3':4},'Respalda libertad de decisión sobre aborto; se limita al enunciado nuevo sobre interrupción legal.','Declaraciones sobre libertad individual.');
fact('quintana',quintanaDirect,{'a5q9':0},'Expresa oposición personal a adopción por parejas homosexuales, distinguiéndola del programa de Cabildo.','Pregunta sobre adopción y aclaración sobre posición personal.','alta');
fact('quintana',quintanaDirect,{'a5q19':0},'La entrevista identifica oposición a eutanasia; no se extiende a cuidados paliativos.','Presentación y discusión de agenda de derechos.');
fact('mieres',mieresWages,{'a2q2':3,'a2q4':3},'Presenta pautas salariales tripartitas y respalda negociación por sectores para recuperar salario real.','Declaraciones de Mieres en Consejo Superior Tripartito.','media','action');
fact('mujica',abortion,{'a5q3':4},'Promulga despenalización del aborto dentro de plazos y garantías; no es autoría exclusiva.','Arts. 2–4 y firma de promulgación.','media','action');
fact('bottero',bottero,{'a5q3':4},'Respalda consolidar aborto legal dentro de la agenda de derechos.','Intervención propia en encuentro de candidatas.');

const vazquezTax=source('vazquez-tributos','Presidencia · Vázquez sobre ajustes de la reforma tributaria','https://archivo.presidencia.gub.uy/_web/noticias/2007/10/2007101002.htm','2007-10-10','public-statement');
const batlleMexico=source('batlle-mexico','IMPO · Ley 17.766, aprobación del TLC con México','https://www.impo.com.uy/bases/leyes/17766-2004','2004-05-17','enacted-action');
const raffoImports=source('raffo-importaciones','Ámbito Uruguay · Propuesta de abastecimiento libre de Laura Raffo','https://www.ambito.com/uruguay/brecha-precios-argentina-raffo-propone-el-libre-abastecimiento-comercios-del-litoral-n6018778','2024-06-20','attributed-statement');
const vegaReport=source('vega-memoria','PERI · Memoria parlamentaria 2020–2024 (autorreporte, no acta independiente)','https://www.peri.org.uy/wp-content/uploads/2024/08/Trabajo-en-parlamento-PERI-2020-2024.pdf','2024-08','self-report');
fact('vazquez',vazquezTax,{'a1q9':3},'Considera rebajas del mínimo no imponible si la recaudación excede lo previsto, priorizando a sectores de menores recursos.','Párrafo sobre recaudación y mínimo no imponible.');
fact('jorge-batlle',batlleMexico,{'a7q5':3},'Promulga aprobación de un TLC concreto con México; no se extrapola a cualquier tratado.','Artículo único y firma presidencial.','media','action');
fact('raffo',raffoImports,{'a7q19':4},'Propone abaratar importaciones y libre abastecimiento de comercios fronterizos; declaración atribuida, pendiente de corroboración adicional.','Declaraciones desde Paysandú sobre precios e importaciones.','baja');

const ripoll2023=voces('ripoll-2023','Entrevista a Valeria Ripoll como secretaria general de ADEOM','valeria-ripoll-secretaria-general-de-adeom-no-estoy-en-ningun-partido-y-me-siento-una-persona-libre','2023-04-29');
fact('ripoll',ripoll2023,{'a2q6':3},'Respalda la reducción de jornada sin pérdida salarial aplicada a municipales como compensación; alcance sectorial, no propuesta universal.','Discusión de jornada municipal y salarios sumergidos.');
fact('silva',silva,{'a6q3':3},'Defiende tratar todos los temas con exposición crítica, imparcial y acceso a posiciones distintas, sin parcializar la enseñanza.','Discusión final sobre laicidad frente a asepsia.');
const salleValues=source('salle-valores','El Pueblo · Entrevista a Gustavo Salle','https://elpueblodigital.uy/el-dr-gustavo-salle-tiene-una-mirada-cruda-diferente-y-acusadora-de-la-realidad-nacional-y-quiere-ser-presidente-de-la-republica-como-seria/','2024-07-15');
const vazquez2014=source('vazquez-derechos','El País (España) · Entrevista a Tabaré Vázquez','https://elpais.com/internacional/2014/06/07/actualidad/1402095333_748625.html','2014-06-07');
const argimon2018=source('argimon-derechos','Crónicas · Entrevista personal a Beatriz Argimón','https://www.cronicas.com.uy/wp-content/uploads/2018/03/Cr%C3%B3nicas23mar2018.pdf','2018-03-23');
fact('salle',salleValues,{'a5q20':3},'Propone convivencia basada en valores tradicionales y familia heterosexual; no se deducen restricciones jurídicas concretas.','Respuesta sobre valores que norman la convivencia.','baja');
const argimonEuthanasia=source('argimon-eutanasia','El País Uruguay · Entrevista a Beatriz Argimón','https://www.elpais.com.uy/informacion/politica/beatriz-argimon-tenemos-que-ir-a-una-democracia-paritaria','2021-04-18');
fact('argimon',argimonEuthanasia,{'a5q19':1},'Declara oposición histórica a la eutanasia y apertura a debatir; se codifica oposición calificada, no negativa absoluta a todo régimen futuro.','Sección Eutanasia, coalición y cabildo.');
fact('bordaberry',bordaberry,{'a1q8':4,'a1q15':4},'Prioriza gravar patrimonio y consumo en lugar de ingresos del trabajo, y elevar el mínimo no imponible del IRPF.','Discusión de capacidad contributiva y diferencias tributarias entre candidaturas.');
fact('bordaberry',bordaberry,{'a1q11':3},'Propone exonerar o reducir IVA de canasta básica, no de todo consumo.','Respuesta final sobre abaratamiento de productos elementales.');
// Party evidence is deliberately namespaced; no member inherits it.
fact('partido-fa',programs.fa,{'a1q10':4,'a1q20':4},'Propone usar la política tributaria para reducir desigualdad.','PDF p. 21.','media','program');
fact('partido-fa',programs.fa,{'a2q2':4,'a2q4':4},'Propone fortalecer negociación colectiva y salario real.','PDF p. 27.','media','program');
fact('partido-fa',programs.fa,{'a6q3':4,'a6q11':4},'Defiende laicidad de la enseñanza pública y educación sexual laica.','PDF pp. 38 y 68.','media','program');
fact('partido-pn',programs.pn,{'a2q2':3},'Renueva negociación colectiva y Consejos de Salarios, con adaptaciones.','PDF p. 16.','media','program');
fact('partido-pn',programs.pn,{'a1q19':3},'Propone contener gasto como complemento de no aumentar impuestos.','PDF p. 13.','media','program');
fact('partido-pc',programs.pc,{'a3q13':4},'Propone acompañamiento y reinserción social y laboral de personas liberadas.','PDF pp. 37–39.','media','program');
fact('partido-ca',programs.ca,{'a0q2':4},'Propone potenciar ANCAP como empresa pública energética estratégica.','PDF p. 65.','media','program');
fact('partido-ca',programs.ca,{'a3q14':4},'Propone controles de acceso y registro de espectadores en eventos de riesgo.','PDF p. 10.','media','program');
fact('partido-pi',programs.pi,{'a1q13':3},'Propone disminuir costos iniciales e incentivar inversión de pymes.','PDF pp. 19–20.','media','program');
fact('partido-is',programs.is,{'a6q3':4,'a6q11':4},'Defiende enseñanza pública laica, imparcial y sin imposición de creencias.','PDF p. 7.','media','program');
fact('partido-is',programs.is,{'a1q13':4},'Propone reducir carga tributaria y aportes de microempresas y pymes.','PDF p. 17.','media','program');
fact('partido-is',programs.is,{'a1q18':3},'Propone eliminar exenciones a grandes corporaciones extranjeras extractivas.','PDF p. 20.','media','program');
fact('sanguinetti',investment,{'a1q17':3},'Promulga beneficios fiscales a inversiones; acto compartido con Parlamento y ministro, no autoría exclusiva.','Arts. 8–11 y firma de promulgación.','media','action');
fact('sanguinetti',investment,{'a7q7':3},'Promulga exoneración de IVA e IMESI para importar determinados bienes de activo fijo.','Art. 8 B; ámbito limitado del art. 7.','media','action');
fact('jorge-batlle',urgency,{'a1q13':3},'Promulga exoneración temporal de aportes para pequeñas explotaciones rurales; no todos los pequeños negocios.','Art. 4 y firma de promulgación.','media','action');
fact('jorge-batlle',urgency,{'a1q17':3},'Promulga ampliación de beneficios a inversiones agropecuarias.','Arts. 7 y 9.','media','action');
fact('vazquez',snis,{'a10q4':3},'Promulga sistema de salud con elección informada entre prestadores públicos y privados.','Arts. 2–3 H y firma; acto del Consejo de Ministros.','media','action');
fact('astori',snis,{'a10q4':3},'Refrenda como ministro el SNIS con elección entre prestadores; no es una declaración personal sobre todos los servicios.','Arts. 2–3 H y firma nominal de Astori.','media','action');
fact('mujica',marriage,{'a5q1':3},'Promulga matrimonio de personas de distinto o igual sexo; no cubre todos los modelos de familia.','Art. 1 y firma de José Mujica.','media','action');
fact('mujica',cannabis,{'a5q11':3},'Promulga acceso legal regulado al cannabis; no equivale a acceso sin restricciones.','Arts. 1–5 y firma de José Mujica.','media','action');
fact('mujica',utec,{'a10q9':4},'Promulga UTEC pública con sede en el interior y financiación presupuestal.','Art. 1 y firma de promulgación.','media','action');

const salleInterview=source('salle-2024','Radio Uruguay · Entrevista a Gustavo Salle','https://mediospublicos.uy/salle-el-ajuste-fiscal-se-realiza-con-el-criterio-del-cobarde-que-es-lo-que-caracteriza/','2024-07-10');
const canonieroCandidacy=source('canoniero-candidatura','Corte Electoral · Declaración de fórmulas de 2024','https://www.gub.uy/corte-electoral/sites/corte-electoral/files/2024-11/ACTA%20N%C2%BA%2010739%20-%20Declaraci%C3%B3n%20de%20segunda%20elecci%C3%B3n.pdf','2024','candidate-registration');
// Context that cannot safely answer a test statement stays out of the numerator.
export const RESEARCH_NOTES={
 orsi:{sources:[orsi,debate],period:'2024',note:'No aumentar impuestos no implica priorizar rebajas. Su declaración individual se conserva separada del programa del FA.'},
 delgado:{sources:[delgado,debate],period:'2024',note:'No extrapolar respaldo policial a cada facultad específica. La descentralización universitaria incluye oferta pública y privada.'},
 ojeda:{sources:[ojeda],period:'2024',note:'Declaraciones reproducidas; falta corroboración temática adicional. La comparación con Milei no suministra posturas.'},
 manini:{sources:[manini],period:'2020',note:'Snapshot explícito de 2020; no aplicar como postura actual ni confundir oposición al monopolio con venta de ANCAP.'},
 mieres:{sources:[mieres,mieresWages],period:'2022–2023',note:'Distinguir liberalización de drogas, negociación salarial y desconocimiento explícito sobre alternativas tributarias.'},
 salle:{sources:[salleInterview,salleValues],period:'2024',note:'Una entrevista critica el ajuste previsional, sin responder impuestos, educación o salud; otra defiende valores tradicionales, sin precisar restricciones jurídicas. El programa de IS es contexto partidario. No se lo transforma en 240 respuestas personales de Salle.'},
 vazquez:{sources:[snis,vazquezTax,vazquez2014],period:'2007 (puntuación); 2014 (contexto)',note:'Acto firmado de 2007. En 2014 explica su veto anterior al aborto, conserva su oposición personal y promete respetar la ley vigente y la voluntad popular. Ese compromiso institucional no se convierte en apoyo moral ni en propuesta de derogación; no se mezclan ambas épocas en un puntaje.'},
 mujica:{sources:[marriage,cannabis,utec,abortion],period:'2012–2013',note:'Actos presidenciales documentados, sin atribuir autoría legislativa exclusiva ni extrapolar a todo progresismo.'},
 lacalle:{sources:[lacalle],period:'2022',note:'Posturas personales sobre patrimonio y renta. No hereda toda la LUC ni todas las posiciones de sus aliados.'},
 cosse:{sources:[cosse],period:'Precandidatura 2024',note:'Plan personal fechado. No se copia el programa de Orsi ni se completa salud con evidencia educativa.'},
 ripoll:{sources:[ripoll,ripoll2023],period:'2023–2024',note:'Las entrevistas documentan cambio de militancia y defensa de inclusión. La reducción de jornada se limita al ejemplo municipal que respalda, sin trasladarlo a cualquier régimen laboral. No copiar a Delgado.'},
 silva:{sources:[silva],period:'2022',note:'Explicita enseñanza imparcial en su defensa de la laicidad. Defiende educación pública y describe gestión y PPP. Eso no prueba bonos privados, financiación proporcional ni preferencia sobre ASSE.'},
 quintana:{sources:[quintana,quintanaDirect],period:'2024',note:'Su oposición personal a adopción no se atribuye a Manini ni al programa. No se deduce laicidad de su fe; se distingue rechazo moral del aborto de una propuesta de derogación.'},
 bottero:{sources:[bottero,bottero2024],period:'2019–2024',note:'Distinguir su respaldo a la agenda de derechos de la opinión de Mieres. El mantenimiento de normas no responde todos los mecanismos del test.'},
 canoniero:{sources:[canonieroCandidacy],period:'Fórmula 2024',note:'No se pudo establecer con las fuentes examinadas evidencia individual suficiente que responda los enunciados. No heredar el programa de Salle.'},
 martinez:{sources:[martinez],period:'2015',note:'Entrevista municipal fechada; no presentarla como programa presidencial de 2019 ni como postura vigente en 2026.'},
 talvi:{sources:[talvi],period:'2019',note:'Liceos públicos y rehabilitación explícitos. Gestión autónoma no equivale a privatizar educación.'},
 'gonzalo-martinez':{sources:[gonzaloInterview],period:'2024',note:'La entrevista defiende una reforma previsional. Pensiones y aportes patronales no sustituyen posiciones sobre educación, salud o impuestos a la renta. Sin herencia automática de UP.'},
 lust:{sources:[lustInterview],period:'2024',note:'La entrevista defiende control parlamentario y ambiente en términos generales. No responde cada mecanismo específico; se conserva como contexto sin trasladar el programa del PCA.'},
 vega:{sources:[vegaReport],period:'2020–2024 (autorreporte)',note:'La memoria de PERI informa oposición al proyecto de eutanasia de 2022 y propuestas ambientales. No se transforma una objeción a ese proyecto en oposición universal a toda eutanasia con garantías; falta corroborar actas individuales. El autorreporte no se presenta como verificación independiente.'},
 'lacalle-herrera':{sources:[herrera],period:'2009',note:'Competencia de combustibles y seguros documentada. Conserva apoyo a servicios públicos; no asignar todo el polo de mercado.'},
 bergara:{sources:[bergara],period:'2024',note:'Entrevista personal; falta traducir solo pasajes específicos verificables, sin puntuar todos los temas por su posición general.'},
 andrade:{sources:[andrade],period:'2019',note:'Entrevista personal; separar tributos, negociación laboral y ambiente. No trasladar rechazo a un TLC a toda la política exterior.'},
 sanguinetti:{sources:[investment,sanguinetti],period:'1998 (acción); 2025 (contexto)',note:'La acción de 1998 no representa toda su trayectoria ni se combina con comentarios de 2025 para reconstruir aquella administración.'},
 'jorge-batlle':{sources:[urgency,batlleMexico,batlle],period:'2000–2004 (acciones); 2012 (contexto)',note:'Las exoneraciones de 2000 tienen alcance sectorial. La entrevista posterior no se atribuye al programa de 1999.'},
 astori:{sources:[snis,astori],period:'2007 (acción); 2010 (contexto)',note:'La firma ministerial es acción compartida, no prueba autoría exclusiva. No copiar a Mujica por integrar su fórmula.'},
 raffo:{sources:[raffo,raffoImports],period:'2024',note:'El respaldo general al programa del PN no demuestra cada postura individual. La entrevista accesible no sustenta la antigua ubicación educativa.'},
 argimon:{sources:[argimon,argimon2018,argimonEuthanasia],period:'2021 (posición); 2018 (contexto)',note:'En 2018 declara no haber votado la despenalización del aborto; es autorreporte, no acta nominal. No se atribuye automáticamente a un período posterior. Pedir debate sobre modernización de ANCAP no demuestra apoyo ni oposición a desmonopolizarla. No copiar a Lacalle Pou. Su oposición a eutanasia en 2021 admite debate; se conserva esa calificación.'},
 sartori:{sources:[sartori],period:'Precandidatura 2019',note:'Propuestas de un documento personal firmado en primera persona. No atribuirle automáticamente el programa nacionalista posterior.'},
 larranaga:{sources:[larranaga],period:'2012',note:'Se corrige fecha original frente a republicación de 2021. Sus propuestas de 2012 no se mezclan con el programa de fórmula de 2014.'},
 bordaberry:{sources:[bordaberry],period:'2014',note:'Prioriza tributación al patrimonio y consumo frente a ingresos del trabajo. La rebaja de IVA se limita a canasta básica. La crítica a subsidios de ALUR no se extrapola a vender ANCAP ni a toda provisión no rentable.'},
 ...Object.fromEntries(Object.entries(programs).map(([id,s])=>['partido-'+id,{sources:[s],period:'Programa de 2024',note:'Posiciones del programa oficial, sin atribución automática a sus integrantes. Cobertura específica por pregunta.'}]))
};
export const POLITICAL_SOURCES=Object.freeze(sources);
export const POLITICAL_EVIDENCE=Object.freeze(records);
