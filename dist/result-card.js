import {portraitRect,photoCredit} from './portrait.js';
// Canvas local: no peticiones de imágenes a terceros ni datos en URLs.
export async function createResultCard(canvas,{profile,axes,ranking,photos,partyRanking=[]}){
 await document.fonts.ready;canvas.hidden=false;const topParty=partyRanking[0],closestParties=partyRanking.filter(x=>x.score===topParty?.score),offset=topParty?180:0;canvas.height=1500+offset;const c=canvas.getContext('2d'),top=ranking[0],photo=photos[top.entity.id];
 const ink='#10233e',blue='#0755ce',muted='#506079';c.fillStyle='#eff4fa';c.fillRect(0,0,1200,canvas.height);
 const text=(t,x,y,size=24,weight=400,color=ink,max)=>{c.fillStyle=color;c.font=`${weight} ${size}px ${weight===700?'Bricolage Grotesque':'Biryani'}`;if(max&&c.measureText){while(c.measureText(t).width>max&&size>15){size--;c.font=`${weight} ${size}px ${weight===700?'Bricolage Grotesque':'Biryani'}`}}c.fillText(t,x,y)};
 text('Uruguay Compass',60,85,38,700);text('Los 12 Ejes',860,85,27);c.strokeStyle='#c6cfdf';c.beginPath();c.moveTo(60,118);c.lineTo(1140,118);c.stroke();
 text('En estas respuestas, mi perfil se acerca más al de',60,177,25);
 text(top.entity.name,60,240,53,700,ink,1080);
 let image=null;if(photo){try{image=await new Promise((resolve,reject)=>{const im=new Image();const timeout=setTimeout(()=>reject(Error('Foto no disponible')),4000);im.onload=()=>{clearTimeout(timeout);resolve(im)};im.onerror=()=>{clearTimeout(timeout);reject(Error('Foto no disponible'))};im.src=photo.src})}catch{}}
 if(image){const w=image.naturalWidth||image.width,h=image.naturalHeight||image.height;c.drawImage(image,...portraitRect(photo,w,h,320/390),60,280,320,390)}
 else {c.fillStyle='#d8e6f7';c.fillRect(60,280,320,390);text(top.entity.name.split(' ').map(x=>x[0]).slice(0,2).join(''),130,500,72,700)}
 text(`${top.score}%`,420,365,76,700,blue);text('coincidencia editorial',420,411,25);text(top.entity.comparisonLabel,420,460,22,400,muted);text('Comparación sobre cinco ejes comunes',420,499,22,400,muted);
 const tied=ranking.filter(x=>x.score===top.score);
 text('Otras referencias cercanas',420,558,27,700);ranking.slice(1,3).forEach((x,i)=>text(`${x.entity.name} · ${x.score}%`,420,605+i*43,24,400,ink,700));
 if(tied.length>1)text(`Comparte la afinidad máxima con otros ${tied.length-1} referentes.`,60,700,22,400,muted,1080);
 if(topParty){text(closestParties.length>1?'Partidos más cercanos (empate)':'Partido más cercano',60,730,25,700);text(closestParties.map(x=>x.entity.name).join(' / '),60,780,35,700,ink,1080);text(`${topParty.score}% de coincidencia editorial · Programas de 2024`,60,825,23);text('Comparación sobre cinco ejes comunes; no implica apoyo partidario.',60,860,20,400,muted)}
 text('Tus doce posiciones',60,733+offset,31,700);
 profile.forEach((n,i)=>{const col=i<6?0:1,row=i%6,x=60+col*560,y=790+offset+row*73;text(axes[i].short,x,y,20,700,ink,390);text(`${n}/100`,x+435,y,18);c.fillStyle='#d0ddec';c.fillRect(x,y+18,470,7);c.fillStyle=blue;c.fillRect(x+Math.max(0,Math.min(466,n*4.7-2)),y+13,4,17);text(`0 ${axes[i].left} → ${axes[i].right} 100`,x,y+46,12,400,muted,470)});
 text('Cada puntaje se lee entre los dos polos de su eje.',60,1275+offset,21,400,muted);
 text('No implica pensar igual en todo ni apoyar a un partido.',60,1320+offset,22);
 text('Educativo. Sin validación científica ni recomendación de voto.',60,1360+offset,21);
 if(photo)text(`Foto: ${photoCredit(photo)} · ${new URL(photo.source).hostname}`,60,1422+offset,15,400,muted,1080);
 return new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(Error('PNG no disponible')),'image/png'));
}
