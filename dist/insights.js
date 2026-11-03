// Lectura directa de las respuestas, sin atribuir una identidad permanente.
const AXIS_READINGS=[
 ['Tu postura se inclina más hacia el libre mercado: preferís que las empresas y las personas tengan más espacio para producir, competir y decidir, con menos intervención del Estado en la economía.',
  'Tu postura se inclina más hacia un Estado activo en la economía: preferís que regule los mercados, mantenga empresas públicas y participe en sectores que considerás importantes.'],
 ['Tu postura se inclina más hacia impuestos bajos: preferís que personas y empresas conserven una mayor parte de sus ingresos y que el Estado limite o reorganice sus gastos.',
  'Tu postura se inclina más hacia la redistribución: preferís que quienes tienen más ingresos aporten más para financiar servicios públicos y reducir diferencias económicas.'],
 ['Tu postura se inclina más hacia la flexibilidad laboral: preferís que empresas y trabajadores tengan más margen para acordar condiciones, horarios y formas de contratación.',
  'Tu postura se inclina más hacia la protección laboral: preferís reglas comunes que respalden a los trabajadores, junto con sindicatos y negociación colectiva con mayor peso.'],
 ['Tu postura se inclina más hacia las libertades individuales: preferís poner límites a la vigilancia y a las facultades policiales para proteger la privacidad y las garantías de las personas.',
  'Tu postura se inclina más hacia el control de seguridad: preferís dar más herramientas de vigilancia e investigación a las autoridades para prevenir delitos y actuar frente a ellos.'],
 ['Tu postura se inclina más hacia el progresismo: preferís ampliar derechos y dar más libertad para elegir cómo vivir, formar una familia y tomar decisiones personales.',
  'Tu postura se inclina más hacia el conservadurismo: preferís conservar valores y normas sociales tradicionales y avanzar con más cautela ante cambios en familia, educación o costumbres.'],
 ['Tu postura se inclina más hacia la laicidad: preferís que las decisiones e instituciones públicas se mantengan separadas de las creencias religiosas y no favorezcan ninguna fe.',
  'Tu postura se inclina más hacia una presencia religiosa en lo público: aceptás que las creencias y organizaciones religiosas tengan más participación en actividades y debates del Estado.'],
 ['Tu postura se inclina más hacia la apertura comercial: preferís facilitar las importaciones, las exportaciones y los acuerdos con otros países, con menos barreras al intercambio.',
  'Tu postura se inclina más hacia proteger la producción nacional: preferís que el Estado apoye a productores locales y limite parte de la competencia de productos del exterior.'],
 ['Tu postura se inclina más hacia la autonomía internacional: preferís que Uruguay decida su posición según cada asunto y mantenga margen para acordar con países de distintos bloques.',
  'Tu postura se inclina más hacia el alineamiento internacional: preferís que Uruguay afiance alianzas y coordine sus decisiones con países o bloques con los que comparte intereses.'],
 ['Tu postura se inclina más hacia una inmigración con mayores condiciones: preferís exigir más requisitos para el ingreso, la residencia y la integración de quienes llegan al país.',
  'Tu postura se inclina más hacia una inmigración abierta: preferís facilitar la llegada, la residencia y la integración de personas de otros países, dando lugar a una sociedad más diversa.'],
 ['Tu postura se inclina más hacia continuar la búsqueda de verdad y justicia: preferís investigar lo ocurrido durante la dictadura, abrir información y revisar responsabilidades.',
  'Tu postura se inclina más hacia cerrar procesos sobre el pasado: preferís limitar su continuidad y dar mayor prioridad a una nueva etapa de convivencia y relaciones institucionales.'],
 ['Tu postura se inclina más hacia la provisión pública: preferís que el Estado tenga el papel principal en la educación y en la protección jubilatoria. Las respuestas sobre esas dos áreas pueden tener matices distintos.',
  'Tu postura se inclina más hacia opciones mixtas: preferís combinar servicios públicos y privados y dar más lugar a la elección de las personas en educación y jubilaciones.'],
 ['Tu postura se inclina más hacia priorizar el ambiente: preferís poner límites a actividades que puedan dañar el agua, el suelo o los ecosistemas, incluso si eso restringe algunos proyectos productivos.',
  'Tu postura se inclina más hacia priorizar el desarrollo productivo: das más importancia a generar empleo, inversión y actividad económica al decidir sobre proyectos con impactos ambientales.']
];
const AXIS_BALANCED=[
 'Tu postura económica combina espacio para las empresas privadas con participación del Estado. El conjunto de tus respuestas no da una preferencia marcada por uno de los dos.',
 'Tu postura combina interés por mantener los impuestos contenidos con apoyo a financiar servicios y reducir desigualdades. No aparece una preferencia marcada por uno de esos objetivos.',
 'Tu postura combina protección para los trabajadores con margen para negociar condiciones según cada situación. No aparece una preferencia marcada por reglas más rígidas o más flexibles.',
 'Tu postura combina herramientas para combatir el delito con límites que protejan las libertades individuales. No aparece una preferencia marcada por ampliar el control o restringirlo.',
 'Tu postura social combina apertura a algunos cambios con preferencia por conservar ciertas normas. Tus respuestas no se inclinan de forma marcada hacia el progresismo o el conservadurismo.',
 'Tu postura combina neutralidad religiosa del Estado con aceptación de algunas expresiones de fe en lo público. No aparece una preferencia marcada por uno de los dos polos.',
 'Tu postura comercial combina apertura al intercambio con apoyo a proteger ciertas actividades locales. No aparece una preferencia marcada por abrir o restringir el comercio de forma general.',
 'Tu postura internacional combina alianzas con otros países y margen para que Uruguay tome decisiones propias. No aparece una preferencia marcada por alinearse o mantenerse al margen de los bloques.',
 'Tu postura migratoria combina apertura a quienes llegan con condiciones para su ingreso e integración. El conjunto de tus respuestas no se inclina de forma marcada hacia uno de los polos.',
 'Tu postura sobre el pasado combina apoyo a algunas medidas de verdad y revisión con reservas sobre la continuidad de otros procesos. Las respuestas concretas ayudan a distinguir esas diferencias.',
 'Tu postura combina respaldo a los servicios públicos con aceptación de opciones mixtas. Puede haber diferencias entre lo que preferís para educación y para jubilaciones.',
 'Tu postura combina cuidado ambiental con interés por el empleo y la actividad productiva. El conjunto de tus respuestas no da una prioridad marcada a uno de esos objetivos.'
];
export function explainAxis(axis,value){
 if(!Number.isFinite(value)||value<0||value>100||!AXIS_READINGS[axis])return 'No hay un puntaje disponible para interpretar este eje.';
 if(Math.abs(value-50)<10)return AXIS_BALANCED[axis]+' Un promedio central también puede surgir de respuestas neutras o preferencias distintas.';
 return AXIS_READINGS[axis][value<50?0:1];
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
