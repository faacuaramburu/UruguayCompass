// Explicit counterfactual hypotheses requested for gaps in topical evidence.
// Context references explain the analogy; they do NOT document the inferred position.
export const HYPOTHESIS_VERSION='2026-11-04';
const hypotheses={
 delgado:[[6,30,'Extrapolo el pluralismo y los límites institucionales de su propuesta a un Estado laico que admite expresiones religiosas. El programa no define este punto.',[4,5]]],
 ripoll:[[6,30,'La fórmula comparte una propuesta pluralista e institucional; proyecto una laicidad inclusiva, sin atribuir una declaración religiosa personal.',[4,5]]],
 salle:[
  [2,40,'La defensa de producción nacional y empleo de calidad sugiere protección laboral moderada; sus rebajas a pequeñas empresas permiten también adaptación contractual.',[0,1]],
  [9,45,'La prioridad soberanista podría traducirse en controles de ingreso, mientras su rechazo de imposiciones favorece libertades. Propongo una posición mixta, no una declaración migratoria.',[8,3]]],
 canoniero:[
  [2,40,'Desde la propuesta común de producción y empleo de calidad, infiero protección moderada con adaptación para pequeñas empresas. No es una posición laboral individual comprobada.',[0,1]],
  [9,45,'Proyecto un equilibrio entre prioridad soberanista y libertades a partir del programa de la fórmula; no existe aquí una propuesta migratoria específica.',[8,3]]],
 bottero:[[2,45,'La combinación de igualdad de oportunidades, empleo y crecimiento de la fórmula permite imaginar protección con adaptación laboral. Su postura contractual concreta no está establecida.',[5,0]]],
 'gonzalo-martinez':[[8,20,'Extrapolo la defensa de autonomía económica y producción nacional a una política exterior poco subordinada a potencias. El antiimperialismo no demuestra neutralidad ante todos los bloques.',[0,7]]],
 lust:[
  [6,25,'El constitucionalismo plural y la defensa de crítica democrática sugieren continuidad del Estado laico, sin una posición específica sobre todos los vínculos con iglesias.',[4,5]],
  [9,35,'La apertura internacional combinada con protección social sugiere acogida regulada y compatible con derechos laborales. No atribuyo al programa una política de admisión que no explicita.',[7,2]]],
 vega:[
  [1,35,'Su enfoque social y de servicios públicos sugiere financiación redistributiva, con margen para aliviar cargas productivas. No se conoce aquí un diseño tributario completo.',[10,0]],
  [2,35,'La producción local con enfoque social permite inferir garantías de trabajo y negociación; no prueba preferencia por una regulación contractual determinada.',[0,3]],
  [5,45,'Su propuesta mezcla una visión social de la seguridad y cuidado ambiental con prioridades productivas. Estimo valores mixtos, sin deducir opiniones sobre aborto o familia.',[3,11]],
  [6,25,'Desde los contralores y servicios públicos de su propuesta infiero una organización estatal laica. No se deriva de una declaración sobre religión.',[4,10]],
  [8,30,'La autonomía de decisiones públicas sugiere vínculos internacionales no subordinados, aunque no define sus preferencias ante cada potencia.',[4,7]],
  [9,40,'El enfoque social podría favorecer integración de personas migrantes, con regulación por capacidades de servicios. Es una analogía, no una medida migratoria conocida.',[3,10]]],
 'lacalle-herrera':[
  [5,65,'La prioridad al orden y a la libertad económica permite imaginar valores de continuidad social con autonomía individual. No convierte su programa en una respuesta a toda la agenda moral.',[3,0]],
  [6,40,'Proyecto una laicidad compatible con expresiones religiosas desde el respeto institucional y las libertades de su propuesta, sin inferirla de su fe privada.',[4,0]],
  [9,30,'La apertura económica y la inserción multipolar sugieren acogida regulada, sin que un tratado comercial determine por sí mismo una política migratoria.',[7,8]]],
 bergara:[[6,20,'Desde su defensa de instituciones, derechos y pluralismo internacional infiero separación estatal de las confesiones. Falta una declaración específica para este eje.',[4,8]]],
 andrade:[
  [5,20,'La ampliación de derechos de trabajadores y rechazo de exclusiones se proyecta hacia igualdad social. No demuestra todas sus posiciones sobre cuestiones de conciencia.',[2,4]],
  [6,20,'La defensa de derechos y acceso público sugiere neutralidad religiosa estatal; no se deduce de una afiliación partidaria o de creencias personales.',[4,10]],
  [8,25,'Su defensa de autonomía productiva permite imaginar resistencia a subordinaciones internacionales. No se presupone igual distancia frente a todos los gobiernos.',[0,7]],
  [9,20,'La universalización de derechos laborales sugiere reconocerlos también a quienes llegan del exterior. El paso de igualdad laboral a apertura de ingreso es hipotético.',[2,3]]],
 sanguinetti:[
  [1,60,'La combinación de promoción de inversión y servicios públicos sugiere moderación tributaria con financiación social; no equivale a reconstruir cada ajuste fiscal de sus gobiernos.',[0,10]],
  [2,55,'Proyecto negociación con adaptación empresarial a partir de su economía mixta y prioridades de gestión. Sus distintas administraciones no tuvieron una política laboral idéntica.',[0,4]],
  [8,35,'La apertura comercial con instituciones democráticas sugiere cooperación multilateral sin alineamiento exclusivo. Es una reconstrucción, no una alianza diplomática acreditada.',[7,4]]],
 'jorge-batlle':[
  [1,65,'La preferencia por competencia e inversión permite inferir menor carga tributaria como orientación, admitiendo que las medidas de crisis pudieron ir en sentido contrario.',[0,7]],
  [2,65,'Su orientación hacia mercados y competencia sugiere mayor adaptación contractual con garantías básicas; no es una declaración sobre cada derecho laboral.',[0,3]],
  [4,25,'Extrapolo sus posiciones públicas sobre libertades a un Ejecutivo sujeto a controles. No se deriva simplemente de haber ocupado la Presidencia.',[6,3]],
  [5,45,'Su liberalismo de conciencia permite imaginar autonomía personal, con continuidades institucionales. No atribuyo respuestas comprobadas a debates sociales concretos.',[6,0]],
  [8,70,'La prioridad a apertura y mercados externos podría favorecer asociaciones internacionales estables. La dirección de alineamiento es una hipótesis y no se prueba con el comercio solo.',[7,0]],
  [9,25,'La apertura y libertad de iniciativa sugieren receptividad a personas y capacidades del exterior. Es una extensión hipotética a migración, no una norma atribuida a su gobierno.',[7,0]]],
 raffo:[
  [1,65,'La reducción de costos y de trabas para producir sugiere preferencia por cargas más moderadas, sin equiparar automáticamente menos burocracia con menos impuestos.',[0,7]],
  [4,25,'El énfasis en gestión y diálogo permite imaginar controles y transparencia como límites al Ejecutivo. Su programa económico no define por sí solo el diseño institucional.',[2,0]],
  [8,35,'La apertura y diversificación económica sugieren cooperación exterior pragmática, sin afirmar adhesión a una potencia determinada.',[7,0]],
  [9,25,'La apertura a emprendimientos y la autonomía personal sugieren acogida regulada de nuevas capacidades. No se presenta como una propuesta migratoria expresada.',[0,5]]],
 sartori:[
  [6,30,'La tolerancia que expresa sobre derechos sociales y su propuesta de transparencia sugieren laicidad plural. No se usa la religión de sus aliados como sustituto de evidencia.',[5,4]],
  [9,25,'Su agenda de inversión y apertura sugiere recibir capacidades y emprendimientos externos. Ese razonamiento no prueba su política concreta de admisión.',[0,7]]],
 larranaga:[[6,35,'Desde la igualdad y los contralores de su programa proyecto una laicidad abierta a expresiones religiosas. No hay aquí una declaración personal sobre este equilibrio.',[4,5]]],
 bordaberry:[
  [1,65,'La competencia y adaptación empresarial de su propuesta permiten imaginar rebajas tributarias condicionadas a sostenibilidad fiscal, sin reconstruir un plan impositivo no documentado aquí.',[0,2]],
  [9,30,'La apertura externa y la igualdad declarada sugieren acogida regulada, sin convertir una política comercial en una ley migratoria.',[7,5]]],
 'alejandro-sanchez':[
  [2,25,'La financiación de bienes públicos y apoyo al cooperativismo sugieren protección y negociación laboral, compatible con adaptación productiva.',[1,0]],
  [4,25,'La inversión estatal con libertades y participación productiva sugiere contralores democráticos. No equivale a conocer su posición sobre cada facultad presidencial.',[0,3]],
  [5,25,'El horizonte de oportunidades sociales y libertades se proyecta hacia igualdad de derechos. No se asignan opiniones precisas sobre cada asunto moral.',[10,3]],
  [6,25,'Desde bienes públicos y libertades infiero neutralidad religiosa estatal, sin deducirla de una identidad religiosa personal.',[10,3]],
  [8,25,'Su cooperación comercial y autonomía productiva sugieren relaciones pragmáticas sin subordinación exclusiva; no se presume neutralidad en todo conflicto.',[7,0]],
  [9,25,'La ampliación de oportunidades educativas y productivas podría extenderse a integración migratoria. La extrapolación a requisitos de ingreso es muy incierta.',[10,0]]],
 'fernando-pereira':[
  [0,30,'La redistribución y provisión pública defendidas sugieren un Estado económico activo con producción privada; no implican estatizar toda actividad.',[1,10]],
  [3,30,'La defensa de organización y derechos de trabajadores se extiende hipotéticamente a garantías individuales en seguridad, sin reconstruir un programa penal.',[2,4]],
  [6,25,'El pluralismo político y democrático sugiere igualdad entre creencias ante el Estado. Su fe personal no se usa para asignar privilegios confesionales.',[4,5]],
  [8,30,'La cooperación regional junto con derechos sugiere autonomía y multilateralismo; una opinión sobre TLC no demuestra una alineación geopolítica completa.',[7,4]],
  [11,35,'La protección social y trabajo digno permiten imaginar una transición ambiental con atención al empleo. No existe aquí una postura específica sobre cada costo ecológico.',[2,10]]],
 civila:[
  [2,20,'Su socialismo democrático y cooperación económica sugieren protección colectiva del trabajo, sin asumir que apoye cualquier regulación laboral.',[0,4]],
  [7,55,'La transformación económica nacional y cooperación sugieren cierta protección de capacidades productivas, compatible con intercambios. No es una propuesta arancelaria acreditada.',[0,8]],
  [10,15,'La igualdad material y transformación democrática sugieren prioridad a servicios públicos universales. No se infiere de su profesión docente.',[1,4]]],
 lema:[
  [2,60,'El apoyo a emprendimientos y gestión público-privada sugiere flexibilidad con protección básica. Un programa municipal no determina toda la legislación nacional del trabajo.',[0,10]],
  [5,45,'El enfoque de oportunidades y gestión permite imaginar valores mixtos con autonomía personal. No se atribuye una postura comprobada sobre aborto o familia.',[0,10]],
  [6,30,'Desde contralores y servicios públicos infiero una laicidad inclusiva; las propuestas municipales no fijan vínculos nacionales con las iglesias.',[4,10]],
  [7,25,'El impulso a emprendimientos sugiere acceso a mercados y competencia externa, aunque la política aduanera excede el programa municipal.',[0,1]],
  [8,35,'La búsqueda de inversión y cooperación permite proyectar pragmatismo exterior sin alineamiento exclusivo. No hay una posición geopolítica directa en el programa municipal.',[0,4]],
  [9,30,'La orientación de asistencia y oportunidades sugiere integración regulada de migrantes. El paso desde política social municipal a admisión nacional es hipotético.',[10,0]]],
 bianchi:[
  [1,50,'Proyecto un equilibrio entre la defensa de servicios públicos y la moderación de cargas asociada a su apoyo político. Es una hipótesis mixta, no neutralidad por falta de datos.',[10,0]],
  [2,50,'La combinación de análisis social y apoyo a reformas de gestión permite imaginar garantías laborales con adaptación. No se infiere una política sindical concreta de su autodefinición.',[0,10]],
  [3,70,'El rechazo de autocracias junto con su énfasis en gestión permite proyectar autoridad policial con límites legales. No es una propuesta penal expresada en estas fuentes.',[4,0]],
  [6,20,'La defensa de educación pública y autonomía de conciencia sugiere separación religiosa del Estado. No se atribuye ateísmo por identificarse con Marx.',[10,5]],
  [7,35,'El apoyo a gestión y vínculos externos permite imaginar apertura con resguardos productivos. No se traslada automáticamente el programa de su partido.',[0,8]],
  [9,40,'La defensa de instituciones y derechos permite proyectar integración regulada, con mayor cautela sobre ingreso. No es una declaración migratoria conocida.',[4,5]],
  [11,50,'Su combinación de bienes públicos y gestión permite imaginar equilibrio entre conservación y producción. El punto medio es una hipótesis explícita de objetivos mixtos.',[0,10]]],
 zubia:[
  [0,60,'La reducción de cargas y autonomía de contribuyentes sugiere espacio a iniciativa privada con funciones estatales; su postura penal no determina la economía.',[1]],
  [2,60,'Desde alivio de cargas proyecto adaptación contractual con garantías básicas. Es una analogía económica débil, no una consecuencia de su severidad penal.',[1]],
  [4,55,'Su búsqueda de eficacia penal podría favorecer un Ejecutivo con capacidad operativa, manteniendo controles. La hipótesis no confunde autoridad policial con rechazo de instituciones.',[3]],
  [5,60,'La centralidad del orden permite imaginar continuidad social moderada, sin atribuirle una opinión comprobada sobre cada derecho de conciencia.',[3]],
  [6,30,'La organización jurídica del Estado permite imaginar neutralidad religiosa con libertad de culto. No se deduce de su profesión ni de una creencia privada.',[3,1]],
  [7,35,'La preferencia por alivio de cargas sugiere reducir trabas económicas también en el intercambio exterior; no es una posición arancelaria conocida.',[1]],
  [8,45,'Proyecto cooperación internacional operativa contra delitos con autonomía nacional. No existe aquí una preferencia acreditada por un bloque geopolítico.',[3]],
  [9,55,'Su énfasis en control podría extenderse a verificación migratoria, sin equiparar migración y delito. Esta extensión es particularmente incierta.',[3]],
  [10,45,'El alivio de cargas junto con capacidad estatal permite imaginar provisión mixta de servicios. No es una propuesta educativa demostrada.',[1,3]],
  [11,50,'No hay un antecedente ambiental en estas fuentes: propongo como hipótesis un equilibrio entre límites legales y actividad productiva, con incertidumbre máxima.',[1,3]]],
 'batlle-ordonez':[
  [7,70,'La promoción de capacidades estatales y trabajo nacional sugiere protección industrial. Es una reconstrucción de orientación, no un arancel atribuido a una norma específica.',[0,2]],
  [8,30,'Su republicanismo y defensa de garantías se proyectan hacia cooperación internacional autónoma; no reconstruye una respuesta a los bloques actuales.',[4,3]],
  [9,25,'La ampliación de ciudadanía y derechos sugiere acogida, con límites de su época. No se presupone universalismo migratorio sin excepciones históricas.',[5,3]],
  [11,45,'Proyecto su intervención pública hacia cuidado de recursos con desarrollo material. Es una analogía contemporánea muy incierta, no una postura climática histórica.',[0,10]]],
 'batlle-berres':[
  [1,35,'La justicia social con industrialización sugiere impuestos para financiar servicios y a la vez incentivos productivos. No equivale a un diseño fiscal reconstruido íntegramente.',[0,10]],
  [3,40,'La conciliación social y régimen democrático sugieren garantías con capacidad estatal de orden. No se idealiza toda actuación policial de la época.',[4,2]],
  [5,40,'El reformismo social con continuidad institucional sugiere valores mixtos. No se proyectan mecánicamente derechos del siglo XXI sobre los años cincuenta.',[2,4]],
  [6,25,'La provisión pública universal y tradición reformista sugieren continuidad de la separación estatal de credos. No se atribuye una declaración personal específica.',[10,4]],
  [8,55,'La industrialización con inserción internacional permite imaginar cooperación preferente con socios, conservando autonomía. No se supone que proteccionismo equivalga a no alineamiento.',[7,0]],
  [11,65,'La prioridad industrial de su proyecto sugiere mayor peso al desarrollo material, compatible con conservación. No equivale a oposición a normas ambientales actuales.',[0,7]]],
 herrera:[
  [1,65,'La libertad económica con protección social limitada sugiere moderación tributaria. No se infiere rechazo a toda redistribución de su oposición al batllismo.',[0,2]],
  [3,65,'La combinación de liberalismo conservador y apoyo a concentración institucional sugiere más peso al orden. No se confunde una alianza política con una política penal específica.',[4,0]],
  [5,70,'El liberalismo conservador permite imaginar continuidad de costumbres con libertades civiles. Es una lectura de orientación, no respuestas sobre la agenda social actual.',[0,4]],
  [6,40,'Proyecto libertad de conciencia compatible con expresiones religiosas desde su liberalismo conservador. No se asigna una religión oficial ni se usa su fe como prueba.',[0,4]],
  [7,40,'La iniciativa privada y autonomía nacional permiten imaginar apertura selectiva con resguardos. El no intervencionismo exterior no equivale a libre comercio.',[0,8]],
  [9,40,'La autonomía nacional junto con libertades económicas sugiere acogida regulada. Las fuentes de contexto no establecen un programa de admisión migratoria.',[8,0]],
  [10,45,'La iniciativa privada combinada con preocupación social permite imaginar oferta mixta, sin deducir su política educativa de sus posiciones económicas.',[0,2]],
  [11,65,'El peso de producción e iniciativa económica sugiere prioridad material con conservación práctica. Es una extrapolación muy incierta a un eje ambiental moderno.',[0,8]]],
 wilson:[
  [3,25,'La defensa democrática y oposición a tutelas autoritarias se proyectan hacia garantías individuales. No se presume una posición sobre todo procedimiento policial.',[4]],
  [5,40,'El reformismo social y las libertades sugieren igualdad con continuidad de costumbres. No se le asignan opiniones actuales sobre todos los asuntos de conciencia.',[1,4]],
  [6,25,'El pluralismo democrático y servicios universales permiten imaginar separación religiosa estatal; no se deduce de una creencia personal.',[4,10]],
  [9,30,'Las garantías y servicios universales sugieren integración regulada de recién llegados. El programa de contexto no establece requisitos de ingreso.',[4,10]]],
 seregni:[
  [5,30,'La recuperación de libertades y participación popular sugiere igualdad social, sin atribuir a su discurso de 1971 toda la agenda posterior de derechos.',[3,4]],
  [9,25,'La universalización de derechos y solidaridad se extiende hipotéticamente a migrantes. No es una propuesta de admisión contenida en el discurso estudiado.',[3,10]],
  [11,55,'El desarrollo estatal y protección de bienes colectivos sugieren una tensión entre producción y conservación. No se atribuye un programa climático de 1971.',[0,10]]],
 michelini:[
  [0,25,'Su protección del trabajo y republicanismo social sugieren intervención económica para ampliar derechos. La denuncia de tortura no constituye por sí misma un programa económico.',[2,4]],
  [1,25,'La ampliación de derechos sociales se proyecta hacia financiación redistributiva; no se reconstruye una propuesta impositiva específica.',[2,4]],
  [5,25,'Su defensa de derechos y libertades permite imaginar una ampliación de igualdad civil. La analogía no prueba respuestas a debates posteriores a su muerte.',[3,4]],
  [6,20,'El republicanismo de derechos sugiere igualdad estatal entre creencias. No se deduce una posición confesional de las ceremonias en su memoria.',[4,3]],
  [7,60,'La protección social y capacidades nacionales permiten imaginar protección productiva moderada, no un arancel histórico conocido.',[2]],
  [8,25,'La denuncia internacional de vulneraciones de derechos sugiere cooperación con autonomía, sin inferir una alianza militar concreta.',[3,4]],
  [9,20,'La defensa universal de garantías se proyecta hacia acogida y protección de perseguidos. Su experiencia de exilio no se trata como prueba automática de política migratoria.',[3]],
  [10,20,'La igualdad social con ciudadanía republicana sugiere servicios públicos amplios. No es una propuesta educativa extraída de su denuncia internacional.',[2,4]],
  [11,50,'Proyecto un equilibrio entre bienestar material y bienes colectivos desde su republicanismo social; la evidencia temática ambiental falta y la incertidumbre es máxima.',[2,4]]],
 arismendi:[
  [1,15,'La transformación socialista y los derechos del trabajo sugieren redistribución tributaria intensa. Es una inferencia, no un sistema de alícuotas documentado.',[0,2]],
  [3,45,'La democracia avanzada combina libertades y transformación política organizada; imagino una posición mixta sobre seguridad, sin equipararla a liberalismo pleno ni a represión automática.',[4]],
  [5,35,'La igualdad material y transformación social sugieren expansión de derechos, con límites de comparabilidad entre su época y la agenda cultural actual.',[0,4]],
  [6,20,'Proyecto igualdad y autonomía de instituciones frente a credos desde su proyecto político, sin confundir marxismo con una prohibición estatal de la religión.',[4,0]],
  [7,75,'El control nacional de capacidades productivas sugiere protección frente a subordinaciones económicas. No implica autarquía ni un arancel específico.',[0]],
  [8,65,'La articulación internacional de un proyecto socialista podría favorecer vínculos ideológicos preferentes. Esta es una hipótesis: criticar imperialismo no prueba no alineamiento.',[0,4]],
  [9,30,'La solidaridad de clase sugiere integración de trabajadores migrantes, aunque una estrategia política nacional podría introducir controles. No es una postura migratoria comprobada.',[2,4]],
  [10,15,'La igualdad material y transformación socialista sugieren provisión pública amplia. No se identifica aquí una propuesta concreta sobre elección de centros.',[0,4]],
  [11,65,'La transformación productiva del proyecto sugiere mayor peso al desarrollo industrial, compatible con protección colectiva. No se proyecta una respuesta climática contemporánea.',[0]]],
 frugoni:[
  [7,55,'Su socialismo parlamentario y protección del trabajo sugieren resguardo productivo compatible con intercambio. No se presupone una política arancelaria completa.',[0,2]],
  [8,25,'Las libertades y solidaridad con perseguidos sugieren cooperación autónoma y resistencia a subordinaciones, sin trasladar bloques políticos actuales a su época.',[3,9]],
  [11,45,'La preocupación por bienestar y regulación pública permite imaginar conservación con desarrollo. Es una hipótesis ambiental de incertidumbre máxima, no un texto suyo sobre clima.',[0,10]]],
 'sendic-antonaccio':[
  [1,15,'Las propuestas sobre tierra, banca y salarios sugieren redistribución intensa de recursos. No se atribuye un diseño fiscal detallado al Frente Grande.',[0,2]],
  [3,35,'La búsqueda de acuerdos sociales tras la prisión sugiere ampliar garantías y participación. La hipótesis corresponde a 1985–1989 y no borra la etapa armada anterior.',[8,2]],
  [4,35,'El Frente Grande como acuerdo social permite imaginar participación y controles al poder, sin afirmar que equivalga a todos los límites del constitucionalismo liberal.',[0,8]],
  [5,35,'La emancipación económica y acuerdos amplios sugieren igualdad social. No se le asignan posiciones comprobadas sobre debates culturales posteriores.',[2,0]],
  [6,25,'La pluralidad de un acuerdo social permite imaginar neutralidad religiosa del Estado. No se infiere de creencias personales ni de la etiqueta socialista sola.',[8,0]],
  [7,75,'La autonomía de tierra, banca y deuda sugiere protección de capacidades nacionales frente a dependencias económicas, sin reconstruir un arancel concreto.',[0,8]],
  [9,30,'La solidaridad con trabajadores se extiende hipotéticamente a integración migratoria; su propuesta no establece aquí criterios de ingreso.',[2]],
  [10,15,'La redistribución de capacidades y recursos sugiere servicios públicos universales. No es una propuesta educativa que la fuente afirme literalmente.',[0,2]],
  [11,55,'La centralidad de tierra y producción sugiere combinar sustento con cuidado de recursos. No se deduce una política ecológica de su origen rural.',[0,2]]],
 'pacheco-areco':[
  [5,70,'La prioridad al orden y continuidad social de su proyecto permite imaginar valores tradicionales. No se infiere de su represión una posición sobre cada derecho social.',[4]],
  [6,40,'Proyecto continuidad del marco estatal laico con aceptación de expresiones religiosas. El predominio ejecutivo no demuestra una preferencia confesional.',[4]],
  [7,55,'La intervención en precios y salarios junto con estímulos productivos sugiere apertura selectiva con resguardos. No se presupone libre comercio por su pertenencia partidaria.',[0,1]],
  [8,60,'El énfasis en orden y cooperación estatal podría favorecer asociaciones internacionales operativas. No se atribuye una alianza concreta que estas fuentes no documentan.',[4,3]],
  [9,55,'La búsqueda de control podría extenderse a ingreso y residencia, sin presumir hostilidad a personas extranjeras. Falta un antecedente migratorio específico en esta base.',[3,4]],
  [10,35,'El uso intenso del Estado para objetivos de gobierno sugiere provisión pública con opciones privadas. La intervención económica no prueba por sí sola una postura educativa.',[0,4]]],
 'juan-maria-bordaberry':[
  [1,65,'La orientación hacia iniciativa privada permite proyectar incentivos y moderación de cargas. No se atribuyen medidas fiscales de etapas posteriores a 1976.',[0]],
  [5,80,'El proyecto de organización corporativista permite imaginar predominio de continuidad social y deberes sobre autonomía cultural. Es una hipótesis sobre valores, no una lista de opiniones comprobadas.',[4]],
  [6,60,'La subordinación política de instituciones permite imaginar mayor peso público de una moral tradicional, sin equiparar autoritarismo con religión oficial ni usar fe privada como prueba.',[4]],
  [7,40,'La iniciativa privada con dirección política fuerte sugiere apertura selectiva. No se le atribuye toda la liberalización posterior de la dictadura.',[0,4]],
  [8,65,'La organización autoritaria de seguridad podría favorecer cooperación exterior estable con gobiernos afines. No se presenta como prueba de una alianza determinada.',[3,4]],
  [9,65,'El control político y de seguridad podría extenderse a residencia e ingreso. No se asimila migración a amenaza ni se afirma una política migratoria específica.',[3,4]],
  [10,30,'La concentración de dirección estatal permite imaginar fuerte provisión y supervisión pública, aun con oferta privada. No se confunde control educativo con libertad de elección.',[4,0]],
  [11,60,'La iniciativa productiva bajo dirección estatal sugiere mayor peso al desarrollo material. No se proyectan decisiones ambientales adoptadas tras su destitución.',[0,4]]],
 terra:[
  [1,45,'Su economía mixta permite imaginar financiación de empresas y servicios estatales con estímulos productivos. No supone una postura redistributiva definida por su autoritarismo.',[0,10]],
  [2,55,'La combinación de intervención económica y concentración política sugiere protección administrada con margen empresarial; no se deduce la regulación laboral solo de la represión.',[0,4]],
  [5,65,'La concentración de poder y continuidad de orden social permiten imaginar valores tradicionales con reformas parciales. No reconstruye una respuesta a debates actuales.',[4,10]],
  [6,35,'La continuidad de servicios estatales con concentración política permite imaginar un Estado formalmente laico que admite expresión religiosa. No es una propuesta confesional documentada.',[10,4]],
  [7,65,'La intervención y empresas nacionales sugieren resguardos comerciales, sin equiparar estatismo con cierre total al intercambio.',[0]],
  [8,55,'Su gobierno centralizado y búsqueda de recursos podrían favorecer asociaciones exteriores pragmáticas. No se atribuye aquí una preferencia por una potencia no acreditada.',[0,4]]],
 nardone:[
  [2,65,'La liberalización económica sugiere adaptación contractual para productores y empleadores, sin inferir rechazo a toda garantía laboral.',[0,7]],
  [3,70,'La centralidad del orden político y concentración ejecutiva sugiere mayor peso al control. No se deduce de su actividad rural ni una medida penal específica.',[4]],
  [5,75,'La continuidad social del ruralismo conservador permite imaginar valores tradicionales. No es una respuesta histórica comprobada a la agenda contemporánea.',[4,0]],
  [6,40,'Proyecto tolerancia de expresiones religiosas dentro de un Estado laico desde su liberalismo conservador; no se atribuye una fe estatal.',[0,4]],
  [9,45,'La liberalización y prioridad nacional permiten imaginar acogida regulada con controles. La posición es mixta por hipótesis, no porque un vacío equivalga a neutralidad.',[7,8]],
  [10,45,'La iniciativa privada con funciones estatales sugiere provisión mixta de servicios, sin atribuirle toda medida del colegiado.',[0,4]],
  [11,70,'La prioridad productiva de su proyecto sugiere mayor peso al desarrollo material con conservación práctica. No se deduce una postura ecológica solo de su profesión.',[0,7]]],
 saravia:[
  [2,60,'La crítica a trabas económicas y coerción estatal sugiere autonomía contractual. No se transforma una proclama de 1897 en un programa laboral contemporáneo.',[0,3]],
  [5,60,'Su proyecto de garantías electorales con continuidad del orden social permite imaginar valores moderadamente tradicionales. La extensión a familia y derechos actuales es muy incierta.',[4]],
  [6,40,'Desde libertad individual y participación plural proyecto tolerancia de creencias con separación estatal moderada. No se usa fe ni origen familiar para asignar el punto.',[3,4]],
  [7,35,'La crítica explícita a trabas sobre comercio e industria sugiere intercambio más abierto; no equivale a una política aduanera conocida.',[0]],
  [8,25,'La demanda de autonomía y garantías se proyecta hacia relaciones externas no subordinadas. No reconstruye una respuesta a alianzas geopolíticas actuales.',[4,3]],
  [9,35,'Extiendo hipotéticamente su defensa de libertades a acogida regulada. Su familia o residencia transfronteriza no prueban una política migratoria.',[3]],
  [10,45,'La crítica a trabas estatales con demanda de garantías permite imaginar oferta mixta bajo reglas públicas. No se deduce su política educativa de su escolaridad personal.',[0,4]],
  [11,60,'Extiendo la defensa de comercio e industria a prioridad productiva con límites prácticos. Es una hipótesis contrafáctica de incertidumbre máxima, no una postura ambiental expresada ni una deducción de su oficio rural.',[0]]],
 tarigo:[
  [0,45,'El constitucionalismo de libertades permite imaginar iniciativa privada con garantías y bienes públicos. Su liberalismo político no prueba libre mercado pleno.',[4,3]],
  [1,45,'La protección institucional de derechos permite imaginar financiación social y límites a cargas arbitrarias. No se reconstruye una posición tributaria demostrada.',[4]],
  [2,45,'Proyecto negociación y garantías compatibles con autonomía contractual desde su defensa de libertades. No se atribuye un programa laboral al debate constitucional de 1980.',[3,4]],
  [5,35,'La defensa de conciencia y garantías permite imaginar autonomía civil, sin presuponer su voto sobre asuntos sociales no estudiados.',[6,3]],
  [7,40,'La autonomía de iniciativa con garantías sugiere apertura regulada. Es una analogía débil: libertad política y libre comercio no son equivalentes.',[4,3]],
  [8,30,'La defensa constitucional democrática se proyecta hacia cooperación internacional con autonomía; no acredita una alianza concreta.',[4]],
  [9,25,'El rechazo de arbitrariedad y defensa de libertades sugieren acogida con garantías. No se presupone una propuesta migratoria personal conocida.',[3,4]],
  [10,30,'La igualdad ante instituciones permite imaginar servicios públicos fuertes con alternativas privadas. No se deduce de su profesión docente.',[4,3]],
  [11,40,'La tutela institucional de derechos se proyecta hacia protección de bienes comunes con desarrollo. Es una analogía muy incierta ante ausencia de evidencia ambiental específica.',[4]]],
 'hugo-batalla':[
  [0,35,'Su defensa social de derechos permite imaginar economía mixta con Estado activo e iniciativa privada. No se copia el programa de las fuerzas que integró.',[4,3]],
  [1,30,'La ampliación de derechos se proyecta hacia financiación redistributiva, sin atribuirle un régimen de impuestos específico.',[4,3]],
  [2,30,'La protección de garantías y participación sugiere negociación y derechos laborales fuertes, compatibles con adaptación productiva.',[3,4]],
  [5,30,'La defensa democrática de libertades permite imaginar ampliación de igualdad civil. No demuestra una respuesta a cada cuestión de conciencia.',[3,4]],
  [6,25,'El republicanismo de derechos sugiere igualdad estatal de creencias, sin inferirlo de una identidad religiosa personal.',[4,3]],
  [7,45,'La economía socialdemócrata inferida sugiere apertura con protección de capacidades. No se equipara cambio partidario con cambio automático de aranceles.',[4,3]],
  [8,30,'Su defensa de garantías se proyecta hacia cooperación autónoma, sin una preferencia acreditada por un bloque determinado.',[3,4]],
  [9,25,'La defensa de garantías se extiende hipotéticamente a integración de recién llegados. No se afirma una política migratoria que las fuentes no establecen.',[3]],
  [10,25,'La igualdad de derechos sugiere provisión pública amplia con opciones privadas. No se le asigna toda la política educativa del gobierno que integró.',[4,3]],
  [11,45,'Proyecto protección de bienes colectivos con desarrollo desde su republicanismo social; falta evidencia temática ambiental y la incertidumbre es máxima.',[4,3]]]
};

