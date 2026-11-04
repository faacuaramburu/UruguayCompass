import {AXES} from './context.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const confidence={alta:'Alta',media:'Media',baja:'Baja'};
export function researchStatus(item){return item.kind==='unknown'?'Sin determinar':`${item.kind==='interpreted'?'Interpretación histórica':'Posición documentada'} · confianza ${confidence[item.confidence]}`}
export function researchSources(entity,item){return item.refs.map(ref=>{const s=entity.sources[ref.source];return `<a href="${esc(ref.page?s.url.split('#')[0]+'#page='+ref.page:s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)}${ref.page?' · página del PDF '+ref.page:''}</a>`}).join('<br>')}
export function renderDocumentaryProfile(entity){
 return `<section class="figure-research" aria-label="Investigación por eje"><h2>Posiciones documentadas</h2><p><strong>Período estudiado:</strong> ${esc(entity.period)}</p><p>La confianza se refiere al hecho o la declaración indicada, no a un puntaje ni a toda la trayectoria. Las comparaciones históricas son aproximadas. «Sin determinar» significa que estas fuentes no permiten establecer una posición; no significa neutralidad.</p>${entity.axisResearch.map((item,i)=>`<details class="research-axis" data-axis="${i}"><summary>${esc(AXES[i].name)} <span>${esc(researchStatus(item))}</span></summary><p class="small">${esc(AXES[i].left)} ↔ ${esc(AXES[i].right)}</p><h3>${esc(item.position)}</h3><p>${esc(item.basis)}</p>${item.refs.length?`<p>${researchSources(entity,item)}</p>`:''}</details>`).join('')}</section>`;
}
export function renderQualitativePosition(entity,axis){
 const item=entity.axisResearch?.[axis];if(!item)return '';
 return `<p class="compare-qualitative"><strong>${esc(item.position)}</strong><span>${esc(researchStatus(item))}</span></p>`;
}
