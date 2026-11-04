const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const labels=[['Economía'],['Impuestos'],['Trabajo'],['Seguridad'],['Instituciones'],['Valores','sociales'],['Religión'],['Comercio','exterior'],['Política','exterior'],['Inmigración'],['Educación','y servicios'],['Ambiente']];
export function radarPoint(index,value,radius=220){
 if(!Number.isFinite(value))return null;
 const angle=index*Math.PI/6-Math.PI/2,ratio=Math.max(0,Math.min(100,value))/100;
 return {x:360+Math.cos(angle)*radius*ratio,y:340+Math.sin(angle)*radius*ratio};
}
const coords=point=>`${point.x.toFixed(2)},${point.y.toFixed(2)}`;
export function renderResultRadar(values,axes){
 const points=axes.map((a,i)=>radarPoint(i,values[i]));
 const complete=points.every(Boolean);
 const rings=[20,40,60,80,100].map(n=>`<polygon class="result-radar-ring" points="${axes.map((a,i)=>coords(radarPoint(i,n))).join(' ')}"/>`).join('');
 const spokes=axes.map((a,i)=>{const p=radarPoint(i,100);return `<path class="result-radar-spoke" d="M360 340L${p.x} ${p.y}"/>`}).join('');
 const names=axes.map((a,i)=>{
  const p=radarPoint(i,100,250),anchor=i===0||i===6?'middle':i<6?'start':'end',lines=labels[i]||[a.short];
  return `<g class="radar-axis-label"><text x="${p.x}" y="${p.y-7}" text-anchor="${anchor}">${lines.map((line,j)=>`<tspan x="${p.x}" dy="${j?22:0}">${esc(line)}</tspan>`).join('')}<tspan class="radar-axis-value" x="${p.x}" dy="25">${Number.isFinite(values[i])?values[i]+'/100':'Sin dato'}</tspan></text></g><text class="radar-axis-number" x="${p.x}" y="${p.y+7}" text-anchor="middle">${i+1}</text>`;
 }).join('');
 let drawing='';
 if(complete)drawing=`<polygon class="result-radar-profile" points="${points.map(coords).join(' ')}"/>`;
 else for(let i=0;i<points.length;i++){const a=points[i],b=points[(i+1)%points.length];if(a&&b)drawing+=`<path class="result-radar-partial" d="M${a.x} ${a.y}L${b.x} ${b.y}"/>`}
 const dots=points.map((p,i)=>p?`<circle class="result-radar-dot" cx="${p.x}" cy="${p.y}" r="5"><title>${esc(axes[i].name)}: ${values[i]} de 100</title></circle>`:'').join('');
 return `<figure class="result-radar"><svg id="result-radar" class="result-radar-svg" viewBox="0 0 720 680" role="img" aria-labelledby="result-radar-title result-radar-desc"><title id="result-radar-title">Tus doce ejes políticos</title><desc id="result-radar-desc">El centro vale 0 y el borde 100. Desde arriba, en sentido horario: ${axes.map((a,i)=>`${esc(a.name)}: ${Number.isFinite(values[i])?values[i]+' de 100':'sin dato'}`).join('; ')}. Más superficie no significa un mejor perfil.</desc>${rings}${spokes}<polygon class="result-radar-midpoint" points="${axes.map((a,i)=>coords(radarPoint(i,50))).join(' ')}"/><text class="radar-scale" x="352" y="355" text-anchor="end">0</text><text class="radar-scale" x="352" y="236" text-anchor="end">50</text><text class="radar-scale" x="352" y="144" text-anchor="end">100</text>${drawing}${dots}${names}</svg><ol class="radar-key">${axes.map((a,i)=>`<li><span class="radar-key-number" aria-hidden="true">${i+1}</span><span>${esc(a.short)}</span><strong>${Number.isFinite(values[i])?values[i]+'/100':'Sin dato'}</strong></li>`).join('')}</ol><figcaption>El centro vale <strong>0</strong>, la línea punteada <strong>50</strong> y el borde <strong>100</strong>. Cada radio corresponde a uno de tus doce ejes. Más superficie no significa un mejor perfil.</figcaption></figure>`;
}
