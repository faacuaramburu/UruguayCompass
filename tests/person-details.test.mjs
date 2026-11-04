import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {JSDOM} from 'jsdom';
import {FIGURES,PARTIES} from '../dist/politics.js';
import {PERSON_DETAILS,personDetailLines} from '../dist/person-details.js';
import {PHOTOS} from '../dist/photos.js';
import {AXES} from '../dist/context.js';
import {renderResultPoster} from '../dist/result-poster.js';
import {createResultCard} from '../dist/result-card.js';
import {comparisonEntities,renderComparator} from '../dist/political-comparator.js';

const assertCleanPortraits=d=>{
 assert.equal(d.querySelector('.portrait figcaption,.media-credit,.directory-credits'),null);
 assert.ok([...d.querySelectorAll('a')].every(a=>a.textContent!=='Comparar eje por eje y ver fuentes'));
 assert.ok([...d.querySelectorAll('.entity-media')].every(a=>!/(?:CC BY|Commons|Embassy|Desayunos)/i.test(a.title)));
};

test('all 31 people have independent display metadata; current and former roles are distinguished',()=>{
 assert.deepEqual(Object.keys(PERSON_DETAILS).sort(),FIGURES.map(f=>f.id).sort());
 for(const f of FIGURES)assert.ok(personDetailLines(f).length===3&&personDetailLines(f).every(s=>s.length>5),f.id);
 assert.equal(PERSON_DETAILS.raffo.role,'Directora de Antel');
 assert.match(PERSON_DETAILS.argimon.role,/UNESCO/);assert.doesNotMatch(PERSON_DETAILS.argimon.role,/Vicepresidenta/);
 assert.match(PERSON_DETAILS.bergara.role,/Intendente/);assert.match(PERSON_DETAILS.talvi.role,/Argentina/);
 for(const id of ['mujica','vazquez','larranaga','astori','jorge-batlle'])assert.match(PERSON_DETAILS[id].role,/fallecido/);
 assert.match(PERSON_DETAILS.canoniero.role,/renunció/);assert.match(PERSON_DETAILS.canoniero.party,/2024/);
 assert.match(PERSON_DETAILS.ripoll.orientation,/autodefinición/);
});

test('the supplied Raffo original is used in comparator, poster and PNG without stale attribution',async()=>{
 const file=await readFile(new URL('../dist/'+PHOTOS.raffo.src,import.meta.url));
 assert.equal(file.readUInt32BE(16),678);assert.equal(file.readUInt32BE(20),452);
 assert.equal(createHash('sha256').update(file).digest('hex'),'ae5984ea9e9424a20a6ed8ad9cdce7c01a8a0aeb2e5920e00df09367cbf721e5');
 assert.equal(PHOTOS.raffo.providedByUser,true);assert.equal(PHOTOS.raffo.source,null);assert.equal(PHOTOS.raffo.license,null);
 const raffo=FIGURES.find(f=>f.id==='raffo'),ranking=[{entity:raffo,score:93},...FIGURES.filter(f=>f!==raffo).slice(0,3).map(entity=>({entity,score:80}))],profile=Array(12).fill(50);
 const dom=new JSDOM(renderResultPoster({profile,axes:AXES,ranking,photos:PHOTOS})),d=dom.window.document;
 const img=d.querySelector('.card-preview-person img');assert.equal(img.getAttribute('src'),PHOTOS.raffo.src);assert.ok(img.classList.contains('preserve-color'));
 for(const s of personDetailLines(raffo))assert.ok(d.querySelector('.card-preview-person').textContent.includes(s));
 assert.doesNotMatch(d.querySelector('.poster-credit').textContent,/Foto:|Ganímedes|CC BY/);assertCleanPortraits(d);
 const cmp=new JSDOM(renderComparator(comparisonEntities(FIGURES,PARTIES),'persona/raffo','persona/argimon'));
 assert.equal(cmp.window.document.querySelector('.compare-identity img').getAttribute('src'),PHOTOS.raffo.src);assertCleanPortraits(cmp.window.document);
 const drawn=[],loaded=[],canvas=d.createElement('canvas');
 canvas.getContext=()=>new Proxy({},{get:(_,key)=>key==='measureText'?s=>({width:String(s).length*5}):key==='fillText'?s=>drawn.push(s):()=>{}});
 canvas.toBlob=callback=>callback(new Blob(['test'],{type:'image/png'}));
 globalThis.document=d;Object.defineProperty(d,'fonts',{value:{ready:Promise.resolve()}});
 globalThis.Image=class{naturalWidth=678;naturalHeight=452;set src(s){loaded.push(s);queueMicrotask(()=>this.onload())}};
 const blob=await createResultCard(canvas,{profile,axes:AXES,ranking,photos:PHOTOS});assert.equal(blob.type,'image/png');
 assert.ok(loaded.includes(PHOTOS.raffo.src));for(const line of personDetailLines(raffo))assert.ok(drawn.includes(line),line);
 assert.ok(drawn.every(s=>!String(s).startsWith('Foto:')));
 dom.window.close();cmp.window.close();
});

test('directory and every personal fiche show the same metadata, retain political evidence and omit photo captions',async()=>{
 const html=await readFile(new URL('../dist/index.html',import.meta.url),'utf8'),dom=new JSDOM(html,{url:'https://example.org/#figuras',pretendToBeVisual:true}),w=dom.window;
 for(const key of ['window','document','localStorage','location','FormData','File'])globalThis[key]=w[key];
 w.scrollTo=()=>{};w.HTMLElement.prototype.scrollIntoView=()=>{};
 w.HTMLCanvasElement.prototype.getContext=()=>new Proxy({},{get:()=>()=>{}});
 await import('../dist/app.js?person-details-integration');
 assert.equal(w.document.querySelectorAll('.entity-directory .person-details').length,31);assertCleanPortraits(w.document);
 const item=w.document.querySelector('a[href="#ficha/raffo"]');assert.equal(item.querySelector('img').getAttribute('src'),PHOTOS.raffo.src);
 for(const f of FIGURES){
  w.location.hash='#ficha/'+f.id;
  const deadline=Date.now()+2000;while(w.document.querySelector('h1')?.textContent!==f.name&&Date.now()<deadline)await new Promise(r=>setTimeout(r,5));
  assert.equal(w.document.querySelector('h1').textContent,f.name);
  assert.deepEqual([...w.document.querySelectorAll('.page>.person-details>span')].map(s=>s.textContent),personDetailLines(f));
  assert.ok(w.document.querySelector('a[href="'+f.sources[0].url+'"]'),'Political sources remain available: '+f.id);assertCleanPortraits(w.document);
 }
 dom.window.close();
});
