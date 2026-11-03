export function drawRadar(canvas,values,color='#0857e9',comparison=null){
 if(!canvas)return;const ctx=canvas.getContext('2d');if(!ctx)return;const w=canvas.width,h=canvas.height,cx=w/2,cy=h/2,r=Math.min(w,h)*.485;ctx.clearRect(0,0,w,h);const point=(i,v)=>{const a=i*Math.PI/6-Math.PI/2;return[cx+Math.cos(a)*r*v,cy+Math.sin(a)*r*v]};
 ctx.lineWidth=w/450;ctx.strokeStyle='#adb8cb';for(let ring=1;ring<=5;ring++){ctx.beginPath();for(let i=0;i<12;i++){const p=point(i,ring/5);i?ctx.lineTo(...p):ctx.moveTo(...p)}ctx.closePath();ctx.stroke()}for(let i=0;i<12;i++){ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(...point(i,1));ctx.stroke()}
 function series(v,c,fill,dash=[]){ctx.beginPath();v.forEach((n,i)=>{const p=point(i,(n??50)/100);i?ctx.lineTo(...p):ctx.moveTo(...p)});ctx.closePath();ctx.strokeStyle=c;ctx.lineWidth=w/240;ctx.setLineDash(dash);if(fill){ctx.fillStyle=fill;ctx.fill()}ctx.stroke();ctx.setLineDash([]);v.forEach((n,i)=>{if(n===null)return;ctx.beginPath();ctx.arc(...point(i,n/100),w/83,0,Math.PI*2);ctx.fillStyle=c;ctx.fill()})}
 if(comparison)series(comparison,'#64748b',null,[10,7]);series(values,color,'rgba(70,170,248,.28)');
}
const sample=[70,48,58,54,44,56,68,75,57,72,63,48];drawRadar(document.getElementById('home-radar'),sample);
