import {PHOTOS} from './photos.js';
import {PARTY_FLAGS} from './party-flags.js';
import {portraitStyle,photoCredit} from './portrait.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fallback=party=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">${party?'<path d="M5 21V3m0 1h14l-3 5 3 5H5"/>':'<circle cx="12" cy="8" r="4"/><path d="M4 22v-3a8 8 0 0 1 16 0v3"/>'}</svg>`;
export function entityMedia(entity,{party=false}={}){
 const asset=party?PARTY_FLAGS[entity.id]:PHOTOS[entity.id];
 // Reuse verified local assets. New surfaces require a declared photo licence;
 // existing documentary fiches are preserved independently of this component.
 const available=!!asset?.src&&(party||!!asset.license);
 return `<span class="entity-media${party?' entity-media--party':''}${available?' has-image':''}" ${available?`title="${esc(party?asset.author:photoCredit(asset))}"`:'title="Imagen no disponible con licencia declarada"'}>${fallback(party)}${available?`<span class="entity-media-image${asset.crop?' portrait-window':''}" style="${portraitStyle(asset)}"><img src="${esc(asset.src)}" alt="${party?'Imagen identificativa de':'Retrato de'} ${esc(entity.name)}" loading="lazy" width="72" height="72"></span>`:''}</span>`;
}
export function mediaCredit(entity,{party=false}={}){
 const asset=party?PARTY_FLAGS[entity.id]:PHOTOS[entity.id];
 if(!asset?.src||(!party&&!asset.license))return '<span>Ícono predeterminado · fotografía con licencia pendiente.</span>';
 const label=party?`${asset.author} · ${asset.license}`:photoCredit(asset);
 return asset.source?`<a href="${esc(asset.source)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`:`<span>${esc(label)}</span>`;
}
