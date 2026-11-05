// Additive research: every new coordinate has an explicit topic, period and source.
// Coordinates are editorial readings of evidence, never percentages reported by a source.
export const AXIS_RESEARCH_VERSION='2026-11-04';
const root='https://www.gub.uy/corte-electoral/sites/corte-electoral/files/documentos/publicaciones/';
const program=(ids,file,period,positions)=>({ids,url:root+file,title:`Corte Electoral · Programa ${period}`,period,kind:'program',positions});

const programs=[
 program(['orsi','cosse'],'Partido%20Frente%20Amplio_1.pdf','2025–2030',[
  [2,20,28,'Fortalece negociación colectiva, protección del trabajo y organización sindical.'],
  [4,15,77,'Refuerza organismos de contralor, transparencia, autonomía técnica y control del financiamiento político.'],
  [5,15,68,'Defiende igualdad de género, educación sexual integral y políticas contra la discriminación.'],
  [6,10,38,'Reafirma la laicidad de la educación pública y la autonomía de sus instituciones.'],
  [8,20,99,'Defiende soberanía, autodeterminación y autonomía ante alianzas políticas y militares.'],
  [9,15,102,'Propone redes de apoyo e integración para personas migrantes y protección consular.']
 ]),
 program(['delgado','ripoll'],'Partido%20Nacional_1.pdf','2025–2030',[
  [2,55,17,'Combina protección laboral con adaptación de la negociación a empresas y nuevas modalidades de trabajo.'],
  [4,25,220,'Delimita el futuro Ministerio de Justicia para preservar las competencias propias del Poder Judicial.'],
  [5,35,110,'Incluye igualdad de oportunidades y políticas contra la violencia de género; no equivale a todo el debate de valores.'],
  [8,30,48,'Defiende autodeterminación, solución pacífica de controversias y cooperación multilateral sin afinidades ideológicas excluyentes.'],
  [9,20,60,'Reivindica recepción e integración de migrantes, solicitantes de refugio y refugiados.']
 ]),
 program(['ojeda','silva'],'Partido%20Colorado_1.pdf','2025–2030',[
  [2,65,183,'Promueve negociación y adecuación de relaciones laborales a modalidades productivas diversas.'],
  [4,20,240,'Propone reforzar Tribunal de Cuentas, contralor parlamentario y controles al financiamiento partidario.'],
  [5,25,259,'Amplía respuestas a violencia de género, trata y acoso laboral y sexual.'],
  [6,20,20,'Incluye autonomía, libertad y laicidad como principios de la educación superior.'],
  [8,30,235,'Define soberanía, multilateralismo y cooperación internacional como pilares de una política exterior estable.'],
  [9,15,252,'Propone integrar migrantes, refugiados y solicitantes de refugio y considera enriquecedora la inmigración.']
 ]),
 program(['manini','quintana'],'Partido%20Cabildo%20Abierto_1.pdf','2025–2030',[
  [2,55,89,'Mantiene un piso tripartito y propone negociación diferenciada para mipymes y cláusulas de salida; combina protección y flexibilidad.'],
  [4,25,18,'Defiende separación de poderes y contralores constitucionales; propone además ampliar publicidad de declaraciones juradas y compras públicas.'],
  [5,80,24,'Cuestiona políticas de género y prioriza familia, natalidad y valores tradicionales.'],
  [8,15,102,'Afirma no intervención, autodeterminación e independencia frente a organismos y poderes extranjeros.'],
  [9,25,39,'Facilita regularización, inclusión, reválida de títulos y protección de migrantes frente a trata y trabajo abusivo.']
 ]),
 program(['mieres','bottero'],'Partido%20Independiente.pdf','2025–2030',[
  [4,20,26,'Da efectos suspensivos a observaciones del Tribunal de Cuentas y refuerza el control legislativo.'],
  [5,25,46,'Promueve igualdad de género y corresponsabilidad de los cuidados.'],
  [8,25,12,'Defiende soberanía, libre determinación, solución pacífica de conflictos y derecho internacional en Naciones Unidas.'],
  [9,25,12,'Valora el aprendizaje y aporte de los flujos migratorios latinoamericanos; evidencia programática parcial sobre acogida, no sobre todos los requisitos de ingreso.','baja']
 ]),
 program(['salle','canoniero'],'Partido%20Identidad%20Soberana.pdf','2025–2030',[
  [4,30,6,'Propone dictámenes vinculantes del Tribunal de Cuentas; también recentraliza Fiscalía, por lo que la lectura es parcial y mixta.'],
  [5,85,5,'Propone derogar leyes de aborto, identidad trans y violencia de género y reivindica valores familiares tradicionales.'],
  [6,10,7,'Defiende enseñanza pública laica e imparcialidad estatal ante creencias religiosas y políticas.'],
  [8,10,3,'Propone recuperar autonomía frente a organismos financieros y grandes corporaciones internacionales.']
 ]),
 program(['mujica','astori'], 'programa_2010_2015_1_0-2.pdf','2010–2015',[]),
 program(['vazquez'],'Programa_nacional_FA_2015_2020.pdf','2015–2020',[
  [2,20,119,'Defiende negociación colectiva y participación de trabajadores públicos en las relaciones laborales.'],
  [4,25,119,'Defiende transparencia en el ingreso al Estado y participación en la administración; evidencia parcial sobre control de la gestión.'],
  [5,20,109,'Propone educación sin sexismo, abierta a diferencias y libre de discriminación.'],
  [6,15,109,'Define una matriz educativa laica y respetuosa de las diferencias.'],
  [8,10,139,'Declara independencia, no alineamiento y autonomía respecto de alianzas políticas y militares.'],
  [9,20,154,'Amplía apoyo a migrantes y retornados y sus oportunidades de acceso al empleo.']
 ]),
 program(['lacalle','argimon'],'Programa%2Bde%2BGobierno%2B2019%2B-%2BP%2BNacional.pdf','2020–2025',[
  [2,60,35,'Articula negociación sectorial con acuerdos en la empresa y adaptación de modalidades laborales.'],
  [4,25,159,'Propone transparencia de gestión, datos abiertos y herramientas para los organismos de contralor.'],
  [5,40,132,'Promueve una sociedad plural sin discriminación por identidad, origen o religión.'],
  [6,30,167,'Defiende laicidad y derechos de padres al revisar guías educativas; no propone enseñanza estatal confesional.'],
  [8,25,111,'Vincula defensa con derecho internacional, autodeterminación y solución pacífica de controversias.'],
  [9,20,136,'Propone recibir a inmigrantes como iguales, proteger derechos e integrarlos responsablemente.']
 ]),
 program(['martinez'],'Programa%2Bde%2BGobierno%2BFrente%2BAmplio.pdf','2020–2025',[
  [2,15,175,'Defiende Consejos de Salarios, negociación colectiva y participación de organizaciones de trabajadores.'],
  [4,20,184,'Refuerza contralores, transparencia y evaluación de la gestión pública.'],
  [5,15,164,'Propone políticas de derechos humanos con igualdad de género y diversidad sexual.'],
  [6,15,180,'Defiende expresamente la laicidad de la gestión y de las instituciones públicas.'],
  [8,10,191,'Declara independencia, no intervención y autodeterminación como bases de política exterior.'],
  [9,20,196,'Incluye derechos de personas migrantes como condiciones de los acuerdos comerciales y su normativa laboral.']
 ]),
 program(['talvi'],'Programa%2BPartido%2BColorado%2B-%2BWeb_compressed.pdf','2020–2025',[
  [1,70,20,'Propone reducir gradualmente la carga fiscal sobre familias y empresas, elevar el mínimo no imponible de IRPF y revisar IASS según espacio fiscal.'],
  [2,65,134,'Propone flexibilizar horarios y descansos mediante acuerdos voluntarios y negociación colectiva.'],
  [4,20,314,'Fortalece pedidos de informes y contralor legislativo sobre la administración.'],
  [5,25,323,'Promueve derechos e integración sin discriminación por identidad, orientación sexual, religión u origen.'],
  [6,20,201,'Mantiene gratuidad, obligatoriedad y laicidad como principios educativos.'],
  [8,30,293,'Defiende una política exterior de Estado, soberanía, consenso nacional y participación en organismos internacionales.'],
  [9,15,322,'Propone ver la inmigración como oportunidad y combatir discriminación y xenofobia.']
 ]),
 program(['gonzalo-martinez'],'Partido%20Asamblea%20Popular.pdf','2025–2030',[
  [2,10,65,'Garantiza empleo y salario mínimo y propone prohibir tercerizaciones públicas y privadas.'],
  [4,25,65,'Propone representantes elegidos por sufragio y mecanismos de revocación por sus electores.'],
  [5,20,60,'Defiende políticas y presupuesto para combatir violencia de género y proteger a sus víctimas.'],
  [6,15,51,'Propone retirar exoneraciones a instituciones privadas laicas y religiosas, sin favorecer un credo.'],
  [9,15,57,'Regulariza trabajadores inmigrantes y equipara sus derechos salariales y laborales.']
 ]),
 program(['vega'],'Partido%20Ecologista%20Radical%20Intransigente_1.pdf','2025–2030',[
  [4,20,23,'Cuestiona contratos secretos y reclama acceso a información y autonomía de las decisiones públicas.']
 ]),
 program(['lust'],'Partido%20Constitucional%20Ambientalista_1.pdf','2025–2030',[
  [2,60,35,'Propone flexiseguridad, adaptación a nuevos negocios y alivio regulatorio junto con protección y capacitación de trabajadores.'],
  [4,25,8,'Reivindica una democracia plural y crítica y retroalimentación entre ciudadanía e instituciones; evidencia parcial sobre participación y control.','baja'],
  [5,35,8,'Combina igualdad de género y protección del empleo femenino con promoción de la familia; alcance parcial de los valores sociales.','baja'],
  [8,15,14,'Defiende neutralidad activa, soberanía y relaciones comerciales sin convergencia política o diplomática obligatoria.']
 ]),
 program(['bordaberry'],'Plan_Uruguay_2015_2020_Partido_Colorado_compressed%20%281%29_0.pdf','2015–2020',[
  [2,55,119,'Reconoce negociación colectiva y propone corregir su implementación; no equivale a eliminar protección laboral.'],
  [4,25,313,'Propone someter a contralor recursos públicos administrados en la órbita privada.'],
  [5,40,309,'Afirma igualdad sin distinción de género, religión u orientación sexual; no documenta todos los debates morales.'],
  [6,20,248,'Propone un Consejo de la Laicidad y una enseñanza pública neutral entre ideas y credos.'],
  [8,25,345,'Defiende no intervención, cooperación internacional y misiones de paz bajo consenso de Naciones Unidas.']
 ])
];
// This program is hosted by its authoring organization, not the Electoral Court.
const mujica=programs.find(p=>p.ids.includes('mujica'));
mujica.url='https://www.frenteamplio.uy/wp-content/uploads/programa_2010_2015_1_0-2.pdf';
mujica.title='Frente Amplio · Programa 2010–2015';
mujica.positions=[
 [1,20,24,'Relaciona carga tributaria y capacidad contributiva para que aporten más los sectores con mayores recursos.'],
 [2,15,126,'Defiende negociación colectiva pública y privada, jornada rural de ocho horas y derechos del trabajo doméstico.'],
 [4,25,50,'Propone transparencia, descentralización y participación democrática en la gestión.'],
 [5,20,136,'Propone garantizar derechos sexuales y reproductivos e igualdad ante la ley.'],
 [6,15,85,'Reafirma laicidad, gratuidad, autonomía y universalidad de la enseñanza.'],
 [8,15,145,'Rechaza injerencia extranjera y defiende autodeterminación de los pueblos.'],
 [9,20,147,'Promueve derechos de migrantes, asistencia contra trata y vinculación con uruguayos en el exterior.']
];

