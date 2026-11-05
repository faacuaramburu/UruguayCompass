import {quizIcon} from './icons.js';
import {posterModel} from './result-poster.js';
import {portraitRect} from './portrait.js';
import {personDetailLines} from './person-details.js';
const loadImage=src=>new Promise(resolve=>{
 if(!src){resolve(null);return}
 const image=new Image(),timer=setTimeout(()=>resolve(null),4000);
 image.onload=()=>{clearTimeout(timer);resolve(image)};
 image.onerror=()=>{clearTimeout(timer);resolve(null)};
 image.src=src;
});
export async function createResultCard(canvas,{profile,axes,ranking,photos,countryMode='current'}){
 await document.fonts.ready;
 await Promise.allSettled([
  document.fonts.load?.('400 24px Poppins'),
  document.fonts.load?.('600 24px Sora'),
  document.fonts.load?.('700 24px Sora')
 ]);
 const m=posterModel(profile,axes,ranking,countryMode),photo=photos[m.lead.entity.id];
 const [image,qr,...assets]=await Promise.all([loadImage(photo?.src),loadImage('site-qr.svg'),...m.countries.map(x=>loadImage(countryMode==='current'?`flags/${x.entity.id}.svg`:null)),...m.positions.map(x=>loadImage('data:image/svg+xml,'+encodeURIComponent(quizIcon(x.axis.slug).replace('<svg ','<svg xmlns="http://www.w3.org/2000/svg" ').replace('currentColor','#26313d'))))]);
 canvas.width=1200;canvas.height=1680;const c=canvas.getContext('2d');
 const ink='#f3f6fa',muted='#d0d4da',paper='#454b53',panel='#343a42';
 const text=(value,x,y,size=24,weight=400,color=ink,max=1080)=>{
  let label=String(value);c.fillStyle=color;
  const font=()=>{c.font=`${weight} ${size}px ${weight>=600?'Sora':'Poppins'}, system-ui, sans-serif`};font();
  while(c.measureText(label).width>max&&size>14){size--;font()}
  if(c.measureText(label).width>max){while(label.length&&c.measureText(label+'…').width>max)label=label.slice(0,-1);label+='…'}
  c.fillText(label,x,y);
 };
 const box=(x,y,w,h,color,r=24)=>{c.fillStyle=color;c.beginPath();if(c.roundRect)c.roundRect(x,y,w,h,r);else c.rect(x,y,w,h);c.fill()};
 c.fillStyle=paper;c.fillRect(0,0,1200,1680);
 text('UruguayCompass',60,88,36,700);text('MI RESULTADO',915,88,20,700,muted,225);
 c.strokeStyle='#747a82';c.lineWidth=1;c.beginPath();c.moveTo(60,117);c.lineTo(1140,117);c.stroke();
 text(m.ideology.name,60,202,58,700);
 text('TU PERFIL POLÍTICO',60,250,19,600,muted);
 box(60,294,425,514,panel);
 if(image){c.save();c.beginPath();if(c.roundRect)c.roundRect(60,294,425,514,22);else c.rect(60,294,425,514);c.clip();c.filter=photo.preserveColor?'none':'grayscale(100%)';c.drawImage(image,...portraitRect(photo,image.naturalWidth||image.width,image.naturalHeight||image.height,425/514),60,294,425,514);c.restore()}
 else text(m.lead.entity.name.split(' ').map(x=>x[0]).slice(0,2).join(''),180,565,100,700);
 text(`${m.lead.score}%`,60,896,78,700);text('AFINIDAD ESTIMADA · '+(m.lead.entity.hypothesisCount||0)+' HIPÓTESIS',60,931,18,600,muted,425);
 text(m.lead.entity.name,60,991,39,700,ink,425);
 personDetailLines(m.lead.entity).forEach((line,i)=>text(line,60,1020+i*26,17,400,muted,425));
 box(520,294,620,752,panel);text('TUS 12 EJES',545,333,20,700,muted);
 m.positions.forEach((x,i)=>{
  const y=383+i*57,label=x.reading.side?x.axis[x.reading.side]:x.axis.short;
  box(543,y-24,29,29,x.color,6);
  const icon=assets[m.countries.length+i];if(icon)c.drawImage(icon,547,y-20,21,21);else text(x.axis.short[0],549,y-3,18,700,'#26313d',25);
  text(label,585,y,20,400,ink,345);
  c.fillStyle='#65707e';c.fillRect(945,y-10,90,5);c.fillStyle=x.color;c.fillRect(945,y-10,90*(x.reading.percent??50)/100,5);
  text(x.reading.percent===null?'—':x.reading.percent+'%',1048,y,18,700,x.color,75);
 });
 box(60,1094,525,281,panel);box(610,1094,530,281,panel);
 text('OTRAS REFERENCIAS',85,1133,19,700,muted);text(countryMode==='current'?'PAÍSES ACTUALES':'PAÍSES HISTÓRICOS',635,1133,19,700,muted);
 m.nearby.forEach((x,i)=>{const y=1189+i*66,initial=x.entity.name.split(' ').map(p=>p[0]).slice(0,2).join('');box(85,y-31,40,40,'#58616e',20);text(initial,92,y-4,16,700,ink,30);text(x.entity.name,140,y,21,600,ink,305);text(x.score+'%',475,y,23,700,ink,80)});
 m.countries.forEach((x,i)=>{const y=1189+i*66,flag=assets[i];if(flag)c.drawImage(flag,635,y-28,49,32);text(x.entity.name,flag?700:635,y,20,600,ink,310);text(x.score+'%',1040,y,23,700,ink,80)});
 text('DESCUBRÍ TU PERFIL',60,1460,20,700,muted);text('URUGUAYCOMPASS.CC',60,1499,24,700,ink,915);
 if(qr)c.drawImage(qr,1035,1417,105,105);
 text('—: Equilibrado · Personajes: 12 ejes (incluye hipótesis) · Países: 3 ejes constitucionales.',60,1555,18,400,muted);
 const tied=ranking.filter(x=>Number.isFinite(m.lead.distance)?x.distance===m.lead.distance:x.score===m.lead.score);
 if(tied.length>1)text(`Empate exacto entre ${tied.length} referencias; se destaca la primera por orden alfabético.`,60,1590,17,400,muted);
 text('Educativo. Sin validación científica ni recomendación de voto.',60,1625,17,400,muted);
 return new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(Error('PNG no disponible')),'image/png'));
}
