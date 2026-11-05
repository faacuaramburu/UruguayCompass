import {AXES} from './context.js';
import {describeAxisPosition,renderAxisSummary} from './axis-presentation.js';
export const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const IDEOLOGY_COPY={
 socialdemocrata:{name:'Socialdemocracia',phrase:'Prefiero una economía con iniciativa privada, un Estado activo y derechos sociales que reduzcan las desigualdades.'},
 liberal:{name:'Liberalismo de mercado',phrase:'Prefiero más libertad para emprender, competir y elegir, con impuestos contenidos y apertura a los cambios sociales.'},
 conservadora:{name:'Conservadurismo de mercado',phrase:'Prefiero una economía con iniciativa privada y cambios prudentes que preserven las tradiciones sociales.'},
 socialconservadora:{name:'Conservadurismo social',phrase:'Prefiero protección social y un Estado presente en la economía, junto con valores familiares y sociales tradicionales.'},
 mixta:{name:'Pragmatismo',phrase:'Prefiero combinar mercado, regulación y políticas sociales según cada problema, sin una inclinación marcada hacia uno de esos polos.'}
};
export function ideologyDescription(model){return {...model,...IDEOLOGY_COPY[model.id]}}
export function differenceCard(x){const a=AXES[x.axis],reference=describeAxisPosition(a,x.reference);return `<article class="axis-comparison">${renderAxisSummary(a,x.user,{inlineResult:true})}<p class="comparison-reference">Referencia: <strong>${esc(reference.label)}</strong>${x.hypothesis?'<span class="small"> · Hipótesis de confianza muy baja</span>':''}<span class="sr-only">. ${esc(a.name)}: vos ${x.user}, referencia ${x.reference}</span></p></article>`}
export function renderDifferences(entity,details){const card=x=>differenceCard({...x,hypothesis:entity.placementResearch?.[x.axis]?.kind==='hypothesis'});return `<p>Comparación con <strong>${esc(entity.name)}</strong>. Tu opción aparece resaltada con su porcentaje.</p><h3>En qué coincidís más</h3><div class="difference-grid">${details.near.map(card).join('')}</div><h3>En qué te diferenciás más</h3><div class="difference-grid">${details.far.length?details.far.map(card).join(''):'<p>Los puntajes coinciden en los ejes comparados.</p>'}</div><a class="difference-sources" href="#comparar/${entity.id}">Ver los doce ejes y sus fuentes</a>`}
export function distinctivePriorities(profile,entities){
 const items=AXES.map((axis,i)=>{const known=entities.filter(e=>e.placementResearch?.[i]?.kind!=='hypothesis').map(e=>e.profile[i]).filter(Number.isFinite).sort((a,b)=>a-b);if(!known.length)return null;const middle=Math.floor(known.length/2),median=known.length%2?known[middle]:(known[middle-1]+known[middle])/2;return {axis:i,user:profile[i],reference:median,gap:Math.abs(profile[i]-median)}}).filter(Boolean);
 const unusual=[...items].sort((a,b)=>b.gap-a.gap||a.axis-b.axis)[0],typical=[...items].sort((a,b)=>a.gap-b.gap||a.axis-b.axis)[0];
 return `<div class="distinctive-grid">${[[unusual,'Tu posición más distinta'],[typical,'Tu punto más cercano']].map(([x,label])=>`<article><p class="small">${label}</p>${renderAxisSummary(AXES[x.axis],x.user)}<p class="small">${x.gap===0?'Coincidís con la mediana.':`A ${x.gap} puntos de la mediana de las referencias.`}</p></article>`).join('')}</div>`;
}