const documents=[
 {ids:['bergara'],title:'Semanario Voces · Entrevista a Mario Bergara, 04/05/2024',url:'https://semanariovoces.com/mario-bergara-los-cucos-de-bolches-y-tupas-insultan-la-inteligencia-de-la-gente/',period:'Declaraciones de Bergara, mayo de 2024',kind:'statement',positions:[
  [1,30,null,'Cuestiona beneficios tributarios para nuevos residentes de gran patrimonio con poca inversión efectiva. Evidencia parcial de defensa de la base tributaria, no de todas las tasas.','baja'],
  [2,35,null,'Respalda avanzar hacia jornadas más cortas según productividad y revisar protección social ante nuevas formas de empleo.'],
  [4,30,null,'Exige transparencia de contratos tras negociar y distingue funciones legislativas, ejecutivas y revisión judicial; no rechaza la reserva durante negociación.'],
  [5,25,null,'Defiende igualdad de oportunidades de las mujeres mediante el Sistema de Cuidados y su autonomía laboral. Evidencia parcial de igualdad, no de toda la agenda de derechos.','baja'],
  [8,15,null,'Rechaza casarse con China o Estados Unidos y defiende no injerencia, solución pacífica y derechos humanos sin doble criterio.']
 ]},
 {ids:['andrade'],title:'Semanario Voces · Entrevista a Óscar Andrade, 25/03/2022',url:'https://semanariovoces.com/oscar-andrade-es-un-verso-decir-que-estamos-viviendo-en-la-dictadura-sindical/',period:'Declaraciones de Andrade, marzo de 2022',kind:'statement',positions:[
  [2,15,null,'Defiende negociación por rama, sindicatos y huelga como garantías complementarias del derecho laboral.'],
  [4,20,null,'Cuestiona concentración de potestades para ocultar información de inteligencia y reclama garantías de acceso a información vinculada a derechos humanos.']
 ]},
 {ids:['civila'],title:'El Observador · Entrevista a Gonzalo Civila sobre pluralismo religioso y laicidad, 17/09/2021',url:'https://www.elobservador.com.uy/nota/la-coincidencia-religiosa-que-une-a-civila-y-pereira-dos-de-los-candidatos-a-presidir-el-frente-amplio-2021917122043/amp',period:'Declaraciones de Civila, septiembre de 2021',kind:'statement',positions:[
  [6,20,null,'Defiende diálogo abierto entre creyentes y no creyentes con respeto central de la laicidad. La coordenada se basa en esa posición, no en su pertenencia religiosa.']
 ]},
 {ids:['bergara'],title:'Mayors Migration Council · Declaraciones de Mario Bergara, 30/07/2026',url:'https://mayorsmigrationcouncil.org/news/amtf-cdmx-convening/',period:'Declaraciones de Bergara como intendente, julio de 2026',kind:'statement',positions:[
  [9,15,null,'Defiende documentación, empleo e integración de migrantes y presenta rutas regulares de movilidad hacia Montevideo.']
 ]},
 {ids:['sanguinetti','larranaga'],title:'El Observador · Declaraciones sobre acogida migratoria, 25/04/2019',url:'https://www.elobservador.com.uy/nota/talvi-y-bergara-acusaron-a-manini-rios-de-xenofobo--201942514312',period:'Declaraciones individuales durante la campaña de 2019',kind:'statement',positions:[
  [9,25,null,'Sanguinetti defiende acoger a quienes huyen de Cuba y Venezuela; Larrañaga pide respeto al carácter inmigrante del país. Se reconstruye la dirección de acogida a partir de las declaraciones de cada uno.','baja']
 ]},
 {ids:['wilson'],title:'Wilson Ferreira–Carlos Julio Pereyra · Nuestro compromiso con usted, 1971',url:'https://sitiosdememoria.uy/sites/default/files/2025-05/29/nuestro-compromiso-con-usted_f1971.pdf',period:'Programa de la fórmula Ferreira–Pereyra, 1971',kind:'historical',positions:[
  [2,20,31,'Propone restitución periódica del poder adquisitivo y un Consejo Superior de Salarios tripartito con salario básico vital.'],
  [11,35,18,'Incluye la erosión acelerada entre criterios de expropiación y regula superficies según uso y manejo de suelos. Reconstrucción parcial de conservación rural, sin atribuirle una agenda climática actual.','baja']
 ]},
 {ids:['sanguinetti'],title:'IMPO · Ley 16.045, texto original: igualdad entre sexos en la actividad laboral, 1989',url:'https://www.impo.com.uy/bases/leyes-originales/16045-1989',period:'Gobierno de Sanguinetti, junio de 1989',kind:'government',positions:[
  [5,30,null,'Promulga prohibición de discriminación por sexo en contratación, promoción, despido y remuneración. Evidencia sobre igualdad laboral, sin atribuirle todas las posiciones sociales contemporáneas.']
 ]},
 {ids:['sanguinetti'],title:'IMPO · Ley 17.060, texto original: uso indebido del poder público, 1998',url:'https://www.impo.com.uy/bases/leyes-originales/17060-1998',period:'Gobierno de Sanguinetti, diciembre de 1998',kind:'government',positions:[
  [4,20,null,'Promulga controles contra corrupción, declaraciones juradas de bienes y una Junta Asesora para proteger probidad y transparencia de la gestión pública.']
 ]},
 {ids:['sanguinetti'],title:'Julio María Sanguinetti · Dios y el César en tierra uruguaya, 09/10/2004',url:'https://www.lanacion.com.ar/opinion/dios-y-el-cesar-en-tierra-uruguaya-nid643414/',period:'Artículo firmado por Sanguinetti, octubre de 2004',kind:'statement',positions:[
  [6,30,null,'Defiende imparcialidad estatal entre credos y separación de iglesias e instituciones públicas, admitiendo símbolos como la cruz conmemorativa de 1987.']
 ]},
 {ids:['jorge-batlle'],title:'Omnes · Reproducción del discurso de Jorge Batlle en el Senado sobre la cruz del Papa, 1987',url:'https://www.omnesmag.com/actualidad/uruguay-el-laicismo-progresista/',period:'Intervención de Jorge Batlle, mayo de 1987; reproducción de 2021',kind:'historical',positions:[
  [6,35,null,'Defiende libertad de conciencia y laicidad como respeto entre pensamientos; apoya conservar la cruz y rechaza que neutralidad equivalga a inhibir expresiones espirituales.']
 ]},
 {ids:['bottero'],title:'Semanario Voces · Entrevista a Mónica Bottero, 23/09/2010',url:'https://semanariovoces.com/monica-bottero-mujica-esta-haciendo-una-revolucion-cultural-maravillosa/',period:'Declaraciones de Mónica Bottero, septiembre de 2010',kind:'statement',positions:[
  [6,25,null,'Se define liberal en materia de derechos y expresamente anticlerical y contraria al poder de la Iglesia católica, distinguiéndolo de su fe cristiana. Lectura parcial: no equivale a una propuesta legal contemporánea.','baja']
 ]},
 {ids:['sartori'],title:'El País · Declaraciones de Juan Sartori, 28/06/2019',url:'https://www.elpais.com.uy/informacion/politica/quien-es-juan-sartori-una-pregunta-con-varias-respuestas',period:'Declaraciones de Sartori, campaña de 2019',kind:'statement',positions:[
  [5,30,null,'Apoya expresamente la agenda de derechos y la ley trans. No se deduce su posición de las creencias de sus aliados.']
 ]},
 {ids:['mieres'],title:'Telenoche · Pablo Mieres anuncia inspecciones ante trata laboral, 27/02/2024',url:'https://www.telenoche.com.uy/nacionales/pablo-mieres-ministerio-aumentara-inspecciones-sorpresivas-n5363737',period:'Declaraciones y gestión de Mieres, febrero de 2024',kind:'statement',positions:[
  [2,30,null,'Refuerza inspecciones y sanciones contra abuso laboral y reivindica defensa de derechos de trabajadores. Es evidencia parcial de protección, no una síntesis de toda su regulación contractual.','baja']
 ]},
 {ids:['fernando-pereira'],title:'LaRed21 · Declaraciones de Fernando Pereira sobre derechos de migrantes, 28/10/2018',url:'https://www.lr21.com.uy/comunidad/1383573-pit-cnt-migrantes-deben-tener-las-mismas-condiciones-de-trabajo-que-los-uruguayos',period:'Declaraciones de Fernando Pereira como presidente del PIT-CNT, 2018',kind:'statement',positions:[
  [9,15,null,'Defiende acogida de personas migrantes y las mismas condiciones laborales y derechos que los trabajadores uruguayos.']
 ]},
 {ids:['raffo'],title:'Semanario Voces · Entrevista a Laura Raffo, 18/09/2020',url:'https://semanariovoces.com/laura-raffo-nunca-en-mi-vida-fui-una-paracaidista/',period:'Declaraciones de Raffo como candidata departamental, septiembre de 2020',kind:'statement',positions:[
  [5,25,null,'Declara apoyo a la ley de despenalización del aborto y respeto por la autonomía de las mujeres.'],
  [2,40,null,'Propone mesas permanentes de diálogo con ADEOM y atribuye a los gobernantes responsabilidad en gestionar conflictos. Evidencia parcial de negociación, sin afirmar una posición sobre todos los contratos laborales.','baja']
 ]},
 {ids:['raffo'],title:'El País · Declaraciones de Laura Raffo sobre una imagen religiosa en el espacio público, 18/08/2020',url:'https://www.elpais.com.uy/informacion/sociedad/sturla-insiste-a-los-candidatos-a-la-imm-con-la-estatua-de-la-virgen-maria-frente-a-la-rambla',period:'Declaraciones de Raffo, agosto de 2020',kind:'statement',positions:[
  [6,45,null,'Apoya instalar una imagen de la Virgen en la rambla como expresión religiosa en el espacio público. Es una lectura parcial sobre símbolos públicos, sin atribuirle una propuesta de religión oficial.','baja']
 ]},
 {ids:['seregni'],title:'Frente Amplio · Treinta primeras medidas de gobierno, 25/08/1971',url:'https://www.frenteamplio.uy/wp-content/uploads/30-primeras-medidas-de-gobierno-1971.pdf',period:'Programa de la candidatura de Seregni, 1971',kind:'program',positions:[
  [1,15,5,'Propone reforma tributaria progresiva sobre altos ingresos y acumulación de capital.'],
  [10,15,6,'Propone Seguro Nacional de Salud, policlínicas públicas y ampliación de atención sanitaria y escolar.'],
  [6,25,7,'Garantiza espacios de comunicación equitativos a organizaciones religiosas y culturales. Evidencia parcial de pluralismo, no una propuesta confesional.','baja']
 ]},
 {ids:['saravia'],title:'Ahora, 26/07/1973, página 5 · Reproducción de la proclama de Aparicio Saravia de 1897',url:'https://sitiosdememoria.uy/sites/default/files/2025-07/13/Ahora_n684_f26-7-1973.pdf',period:'Proclama de Aparicio Saravia, 1897; reproducción de 1973',kind:'historical',positions:[
  [0,70,5,'La proclama critica trabas al comercio y la industria. Lectura de esa declaración, sin atribuirle un programa económico contemporáneo ni las palabras del manifiesto del comité reproducido antes en la misma página.','baja'],
  [1,75,5,'Critica impuestos y trabas onerosas, déficit y endeudamiento. No prueba rechazo a toda redistribución ni una tasa tributaria determinada.','baja'],
  [3,25,5,'Denuncia levas forzadas, persecuciones y violaciones de libertad individual. Se distingue esa defensa del recurso a la guerra civil.','baja']
 ]},
 {ids:['frugoni'],title:'Tesis UNLP · Historia y memoria de la inmigración judía sefardí al Uruguay: intervención de Frugoni de 1938',url:'https://www.memoria.fahce.unlp.edu.ar/tesis/te.1453/te.1453.pdf',period:'Propuesta de Frugoni, 1938',kind:'historical',positions:[
  [9,15,360,'Propuso admitir mil familias judías perseguidas en Alemania y flexibilizar las barreras migratorias para hacerlo.'],
  [3,20,357,'Cuestionó restricciones migratorias por ideología y defendió libertad de disenso. Es evidencia de libertades políticas, no de toda su política penal.']
 ]},
 {ids:['frugoni'],title:'Jornadas de Historia Económica · Intercambios académicos rioplatenses: posición tributaria de Frugoni en 1915',url:'https://cdn.fee.tche.br/jornadas/2/H8-06.pdf',period:'Escrito de Frugoni en la Revista de Derecho y Ciencias Sociales, 1915',kind:'historical',positions:[
  [1,20,12,'Defiende una función distributiva activa de los impuestos y critica que se cobre relativamente poco a quienes concentran riqueza.']
 ]},
 {ids:['civila'],title:'CSL · Entrevista a Gonzalo Civila, 27/03/2023',url:'https://cslatinoamericana.org/un-socialismo-uruguayo-con-profunda-raiz-y-conviccion-democratica/',period:'Declaraciones de Civila, 2023',kind:'statement',positions:[
  [5,15,null,'Reivindica expresamente lucha feminista e igualdad de las mujeres.'],
  [11,15,null,'Define el ecologismo y la ecología social integral como compromisos de su socialismo.']
 ]},
 {ids:['civila'],title:'MIDES · Líneas de acción de protección social de personas migrantes, 2026–2030',url:'https://www.gub.uy/ministerio-desarrollo-social/comunicacion/noticias/division-proteccion-social-para-personas-migrantes-presento-lineas-accion',period:'Declaraciones y gestión de Civila, 2025–2026',kind:'statement',positions:[
  [9,15,null,'Defiende el aporte de la migración, igualdad de oportunidades e integración con reconocimiento de la diversidad cultural.']
 ]},
 {ids:['manini'],title:'Comisión de Constitución de Diputados · Intervención de Manini del 15/06/2016, transcripción',url:'https://www.sociedaduruguaya.org/2016/07/fernandez-huidobro-laicismo-no-significa-prohibicion-de-la-practica-religiosa-ni-guerra-a-las-religiones.html',period:'Declaraciones de Manini, junio de 2016',kind:'statement',positions:[
  [6,40,null,'Afirma separación entre Iglesia y Estado y defiende participar en ceremonias y facilitar asistencia religiosa voluntaria. Lectura mixta; no se puntúa su fe personal.']
 ]},
 {ids:['quintana'],title:'Montevideo Portal · Entrevista a Lorena Quintana, 15/10/2024',url:'https://www.montevideo.com.uy/Noticias/Lorena-Quintana--Parece-que-si-sos-pobre-tenes-que-votar-al-FA-para-que-te-ayuden--uc903318',period:'Declaraciones de Quintana, 2024',kind:'statement',positions:[
  [6,35,null,'Defiende laicidad como protección recíproca de creencias y elección educativa de los padres. No propone en esta entrevista una religión oficial.']
 ]},
 {ids:['mieres'],title:'Heber Gatto · Educación religiosa por parte del Estado, cita una propuesta de Pablo Mieres, 06/05/2001',url:'https://www.lr21.com.uy/editorial/42711-educacion-religiosa-por-parte-del-estado',period:'Propuesta de Mieres citada en mayo de 2001',kind:'historical',positions:[
  [6,55,null,'Propuso formación religiosa optativa en educación pública. Se trata de una posición fechada de 2001, no de una propuesta actual demostrada.','baja']
 ]},
 {ids:['fernando-pereira'],title:'Semanario Voces · Fernando Pereira: Los sindicatos son una piedra angular de la democracia, 07/05/2009',url:'https://semanariovoces.com/fernando-pereira-los-sindicatos-son-una-piedra-angular-de-la-democracia/',period:'Declaraciones de Fernando Pereira, 2009',kind:'statement',positions:[
  [5,25,null,'Respaldó despenalizar el aborto y apoyar la iniciativa en el Parlamento. No se presume que una entrevista de 2009 describa toda su posición actual.'],
  [4,20,null,'Defendió organizaciones sindicales como garantías de democracia y libertad de expresión; evidencia parcial sobre participación y límites al poder.']
 ]},
 {ids:['bianchi'],title:'Semanario Hebreo Jai · Entrevista a Graciela Bianchi, 01/05/2024',url:'https://www.semanariohebreojai.com/articulo/7761',period:'Declaraciones de Bianchi, 2024',kind:'statement',positions:[
  [8,65,null,'Defiende expresamente su apoyo político a Israel y su causa de paz y libertad. Evidencia de un vínculo internacional concreto, no alineamiento automático en todo conflicto.']
 ]},
 {ids:['sartori'],title:'Juan Sartori · Plan de Todos, 2019',url:'https://enperspectiva.uy/wp-content/uploads/2019/05/plan-de-todos-bases-programaticas-juan-sartori.pdf',period:'Propuesta de precandidatura de Sartori, 2019',kind:'program',positions:[
  [2,65,9,'Propone empleabilidad y flexibilidad para nuevos negocios y condiciones de inserción laboral.'],
  [4,25,6,'Promueve una ley de transparencia y buenas prácticas en la vida política. Evidencia parcial sobre controles institucionales.'],
  [8,30,12,'Declara defensa de soberanía, derecho internacional, no injerencia y solución pacífica de controversias.']
 ]},
 {ids:['larranaga'],title:'Lacalle Pou–Larrañaga · Programa de fórmula 2015–2020',url:root+'Programa%20de%20Gobierno%202015%20-%20P%20Nacional%20-%20Imprenta.pdf',period:'Programa de la fórmula Lacalle Pou–Larrañaga, 2014',kind:'program',positions:[
  [2,65,5,'Mantiene Consejos de Salarios y propone descuelgue, cláusulas de salvaguarda y salarios vinculados a productividad.'],
  [4,20,3,'Afirma independencia judicial y respeto estricto a sus pronunciamientos sin presiones políticas.'],
  [5,35,2,'Promueve equidad de género y un plan contra la discriminación. No determina todos los debates sobre aborto o familia.'],
  [8,30,6,'Defiende derecho internacional y una política exterior acordada ampliamente, sin supuestas afinidades ideológicas con otros gobiernos.']
 ]},
 {ids:['lacalle-herrera'],title:'Diario Oficial, 01/10/2009 · Programa de la fórmula Lacalle Herrera–Larrañaga',url:'https://impo.com.uy/diariooficial/2009/10/01/avisosdeldia.pdf',period:'Programa de la fórmula Lacalle Herrera–Larrañaga, 2009',kind:'program',positions:[
  [1,75,14,'Propone derogar IASS y desmontar gradualmente IRPF e impuestos empresariales sobre el trabajo según equilibrio fiscal, con gasto focalizado contra la pobreza.'],
  [4,20,13,'Promueve independencia económica, técnica e institucional del Poder Judicial y reasignar recursos legislativos a su financiación.'],
  [2,55,22,'Amplía negociación colectiva como diálogo y vincula compromisos de productividad, condiciones laborales e ingresos de los trabajadores.'],
  [8,40,14,'Combina inserción multipolar y rechazo a organismos que limiten soberanía con prioridad a la OEA y seguridad colectiva regional. Lectura mixta, sin equiparar apertura comercial con alineamiento.']
 ]},
 {ids:['terra'],title:'IMPO · Ley 9.481, texto original: protección de fauna, 1935',url:'https://www.impo.com.uy/bases/leyes-originales/9481-1935',period:'Gobierno de Terra, 1935',kind:'government',positions:[
  [11,30,null,'Promulgó protección de fauna, restricciones de caza y una comisión de equilibrio biológico. Evidencia de gobierno, sin autoría exclusiva ni atribución de ecologismo actual.']
 ]},
 {ids:['terra'],title:'IMPO · Ley 9.202, texto original: Ministerio de Salud Pública, 1934',url:'https://www.impo.com.uy/bases/leyes-originales/9202-1934',period:'Gobierno de Terra, 1934',kind:'government',positions:[
  [10,25,null,'Organiza la autoridad y servicios sanitarios públicos. Se reconstruye provisión sanitaria estatal, sin trasladarla automáticamente a toda la enseñanza.']
 ]},
 {ids:['pacheco-areco'],title:'IMPO · Ley 13.723, texto original: recursos e industrias forestales, 1968',url:'https://www.impo.com.uy/bases/leyes-originales/13723-1968',period:'Gobierno de Pacheco Areco, 1968',kind:'government',positions:[
  [11,50,null,'Combina protección de bosques, agua y suelo con expansión de industrias forestales. La posición intermedia refleja ambos objetivos expresos, no falta de información.'],
  [1,65,null,'Incluye exoneraciones de impuestos a bosques protectores y de rendimiento. Es una estimación parcial sobre incentivos sectoriales, no toda su política fiscal.','baja']
 ]},
 {ids:['batlle-berres'],title:'IMPO · Ley 11.638, texto original: administración y tributos migratorios, 1951',url:'https://www.impo.com.uy/bases/leyes-originales/11638-1951',period:'Gobierno de Luis Batlle Berres, febrero de 1951',kind:'government',positions:[
  [9,60,null,'Regula ingresos y residencias con tributos, controles y reconducción de entradas irregulares; restituye también el Hotel de Inmigrantes. Lectura mixta del régimen, no rechazo general a extranjeros.','baja']
 ]},
 {ids:['tarigo'],title:'Julio María Sanguinetti · Dios y el César en tierra uruguaya, 2004: relata el voto de Tarigo sobre la cruz de 1987',url:'https://www.lanacion.com.ar/opinion/dios-y-el-cesar-en-tierra-uruguaya-nid643414/',period:'Voto de Enrique Tarigo, 1987',kind:'historical',positions:[
  [6,15,null,'Votó contra la permanencia de la cruz papal por entender que el Estado no debe sostener una confesión. Su condición de creyente se distingue de su defensa de la separación estatal.']
 ]},
 {ids:['batlle-ordonez'],title:'El Día, 1886–1981 · Historia de la campaña contra la pena de muerte, archivo Anáforas',url:'https://anaforas.fic.edu.uy/jspui/bitstream/123456789/5616/6/El_Dia.1886-1981%28red%29.pdf',period:'Editorial de Batlle de 1890 y proyecto de 1905; reproducción histórica de 1981',kind:'historical',positions:[
  [3,25,6,'Impulsó abolir la pena de muerte mediante editoriales y el proyecto de 1905. La ley de 1907 fue promulgada bajo Williman; esta evidencia no equivale a toda su política policial.']
 ]}
];

