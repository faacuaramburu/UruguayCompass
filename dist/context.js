// Contenido educativo de Uruguay Compass. Textos editoriales propios; fuentes primarias enlazadas.
// Revisión de referencias: 2026-11-02. Los extremos son orientaciones, no juicios de valor.
const impo = (title, path) => ({ title, url: `https://www.impo.com.uy/bases/${path}` });

export const AXES = [
  {
    id: 0, slug: 'economia', name: 'Economía', short: 'Economía',
    left: 'Mercado', right: 'Estado',
    description: 'Explora qué papel deberían tener la iniciativa privada, las empresas públicas y la regulación en la actividad económica. No equivale a estar a favor o en contra de toda intervención estatal.',
    leftText: 'Prioriza la iniciativa privada, la competencia y las decisiones de personas y empresas para organizar la producción. Prefiere una intervención estatal más acotada, con reglas generales, protección de la competencia y supervisión de los servicios esenciales.',
    rightText: 'Prioriza un papel activo del Estado para orientar la producción y prestar servicios. Valora las empresas públicas y la regulación como herramientas para atender necesidades colectivas, reducir desequilibrios y sostener actividades consideradas estratégicas.',
    debates: ['Alcance de los servicios de ANCAP, UTE y Antel.', 'Competencia y regulación de los mercados.', 'Apoyos públicos e inversión productiva.'],
    sources: [impo('Constitución, artículo 36: actividades económicas', 'constitucion/1967-1967/36'), impo('Constitución, artículo 50: orientación económica', 'constitucion/1967-1967/50')]
  },
  {
    id: 1, slug: 'impuestos', name: 'Impuestos y redistribución', short: 'Impuestos',
    left: 'Impuestos bajos', right: 'Redistribución',
    description: 'Examina el equilibrio entre la carga tributaria y la financiación de transferencias y servicios. Bajar un impuesto y aumentar otro puede expresar una posición intermedia, no una contradicción.',
    leftText: 'Prefiere una carga tributaria menor para que hogares y empresas dispongan de más recursos. Pone el foco en la previsibilidad de los impuestos, el ahorro y la inversión, junto con un gasto público más acotado o focalizado.',
    rightText: 'Prefiere una recaudación que permita financiar más servicios y transferencias. Pone el foco en distribuir el esfuerzo según la capacidad de pago y en compensar desigualdades de ingreso, patrimonio y oportunidades mediante la política fiscal.',
    debates: ['IRPF y tributación de las distintas fuentes de ingreso.', 'IVA y costo del consumo.', 'Transferencias sociales, gasto público y distribución del ingreso.'],
    sources: [impo('Ley 18.083: reforma tributaria', 'leyes/18083-2006')]
  },
  {
    id: 2, slug: 'trabajo', name: 'Trabajo', short: 'Trabajo',
    left: 'Flexibilidad laboral', right: 'Protección laboral',
    description: 'Explora cuánto deberían definir las reglas comunes, la negociación colectiva y los acuerdos particulares en las relaciones de trabajo. La libertad sindical forma parte del marco de derechos, no de una opción a favor o en contra.',
    leftText: 'Prefiere dar más espacio a los acuerdos entre cada empresa y sus trabajadores para organizar horarios, tareas y remuneraciones. Considera que adaptar las condiciones a situaciones distintas puede facilitar la contratación y la continuidad de los empleos.',
    rightText: 'Prefiere reglas comunes y negociación colectiva para fijar condiciones de trabajo. Considera que la protección laboral y la representación sindical permiten equilibrar la capacidad de negociación y dar mayor estabilidad a salarios, jornadas y trayectorias laborales.',
    debates: ['Consejos de Salarios y negociación por rama o empresa.', 'Organización de la jornada y cambios de tareas.', 'Regulación de despidos, tercerizaciones y trabajo en plataformas.'],
    sources: [impo('Ley 18.566: negociación colectiva', 'leyes/18566-2009'), impo('Constitución, artículo 57: organización sindical', 'constitucion/1967-1967/57')]
  },
  {
    id: 3, slug: 'seguridad', name: 'Seguridad y libertades individuales', short: 'Seguridad',
    left: 'Libertades', right: 'Control de seguridad',
    description: 'Compara prioridades ante las tensiones entre prevención del delito, facultades de control y garantías individuales. Ambos polos pueden buscar seguridad y respeto de los derechos: difieren en las herramientas que priorizan.',
    leftText: 'Prioriza límites claros a la vigilancia y a las facultades coercitivas, junto con controles judiciales y garantías procesales. Prefiere que las nuevas medidas de seguridad demuestren su necesidad y tengan un alcance delimitado sobre la vida cotidiana.',
    rightText: 'Prioriza ampliar herramientas de prevención, investigación y control para responder al delito. Prefiere dar mayor margen operativo a las instituciones de seguridad, con responsabilidades y supervisión, cuando considera que las facultades existentes resultan insuficientes.',
    debates: ['Videovigilancia, uso de datos y privacidad.', 'Identificación, registros y procedimientos policiales.', 'Prisión preventiva, penas y medidas alternativas.'],
    sources: [impo('Constitución, artículo 7: derechos y garantías', 'constitucion/1967-1967/7'), impo('Ley 18.315: procedimiento policial', 'leyes/18315-2008')]
  },
  {
    id: 4, slug: 'valores', name: 'Valores sociales', short: 'Valores sociales',
    left: 'Progresista', right: 'Conservador',
    description: 'Explora actitudes hacia los cambios en las normas familiares, de género y de vida personal. Estas palabras tienen varios usos; acá describen este conjunto de asuntos y no toda la identidad política de alguien.',
    leftText: 'Prefiere ampliar el reconocimiento de distintas formas de familia, identidades y decisiones personales. Valora revisar normas sociales heredadas cuando considera que limitan la autonomía o el trato igualitario, y suele aceptar cambios legislativos en esos ámbitos.',
    rightText: 'Prefiere conservar instituciones y referencias sociales que considera valiosas para la convivencia. Valora la continuidad de los vínculos familiares y comunitarios, y suele pedir mayor cautela o deliberación antes de modificar las normas que los organizan.',
    debates: ['Matrimonio, filiación y distintas formas de familia.', 'Educación sexual y participación de las familias.', 'Autonomía personal y regulación de decisiones sobre el cuerpo.'],
    sources: [impo('Ley 19.075: matrimonio igualitario', 'leyes/19075-2013'), impo('Ley 18.987: interrupción voluntaria del embarazo', 'leyes/18987-2012')]
  },
  {
    id: 5, slug: 'laicidad', name: 'Laicidad y religión en lo público', short: 'Laicidad',
    left: 'Laicidad', right: 'Presencia religiosa',
    description: 'Explora el lugar de las expresiones religiosas en instituciones, ceremonias y políticas públicas. La libertad de creer o no creer y la separación constitucional entre Estado y religión son el marco común del debate.',
    leftText: 'Prefiere que las instituciones públicas mantengan distancia de los símbolos y argumentos religiosos en su actuación oficial. Considera que esa separación facilita la convivencia entre personas de distintas creencias y protege la libertad de conciencia de todas ellas.',
    rightText: 'Prefiere admitir mayor presencia de expresiones y organizaciones religiosas en la vida pública, sin establecer una religión oficial. Considera que sus tradiciones, aportes sociales y convicciones pueden participar del debate junto con otras visiones de la sociedad.',
    debates: ['Símbolos y ceremonias en espacios institucionales.', 'Convenios públicos con organizaciones de inspiración religiosa.', 'Tratamiento de las creencias en la educación pública.'],
    sources: [impo('Constitución, artículo 5: cultos y Estado', 'constitucion/1967-1967/5'), impo('Ley 18.437: principios de la educación', 'leyes/18437-2008')]
  },
  {
    id: 6, slug: 'comercio', name: 'Comercio exterior', short: 'Comercio exterior',
    left: 'Apertura comercial', right: 'Proteccionismo',
    description: 'Explora cuánto debería facilitar Uruguay el intercambio internacional y cuánto debería resguardar determinadas actividades locales. Apertura y protección pueden combinarse según el sector, el socio y las condiciones del acuerdo.',
    leftText: 'Prefiere reducir barreras al intercambio y ampliar acuerdos que faciliten comprar y vender en otros mercados. Valora la competencia, la variedad y el acceso a insumos, junto con medidas de adaptación para las actividades que enfrentan cambios.',
    rightText: 'Prefiere conservar herramientas para resguardar o desarrollar actividades productivas locales frente a la competencia externa. Valora los aranceles, las compras públicas y las condiciones de acceso como instrumentos para sostener capacidades, empleo y objetivos de desarrollo.',
    debates: ['Flexibilidad del Mercosur para negociar acuerdos.', 'Aranceles e importaciones de bienes e insumos.', 'Compras públicas y desarrollo de proveedores nacionales.'],
    sources: [{ title: 'Tratado de Asunción: marco del Mercosur', url: 'https://www.gub.uy/ministerio-defensa-nacional/institucional/normativa/tratado-asuncion' }, impo('Constitución, artículo 50: comercio exterior', 'constitucion/1967-1967/50')]
  },
  {
    id: 7, slug: 'exterior', name: 'Política exterior', short: 'Política exterior',
    left: 'No alineamiento', right: 'Alineamiento con bloques',
    description: 'Explora si Uruguay debería decidir sus vínculos caso a caso o coordinar de forma más estable con determinados bloques. No alinearse no significa evitar toda posición; alinearse tampoco implica aceptar todas las decisiones de un socio.',
    leftText: 'Prefiere mantener autonomía para definir posiciones y relaciones según cada asunto, diversificando los vínculos. Valora la mediación, las reglas internacionales y la capacidad de dialogar con gobiernos distintos sin una pertenencia política estable a un bloque.',
    rightText: 'Prefiere construir asociaciones políticas más estables con países o bloques de referencia. Valora coordinar posiciones diplomáticas, acuerdos y objetivos compartidos, considerando que esos compromisos pueden aumentar la influencia y la previsibilidad de un país pequeño.',
    debates: ['Coordinación regional y posiciones en organismos internacionales.', 'Vínculos con Estados Unidos, China y la Unión Europea.', 'Autonomía diplomática y respuesta ante crisis internacionales.'],
    sources: [impo('Constitución, artículo 6: relaciones internacionales', 'constitucion/1967-1967/6')]
  },
  {
    id: 8, slug: 'inmigracion', name: 'Inmigración y diversidad', short: 'Inmigración',
    left: 'Restricción migratoria', right: 'Apertura y diversidad',
    description: 'Explora prioridades sobre ingreso, residencia e integración de personas migrantes. Los derechos fundamentales y el trato sin discriminación son el marco del debate, incluso cuando se proponen requisitos diferentes para la admisión.',
    leftText: 'Prefiere mayores requisitos de ingreso y residencia, y ajustar los flujos a la capacidad de los servicios y del mercado laboral. Pone el foco en la planificación, la verificación administrativa y los recursos disponibles para una integración sostenida.',
    rightText: 'Prefiere facilitar el ingreso, la regularización y la participación de personas migrantes. Pone el foco en la reunificación familiar, el reconocimiento de capacidades y los aportes de la diversidad, junto con políticas que acompañen la integración cotidiana.',
    debates: ['Trámites de residencia y reconocimiento de títulos.', 'Acceso a empleo, educación y servicios.', 'Reunificación familiar e integración en los barrios.'],
    sources: [impo('Ley 18.250: migraciones', 'leyes/18250-2008')]
  },
  {
    id: 9, slug: 'memoria', name: 'Memoria histórica y Fuerzas Armadas', short: 'Memoria histórica',
    left: 'Verdad y revisión', right: 'Cierre de procesos',
    description: 'Explora prioridades sobre investigación del pasado reciente, justicia, memoria y funciones militares. Reúne asuntos distintos: alguien puede apoyar más investigación histórica y, al mismo tiempo, una determinada política de defensa. El eje no agota esas diferencias.',
    leftText: 'Prioriza continuar la búsqueda de información, la investigación de responsabilidades y las políticas de memoria y reparación. Valora revisar decisiones anteriores cuando hay elementos pendientes, manteniendo las garantías procesales y el control civil sobre las instituciones militares.',
    rightText: 'Prioriza la estabilidad de las decisiones adoptadas, los plazos y las garantías de los procesos, y una agenda militar centrada en funciones actuales. Puede apoyar otras formas de memoria y reparación, con mayor énfasis en cerrar controversias institucionales.',
    debates: ['Acceso a archivos y búsqueda de personas detenidas desaparecidas.', 'Responsabilidades del pasado reciente y garantías procesales.', 'Formación militar, defensa nacional y control civil.'],
    sources: [impo('Ley 18.831: pretensión punitiva por delitos del terrorismo de Estado', 'leyes/18831-2011'), impo('Ley 18.650: marco de la defensa nacional', 'leyes/18650-2010')]
  },
  {
    id: 10, slug: 'educacion-prevision', name: 'Educación y seguridad social', short: 'Educación y previsión',
    left: 'Provisión pública', right: 'Elección y provisión mixta',
    description: 'Explora el peso de la provisión pública común y de la elección entre prestadores o modalidades. Educación y jubilaciones no son el mismo asunto: una persona puede ubicarse de manera diferente en cada uno y el promedio oculta parte de esa diferencia.',
    leftText: 'Prefiere fortalecer sistemas públicos comunes, con financiación y reglas solidarias, para organizar la educación y la protección previsional. Valora compartir riesgos y sostener prestaciones ampliamente accesibles, con mayor responsabilidad directa del Estado en su provisión.',
    rightText: 'Prefiere dar más espacio a la elección entre modalidades y prestadores, combinando participación pública y privada. Valora adaptar las opciones a distintas necesidades y trayectorias, con regulación estatal y mecanismos que aseguren acceso y protección básica.',
    debates: ['Gobierno y financiación de la educación pública.', 'Elección educativa y relación entre prestadores.', 'BPS, ahorro individual, AFAP y organización de las jubilaciones.'],
    sources: [impo('Ley 18.437: Ley General de Educación', 'leyes/18437-2008'), impo('Ley 20.130: reforma de la seguridad social', 'leyes/20130-2023')]
  },
  {
    id: 11, slug: 'ambiente', name: 'Ambiente y desarrollo', short: 'Ambiente',
    left: 'Prioridad ambiental', right: 'Prioridad productiva',
    description: 'Explora qué prioridad dar a la precaución ambiental y a las oportunidades productivas cuando aparecen tensiones. Ambos polos pueden apoyar el desarrollo y el cuidado ambiental; difieren en el riesgo aceptable y en las condiciones para avanzar.',
    leftText: 'Prefiere condiciones ambientales más exigentes y mayor precaución antes de autorizar actividades con impactos inciertos. Valora la conservación, la calidad del agua y la biodiversidad, incluso cuando eso posterga inversiones o limita determinadas formas de producción.',
    rightText: 'Prefiere facilitar proyectos productivos que cumplan reglas ambientales y aporten empleo e ingresos. Valora evaluar los riesgos junto con sus beneficios y aplicar medidas de mitigación, evitando exigencias que considera desproporcionadas respecto del impacto previsto.',
    debates: ['Agua, uso del suelo y actividades agropecuarias.', 'Evaluaciones ambientales de grandes inversiones.', 'Energía, forestación, minería e infraestructura.'],
    sources: [impo('Ley 17.283: protección del medio ambiente', 'leyes/17283-2000'), impo('Constitución, artículo 47: ambiente y agua', 'constitucion/1967-1967/47')]
  }
];

