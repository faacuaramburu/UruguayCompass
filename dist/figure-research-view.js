import {AXES} from './context.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const confidence={alta:'alta',media:'media',baja:'baja','muy-baja':'muy baja'};
export function researchStatus(item){return item.kind==='unknown'?'Sin determinar':item.kind==='hypothesis'?'Hipótesis · confianza muy baja':`${item.kind==='interpreted'?'Lectura editorial con fuente temática':'Posición documentada'} · ${confidence[item.confidence]?'confianza '+confidence[item.confidence]:'confianza sin evaluar'}`}
export function researchSources(entity,item){return item.refs.map(ref=>{const s=entity.sources[ref.source];return `<a href="${esc(ref.page?s.url.split('#')[0]+'#page='+ref.page:s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)}${ref.page?' · página del PDF '+ref.page:''}</a>`}).join('<br>')}
export function renderDocumentaryProfile(entity){
 return `<section class="figure-research" aria-label="Investigación por eje"><h2>Fundamentos por eje</h2><p><strong>Período de referencia inicial:</strong> ${esc(entity.period)}</p><p>Las coordenadas son editoriales. Una hipótesis asistida por IA no es una postura expresada: las referencias aportan contexto para la analogía. Cada eje identifica su fecha y confianza; las fuentes no prueban qué respondería esa persona hoy.</p>${entity.axisResearch.map((item,i)=>`<details class="research-axis" data-axis="${i}" data-research-kind="${esc(item.kind)}"><summary>${esc(AXES[i].name)} <span>${esc(researchStatus(item))}</span></summary><p class="small">${esc(AXES[i].left)} ↔ ${esc(AXES[i].right)}</p><h3>${esc(item.position)}</h3>${item.period?`<p class="small">${esc(item.period)}</p>`:''}<p>${esc(item.basis)}</p>${item.refs.length?`<p><strong>${item.kind==='hypothesis'?'Contexto de la inferencia; no demuestra esta postura:':'Fuentes temáticas:'}</strong><br>${researchSources(entity,item)}</p>`:''}</details>`).join('')}</section>`;
}
export function renderQualitativePosition(entity,axis){
 const item=entity.axisResearch?.[axis];if(!item)return '';
 return `<p class="compare-qualitative"><strong>${esc(item.position)}</strong><span>${esc(researchStatus(item))}</span></p>`;
}