// Calibration of the already documented qualitative findings. No unknown entry
// is calibrated; an observation about one issue remains explicitly partial.
const qualitative={
 'alejandro-sanchez':{0:40,1:20,3:25,7:25,10:20,11:65},
 'fernando-pereira':{1:20,2:20,7:45,10:20},
 civila:{0:20,1:20,3:20,4:20,8:15},
 lema:{0:65,1:70,3:80,4:30,10:45,11:35},
 bianchi:{0:45,4:20,5:35,10:20},
 zubia:{1:75,3:90},
 'batlle-ordonez':{0:20,1:20,2:15,4:15,5:20,6:5,10:15},
 'batlle-berres':{0:20,2:25,4:25,7:80,10:15},
 herrera:{0:75,2:40,4:75,8:10},
 wilson:{0:25,1:20,4:15,7:75,8:15,10:20},
 seregni:{0:15,2:15,3:15,4:20,7:85,8:10},
 michelini:{2:15,3:10,4:15},
 arismendi:{0:20,2:15,4:40},
 frugoni:{0:20,2:20,4:15,5:25,6:10,10:15},
 'sendic-antonaccio':{0:15,2:15,8:10},
 'pacheco-areco':{0:40,2:85,3:90,4:85},
 'juan-maria-bordaberry':{0:65,2:95,3:95,4:100},
 terra:{0:40,3:90,4:95,9:90},
 nardone:{0:75,1:60,4:65,7:20,8:80},
 saravia:{4:25},
 tarigo:{3:15,4:10},
 'hugo-batalla':{3:15,4:20}
};