export const GLOSSARY = [
  { term: 'Izquierda', definition: 'Familia de tradiciones que suele dar mayor prioridad a reducir desigualdades y ampliar derechos sociales. En Uruguay incluye corrientes distintas; no permite deducir por sí sola una postura sobre seguridad, religión o comercio.' },
  { term: 'Derecha', definition: 'Familia de tradiciones que suele dar mayor prioridad al orden institucional, la propiedad y la continuidad de determinadas instituciones. En Uruguay reúne corrientes diversas, con posiciones distintas sobre el Estado, los valores y la política exterior.' },
  { term: 'Centro', definition: 'Ubicación relativa entre posiciones de un debate o una estrategia que combina propuestas de distintas tradiciones. No significa automáticamente neutralidad, moderación en todos los temas ni ausencia de convicciones.' },
  { term: 'Liberal', definition: 'Puede referir a la defensa de libertades individuales, a una economía con más mercado o a ambas cosas. Una persona puede ser liberal en asuntos personales y apoyar una intervención económica amplia, o al revés.' },
  { term: 'Conservador', definition: 'Da valor a la continuidad de instituciones, costumbres o referencias sociales y suele pedir cautela ante ciertos cambios. Qué busca conservar depende del tema y de la época; no es sinónimo de pertenecer a un partido concreto.' },
  { term: 'Progresista', definition: 'Suele apoyar cambios orientados a ampliar derechos o revisar normas sociales que considera excluyentes. Es una orientación amplia, no una descripción automática de todas las políticas económicas o institucionales de alguien.' },
  { term: 'Socialdemocracia', definition: 'Tradición que busca combinar democracia representativa y economía de mercado con servicios públicos, protección social y redistribución. Sus propuestas sobre impuestos, regulación y provisión de servicios varían entre países y sectores.' },
  { term: 'Batllismo', definition: 'Tradición uruguaya vinculada a José Batlle y Ordóñez y al Partido Colorado, asociada históricamente con reformas sociales, laicidad y un papel relevante del Estado. Tiene distintas interpretaciones y sectores a lo largo del tiempo.' },
  { term: 'Herrerismo', definition: 'Tradición del Partido Nacional vinculada a Luis Alberto de Herrera, con énfasis histórico en la soberanía, el no intervencionismo y determinadas visiones de la relación entre Estado y sociedad. Sus expresiones posteriores no son idénticas entre sí.' },
  { term: 'Frenteamplismo', definition: 'Identificación con la coalición y partido Frente Amplio, que reúne diversas corrientes de izquierda y centroizquierda. Compartir esa identidad no implica coincidencia en todos los asuntos ni con cada sector que lo integra.' },
  { term: 'Laicidad', definition: 'Principio que organiza la independencia entre instituciones públicas y confesiones religiosas, junto con la libertad de conciencia. Sus aplicaciones concretas —símbolos, enseñanza, ceremonias— son objeto de interpretaciones y debates.' },
  { term: 'Redistribución', definition: 'Cambios en cómo se reparten ingresos, recursos y oportunidades mediante impuestos, transferencias o servicios. No se limita a entregar dinero: también puede operar a través de salud, educación o seguridad social.' },
  { term: 'Estado de bienestar', definition: 'Conjunto de instituciones y políticas que protegen frente a riesgos como enfermedad, desempleo o vejez y sostienen servicios sociales. Existen modelos con distintas combinaciones de financiación pública y prestadores.' },
  { term: 'Empresa pública', definition: 'Empresa de propiedad estatal que produce bienes o presta servicios. Su propiedad, forma de gestión, competencia y finalidad son cuestiones distintas; apoyar una empresa pública no define toda una posición económica.' },
  { term: 'Negociación colectiva', definition: 'Proceso por el que organizaciones de trabajadores y empleadores acuerdan condiciones de trabajo. Puede desarrollarse en distintos niveles, como rama de actividad o empresa, dentro del marco legal correspondiente.' },
  { term: 'Consejos de Salarios', definition: 'Ámbitos de negociación con participación de trabajadores, empleadores y Estado para tratar salarios y condiciones laborales según grupos de actividad. El alcance de sus acuerdos y su relación con la negociación por empresa forman parte del debate laboral.' },
  { term: 'Proteccionismo', definition: 'Uso de barreras o apoyos para resguardar actividades locales frente a la competencia externa. Puede incluir aranceles, requisitos o preferencias y aplicarse a algunos sectores, sin implicar el cierre de todo el comercio.' },
  { term: 'Mercosur', definition: 'Proceso de integración regional creado por el Tratado de Asunción de 1991. Es un marco de cooperación y reglas comerciales; apoyarlo no determina por sí solo cómo alguien ve las relaciones con otros bloques.' },
  { term: 'No alineamiento', definition: 'Preferencia por mantener autonomía frente a bloques de poder y decidir vínculos o posiciones según cada asunto. No equivale necesariamente a neutralidad en todos los conflictos ni a renunciar a compromisos internacionales.' },
  { term: 'Plebiscito', definition: 'En el uso institucional uruguayo, consulta directa al electorado sobre una reforma constitucional. Tiene procedimientos y mayorías específicas; no es lo mismo que elegir representantes ni que un referéndum contra una ley.' },
  { term: 'Referéndum', definition: 'Mecanismo por el que el electorado puede resolver sobre la derogación de una ley, siguiendo las condiciones constitucionales y legales. Conviene distinguir la consulta final de las etapas previas de adhesión o recolección de firmas.' },
  { term: 'Balotaje', definition: 'Segunda vuelta de la elección presidencial cuando ninguna candidatura alcanza la mayoría requerida en la primera. Se realiza entre las dos fórmulas más votadas; no vuelve a elegir el Parlamento.' },
  { term: 'Lema y sector', definition: 'El lema identifica a un partido dentro del sistema electoral uruguayo. Un sector es una corriente o agrupación dentro de ese espacio; sus posiciones pueden diferir de las de otros sectores del mismo partido.' },
  { term: 'Coalición', definition: 'Acuerdo de distintos partidos o grupos para competir, apoyar una candidatura o gobernar. Su alcance depende del acuerdo concreto: compartir una coalición no convierte a sus integrantes en un único partido.' },
  { term: 'AFAP', definition: 'Administradora de Fondos de Ahorro Previsional. Gestiona ahorro jubilatorio individual dentro del sistema previsional regulado; no debe confundirse con el BPS ni con la totalidad de la seguridad social.' },
  { term: 'LUC', definition: 'Abreviatura de Ley de Urgente Consideración; en el debate reciente suele referir a la Ley 19.889 de 2020. El procedimiento de urgente consideración y el contenido de una ley concreta son cuestiones diferentes.' }
];

