import {AXES} from './context.js';
import {entityMedia,mediaCredit} from './entity-media.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const known=value=>Number.isFinite(value)&&value>=0&&value<=100;
export function comparisonEntities(figures,parties){return [...figures.map(entity=>({id:'persona/'+entity.id,entity,party:false})),...parties.map(entity=>({id:'partido/'+entity.id,entity,party:true}))]}
export function compareEntities(first,second){
 const rows=AXES.map((axis,i)=>({axis,first:first.profile[i],second:second.profile[i],gap:known(first.profile[i])&&known(second.profile[i])?Math.abs(first.profile[i]-second.profile[i]):null}));
 const gaps=rows.map(x=>x.gap).filter(x=>x!==null),min=gaps.length?Math.min(...gaps):null,max=gaps.length?Math.max(...gaps):null;
 return rows.map(row=>({...row,similar:row.gap!==null&&row.gap===min,different:row.gap!==null&&max>min&&row.gap===max}));
}
function position(axis,value){
 if(!known(value))return 'Sin posición documentada';
 if(value===50)return '50% · Equilibrado';
 return `${Math.max(value,100-value)}% ${axis[value<50?'left':'right']}${Math.abs(value-50)<10?' · Equilibrado':''}`;
}
function bar(axis,value,name,index){return `<div class="compare-position compare-position--${index}"><div><span>${esc(name)}</span><strong>${esc(position(axis,value))}</strong></div>${known(value)?`<div class="compare-track" role="img" aria-label="${esc(name)}: ${esc(position(axis,value))}. Posición ${value} entre ${esc(axis.left)} (0) y ${esc(axis.right)} (100)."><i style="left:${Math.min(50,value)}%;width:${Math.abs(value-50)}%"></i><b style="left:${value}%"></b></div>`:'<div class="compare-no-data">—</div>'}</div>`}
export function renderComparator(choices,firstId,secondId){
 const first=choices.find(x=>x.id===firstId)||choices[0],second=choices.find(x=>x.id===secondId)||choices.find(x=>x.id!==first.id)||first;
 const options=selected=>['Personajes','Partidos'].map((label,index)=>`<optgroup label="${label}">${choices.filter(x=>x.party===!!index).map(x=>`<option value="${esc(x.id)}" ${x.id===selected?'selected':''}>${esc(x.entity.name)}</option>`).join('')}</optgroup>`).join('');
 const selection=(item,index)=>`<section class="compare-entity"><label for="compare-${index}">${index==='first'?'Primera referencia':'Segunda referencia'}</label><select id="compare-${index}">${options(item.id)}</select><div class="compare-identity">${entityMedia(item.entity,{party:item.party})}<div><h2>${esc(item.entity.name)}</h2><p>${esc(item.entity.partyName||'Partido político')}</p><p>${esc(item.entity.comparisonLabel||item.entity.period)}</p></div></div><p class="media-credit">${mediaCredit(item.entity,{party:item.party})}</p></section>`;
 const rows=compareEntities(first.entity,second.entity);
 return `<p class="lead">Compará dos personajes, dos partidos o uno de cada tipo. No necesitás completar el test.</p><div class="comparator-selections">${selection(first,'first')}${selection(second,'second')}</div><p class="small">Las posiciones son las estimaciones editoriales existentes, con sus períodos y fuentes. No representan toda una trayectoria ni una afinidad nueva. Los ejes sin datos quedan sin puntaje.</p>${first.id===second.id?'<p class="notice" role="status">Estás comparando la misma referencia. Sus posiciones coinciden.</p>':''}<div class="comparator-axes">${rows.map(row=>`<article class="compare-axis"><div class="compare-axis-heading"><h3>${esc(row.axis.name)}</h3>${row.similar?'<span class="compare-tag">Mayor similitud</span>':row.different?'<span class="compare-tag compare-tag--difference">Mayor diferencia</span>':''}</div><div class="compare-poles"><span>${esc(row.axis.left)}</span><span>${esc(row.axis.right)}</span></div>${bar(row.axis,row.first,first.entity.name,1)}${bar(row.axis,row.second,second.entity.name,2)}<p class="compare-gap">${row.gap===null?'Sin datos comunes para comparar este eje.':row.gap===0?'Misma posición en este eje.':`Diferencia: ${row.gap} puntos en la escala.`}</p><details><summary>Fundamentos y fuentes</summary>${[first,second].map(item=>{const e=item.entity,evidence=e.evidence?.filter(x=>x.axis===row.axis.id)||[];return `<h4>${esc(e.name)}</h4><p>${esc(e.rationale[row.axis.id])}</p>${evidence.map(ev=>{const s=e.sources[ev.source];return s?`<p><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)}${ev.page?' · p. '+esc(ev.page):''}</a></p>`:''}).join('')}`}).join('')}</details></article>`).join('')}</div>`;
}
