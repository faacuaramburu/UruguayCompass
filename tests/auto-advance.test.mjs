import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {JSDOM} from 'jsdom';

let iteration=0;
async function boot({enabled=false,blocked=false}={}){
 const html=await readFile(new URL('../dist/index.html',import.meta.url),'utf8');
 const dom=new JSDOM(html,{url:'https://example.org/#iniciar',pretendToBeVisual:true}),w=dom.window;
 for(const key of ['window','document','localStorage','location','FormData','File'])globalThis[key]=w[key];
 w.scrollTo=()=>{};w.HTMLElement.prototype.scrollIntoView=()=>{};
 w.HTMLCanvasElement.prototype.getContext=()=>new Proxy({},{get:()=>()=>{}});
 if(enabled)w.localStorage.setItem('compass-auto-advance','true');
 if(blocked)w.Storage.prototype.setItem=()=>{throw Error('Storage blocked')};
 await import(`../dist/app.js?auto-advance-test=${++iteration}`);
 w.document.querySelector('[data-action=start]').click();await new Promise(r=>setTimeout(r,20));
 const query=selector=>w.document.querySelector(selector);
 const saved=()=>JSON.parse(w.localStorage.getItem('uruguay-compass-v2'));
 return {dom,w,query,saved};
}

test('automatic advance is optional and a click advances exactly once, including a previously selected answer',async()=>{
 const {dom,w,query,saved}=await boot();
 assert.equal(query('[data-action=auto-advance]').getAttribute('aria-pressed'),'false');
 query('[name=answer][value="3"]').click();assert.equal(saved().cursor,0);
 query('[data-action=auto-advance]').click();assert.equal(saved().cursor,0,'Enabling does not submit an existing answer');
 assert.equal(w.localStorage.getItem('compass-auto-advance'),'true');
 query('[name=answer][value="3"]').click();assert.equal(saved().cursor,1);
 assert.equal(Object.keys(saved().answers).length,1,'The same click must not answer the next question');
 query('[name=answer][value="1"]').closest('label').querySelector('span').click();assert.equal(saved().cursor,2);
 query('[data-action=previous]').click();assert.equal(saved().cursor,1);
 assert.equal(query('[name=answer][value="1"]').checked,true);
 query('[name=answer][value="1"]').click();assert.equal(saved().cursor,2,'Clicking the existing selection still advances');
 query('[data-action=auto-advance]').click();assert.equal(w.localStorage.getItem('compass-auto-advance'),'false');
 query('[name=answer][value="4"]').click();assert.equal(saved().cursor,2);
 query('#question-form button[type=submit]').click();assert.equal(saved().cursor,3);
 assert.equal(query('[data-action=auto-advance]').getAttribute('aria-pressed'),'false');
 dom.window.close();
});

test('a stored preference supports keyboard changes and completes the test on the final answer',async()=>{
 const {dom,w,query,saved}=await boot({enabled:true});
 assert.equal(query('[data-action=auto-advance]').getAttribute('aria-pressed'),'true');
 const answer=query('[name=answer][value="2"]');answer.checked=true;answer.dispatchEvent(new w.Event('change',{bubbles:true}));
 assert.equal(saved().cursor,1);
 for(let i=1;i<36;i++){
  assert.equal(saved().cursor,i);
  query('[name=answer][value="2"]').click();
 }
 await new Promise(r=>setTimeout(r,20));
 assert.equal(saved().completed,true);assert.equal(Object.keys(saved().answers).length,36);
 assert.ok(query('#axes-panel'));assert.equal(query('#question-form'),null);
 dom.window.close();
});

test('automatic advance remains usable when saving preferences or answers is blocked',async()=>{
 const {dom,query}=await boot({blocked:true});
 query('[data-action=auto-advance]').click();
 query('[name=answer][value="2"]').click();
 assert.ok(query('.test-top').textContent.includes('Pregunta 2 de 36'));
 assert.equal(query('[data-action=auto-advance]').getAttribute('aria-pressed'),'true');
 assert.ok(query('.small.muted').textContent.includes('Al elegir una respuesta'));
 dom.window.close();
});