export const TIMELINE = [
  { year: '1813', title: 'Instrucciones del Año XIII', text: 'El Congreso de Tres Cruces formula un mandato para sus representantes: independencia, república y organización federal son algunas de sus ideas centrales.', source: { title: 'ANEP · Instrucciones del año XIII', url: 'https://uruguayeduca.anep.edu.uy/efemerides/instrucciones-del-ano-xiii' } },
  { year: '1830', title: 'Jura de la primera Constitución', text: 'El 18 de julio se jura la primera Constitución del Estado Oriental. Establece una organización republicana representativa y la separación de poderes.', source: { title: 'Presidencia · Aniversario de la Jura', url: 'https://www.gub.uy/presidencia/comunicacion/noticias/195-aniversario-jura-constitucion' } },
  { year: '1915', title: 'Jornada de ocho horas', text: 'La Ley 5.350 establece límites a la jornada de trabajo en las actividades que comprende. Es un hito de la legislación social uruguaya.', source: impo('Ley 5.350: jornada laboral', 'leyes/5350-1915') },
  { year: '1917', title: 'Nueva organización constitucional', text: 'Se plebiscita una reforma que separa al Estado de la religión y reorganiza el Poder Ejecutivo. El texto conocido como Constitución de 1918 entra en vigor en 1919.', source: { title: 'Biblioteca del Parlamento · Evolución constitucional', url: 'https://pxserver6.parlamento.gub.uy/Constitucion/' } },
  { year: '1932', title: 'Derechos políticos de las mujeres', text: 'La Ley 8.927 reconoce el derecho de las mujeres a votar y a ser elegidas en elecciones nacionales y municipales.', source: impo('Ley 8.927: derechos políticos de la mujer', 'leyes/8927-1932') },
  { year: '1933', title: 'Ruptura del orden constitucional', text: 'El 31 de marzo, el presidente Gabriel Terra disuelve las Cámaras y rompe el orden constitucional. También es intervenida la Corte Electoral.', source: { title: 'Corte Electoral · El golpe de Estado de 1933', url: 'https://www.gub.uy/corte-electoral/comunicacion/publicaciones/1933-golpe-estado-intervencion-corte-electoral' } },
  { year: '1973', title: 'Comienzo de la dictadura', text: 'El 27 de junio son disueltas las Cámaras. Comienza la dictadura cívico-militar y se restringen las libertades políticas y sindicales.', source: { title: 'MEC · 27 de junio de 1973', url: 'https://www.gub.uy/ministerio-educacion-cultura/comunicacion/noticias/27-junio-1973-memoria-para-democracia' } },
  { year: '1980', title: 'Rechazo a la reforma de la dictadura', text: 'El electorado rechaza el proyecto constitucional impulsado por el régimen. El resultado constituye un hito del proceso que conduce a la recuperación democrática.', source: { title: 'INDDHH · Línea de tiempo 1977–1985', url: 'https://www.gub.uy/institucion-nacional-derechos-humanos-uruguay/sites/institucion-nacional-derechos-humanos-uruguay/files/documentos/publicaciones/Linea-de-tiempo-muestra-ex-SID-27-de-junio-de-2018-baja.pdf' } },
  { year: '1985', title: 'Retorno a la democracia', text: 'El 1.º de marzo asume Julio María Sanguinetti tras las elecciones de 1984. Se restablece el gobierno constitucional y comienza una nueva etapa democrática.', source: { title: 'Presidencia · Cuarenta años de democracia', url: 'https://www.gub.uy/presidencia/comunicacion/noticias/pueblo-uruguayo-celebra-40-anos-democracia-ininterrumpida' } },
  { year: '1991', title: 'Tratado de Asunción', text: 'Argentina, Brasil, Paraguay y Uruguay firman el tratado que establece las bases del Mercosur. La integración regional ocupa un lugar central en el debate comercial.', source: { title: 'MERCOSUR · Textos fundacionales', url: 'https://www.mercosur.int/en/documents/founding-texts' } },
  { year: '2004', title: 'Elecciones y plebiscito del agua', text: 'Se celebran las elecciones nacionales y la consulta constitucional sobre el agua. La gestión de los servicios y recursos hídricos se incorpora de forma destacada al debate político.', source: { title: 'Corte Electoral · Elecciones nacionales 2004', url: 'https://www.gub.uy/corte-electoral/tematica/elecciones-nacionales-2004' } },
  { year: '2025', title: 'Una nueva transición presidencial', text: 'El 1.º de marzo Yamandú Orsi asume la Presidencia. La transición coincide con los cuarenta años del retorno a la democracia.', source: { title: 'Presidencia · Discurso de asunción de Yamandú Orsi', url: 'https://medios.presidencia.gub.uy/tav_portal/2025/noticias/AN_306/discurso-asuncion-orsi.pdf' } }
];

