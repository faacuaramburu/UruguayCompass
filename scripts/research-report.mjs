import {writeFile} from 'node:fs/promises';
import {FIGURES} from '../dist/politics.js';
import {AXES} from '../dist/context.js';
import {AXIS_RESEARCH_VERSION,extendPoliticalAxisResearch,axisResearchCoverage} from '../dist/political-axis-research.js';

const proposed=extendPoliticalAxisResearch(FIGURES),coverage=axisResearchCoverage(proposed);
const previous=FIGURES.reduce((n,f)=>n+f.profile.filter(Number.isFinite).length,0);
const clean=value=>String(value??'').replaceAll('|','/').replaceAll('\n',' ');
const names=ids=>ids.map(id=>proposed.find(f=>f.id===id).name).join(', ');
const link=(figure,ref)=>{const source=figure.sources[ref.source];return `[${clean(source.title)}${ref.page?' · PDF p. '+ref.page:''}](${source.url.split('#')[0]+(ref.page?'#page='+ref.page:'')})`};
const lines=[
 '# Ampliación de la investigación de los doce ejes',
 '',
 `Revisión: ${AXIS_RESEARCH_VERSION}. **Propuesta de investigación en curso; todavía no integrada al resultado público.**`,
 '',
 `La base tiene ${FIGURES.length} personas y ${coverage.total} posiciones posibles. La versión publicada tiene ${previous} ubicaciones numéricas. Esta propuesta llega a ${coverage.placed}, con ${coverage.placed-previous} ubicaciones adicionales y ${coverage.complete.length} perfiles completos. Restan ${coverage.total-coverage.placed} ubicaciones en ${coverage.missing.length} personas.`,
 '',
 '## Método y estado de la fórmula',
 '',
 'Los valores son coordenadas editoriales entre 0 y 100, no porcentajes medidos ni respuestas históricas comprobadas al cuestionario actual. Se mantiene el sentido de cada polo y cada coordenada numérica que ya existía. Las nuevas ubicaciones proceden de un programa explícitamente representado por la candidatura, una actuación individual o una reconstrucción histórica identificada. La pertenencia a un partido, la profesión, la fe personal y la nacionalidad de una familia no completan ejes.',
 '',
 'Se usa una escala orientativa: 0 o 100 para un extremo; alrededor de 25 o 75 para predominio claro de un polo; alrededor de 40 o 60 para una inclinación mixta. El 50 requiere objetivos contrapuestos documentados, como conservación y desarrollo forestal en la misma norma. Nunca reemplaza información desconocida. La selección exacta de puntos sigue necesitando revisión editorial: más casillas llenas no demuestran por sí solas mayor precisión empírica.',
 '',
 'La confianza de una ubicación se distingue de la confianza en el hecho citado. Media indica una lectura editorial con dirección respaldada; baja indica alcance parcial, fuente retrospectiva o comparabilidad histórica limitada. No son intervalos de confianza estadísticos. Un documento programático compartido se identifica como tal y no se convierte en una declaración personal. Una medida de gobierno no demuestra autoría exclusiva de un presidente.',
 '',
 'El nuevo cálculo de afinidad sobre doce ejes está preparado y probado en `rankTwelveAxisProfiles`. Usa el mismo denominador para todas las personas: 100 menos la distancia absoluta media en los doce ejes. Ordena por distancia antes del redondeo y conserva empates exactos. Rechaza posiciones faltantes, inválidas o sin fuente; no reduce silenciosamente el número de ejes ni rellena huecos. **No está conectado a la aplicación mientras la investigación de los 53 perfiles siga incompleta.** El ranking publicado de cinco temas continúa intacto.',
 '',
 '## Matriz completa de cobertura',
 '',
 'Los números son coordenadas desde el polo izquierdo al derecho. «—» señala una ubicación que esta investigación todavía no justifica. No se trata como neutralidad.',
 '',
 '| Persona | '+AXES.map(a=>clean(a.name)).join(' | ')+' | Cobertura |',
 '| --- | '+AXES.map(()=>'---:').join(' | ')+' | ---: |',
 ...proposed.map(f=>'| '+clean(f.name)+' | '+f.profile.map(v=>v===null?'—':v).join(' | ')+` | ${f.axisCoverage}/12 |`),
 '',
 '## Perfiles completos en esta propuesta',
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
lines.push('## Pendientes por persona','',...coverage.missing.map(f=>`- **${f.name}:** ${f.axes.map(axis=>AXES[axis].name).join(', ')}.`),'',
 '## Casos que necesitan una decisión de interpretación','',
 'Los pendientes anteriores incluyen tanto búsqueda por completar como límites de comparabilidad. No equivalen a un número de posturas imposibles de investigar. Para discutirlos conviene agrupar criterios antes de elegir coordenadas individuales:',
 '',
 '- **Temas sin antecedente específico:** la proclama de Saravia permite reconstruir críticas tributarias y defensa de libertades, pero no una posición ambiental. Ubicarlo en Ambiente solamente por su actividad rural convertiría una hipótesis general en una aparente evidencia temática.',
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
console.log(`Investigación propuesta: ${coverage.placed}/${coverage.total}; ${coverage.complete.length}/${proposed.length} perfiles completos; ${coverage.total-coverage.placed} posiciones pendientes. No integrada al ranking público.`);
