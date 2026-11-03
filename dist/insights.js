// Lecturas descriptivas. No estiman certeza, personalidad ni intención de voto.
// Ejemplos compatibles con una orientación, no políticas individuales deducidas.
const AXIS_MEANINGS=[
 ['Una aplicación posible sería permitir que más empresas compitan en servicios hoy concentrados en pocos proveedores. El desafío es asegurar competencia real y acceso también donde prestar el servicio resulta menos rentable.',
  'Una aplicación posible sería mantener empresas públicas para sostener servicios estratégicos o inversiones de largo plazo. El desafío es evaluar sus costos, su gestión y a quiénes llegan efectivamente sus beneficios.'],
 ['Bajar un impuesto exige decidir si se reduce gasto, se reasignan recursos o se busca otro ingreso. El efecto también depende de qué impuesto se modifica: una rebaja al consumo y una a las rentas altas pueden beneficiar a grupos distintos.',
  'Financiar transferencias o servicios con aportes mayores de quienes más ingresos tienen puede reducir diferencias de acceso. El diseño debe considerar quién paga realmente cada impuesto y cómo se evalúa el uso de lo recaudado.'],
 ['Acuerdos adaptados a cada empresa podrían facilitar cambios de horarios, tareas o contratación. El punto a resolver es cómo negociar esas condiciones cuando empleadores y trabajadores tienen capacidades de negociación desiguales.',
  'Pisos salariales y negociación colectiva podrían dar respaldo a quienes tienen menos capacidad de negociar individualmente. La discusión es cómo adaptar esos acuerdos a empresas con productividad y recursos diferentes.'],
 ['Ante una medida como ampliar la vigilancia, esta orientación invita a preguntar quién la autoriza, qué información se guarda y cómo se reclama por un abuso. Las garantías importan tanto en el diseño como en la aplicación de la medida.',
  'Más patrullaje, vigilancia o facultades de investigación requieren definir recursos, responsables y objetivos. Una evaluación útil pregunta qué delitos se busca reducir y cómo se controlarán los resultados y posibles abusos.'],
 ['Un ejemplo compatible sería ampliar opciones legales sobre decisiones familiares o personales. El debate práctico pasa por hacer efectivos esos derechos y resolver cómo conviven con convicciones distintas en servicios e instituciones.',
  'Un ejemplo compatible sería conservar ciertas normas sobre familia o educación y exigir más deliberación antes de cambiarlas. El debate práctico es cómo sostener esas continuidades respetando los derechos de quienes eligen otras formas de vida.'],
 ['En una escuela u oficina pública, esta orientación lleva a distinguir las creencias de cada persona de la posición oficial de la institución. El desafío es permitir la expresión individual sin que el Estado favorezca una fe.',
  'Un ejemplo compatible sería admitir expresiones religiosas o colaboración con organizaciones de fe en actividades públicas. La cuestión práctica es asegurar igualdad de trato para otras religiones y para quienes no profesan ninguna.'],
 ['Reducir barreras a las importaciones podría ampliar la oferta y dar acceso a insumos del exterior. La transición requiere pensar qué ocurre con empresas y empleos locales expuestos a una competencia mayor.',
  'Aranceles, preferencias de compra o apoyos sectoriales podrían dar margen a productores locales para invertir. La discusión es cuánto duran esas medidas, quién asume su costo y con qué metas se evalúan.'],
 ['En una negociación internacional, esta orientación permite buscar acuerdos distintos según el asunto. Esa autonomía exige capacidad para negociar y sostener decisiones propias cuando países con más poder presionan en otra dirección.',
  'Coordinar decisiones con un bloque puede dar continuidad a acuerdos y mayor capacidad de acción conjunta. El costo a discutir es qué margen de decisión conserva Uruguay cuando sus intereses difieren de los de sus socios.'],
 ['Un ejemplo compatible sería condicionar más el ingreso o la residencia a ciertos requisitos. Para evaluar esas medidas conviene precisar qué problema buscan resolver y cómo afectarían el empleo, las familias y el trato igualitario.',
  'Facilitar residencia, reconocimiento de estudios e integración laboral puede ampliar las oportunidades de quienes llegan. Su implementación requiere coordinar vivienda, educación y servicios para acompañar a la población nueva y a la residente.'],
 ['Abrir archivos, buscar personas desaparecidas o investigar responsabilidades son decisiones distintas que requieren recursos y procedimientos. El debate incluye cómo preservar pruebas, atender a las víctimas y sostener garantías judiciales.',
  'Una propuesta de cierre debería precisar qué procesos abarca y qué mecanismos de verdad o reparación mantendría. Ese alcance importa para discutir sus efectos sobre las víctimas, las responsabilidades y las generaciones siguientes.'],
 ['Fortalecer centros educativos y prestaciones públicas supone decidir cómo se financian y cómo llegan a poblaciones distintas. Educación y jubilaciones pueden merecer respuestas diferentes: compartir este eje no obliga a elegir la misma solución en ambas.',
  'Ampliar opciones entre prestadores o combinar gestión pública y privada exige reglas de calidad, financiamiento y supervisión. En educación importa evitar exclusiones; en jubilaciones, definir cómo se reparten riesgos y garantías.'],
 ['Ante un proyecto que genera empleo pero afecta agua, suelo o ecosistemas, esta orientación abre la discusión sobre límites, alternativas y prevención. También exige decidir quién asume los costos de proteger esos recursos.',
  'Ante ese mismo proyecto, esta orientación pone sobre la mesa empleo, inversión y actividad local. La decisión requiere precisar qué impactos se aceptan, cómo se fiscalizan y quién responde si aparecen daños.']
];
const AXIS_CENTER=[
 'Una economía puede combinar empresas públicas en ciertos servicios y competencia privada en otros. Para entender esa combinación, conviene mirar qué sectores querés reservar al Estado y qué reglas aplicarías al resto.',
 'Se puede apoyar un gasto social y cuestionar el impuesto elegido para financiarlo. Distinguir entre cuánto recaudar, de quién y para qué ayuda a entender un promedio central.',
 'Se pueden sostener pisos comunes y permitir acuerdos particulares sobre horarios o tareas. La pregunta útil es qué condiciones deberían ser irrenunciables y cuáles podrían negociarse.',
 'Se puede respaldar una medida de investigación y exigir autorización, plazos y revisión. Para entender la combinación, conviene mirar qué controles aceptarías y bajo qué garantías.',
 'Las decisiones sobre familia, educación y autonomía personal pueden ir en sentidos distintos. Revisar cada respuesta permite distinguir acuerdos concretos de una preferencia general por cambiar o conservar normas.',
 'Se puede defender la neutralidad de una institución y admitir expresiones religiosas de las personas que la integran. La diferencia está entre una práctica individual y una posición oficial del Estado.',
 'Se puede abrir el comercio en algunos productos y apoyar una transición más gradual en otros. La cuestión es con qué criterios se elegirían esos sectores y cuánto durarían las excepciones.',
 'Un país puede coordinarse con sus socios en comercio y conservar posiciones propias en otros asuntos. Un promedio central deja abierta la pregunta de qué compromisos aceptarías y en qué temas.',
 'Se pueden facilitar ciertos trámites de residencia y exigir condiciones para otros. Para interpretar la combinación conviene separar ingreso al país, acceso a servicios e integración laboral.',
 'La búsqueda de información, la reparación y los procesos judiciales son decisiones diferentes. El promedio puede ocultar que apoyás unas medidas y tenés reservas sobre otras.',
 'Podés preferir provisión pública en educación y un sistema mixto en jubilaciones, o al revés. Leer ambas áreas por separado aporta más información que atribuirles una única posición.',
 'Se puede apoyar una inversión y condicionarla a límites ambientales concretos. La cuestión práctica es qué impactos aceptarías, qué alternativas pedirías y quién debería fiscalizar el cumplimiento.'
];
export function explainAxis(axis,value,meta){
 if(!Number.isFinite(value)||value<0||value>100||!AXIS_MEANINGS[axis])return 'No hay un puntaje disponible para interpretar este eje.';
 if(Math.abs(value-50)<10)return AXIS_CENTER[axis];
 return AXIS_MEANINGS[axis][value<50?0:1];
}
export function responseStats(questions,answers){return Array.from({length:12},(_,axis)=>{const qs=questions.filter(q=>q.axis===axis);const values=qs.map(q=>(answers[q.id]-2)*q.direction);return {count:qs.length,neutral:values.filter(v=>v===0).length,left:values.filter(v=>v<0).length,right:values.filter(v=>v>0).length,intensity:qs.length?Math.round(values.reduce((s,v)=>s+Math.abs(v),0)/(2*qs.length)*100):0}})}
export function strongestAxes(profile){return profile.map((value,axis)=>({axis,value,distance:Math.abs(value-50)})).filter(x=>x.distance>=10).sort((a,b)=>b.distance-a.distance||a.axis-b.axis)}
export function comparisonDetails(profile,reference,axes){const items=axes.filter(i=>Number.isFinite(reference[i])).map(axis=>({axis,user:profile[axis],reference:reference[axis],gap:Math.abs(profile[axis]-reference[axis])}));return {near:[...items].sort((a,b)=>a.gap-b.gap||a.axis-b.axis).slice(0,3),far:[...items].sort((a,b)=>b.gap-a.gap||a.axis-b.axis).filter(x=>x.gap>0).slice(0,2)}}
// Prototipos pedagógicos propios: los valores son parte de la rúbrica, no
// mediciones de corrientes reales. Comparar todos sobre los mismos cuatro ejes.
export const MODEL_AXES=[0,1,2,4];
export const READING_MODELS=[
 {id:'socialdemocrata',name:'Lectura socialdemócrata',values:[75,80,80,20],text:'Combina un papel económico activo del Estado, redistribución, protección laboral y apertura al cambio social.'},
 {id:'liberal',name:'Lectura liberal de mercado',values:[20,25,25,30],text:'Combina mayor protagonismo del mercado, menor carga tributaria, flexibilidad laboral y apertura al cambio social.'},
 {id:'conservadora',name:'Lectura conservadora de mercado',values:[25,30,30,80],text:'Combina protagonismo del mercado y flexibilidad económica con una orientación social más conservadora.'},
 {id:'socialconservadora',name:'Lectura social y conservadora',values:[70,70,75,80],text:'Combina intervención económica, redistribución y protección laboral con una orientación social más conservadora.'},
 {id:'mixta',name:'Lectura de equilibrio entre polos',values:[50,50,50,50],text:'Representa posiciones intermedias en economía, redistribución, trabajo y valores sociales. No demuestra moderación en todos los demás temas.'}
];
export function readingModels(profile){return READING_MODELS.map(m=>({...m,score:Math.round(100-m.values.reduce((s,v,i)=>s+Math.abs(profile[MODEL_AXES[i]]-v),0)/MODEL_AXES.length)})).sort((a,b)=>b.score-a.score||a.id.localeCompare(b.id))}
export function possibleTradeoffs(p){const out=[];if(p[0]>=65&&p[1]<=35)out.push({axes:[0,1],title:'Intervención y financiamiento',text:'Un mayor papel económico del Estado junto con menor carga tributaria puede requerir priorizar gastos, mejorar eficiencia o buscar otras fuentes de ingresos.'});if(p[6]<=35&&p[11]<=35)out.push({axes:[6,11],title:'Apertura y estándares ambientales',text:'Una apertura comercial amplia junto con una prioridad ambiental marcada plantea cómo aplicar estándares a la producción local y a las importaciones.'});if(p[3]>=65&&p[8]>=65)out.push({axes:[3,8],title:'Control e inclusión',text:'Más instrumentos de control y una inmigración abierta pueden combinarse; su aplicación requiere definir garantías y evitar trato desigual.'});return out}