export const FAQ = [
  { q: '¿Cuánto tarda el test?', a: 'La versión Corta tiene 36 preguntas y lleva unos 5 minutos; la Completa, 60 y unos 9 minutos; la Extrema, 240 y unos 30 minutos. Son tiempos orientativos: podés leer a tu ritmo.' },
  { q: '¿Necesito saber de política?', a: 'No. Las afirmaciones preguntan por tus preferencias, no por nombres o fechas. Si un concepto te resulta poco familiar, podés consultar la enciclopedia y el glosario antes de responder.' },
  { q: '¿Quién puede ver mis respuestas?', a: 'El test calcula tu perfil en el navegador y no envía tus respuestas a un servidor. El progreso que se guarda en este dispositivo puede ser accesible para otras personas que usen el mismo navegador. Compartí el resultado solo si vos querés.' },
  { q: '¿Necesito una cuenta?', a: 'La aplicación no pide registrarte para responder el test. Si estás viendo una versión de revisión privada, la plataforma que la aloja puede controlar el acceso a esa versión; eso es distinto de una cuenta para el cuestionario.' },
  { q: '¿El resultado es científico?', a: 'No. Es un ejercicio educativo con preguntas y criterios editoriales, sin validación científica. Resume tus respuestas en esta selección de temas y no mide toda tu identidad política ni recomienda un voto.' },
  { q: '¿Por qué me apareció ese personaje?', a: 'La cercanía se calcula comparando los ejes de tus respuestas con estimaciones editoriales basadas en fuentes públicas. Mirá la comparación por eje, las fuentes y los datos disponibles: un porcentaje no significa pensar igual en todo ni apoyar a esa persona.' },
  { q: '¿Qué pasa si lo repito?', a: 'Con las mismas preguntas, respuestas y criterios, obtendrás el mismo perfil. Puede cambiar si respondés distinto o elegís otra versión, porque las versiones largas incluyen más asuntos dentro de cada eje.' },
  { q: '¿La respuesta neutra cuenta?', a: 'Sí. Representa una posición intermedia en esa afirmación. Puede expresar que preferís un equilibrio, que depende de las condiciones o que no tenés una preferencia definida. El test no distingue por sí solo entre esos motivos.' },
  { q: '¿Por qué algunos personajes no tienen todos los ejes?', a: 'No se asigna una postura cuando las fuentes no dan una base suficiente. Esto importa especialmente para figuras históricas: no corresponde suponer qué habrían pensado sobre debates o instituciones que surgieron después de su época.' },
  { q: '¿Cómo señalo un error o cuestiono una ubicación?', a: 'Prepará una observación indicando la ficha o pregunta, qué proponés corregir y una fuente pública que lo respalde. La herramienta permite redactar o guardar ese informe. El envío a una persona responsable requiere que el sitio tenga configurado un canal editorial; guardar el informe no significa que se haya enviado.' }
];
