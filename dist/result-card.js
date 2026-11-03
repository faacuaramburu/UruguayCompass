// Canvas local: no peticiones de imágenes a terceros ni datos en URLs.
export async function createResultCard(canvas,{profile,axes,ranking,photos}){
 await document.fonts.ready;canvas.hidden=false;const c=canvas.getContext('2d'),top=ranking[0],photo=photos[top.entity.id];
 const ink='#10233e',blue='#0755ce',muted='#506079';c.fillStyle='#eff4fa';c.fillRect(0,0,1200,1500);
 const text=(t,x,y,size=24,weight=400,color=ink,max)=>{c.fillStyle=color;c.font=`${weight} ${size}px ${weight===700?'Bricolage Grotesque':'Biryani'}`;if(max&&c.measureText){while(c.measureText(t).width>max&&size>15){size--;c.font=`${weight} ${size}px ${weight===700?'Bricolage Grotesque':'Biryani'}`}}c.fillText(t,x,y)};
 text('Uruguay Compass',60,85,38,700);text('Los 12 Ejes',860,85,27);c.strokeStyle='#c6cfdf';c.beginPath();c.moveTo(60,118);c.lineTo(1140,118);c.stroke();
 text('En estas respuestas, mi perfil se acerca más al de',60,177,25);
 text(top.entity.name,60,240,53,700,ink,1080);
 let image=null;if(photo){try{image=await new Promise((resolve,reject)=>{const im=new Image();const timeout=setTimeout(()=>reject(Error('Foto no disponible')),4000);im.onload=()=>{clearTimeout(timeout);resolve(im)};im.onerror=()=>{clearTimeout(timeout);reject(Error('Foto no disponible'))};im.src=photo.src})}catch{}}
 if(image){const w=image.naturalWidth||image.width,h=image.naturalHeight||image.height;const ratio=320/390;let sw=w,sh=h;if(w/h>ratio)sw=h*ratio;else sh=w/ratio;c.drawImage(image,(w-sw)/2,Math.max(0,(h-sh)*.25),sw,sh,60,280,320,390)}
 else {c.fillStyle='#d8e6f7';c.fillRect(60,280,320,390);text(top.entity.name.split(' ').map(x=>x[0]).slice(0,2).join(''),130,500,72,700)}
 text(`${top.score}%`,420,365,76,700,blue);text('coincidencia editorial',420,411,25);text('Programa de candidatura de 2024',420,460,22,400,muted);text('Comparación sobre cinco ejes comunes',420,499,22,400,muted);
 text('Otras referencias cercanas',420,558,27,700);ranking.slice(1,3).forEach((x,i)=>text(`${x.entity.name} · ${x.score}%`,420,605+i*43,24,400,ink,700));
 text('Tus doce posiciones',60,733,31,700);
 profile.forEach((n,i)=>{const col=i<6?0:1,row=i%6,x=60+col*560,y=790+row*73;text(axes[i].short,x,y,20,700,ink,390);text(`${n}/100`,x+435,y,18);c.fillStyle='#d0ddec';c.fillRect(x,y+18,470,7);c.fillStyle=blue;c.fillRect(x+Math.max(0,Math.min(466,n*4.7-2)),y+13,4,17);text(`0 ${axes[i].left} → ${axes[i].right} 100`,x,y+46,12,400,muted,470)});
 text('Cada puntaje se lee entre los dos polos de su eje.',60,1275,21,400,muted);
 text('No implica pensar igual en todo ni apoyar a un partido.',60,1320,22);
 text('Educativo. Sin validación científica ni recomendación de voto.',60,1360,21);
 if(photo)text(`Foto: ${photo.author} · ${photo.license} · Wikimedia Commons`,60,1422,15,400,muted,1080);
 return new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(Error('PNG no disponible')),'image/png'));
}
