import {compassCoordinates} from './compass.js';
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const normalize=value=>String(value).normalize('NFD').replace(/\p{Diacritic}/gu,'').toLocaleLowerCase('es');
export function hasMapEvidence(figure){
 return [0,3].every(axis=>Number.isFinite(figure.profile[axis])&&figure.profile[axis]>=0&&figure.profile[axis]<=100&&figure.evidence.some(e=>e.axis===axis&&figure.sources[e.source]?.url?.startsWith('https://')));
}
export function spectrumGroups(figures){
 const groups=new Map();
 for(const figure of figures.filter(hasMapEvidence)){
  const key=`${figure.profile[0]}:${figure.profile[3]}`;
  if(!groups.has(key))groups.set(key,{key,economy:figure.profile[0],security:figure.profile[3],figures:[]});
  groups.get(key).figures.push(figure);
 }
 return [...groups.values()].sort((a,b)=>a.economy-b.economy||a.security-b.security).map((g,i)=>({...g,number:i+1,figures:g.figures.sort((a,b)=>a.name.localeCompare(b.name,'es'))}));
}
const plotPosition=(economy,security)=>{
 const p=compassCoordinates(economy,security);
 return {x:100+(p.x-60)*560/260,y:65+(p.y-55)*460/260};
};
export function placeSpectrumLabels(groups,profile){
 const user=plotPosition(profile[0],profile[3]),placed=[];
 return groups.map(group=>{
  const point=plotPosition(group.economy,group.security),candidates=[];
  for(const radius of [34,60,90,120,155])for(const [dx,dy] of [[1,-1],[-1,1],[1,1],[-1,-1],[1,0],[-1,0],[0,-1],[0,1]]){
   const scale=dx&&dy?Math.SQRT1_2:1;
   candidates.push({x:Math.max(120,Math.min(640,point.x+dx*radius*scale)),y:Math.max(86,Math.min(504,point.y+dy*radius*scale))});
  }
  const clearance=p=>Math.min(Math.hypot(p.x-user.x,p.y-user.y),...placed.map(q=>Math.hypot(p.x-q.x,p.y-q.y)));
  const label=candidates.find(p=>clearance(p)>=52)||candidates.sort((a,b)=>clearance(b)-clearance(a))[0];
  placed.push(label);return {...group,point,label};
 });
}
const missingAxes=figure=>[!Number.isFinite(figure.profile[0])?'economía':null,!Number.isFinite(figure.profile[3])?'seguridad y libertades':null].filter(Boolean).join(' y ')||'evidencia comparable';
export function filteredSpectrum(figures,{query='',party='all'}={}){
 const needle=normalize(query.trim());
 return figures.filter(e=>(party==='all'||(e.party||'historic')===party)&&normalize(`${e.name} ${e.partyName}`).includes(needle)).sort((a,b)=>a.name.localeCompare(b.name,'es'));
}
export function renderSpectrumGraphic(profile,groups,selectedId){
 const user=plotPosition(profile[0],profile[3]);
 const grid=[.25,.75].map(t=>`<path class="spectrum-grid" d="M${100+560*t} 65V525 M100 ${65+460*t}H660"/>`).join('');
 const markers=placeSpectrumLabels(groups,profile).map(g=>{
  const p=g.point,label=g.label,selected=g.figures.some(f=>f.id===selectedId);
  const names=g.figures.map(f=>f.name).join(' · ');
  return `<g class="spectrum-marker${selected?' is-selected':''}" role="button" tabindex="0" data-spectrum-pick="${esc(g.figures[0].id)}" aria-pressed="${selected}" aria-label="${g.number}: ${esc(names)}. Economía ${g.economy}; seguridad ${g.security}."><title>${esc(names)} · ${g.economy} / ${g.security}</title><path class="spectrum-leader" d="M${p.x} ${p.y}L${label.x} ${label.y}"/><circle class="spectrum-dot" cx="${p.x}" cy="${p.y}" r="5"/><circle class="spectrum-hit" cx="${label.x}" cy="${label.y}" r="22"/><circle class="spectrum-pin" cx="${label.x}" cy="${label.y}" r="16"/><text class="spectrum-pin-number" x="${label.x}" y="${label.y+6}" text-anchor="middle">${g.number}</text>${selected?`<text class="spectrum-selected-label" x="${Math.max(220,Math.min(540,label.x))}" y="${Math.max(46,label.y-26)}" text-anchor="middle">${esc(names.length>45?names.slice(0,42)+'…':names)}</text>`:''}</g>`;
 }).join('');
 return `<svg class="spectrum-graphic" viewBox="0 0 760 610" role="group" aria-labelledby="spectrum-title spectrum-desc"><title id="spectrum-title">Tu posición y los referentes políticos</title><desc id="spectrum-desc">Economía: ${profile[0]} de 100, desde Mercado hacia Estado. Seguridad: ${profile[3]} de 100, desde Libertades hacia Control. Los números identifican referentes en la lista. El marcador Vos muestra tus respuestas. Hay ${groups.reduce((n,g)=>n+g.figures.length,0)} referentes ubicados.</desc>
 <text class="spectrum-edge" x="380" y="25" text-anchor="middle">Más control de seguridad</text><text class="spectrum-edge" x="380" y="580" text-anchor="middle">Más libertades individuales</text><text class="spectrum-edge" transform="translate(30 295) rotate(-90)" text-anchor="middle">Más Estado</text><text class="spectrum-edge" transform="translate(730 295) rotate(90)" text-anchor="middle">Más mercado</text>
 <rect class="compass-zone zone-state-control" x="100" y="65" width="280" height="230"/><rect class="compass-zone zone-market-control" x="380" y="65" width="280" height="230"/><rect class="compass-zone zone-state-liberty" x="100" y="295" width="280" height="230"/><rect class="compass-zone zone-market-liberty" x="380" y="295" width="280" height="230"/>
 ${grid}<path class="spectrum-axis" d="M380 65V525 M100 295H660"/><rect class="spectrum-border" x="100" y="65" width="560" height="460"/>
 <path class="spectrum-user-guide" d="M${user.x} ${user.y}H380 M${user.x} ${user.y}V295"/><circle class="spectrum-user-ring" cx="${user.x}" cy="${user.y}" r="19"/><circle class="spectrum-user-point" cx="${user.x}" cy="${user.y}" r="7"/>${markers}<text class="spectrum-user-label compass-point-label" x="${Math.max(140,Math.min(620,user.x))}" y="${Math.min(552,user.y+39)}" text-anchor="middle">Vos</text></svg>`;
}
function detail(figure,profile,group){
 if(!figure)return '<div class="spectrum-detail"><h3>No hay coincidencias con la búsqueda</h3><p>Probá otro nombre o elegí todos los partidos. Tu marcador sigue visible.</p></div>';
 const mapped=hasMapEvidence(figure);
 const evidence=[0,3].map(axis=>figure.evidence.find(v=>v.axis===axis)).filter(Boolean);
 return `<article class="spectrum-detail" aria-label="Referencia seleccionada"><h3>${esc(figure.name)}</h3><p class="spectrum-detail-meta">${esc(figure.partyName)} · ${esc(figure.mapBasis||figure.era)}</p>${mapped?`<dl class="spectrum-detail-values"><div><dt>Economía</dt><dd>${figure.profile[0]}<small>/100</small></dd></div><div><dt>Seguridad y libertades</dt><dd>${figure.profile[3]}<small>/100</small></dd></div></dl><p>Tu puntaje está a <strong>${Math.abs(profile[0]-figure.profile[0])} puntos</strong> en economía y a <strong>${Math.abs(profile[3]-figure.profile[3])} puntos</strong> en seguridad. La cercanía en este mapa usa solo estos dos temas.</p>${group?.figures.length>1?`<p class="small">Comparte coordenadas con ${group.figures.filter(f=>f.id!==figure.id).map(f=>esc(f.name)).join(', ')}. No se separan los puntos artificialmente.</p>`:''}`:`<p>Esta ficha todavía no tiene una ubicación comparable en ${esc(missingAxes(figure))}. Se muestra en el catálogo, sin colocar un punto inventado en el mapa.</p>`}<details ${mapped?'':'open'}><summary>Por qué está ubicado así y fuentes</summary>${evidence.map(e=>{const s=figure.sources[e.source];return `<p><strong>${e.axis===0?'Economía':'Seguridad y libertades'}:</strong> ${esc(e.note)}</p><a href="${esc(s.url)}${e.page?'#page='+e.page:''}" target="_blank" rel="noopener noreferrer">${esc(s.title)}${e.page?' · página '+e.page:''}</a>`}).join('')||'<p>No hay evidencia suficiente para esos ejes en esta edición. La ficha conserva las fuentes históricas disponibles.</p>'}</details><a class="spectrum-profile-link" href="#ficha/${esc(figure.id)}">Ver ficha completa y fuentes</a></article>`;
}
export function renderSpectrumView(profile,figures,options={}){
 const matching=filteredSpectrum(figures,options),ids=new Set(matching.map(e=>e.id));
 const groups=spectrumGroups(figures).map(g=>({...g,figures:g.figures.filter(f=>ids.has(f.id))})).filter(g=>g.figures.length);
 const selected=matching.find(e=>e.id===options.selectedId)||matching.find(hasMapEvidence)||matching[0];
 const selectedGroup=groups.find(g=>g.figures.some(e=>e.id===selected?.id));
 const mapped=matching.filter(hasMapEvidence),missing=matching.filter(e=>!hasMapEvidence(e));
 const list=entries=>entries.map(e=>{
  const group=groups.find(g=>g.figures.some(f=>f.id===e.id));
  return `<button type="button" class="spectrum-reference" data-spectrum-pick="${esc(e.id)}" aria-pressed="${e.id===selected?.id}"><span class="spectrum-reference-number" aria-label="${group?'Punto '+group.number:'Sin ubicación'}">${group?.number||'—'}</span><span><strong>${esc(e.name)}</strong><small>${esc(e.partyName)} · ${esc(e.mapBasis||e.era)}</small></span></button>`;
 }).join('');
 return `<p class="spectrum-count" role="status">${mapped.length} referentes en el mapa · ${missing.length} sin ubicación comparable · ${matching.length} de ${figures.length} fichas.</p><div class="spectrum-map-layout"><figure class="spectrum-figure">${renderSpectrumGraphic(profile,groups,selected?.id)}<figcaption>El punto azul sos vos. Cada número se une con una línea a la ubicación real del referente. Tocá un número o un nombre para ver su posición y sus fuentes.</figcaption></figure>${detail(selected,profile,selectedGroup)}</div><div class="spectrum-catalog"><div><h3>Referentes en el mapa</h3><div class="spectrum-reference-list">${list(mapped)||'<p>No hay referentes con ubicación para estos filtros.</p>'}</div></div>${missing.length?`<details class="spectrum-missing" open><summary>Fichas sin coordenadas comparables (${missing.length})</summary><p>Falta evidencia para uno o ambos ejes. No se reemplazan datos desconocidos por el punto medio.</p><div class="spectrum-reference-list">${list(missing)}</div></details>`:''}</div>`;
}
export function renderSpectrum(profile,figures,options={}){
 const parties=[...new Map(figures.map(e=>[e.party||'historic',e.partyName])).entries()].sort((a,b)=>a[1].localeCompare(b[1],'es'));
 return `<div class="spectrum-tools"><label>Buscar un político<input type="search" id="spectrum-search" placeholder="Nombre o partido" value="${esc(options.query||'')}" autocomplete="off"></label><label>Partido<select id="spectrum-party"><option value="all">Todos los partidos</option>${parties.map(([id,name])=>`<option value="${esc(id)}" ${options.party===id?'selected':''}>${esc(name)}</option>`).join('')}</select></label><button type="button" class="secondary" data-spectrum-reset>Ver todos</button></div><div id="spectrum-view">${renderSpectrumView(profile,figures,options)}</div>`;
}
