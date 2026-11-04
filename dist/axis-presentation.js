const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const visuals=[
 {hue:38,icons:['💼','🏛️']},{hue:172,icons:['🪙','🤝']},
 {hue:222,icons:['🔄','🛡️']},{hue:280,icons:['🕊️','🛡️']},
 {hue:342,icons:['🌈','🏡']},{hue:260,icons:['⚖️','🕯️']},
 {hue:184,icons:['🌐','🏭']},{hue:210,icons:['🧭','🤝']},
 {hue:325,icons:['🛂','🌍']},{hue:28,icons:['🔎','📁']},
 {hue:230,icons:['🏫','🔀']},{hue:145,icons:['🌿','🏗️']}
];

export function describeAxisPosition(axis,value){
 if(!Number.isFinite(value)||value<0||value>100)return {label:'Sin dato',side:null,percent:null};
 if(Math.abs(value-50)<10)return {label:'Equilibrado',side:null,percent:null};
 const side=value<50?'left':'right',percent=Math.max(value,100-value);
 return {label:`${percent}% ${axis[side]}`,side,percent};
}

export function renderAxisSummary(axis,value){
 const reading=describeAxisPosition(axis,value),visual=visuals[axis.id]||visuals[0],icons=[axis.leftIcon||visual.icons[0],axis.rightIcon||visual.icons[1]];
 const available=Number.isFinite(value)&&value>=0&&value<=100;
 const poles=['left','right'].map((side,index)=>`<span class="axis-pole${reading.side===side?' is-selected':''}"><span class="axis-icon" aria-hidden="true">${icons[index]}</span><span>${esc(axis[side])}</span></span>`).join('');
 const scale=available?`<div class="axis-scale" role="img" aria-label="${esc(axis.name)}: ${esc(reading.label)}. Entre ${esc(axis.left)} y ${esc(axis.right)}."><i class="axis-midpoint"></i><i class="axis-fill" style="left:${Math.min(50,value)}%;width:${reading.side?Math.abs(value-50):0}%"></i><i class="axis-marker" style="left:${value}%"></i></div>`:'';
 return `<div class="axis-summary" data-side="${reading.side||'balanced'}" style="--axis-hue:${visual.hue}"><div class="axis-tile-heading"><h3>${esc(axis.short||axis.name)}</h3><strong>${esc(reading.label)}</strong></div>${scale}<div class="axis-poles">${poles}</div></div>`;
}
