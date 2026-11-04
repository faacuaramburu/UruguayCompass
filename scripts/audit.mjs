import {mkdir,writeFile,readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {QUESTIONS} from '../dist/questions.js';
import {AXES} from '../dist/context.js';
import {FIGURES,PARTIES} from '../dist/politics.js';
import {POLITICAL_EVIDENCE,POLITICAL_SOURCES,EVIDENCE_REVISION} from '../dist/political-evidence.js';
import {QUESTION_AUDIT,evidenceQuestionId} from '../dist/question-audit.js';
import {compatibilityPoints,compatibilityLabel,conceptGroups,rankPoliticalAnswers} from '../dist/political-scoring.js';
const root=new URL('../dist/auditoria/',import.meta.url);
const labels=['Muy en desacuerdo','En desacuerdo','Ni de acuerdo ni en desacuerdo','De acuerdo','Muy de acuerdo'];
const entities=[...FIGURES.map(e=>({...e,type:'persona'})),...PARTIES.map(e=>({...e,type:'partido'}))];
const groups=conceptGroups(QUESTIONS),axisGroups=new Map(AXES.map((a,i)=>[i,groups.filter(g=>g.axis===i)]));
const weights=new Map(groups.flatMap(g=>g.questions.map(q=>[q.id,1/(12*axisGroups.get(q.axis).length*g.questions.length)])));
const known=e=>Object.values(e.positions).filter(p=>p.status==='documented').length;
const answerCoding={0:'Oposición directa',1:'Oposición calificada',2:'Neutralidad explícita',3:'Apoyo calificado',4:'Apoyo directo',unknown:'Evidencia específica insuficiente; no se asigna respuesta'};
const pendingTopics=['economía y empresas','impuestos y gasto','trabajo y sindicatos','seguridad y cárceles','instituciones','derechos sociales, aborto y eutanasia','religión y laicidad','comercio exterior','diplomacia e integración','inmigración','educación, salud y cuidados','ambiente y energía'];
const data={revision:EVIDENCE_REVISION,date:'2026-11-04',baseline:'82fc9499d6b0438395486201319da1f0ddb916ab',
 status:'Auditoría reproducible y reconstrucción del motor; investigación documental parcial. No certifica trayectorias completas ni vigencia actual.',
 coding:answerCoding,formula:'(respuesta-2)*(posición-2); índice observado=50+12.5*sum(peso*puntos conocidos)/cobertura; cobertura=sum(pesos conocidos)',
 uncertainty:'Límites de identificación de evidencia faltante, no intervalos estadísticos; partido no interviene en la fórmula.',
 questions:QUESTIONS.map(q=>({...q,audit:QUESTION_AUDIT[evidenceQuestionId(q)],extremeWeight:weights.get(q.id),
  sourcesByPerson:Object.fromEntries(FIGURES.filter(e=>e.positions[evidenceQuestionId(q)].status==='documented').map(e=>[e.id,e.positions[evidenceQuestionId(q)].evidenceIds]))})),
 entities:entities.map(e=>({id:e.id,type:e.type,name:e.name,party:e.party||e.id,partyName:e.partyName||e.name,
  sector:e.sector&&e.sector!==e.partyName?e.sector:null,sectorStatus:'Contexto no usado para puntuar; sector y evolución completa pendientes de revisión independiente.',
  period:e.research.period,research:e.research,knownQuestions:known(e),defaultPosition:{position:null,status:'unknown',confidence:'desconocida'},
  positions:Object.fromEntries(Object.entries(e.positions).filter(([,p])=>p.status==='documented')),
  pendingTopics:pendingTopics.filter((_,i)=>!e.evidence.some(x=>x.axis===i)),
  limits:'Incluso los temas con una posición documentada tienen otros enunciados desconocidos. No se reconstruyó toda su trayectoria.'})),
 sources:POLITICAL_SOURCES,records:POLITICAL_EVIDENCE,
 hypotheses:[0,1,2,3,4].map((step,i)=>{
  const names=['izquierda estilizada','centroizquierda estilizada','centro neutral','centroderecha estilizada','derecha estilizada'];
  // Explicit synthetic axis targets, not factual definitions of political identities.
  const axisTargets=[step,step,step,step,step,step,step,4-step,step,step,step,step];
  const answers=Object.fromEntries(QUESTIONS.map(q=>[q.id,q.direction===1?axisTargets[q.axis]:4-axisTargets[q.axis]]));
  const result=rankPoliticalAnswers(QUESTIONS,answers,FIGURES);
  return {name:names[i],axisTargets:axisTargets.map(x=>x*25),answers,conclusive:result.conclusive,
   ranked:result.ranked.map(x=>({id:x.entity.id,rawScore:x.rawScore,score:x.score,coverage:x.coverage,confidence:x.confidence,bounds:x.bounds})),unknown:result.unknown.map(x=>x.entity.id)};
 })};
const csvCell=value=>'"'+String(value??'').replaceAll('"','""')+'"';
const csv=[['tipo','id','persona_o_partido','periodo','pregunta','eje','enunciado','concepto','peso_extrema','estado','posicion_0_a_4','confianza','puntos_respuesta_0','puntos_respuesta_1','puntos_respuesta_2','puntos_respuesta_3','puntos_respuesta_4','registros_justificacion_en_datos_json','fuentes','fechas_documento_o_accion','localizadores','observacion_auditoria']];
for(const e of entities)for(const q of QUESTIONS){const p=e.positions[evidenceQuestionId(q)],records=p.evidenceIds.map(id=>POLITICAL_EVIDENCE.find(r=>r.id===id)),sources=[...new Set(records.map(r=>r.source))].map(id=>POLITICAL_SOURCES[id]);
 csv.push([e.type,e.id,e.name,e.research.period,q.id,AXES[q.axis].name,q.text,QUESTION_AUDIT[evidenceQuestionId(q)].concept,weights.get(q.id),p.status,p.position,p.confidence,
  ...labels.map((_,a)=>compatibilityPoints(a,p.position)),p.evidenceIds.join(' | '),sources.map(s=>s.url).join(' | '),sources.map(s=>s.date).join(' | '),records.map(r=>r.locator).join(' | '),QUESTION_AUDIT[evidenceQuestionId(q)].warning]);
}
const lines=['# Auditoría de puntuación política — UruguayCompass','',`Revisión ${EVIDENCE_REVISION}. Base anterior: \`${data.baseline}\`. Reproducible con \`npm run audit\`.`,
 '', '## Alcance y resultado honesto','',
 `Se conservaron las 31 personas y las 240 preguntas. Se revisaron entrevistas individuales, documentos de precandidaturas, normas y seis programas oficiales. La matriz contiene ${entities.length*QUESTIONS.length} filas: cada persona/programa frente a cada pregunta y los puntos de sus cinco respuestas.`,
 '',`**La reconstrucción técnica está implementada; la investigación no constituye una reconstrucción exhaustiva de las 31 trayectorias.** Hay ${FIGURES.reduce((n,e)=>n+known(e),0)} posiciones individuales codificadas de ${31*240} posibles. ${FIGURES.filter(e=>known(e)===0).length} personas permanecen sin puntaje individual suficiente en toda la batería. No son neutrales ni se eliminaron. Un vacío no se cubre con su partido, una etiqueta izquierda/derecha ni un programa compartido.`,
 '', 'Las posiciones admitidas son interpretaciones editoriales del enunciado específico. Una fuente puede acreditar el acto o declaración, pero no publica el entero asignado. Se necesita revisión humana independiente de la codificación y contrastación adicional; no se proclama máxima precisión alcanzada, validez psicométrica ni ausencia de sesgo empírico.',
 '', '## Hallazgos y cambios respecto a la base','',
 'El informe inicial está en `docs/AUDITORIA-INICIAL.md` y la tabla previa en `docs/AUDITORIA-BASELINE.json`. Se retiraron siete capas de perfiles numéricos que heredaban posiciones de partidos y fórmulas. Antes se restaba una distancia entre cinco promedios de eje; siete ejes no cambiaban la afinidad. La evidencia educativa se extrapolaba a salud y cuidados. Un promedio idéntico podía ocultar respuestas opuestas. Faltaban cobertura por afirmación y confianza.',
 '', 'Ahora cada compatibilidad personal exige persona, pregunta, postura, fuente fechada, localizador, fundamento y confianza. Los programas pertenecen exclusivamente al resultado de partidos. Promulgar/refrendar una norma se distingue de declaración y de autoría exclusiva. El período se muestra; no se presupone vigencia en 2026. No se usa una postura de 2025 para reconstruir automáticamente una administración de 1998. En fuentes normativas, la fecha registrada identifica la promulgación; puede diferir de su publicación en el Diario Oficial.',
 '', 'Se descartaron extrapolaciones no justificadas: expansión de liceos públicos ≠ prioridad de toda provisión pública; legalización de cannabis ≠ rechazo de cualquier restricción; competencia de combustibles ≠ venta de ANCAP; oposición a un proyecto concreto de eutanasia ≠ rechazo de cualquier régimen posible. El caso de Larrañaga identifica 2012 como fecha original de la entrevista republicada en 2021.',
 '', '## Fórmula y escala','',
 'Respuesta y posición codificada toman valores 0 a 4. Puntos = (respuesta − 2) × (posición − 2), de −4 a +4. Desconocido = null: no suma, no resta, no se reemplaza por neutral. Una neutralidad documentada o una respuesta neutral aporta cero. La intensidad moderada genera evidencia moderada: coincidir en «de acuerdo» no representa una coincidencia extrema de +4. La dirección del eje solo se usa para los gráficos de polos, no se aplica dos veces a la compatibilidad.',
 '', '| Respuesta \\ postura | 0 | 1 | 2 | 3 | 4 |','|---|---:|---:|---:|---:|---:|',
 ...labels.map((label,a)=>`| ${label} | ${labels.map((_,p)=>compatibilityPoints(a,p)).join(' | ')} |`),
 '', '| Puntos | Interpretación |','|---:|---|',...[4,2,1,0,-1,-4].map(p=>`| ${p} | ${compatibilityLabel(p)} |`),
 '', 'Cada eje tiene 1/12 del peso previsto. Cada concepto pesa igual dentro de su eje y sus variantes se reparten ese peso. Las repeticiones exactas de un ID se ignoran. Una variante desconocida conserva su fracción desconocida; un grupo con una sola fuente no se presenta como evidencia sobre todas sus variantes. Los conceptos son categorías editoriales, no factores estadísticos demostrados.',
 '', 'Índice observado = 50 + 12,5 × suma(peso × puntos conocidos) / cobertura. Cobertura = suma de pesos conocidos. El índice está normalizado en la misma escala, pero **porcentajes con distinta cobertura no establecen el mismo conocimiento ni permiten afirmar por sí solos quién es más cercano globalmente**. Si faltan once ejes, el único observado puede dominar la media condicional: el peso previsto, cobertura, límites y aviso provisional impiden presentarlo como certeza general. No existe una solución sin supuestos que convierta ausencias desiguales en una comparación completa y a la vez no impute/penalice esos vacíos.',
 '', 'Los límites sustituyen los puntos desconocidos por sus extremos posibles, restringidos por la respuesta conocida: una respuesta neutral limita a cero y una moderada a ±2. Son límites de identificación, no intervalos estadísticos ni márgenes de error probabilísticos. Solo se declara resultado único si el límite inferior del primero supera los superiores de todos los demás y hay señal no neutral. El orden usa precisión completa y los empates se explican; el alfabeto decide la foto, nunca una puntuación mayor. La confianza global es baja si cobertura <50%, menos de tres ejes o alguna evidencia baja. Este umbral es editorial y no altera los puntos.',
 '', '## Preguntas modificadas y guardados','',
 '`a5q3v3` se limita al aborto legal dentro de plazos y garantías, en lugar de mezclar decisiones reproductivas. `a5q19v3` pregunta por eutanasia voluntaria con requisitos, antes insuficientemente distinguida. Sus IDs antiguos no se reutilizan. No se eliminó ninguna persona ni se cambió la cantidad de preguntas. Los tests de esquemas 1/2 se respaldan antes de escribir el esquema 3, conservando respuestas de enunciados sin cambios. Si falla el archivo, no se sobrescribe el original. Un archivo previo diferente también se conserva. Las preguntas nuevas/reformuladas deben completarse antes de resultados.',
 '', '## Investigación individual y pendientes','',
 'El partido identifica el contexto de la ficha, no es prueba de ninguna respuesta. El sector no está verificado de forma independiente para todas las personas. Tampoco se completaron las evoluciones ideológicas ni todos los registros nominales parlamentarios. Los apartados siguientes permiten ver exactamente qué se codificó; el resto de las 240 celdas de cada persona queda desconocido.',
 ];
for(const e of FIGURES){const positions=Object.entries(e.positions).filter(([,p])=>p.status==='documented');lines.push('',`### ${e.name}`,``, `Partido de contexto: ${e.partyName}. Período documental: **${e.research.period}**. ${positions.length}/240 afirmaciones documentadas.`, '', e.research.note,'',
 'Posturas admitidas (el código responde al enunciado, no a su polo):',
 ...positions.map(([id,p])=>`- ${id}: ${p.position} — ${answerCoding[p.position]}; confianza ${p.confidence}; justificación ${p.evidenceIds.join(', ')} en datos.json.`),
 ...(positions.length?[]:['- Ninguna posición individual suficientemente codificable. No implica neutralidad.']),
 '', 'Fuentes revisadas:',...e.sources.map(s=>`- [${s.title}](${s.url}) — ${s.date}; tipo ${s.kind}.`),
 '',`Sin posición admitida en ningún enunciado de estos temas: ${pendingTopics.filter((_,i)=>!e.evidence.some(x=>x.axis===i)).join('; ')||'Hay algún dato en cada eje; persisten vacíos por pregunta'}. Los temas con evidencia también conservan preguntas desconocidas.`,
 'Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.');}
lines.push('', '## Revisión de las 240 afirmaciones','', '0/1 representan oposición fuerte/calificada; 2 neutralidad; 3/4 apoyo calificado/fuerte al enunciado. La dimensión y dirección indican cómo se proyectan sobre los polos. La matriz contiene los cinco puntos para todas las personas; datos.json enlaza cada celda conocida con su justificación y fuentes.','');
for(const q of QUESTIONS){const a=QUESTION_AUDIT[evidenceQuestionId(q)],g=groups.find(g=>g.questions.some(x=>x.id===q.id)),n=FIGURES.filter(e=>e.positions[evidenceQuestionId(q)].status==='documented').length;lines.push(`### ${q.id} · ${AXES[q.axis].name}`,``,q.text,'',`Concepto: ${a.concept}. Apoyo al enunciado apunta a ${q.direction===1?AXES[q.axis].right:AXES[q.axis].left}. Peso previsto en Extrema: ${(100*weights.get(q.id)).toFixed(4)}%. ${n}/31 personas con evidencia admitida.`,
 `Grupo (no evidencia independiente por repetición): ${g.questions.map(x=>x.id).join(', ')}.`,a.warning,'');}
lines.push('## Validación y límites restantes','',
 'Las pruebas automatizadas cubren los 25 pares posibles de respuesta/postura; simetría y signo opuesto; extremos, moderación y neutralidad; desconocidos; orden de preguntas; empates antes del redondeo; igualdad de fórmulas entre partidos; diferenciación de integrantes de un mismo partido; duplicaciones; peso por eje/concepto; cobertura de variantes; conservación de respuestas y archivos; flujo completo de las tres versiones y exportación.',
 '', 'datos.json incluye cinco perfiles hipotéticos estilizados, sus respuestas, rankings, coberturas y límites reproducibles. Son ejemplos de entrada explícita, no definiciones universales de izquierda/centro/derecha ni pruebas de que una persona real deba ganar. Las pruebas de invariancia no demuestran ausencia de sesgo en la selección de preguntas, fuentes o codificación.',
 '', 'No se modificó el diseño, ni se certificó el parecido visual en escritorio/celular: el usuario realiza la comprobación estética. La lectura ideológica pedagógica, brújula y afinidad constitucional con países se mantienen como comparaciones independientes; no heredan el nuevo índice personal ni quedan validadas por él.',
 '', 'Investigación pendiente material: más preguntas documentadas para las 31 personas; contraste independiente de declaraciones; sectores y cambios de afiliación por fecha; actas de votaciones nominales; posiciones contradictorias; período representativo comparable; estudios con usuarios y validación externa de la rúbrica. No se rellenan esos vacíos para terminar con un ranking artificialmente completo.',
 '', 'Fuentes no recuperadas con suficiencia: acta parlamentaria d4422.pdf para eutanasia (fallo de acceso); algunas entrevistas solo en audio; documentos de propuestas personales de Raffo. No se afirma haber verificado su contenido íntegro ni se usa ese fallo como prueba de ausencia de postura. Memorias partidarias se conservan como autorreporte de contexto, no como corroboración independiente.');
const outputs={
 'datos.json':JSON.stringify(data,null,2)+'\n',
 'matriz.csv':'\uFEFF'+csv.map(row=>row.map(csvCell).join(',')).join('\r\n')+'\r\n',
 'informe.md':lines.join('\n')+'\n'
};
const check=process.argv.includes('--check');
if(!check)await mkdir(root,{recursive:true});
for(const [name,content] of Object.entries(outputs)){
 if(check){const existing=await readFile(new URL(name,root),'utf8');if(existing.replaceAll('\r\n','\n')!==content.replaceAll('\r\n','\n'))throw Error(`Auditoría desactualizada: ${name}. Ejecutá npm run audit.`)}
 else await writeFile(new URL(name,root),content);
}
console.log(`Auditoría ${check?'verificada':'generada'}: ${FIGURES.length} personas, ${QUESTIONS.length} preguntas, ${csv.length-1} filas, ${POLITICAL_EVIDENCE.length} registros. ${fileURLToPath(root)}`);