function attach(entity,axis,value,note,refs,{period,confidence='media',basis='program'}={}){
 if(Number.isFinite(entity.profile[axis]))return;
 const qualified=`Estimación editorial (${confidence==='baja'?'confianza baja':'confianza media'}), ${period}. ${note}`;
 entity.profile[axis]=value;entity.rationale[axis]=qualified;
 entity.evidence.push(...refs.map(ref=>({...ref,axis,note:qualified,confidence,kind:'interpreted',period})));
 entity.placementResearch[axis]={value,confidence,kind:'estimated',basis,period,note,refs};
}

export function extendPoliticalAxisResearch(figures){return figures.map(original=>{
 const entity={...original,profile:[...original.profile],rationale:[...original.rationale],evidence:original.evidence.map(x=>({...x})),sources:original.sources.map(x=>({...x})),placementResearch:original.placementResearch?.map(x=>x?{...x}:null)||Array(12).fill(null)};
 for(const record of [...programs,...documents].filter(p=>p.ids.includes(entity.id))){
  let source=entity.sources.findIndex(s=>s.url.split('#')[0]===record.url);
  if(source<0){source=entity.sources.length;entity.sources.push({title:record.title,url:record.url})}
  for(const [axis,value,page,note,confidence='media'] of record.positions)attach(entity,axis,value,note,[{source,page}],{period:record.period,confidence,basis:record.kind});
 }
 for(const [key,value] of Object.entries(qualitative[entity.id]||{})){
  const axis=Number(key),finding=entity.axisResearch?.[axis];
  if(!finding||finding.kind==='unknown'||!finding.refs.length)throw new Error(`Calibración sin evidencia: ${entity.id}/${axis}`);
  attach(entity,axis,value,finding.basis,finding.refs,{period:entity.period,confidence:finding.confidence==='baja'?'baja':'media',basis:finding.kind==='interpreted'?'historical':'statement'});
 }
 entity.axisCoverage=entity.profile.filter(Number.isFinite).length;
 return entity;
})}

