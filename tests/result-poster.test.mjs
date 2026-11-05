import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {readFile} from 'node:fs/promises';
import {posterModel,renderResultPoster} from '../dist/result-poster.js';
import {AXES} from '../dist/context.js';
import {FIGURES} from '../dist/politics.js';
import {PHOTOS} from '../dist/photos.js';
import {rankFigures} from '../dist/result-ranking.js';

test('Manini uses the original color portrait in the poster',()=>{
 const manini=FIGURES.find(f=>f.id==='manini'),profile=manini.profile.map(v=>v??50),ranking=rankFigures(profile,FIGURES).ranked;
 assert.equal(ranking[0].entity.id,'manini');assert.equal(PHOTOS.manini.preserveColor,true);
 const dom=new JSDOM(renderResultPoster({profile,axes:AXES,ranking,photos:PHOTOS}));
 const image=dom.window.document.querySelector('.card-preview-person img');
 assert.equal(image.getAttribute('src'),'images/manini.png');assert.ok(image.classList.contains('preserve-color'));
 dom.window.close();
});

test('poster preview and PNG model use the automatic reference, twelve positions and chosen country period',async()=>{
 const profile=Array(12).fill(50),before=[...profile],ranking=rankFigures(profile,FIGURES).ranked;
 for(const mode of ['current','historical']){
  const model=posterModel(profile,AXES,ranking,mode),dom=new JSDOM(renderResultPoster({profile,axes:AXES,ranking,photos:PHOTOS,countryMode:mode})),d=dom.window.document;
  assert.equal(model.lead.entity.id,ranking[0].entity.id);assert.equal(model.positions.length,12);
  assert.ok(model.positions.every(x=>x.reading.side===null));
  assert.equal(d.querySelectorAll('.poster-axis-icon svg').length,12);assert.equal(d.querySelectorAll('.card-preview-axes>div').length,12);
  assert.equal(d.querySelectorAll('.poster-bottom>div:first-child li').length,3);assert.equal(d.querySelectorAll('.card-preview-countries li').length,3);
  assert.equal(d.querySelector('.card-preview-person h4').textContent,ranking[0].entity.name);
  assert.ok(d.querySelector('.card-preview-countries').textContent.includes(mode==='current'?'ACTUALES':'HISTÓRICOS'));
  assert.equal(d.querySelector('.poster-footer a').href,'https://uruguaycompass.cc/');assert.equal(d.querySelector('.poster-footer img').getAttribute('src'),'site-qr.svg');
  assert.doesNotMatch(d.body.innerHTML,/undefined|NaN/);dom.window.close();
 }
 assert.deepEqual(profile,before);
 const qr=await readFile(new URL('../dist/site-qr.svg',import.meta.url),'utf8');assert.match(qr,/<svg/);assert.doesNotMatch(qr,/<script/);
});