const partyHypotheses={
 pn:[[6,30,'El pluralismo y la institucionalidad del programa se proyectan a una laicidad inclusiva. El documento no define una política religiosa específica.',[4,5]]],
 ca:[[6,40,'La continuidad institucional con valores tradicionales sugiere expresiones religiosas en un Estado laico. Familia tradicional no prueba por sí misma una religión oficial.',[4,5]]],
 pi:[
  [1,45,'La combinación de financiación social e inversión sugiere redistribución moderada con alivios productivos. Es una reconstrucción del equilibrio, no una alícuota programada.',[0,10]],
  [2,45,'El empleo de calidad con adaptación productiva sugiere negociación y flexibilidad moderadas; no es una reforma contractual explícita del documento.',[0,5]],
  [6,30,'El pluralismo y la igualdad sugieren laicidad inclusiva. No se traslada al partido la propuesta religiosa de un dirigente en 2001.',[4,5]]],
 is:[
  [1,75,'El alivio de cargas y redimensionamiento estatal se proyectan a impuestos más bajos; es una calibración contextual, no un sistema fiscal completo.',[0,7]],
  [2,40,'La producción nacional y empleo de calidad sugieren protección moderada con adaptación para pequeñas empresas. El programa no define aquí el régimen contractual.',[0]],
  [9,45,'La prioridad soberanista y rechazo de imposiciones permiten imaginar acogida regulada con controles. Soberanía no equivale a rechazo de migrantes.',[8,3]]]
};

