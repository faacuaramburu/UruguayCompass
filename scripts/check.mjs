import assert from 'node:assert/strict';
import {access,readdir} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import {QUESTIONS} from '../dist/questions.js';
import {AXES,GLOSSARY,TIMELINE,FAQ} from '../dist/context.js';
import {PARTIES,FIGURES} from '../dist/politics.js';
import {PHOTOS} from '../dist/photos.js';
assert.equal(QUESTIONS.length,240);assert.equal(AXES.length,12);assert.equal(PARTIES.length,6);assert.equal(FIGURES.length,53);
assert.equal(new Set(QUESTIONS.map(q=>q.text)).size,240);
assert.equal(FIGURES.filter(f=>f.rankEligible).length,31);
assert.equal(FIGURES.filter(f=>f.researchOnly&&!f.rankEligible&&f.profile.every(v=>v===null)).length,22);
for(const figure of FIGURES){
 const photo=PHOTOS[figure.id];assert.ok(photo?.author&&(photo?.source?.startsWith('https://')||(photo.providedByUser===true&&photo.publisher&&photo.source===null)),`Procedencia documentada: ${figure.id}`);
 assert.ok(photo.license||(photo.rightsStatus==='unspecified'&&photo.publisher),`Derechos documentados: ${figure.id}`);
 if(photo.crop){const [x,y,w,h]=photo.crop,[width,height]=photo.dimensions;assert.ok([x,y,w,h,width,height].every(Number.isFinite)&&x>=0&&y>=0&&w>0&&h>0&&x+w<=width&&y+h<=height,figure.id)}
 await access('dist/'+photo.src);
}
for(const entity of [...PARTIES,...FIGURES]){assert.equal(entity.profile.length,12);assert.equal(entity.rationale.length,12);for(const n of entity.profile)assert.ok(n===null||(Number.isFinite(n)&&n>=0&&n<=100));for(const s of entity.sources)assert.ok(s.url.startsWith('https://'));}
for(const file of await readdir('dist'))if(file.endsWith('.js')){const p=spawnSync(process.execPath,['--check',`dist/${file}`],{stdio:'inherit'});assert.equal(p.status,0,`Sintaxis de ${file}`);}
for(const file of ['dist/index.html','dist/styles.css','dist/comparator.css','dist/fonts/Sora.ttf','dist/fonts/Sora-OFL.txt','dist/fonts/Poppins-Regular.ttf','dist/fonts/Poppins-SemiBold.ttf','dist/fonts/Poppins-OFL.txt','dist/sun.svg','dist/fonts/Biryani-Regular.ttf','dist/fonts/Biryani-Bold.ttf','dist/fonts/BricolageGrotesque.ttf','dist/fonts/OFL.txt','dist/fonts/Bricolage-OFL.txt','README.md'])await access(file);
console.log(`Datos y sintaxis verificados: ${QUESTIONS.length} preguntas, ${AXES.length} ejes, ${GLOSSARY.length} términos, ${TIMELINE.length} hitos, ${FAQ.length} FAQ, ${FIGURES.length} figuras y ${PARTIES.length} partidos.`);
