import {writeFile} from 'node:fs/promises';
import {FIGURES,PARTIES,DOCUMENTED_FIGURES} from '../dist/politics.js';
import {AXES} from '../dist/context.js';
import {AXIS_RESEARCH_VERSION,extendPoliticalAxisResearch,axisResearchCoverage} from '../dist/political-axis-research.js';

const proposed=extendPoliticalAxisResearch(DOCUMENTED_FIGURES),coverage=axisResearchCoverage(proposed);
const previous=DOCUMENTED_FIGURES.reduce((n,f)=>n+f.profile.filter(Number.isFinite).length,0);
const clean=value=>String(value??'').replaceAll('|','/').replaceAll('\n',' ');
const names=ids=>ids.map(id=>proposed.find(f=>f.id===id).name).join(', ');
const link=(figure,ref)=>{const source=figure.sources[ref.source];return `[${clean(source.title)}${ref.page?' · PDF p. '+ref.page:''}](${source.url.split('#')[0]+(ref.page?'#page='+ref.page:'')})`};
const lines=[
 '# Ampliación de la investigación de los doce ejes',
 '',
 `Revisión: ${AXIS_RESEARCH_VERSION}. **Modelo de doce ejes: fuentes temáticas e hipótesis de confianza muy baja, identificadas por separado.**`,
 '',
 `La base tiene ${FIGURES.length} personas y ${coverage.total} posiciones posibles. La base documental inicial conserva ${previous} ubicaciones. La búsqueda y calibración llegan a ${coverage.placed}, con ${coverage.placed-previous} adiciones y ${coverage.complete.length} personas con fuente temática en los doce ejes. Las ${coverage.total-coverage.placed} ubicaciones restantes se completan con hipótesis individualizadas de confianza muy baja, no con evidencia de opiniones expresadas. El modelo tiene 636 coordenadas para las 53 personas y 72 para los seis partidos.`,
 '',
 '## Método y estado de la fórmula',
 '',
 'Los valores son coordenadas editoriales entre 0 y 100, no porcentajes medidos ni respuestas históricas comprobadas al cuestionario actual. Se mantiene el sentido de cada polo y cada coordenada numérica que ya existía. Las nuevas ubicaciones proceden de un programa explícitamente representado por la candidatura, una actuación individual o una reconstrucción histórica identificada. La pertenencia a un partido, la profesión, la fe personal y la nacionalidad de una familia no se usan como evidencia temática. Para los vacíos se aceptaron después deducciones asistidas por IA desde el pensamiento y la trayectoria, con incertidumbre explícita. No se simula una consulta a otro modelo ni se presenta a ChatGPT como fuente histórica.',
 '',
 'Se usa una escala orientativa: 0 o 100 para un extremo; alrededor de 25 o 75 para predominio claro de un polo; alrededor de 40 o 60 para una inclinación mixta. El 50 requiere objetivos contrapuestos documentados, como conservación y desarrollo forestal en la misma norma. La capa documental conserva los desconocidos. En la capa de hipótesis un 50 exige un escenario mixto explícito; nunca se rellena automáticamente un vacío con 50. La selección exacta de puntos sigue necesitando revisión editorial: más casillas llenas no demuestran por sí solas mayor precisión empírica.',
 '',
 'La confianza de una ubicación se distingue de la confianza en el hecho citado. Media indica una lectura editorial con dirección respaldada; baja indica alcance parcial, fuente retrospectiva o comparabilidad histórica limitada. Muy baja identifica una hipótesis contrafáctica, no una postura comprobada. No son probabilidades ni intervalos de confianza estadísticos. Un documento programático compartido se identifica como tal y no se convierte en una declaración personal. Una medida de gobierno no demuestra autoría exclusiva de un presidente.',
 '',
 'La afinidad de personas y partidos compara los doce ejes con igual peso: **100 menos la suma de las doce diferencias absolutas dividida entre 12**. Ordena por distancia antes del redondeo y conserva empates exactos. Rechaza perfiles incompletos, inválidos, o hipótesis sin etiqueta, razonamiento y contexto. Una hipótesis no se añade a la evidencia temática. Las respuestas guardadas, preguntas, cinco modelos pedagógicos y comparación constitucional de países no cambian. Las medianas de Lo que te distingue excluyen hipótesis. Los supuestos pueden cambiar el ranking; completar casillas no demuestra mayor precisión empírica.',
 '',
 '## Matriz completa de cobertura',
 '',
 'Los números son coordenadas desde el polo izquierdo al derecho. **H** marca una hipótesis asistida por IA de confianza muy baja. Una coordenada sin H sigue siendo una lectura editorial de evidencia temática, no un porcentaje medido.',
 '',
 '| Persona | '+AXES.map(a=>clean(a.name)).join(' | ')+' | Hipótesis |',
 '| --- | '+AXES.map(()=>'---:').join(' | ')+' | ---: |',
 ...FIGURES.map(f=>'| '+clean(f.name)+' | '+f.profile.map((v,i)=>v+(f.placementResearch[i]?.kind==='hypothesis'?' H':'')).join(' | ')+` | ${f.hypothesisCount}/12 |`),
 '',
 '## Perfiles con fuente temática en los doce ejes, sin hipótesis contrafácticas',
 '',
 names(coverage.complete)+'.',
 '',
 '## Nuevas ubicaciones y fundamentos',
 '',
 'Las coordenadas que ya estaban en la aplicación se conservan y no se vuelven a justificar aquí. Las siguientes son las adiciones de esta revisión. Los fundamentos compartidos se presentan una sola vez, identificando las personas a las que se aplican.',
 ''
];
const groups=new Map();
for(const figure of proposed)for(const [axis,placement] of figure.placementResearch.entries())if(placement){
 const refs=placement.refs.map(ref=>link(figure,ref));
 const key=JSON.stringify({axis,...placement,refs});
 if(!groups.has(key))groups.set(key,{axis,placement,refs,people:[]});
 groups.get(key).people.push(figure.name);
}
for(const {axis,placement:p,refs,people} of groups.values())lines.push(`### ${AXES[axis].name}: ${people.join(', ')}`,'',`- Coordenada editorial: **${p.value}/100**, confianza **${p.confidence}**.`,`- Período y base: ${p.period} / ${p.basis}.`,`- Fundamento: ${p.note}`,`- Fuentes: ${refs.join('; ')}.`, '');
lines.push('## Hipótesis asistidas por IA: razonamiento y contexto','', 'Estas hipótesis son escenarios editoriales muy inciertos, no posiciones acreditadas ni predicciones comprobadas. Cada referencia es contexto de una analogía sobre otros aspectos de la misma persona. No se incorpora como evidencia temática.', '');
for(const f of [...FIGURES,...PARTIES].filter(e=>e.hypothesisCount)){
 lines.push(`### ${f.name}`, '', `Contexto inicial: ${f.period}. **${f.hypothesisCount} hipótesis de confianza muy baja.**`, '');
 for(const [axis,p] of f.placementResearch.entries())if(p?.kind==='hypothesis')lines.push(`- **${AXES[axis].name}: ${p.value}/100 H.** ${p.note}`,`  - Contexto, **no prueba de esta postura**: ${p.refs.map(ref=>link(f,ref)).join('; ')}.`);
 lines.push('');
}
lines.push('## Hipótesis pendientes de evidencia temática por persona','',...coverage.missing.map(f=>`- **${f.name}:** ${f.axes.map(axis=>AXES[axis].name).join(', ')}.`),'',
 '## Criterios de interpretación y límites','',
 'Los temas anteriores tienen coordenadas numéricas de hipótesis, pero siguen pendientes de evidencia temática. Se aplican estos límites:',
 '',
 '- **Temas sin antecedente específico:** la ubicación ambiental de Saravia es una hipótesis desde sus prioridades económicas, no una deducción acreditada por su oficio rural. Las referencias aportan contexto a la analogía y no prueban esa postura.',
 '- **Cambios a lo largo del tiempo:** no es equivalente un programa electoral, una medida del primer gobierno y una declaración décadas después. Cada adición conserva su fecha; un perfil compuesto no debe presentarse como una fotografía simultánea de todas sus posiciones.',
 '- **Declaraciones antiguas de personas actuales:** la propuesta de educación religiosa de Mieres citada en 2001 está fechada y tiene confianza baja; no se afirma que siga integrando su plataforma actual.',
 '- **Símbolos y separación religiosa:** admitir un monumento religioso en un espacio público no prueba apoyo a una religión oficial. Las lecturas de Raffo, Sanguinetti y Jorge Batlle identifican ese alcance; la fe personal no determina el punto.',
 '- **Programas compartidos y empates:** las posiciones de una fórmula proceden del documento común. No se inventan diferencias personales para forzar un ganador único; las distancias reales se ordenan antes del redondeo.',
 '',
 '## Acceso a fuentes y precauciones de esta revisión','',
 '- Se descargaron y extrajeron programas completos y documentos históricos para localizar pasajes por página física del PDF. Se leyeron los pasajes pertinentes; no se afirma haber leído íntegramente todas las obras extensas. Las fuentes históricas de la calibración cualitativa reutilizan la investigación identificada en `REFERENTES-22.md`.',
 '- El artículo de Langón Cuñarro sobre la pena de muerte devolvió 403 al intentar abrir el PDF completo. Se localizó y leyó una corroboración en la página física 6 de la reproducción histórica El Día, 1886–1981, conservada en Anáforas; esa es la fuente finalmente citada para el proyecto de Batlle de 1905.',
 '- La edición de Ahora del 26/07/1973 se descargó y se leyó la reproducción de la proclama de Saravia en la página 5. Se distingue el manifiesto del comité revolucionario de la proclama atribuida a Saravia en la misma página.',
 '- La tesis de Fernando Raúl Klein (UNLP, 2017) se consultó en los pasajes de las páginas físicas 356–361 sobre restricciones migratorias y propuestas de Frugoni. La página física 360 corresponde a la página impresa 358.',
 '- Se descartaron resultados de homónimos: el periodista mexicano Álvaro Delgado, el rescatista de Arizona Óscar Andrade y el comunicador chileno César Vega Martínez no son los políticos uruguayos de este catálogo.',
 '- Los PDF de propuestas alojados en lauraraffo.uy presentaron un error de certificado. No se desactivó la validación TLS ni se considera consultado ese contenido en esta revisión. Una copia enlazada por En Perspectiva en hagamoshistoria.uy tampoco se pudo recuperar por un error de resolución del dominio. Varias copias de Colibrí devolvieron 403 y un documento colorado de 2017 devolvió 404. Las búsquedas y los documentos efectivamente disponibles se distinguen de esos intentos.',
 '- Las fuentes sobre conservación de fauna bajo Terra y sobre recursos forestales bajo Pacheco se consultaron en su texto original de IMPO, evitando proyectar modificaciones legales posteriores sobre esas administraciones.',
 '',
 '## Reproducción técnica','',
 '`npm run research:report` regenera esta matriz desde la base publicada y la propuesta de investigación. `npm test` comprueba conservación de coordenadas, trazabilidad, desconocidos, denominadores iguales, orden antes de redondear y rechazo de un ranking incompleto. Las pruebas técnicas no sustituyen una revisión histórica o política de la calibración.'
);
await writeFile(new URL('../docs/AUDITORIA-12-EJES.md',import.meta.url),lines.join('\n')+'\n','utf8');
console.log(`Personas: 636/636; ${coverage.placed} lecturas con fuente temática y ${coverage.total-coverage.placed} hipótesis muy inciertas. Partidos: 72/72. Afinidad en doce ejes.`);