export function isHypothesis(entity,axis){return entity.placementResearch?.[axis]?.kind==='hypothesis'}
export function hypothesisAxes(entity){return entity.profile.flatMap((_,i)=>isHypothesis(entity,i)?[i]:[])}

export function completeWithHypotheses(entities,{parties=false}={}){
 return entities.map(original=>{
  const entity={...original,profile:[...original.profile],rationale:[...original.rationale],evidence:original.evidence.map(e=>({...e})),sources:original.sources.map(s=>({...s})),placementResearch:original.placementResearch?.map(p=>p?{...p}:null)||Array(12).fill(null)};
  const entries=(parties?partyHypotheses:hypotheses)[entity.id]||[];
  for(const [axis,value,note,basisAxes] of entries){
   if(entity.profile[axis]!==null)continue;
   const refs=[...new Map(basisAxes.flatMap(i=>entity.evidence.filter(e=>e.axis===i).map(e=>({source:e.source,page:e.page??null}))).map(r=>[`${r.source}/${r.page}`,r])).values()];
   if(!refs.length)throw new Error(`Hipótesis sin contexto verificable: ${entity.id}/${axis}`);
   const period=entity.period||entity.era;
   entity.profile[axis]=value;
   entity.rationale[axis]=`Hipótesis contrafáctica asistida por IA · confianza muy baja. Contexto: ${period}. ${note} Las referencias son contexto de la inferencia, no evidencia de esta postura.`;
   entity.placementResearch[axis]={value,kind:'hypothesis',basis:'counterfactual',confidence:'muy-baja',period,note,refs,basisAxes:[...basisAxes],version:HYPOTHESIS_VERSION};
   // Deliberately do not append to evidence: an analogy is not topical evidence.
  }
  if(entity.profile.some(v=>!Number.isFinite(v)))throw new Error(`Falta una hipótesis explícita para ${entity.id}`);
  entity.axisCoverage=12;entity.hypothesisAxes=hypothesisAxes(entity);entity.hypothesisCount=entity.hypothesisAxes.length;
  return {...entity,rankEligible:true,eligible:true,comparable:true,researchOnly:false};
 });
}
