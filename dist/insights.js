// Lecturas descriptivas. No estiman certeza, personalidad ni intención de voto.
const AXIS_MEANINGS=[
 ['la iniciativa privada y la competencia','la participación empresarial y la regulación del Estado'],
 ['una menor carga de impuestos','la redistribución financiada mediante impuestos'],
 ['la flexibilidad de las condiciones laborales','la protección laboral y sindical'],
 ['las garantías y libertades individuales','los instrumentos de control de seguridad'],
 ['la ampliación de derechos y los cambios sociales','la continuidad de valores y normas sociales tradicionales'],
 ['la separación entre religión y decisiones públicas','la presencia de lo religioso en la vida pública'],
 ['el intercambio comercial con menos barreras','la protección de la producción nacional frente a la competencia exterior'],
 ['la autonomía frente a bloques internacionales','la coordinación y el alineamiento con bloques internacionales'],
 ['mayores restricciones al ingreso y la integración migratoria','la apertura migratoria y la inclusión de la diversidad'],
 ['la investigación y revisión del pasado reciente','el cierre de procesos vinculados al pasado reciente'],
 ['la provisión pública de educación y seguridad social','la elección entre opciones y la provisión mixta'],
 ['la protección ambiental ante decisiones de desarrollo','la actividad productiva ante decisiones ambientales']
];
export function explainAxis(axis,value,meta){
 if(!Number.isFinite(value)||value<0||value>100||!AXIS_MEANINGS[axis])return 'No hay un puntaje disponible para interpretar este eje.';
 const distance=Math.abs(value-50);
 if(distance<10)return `${value}/100: tus respuestas quedan cerca del punto intermedio entre ${meta.left} y ${meta.right}. Puede surgir de respuestas neutras o de combinar preferencias en ambos sentidos.`;
 const side=value<50?0:1,pole=side===0?meta.left:meta.right;
 const strength=distance>=35?'marcada':distance>=20?'moderada':'leve';
 return `${value}/100: tus respuestas muestran una inclinación ${strength} hacia ${pole}. Dan más peso a ${AXIS_MEANINGS[axis][side]} que a ${AXIS_MEANINGS[axis][1-side]}.`;
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
