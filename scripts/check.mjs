import assert from 'node:assert/strict';
import {access,readdir} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import {QUESTIONS} from '../dist/questions.js';
import {AXES,GLOSSARY,TIMELINE,FAQ} from '../dist/context.js';
import {PARTIES,FIGURES} from '../dist/politics.js';
import {PHOTOS} from '../dist/photos.js';
import {COMPARISON_AXES} from '../dist/comparison-profiles.js';
import {sharedAxes} from '../dist/core.js';
assert.equal(QUESTIONS.length,240);assert.equal(AXES.length,12);assert.equal(PARTIES.length,6);assert.equal(FIGURES.length,31);
assert.equal(new Set(QUESTIONS.map(q=>q.text)).size,240);
assert.ok(FIGURES.every(f=>f.rankEligible),'Every catalog entry must be usable as a result');
for(const figure of FIGURES){
 const photo=PHOTOS[figure.id];assert.ok(photo?.author&&photo?.source.startsWith('https://'),`Retrato atribuido: ${figure.id}`);
 assert.ok(photo.license||(photo.rightsStatus==='unspecified'&&photo.publisher),`Derechos documentados: ${figure.id}`);
 if(photo.crop){const [x,y,w,h]=photo.crop,[width,height]=photo.dimensions;assert.ok([x,y,w,h,width,height].every(Number.isFinite)&&x>=0&&y>=0&&w>0&&h>0&&x+w<=width&&y+h<=height,figure.id)}
 await access('dist/'+photo.src);
}
assert.deepEqual(sharedAxes(FIGURES),COMPARISON_AXES);assert.deepEqual(sharedAxes(PARTIES),COMPARISON_AXES);
for(const entity of [...PARTIES,...FIGURES]){
 assert.equal(entity.profile[10],null,entity.id);assert.ok(!entity.evidence.some(e=>e.axis===10),entity.id);
 assert.ok(entity.socialPolicy.education||entity.socialPolicy.pensions,entity.id);
 for(const topic of Object.values(entity.socialPolicy))if(topic)assert.ok(entity.sources[topic.source]?.url.startsWith('https://'),entity.id);assert.equal(entity.profile.length,12);assert.equal(entity.rationale.length,12);for(const n of entity.profile)assert.ok(n===null||(Number.isFinite(n)&&n>=0&&n<=100));for(const s of entity.sources)assert.ok(s.url.startsWith('https://'));}
for(const file of await readdir('dist'))if(file.endsWith('.js')){const p=spawnSync(process.execPath,['--check',`dist/${file}`],{stdio:'inherit'});assert.equal(p.status,0,`Sintaxis de ${file}`);}
for(const file of ['dist/index.html','dist/styles.css','dist/sun.svg','dist/fonts/Biryani-Regular.ttf','dist/fonts/Biryani-Bold.ttf','dist/fonts/BricolageGrotesque.ttf','dist/fonts/OFL.txt','dist/fonts/Bricolage-OFL.txt','README.md'])await access(file);
console.log(`Datos y sintaxis verificados: ${QUESTIONS.length} preguntas, ${AXES.length} ejes, ${GLOSSARY.length} términos, ${TIMELINE.length} hitos, ${FAQ.length} FAQ, ${FIGURES.length} figuras y ${PARTIES.length} partidos.`);