export function axisResearchCoverage(figures){return {total:figures.length*12,placed:figures.reduce((n,f)=>n+f.profile.filter(Number.isFinite).length,0),complete:figures.filter(f=>f.profile.every(Number.isFinite)).map(f=>f.id),missing:figures.map(f=>({id:f.id,name:f.name,axes:f.profile.flatMap((v,i)=>Number.isFinite(v)?[]:[i])})).filter(f=>f.axes.length)}}

// The requested twelve-axis ranking must never silently shrink its axis set
// when any compared reference is incomplete. This is a release prerequisite.
export function assertTwelveAxisCoverage(figures){
 if(!figures.length)throw new Error('No hay referentes para comparar.');
 for(const figure of figures){
  if(figure.profile.length!==12)throw new Error(`Cantidad de ejes inválida: ${figure.id}`);
  for(const [axis,value] of figure.profile.entries()){
   if(value===null)continue;
   if(!Number.isFinite(value)||value<0||value>100)throw new Error(`Ubicación inválida: ${figure.id}/${axis}`);
   if(!figure.evidence.some(e=>e.axis===axis&&figure.sources[e.source]?.url?.startsWith('https://')))throw new Error(`Ubicación sin fuente: ${figure.id}/${axis}`);
  }
 }
 const missing=axisResearchCoverage(figures).missing;
 if(missing.length)throw new Error(`Investigación incompleta: ${missing.map(f=>`${f.id} (${f.axes.length})`).join(', ')}`);
 return true;
}

export function rankTwelveAxisProfiles(profile,figures){
 assertTwelveAxisCoverage(figures);
 if(profile.length!==12||profile.some(v=>!Number.isFinite(v)||v<0||v>100))throw new Error('El resultado de la persona debe tener doce ejes completos.');
 const axes=Array.from({length:12},(_,i)=>i);
 const ranked=figures.map(entity=>{const distance=axes.reduce((sum,i)=>sum+Math.abs(profile[i]-entity.profile[i]),0);return {entity,distance,score:Math.round(100-distance/12)}}).sort((a,b)=>a.distance-b.distance||a.entity.name.localeCompare(b.entity.name,'es'));
 return {axes,ranked,closest:ranked.filter(x=>x.distance===ranked[0].distance)};
}
