import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {readFile} from 'node:fs/promises';
import {QUESTIONS} from '../dist/questions.js';
import {questionSet} from '../dist/core.js';
let counter=0;
async function boot({blocked=false,archive=null,schema=2}={}){
 const html=await readFile(new URL('../dist/index.html',import.meta.url),'utf8'),dom=new JSDOM(html,{url:'https://example.org/',pretendToBeVisual:true}),w=dom.window;
 for(const key of ['window','document','localStorage','location','FormData','File'])globalThis[key]=w[key];
 w.scrollTo=()=>{};w.HTMLElement.prototype.scrollIntoView=()=>{};w.HTMLCanvasElement.prototype.getContext=()=>new Proxy({},{get:()=>()=>{}});
 const answers=Object.fromEntries(questionSet(QUESTIONS,'short').map(q=>[schema===2?q.id.replace(/v3$/,''):q.id,3])),saved=JSON.stringify({schema,version:'short',answers,cursor:35,completed:true});w.localStorage.setItem('uruguay-compass-v2',saved);
 if(archive!==null)w.localStorage.setItem('uruguay-compass-v2-archive',archive);
 const set=w.Storage.prototype.setItem;
 if(blocked)w.Storage.prototype.setItem=function(key,value){if(key==='uruguay-compass-v2-archive')throw Error('Archive blocked');return set.call(this,key,value)};
 await import(`../dist/app.js?audit-migration=${++counter}`);return {dom,w,saved};
}
test('schema 2 is backed up before replacing it; only changed short question is unanswered',async()=>{
 const {dom,w,saved}=await boot();const state=JSON.parse(w.localStorage.getItem('uruguay-compass-v2'));
 assert.equal(state.schema,3);assert.equal(state.completed,false);assert.equal(Object.keys(state.answers).length,35);assert.equal(state.answers.a5q3v3,undefined);assert.equal(state.answers.a0q1,3);assert.deepEqual(JSON.parse(w.localStorage.getItem('uruguay-compass-v2-archive')),[saved]);dom.window.close();
});
test('existing audit archives are retained when another prior test is migrated',async()=>{
 const {dom,w,saved}=await boot({archive:'older-backup'});assert.deepEqual(JSON.parse(w.localStorage.getItem('uruguay-compass-v2-archive')),['older-backup',saved]);dom.window.close();
});
test('failed archive writes cannot overwrite the original, including later answer changes',async()=>{
 const {dom,w,saved}=await boot({blocked:true});assert.equal(w.localStorage.getItem('uruguay-compass-v2'),saved);
 w.location.hash='#test';await new Promise(r=>setTimeout(r,30));const answer=w.document.querySelector('[name=answer][value="4"]');assert.ok(answer);answer.checked=true;answer.dispatchEvent(new w.Event('change',{bubbles:true}));assert.equal(w.localStorage.getItem('uruguay-compass-v2'),saved);dom.window.close();
});

test('twelve-axis recalculation preserves a completed schema 3 test and every archive',async()=>{
 const {dom,w,saved}=await boot({schema:3,archive:'older-backup'});
 assert.equal(w.localStorage.getItem('uruguay-compass-v2'),saved);
 assert.equal(w.localStorage.getItem('uruguay-compass-v2-archive'),'older-backup');
 assert.ok(w.document.querySelector('a[href="#resultados"]'));
 w.location.hash='#resultados';
 const deadline=Date.now()+2000;while(!w.document.querySelector('#figures-panel')&&Date.now()<deadline)await new Promise(r=>setTimeout(r,10));
 assert.ok(w.document.querySelector('#figures-panel'));
 assert.ok(w.document.querySelector('.closest-person').textContent.includes('doce ejes'));
 assert.equal(w.localStorage.getItem('uruguay-compass-v2'),saved);
 w.location.hash='#privacidad';
 const until=Date.now()+2000;while(!w.document.querySelector('[data-action=erase]')&&Date.now()<until)await new Promise(r=>setTimeout(r,10));
 w.document.querySelector('[data-action=erase]').click();
 assert.equal(w.localStorage.getItem('uruguay-compass-v2-archive'),null);
 assert.equal(w.localStorage.getItem('uruguay-compass-v2'),null);
 dom.window.close();
});
