import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {JSDOM} from 'jsdom';

let iteration=0;
async function waitFor(w,selector){
 const deadline=Date.now()+2000;
 while(!w.document.querySelector(selector)&&Date.now()<deadline)await new Promise(r=>setTimeout(r,10));
 assert.ok(w.document.querySelector(selector),`Timed out waiting for ${selector}`);
}
async function boot({blocked=false,archive=null}={}){
 const html=await readFile(new URL('../dist/index.html',import.meta.url),'utf8');
 const dom=new JSDOM(html,{url:'https://example.org/',pretendToBeVisual:true}),w=dom.window;
 for(const key of ['window','document','localStorage','location','FormData','File'])globalThis[key]=w[key];
 w.scrollTo=()=>{};w.HTMLElement.prototype.scrollIntoView=()=>{};
 w.HTMLCanvasElement.prototype.getContext=()=>new Proxy({},{get:()=>()=>{}});
 const answers={};for(let axis=0;axis<12;axis++)for(let order=1;order<=3;order++)answers[`a${axis}q${order}`]=2;
 answers.a4q1=3;answers.a9q1=4;answers.a10q1=0;
 const previous=JSON.stringify({schema:1,version:'short',answers,cursor:35,completed:true});
 w.localStorage.setItem('uruguay-compass-v1',previous);
 if(archive!==null)w.localStorage.setItem('uruguay-compass-v1-archive',archive);
 if(blocked)w.Storage.prototype.setItem=()=>{throw Error('Storage blocked')};
 await import(`../dist/app.js?migration-test=${++iteration}`);
 return {dom,w,previous};
}

test('a saved test is archived before migrating and can finish by answering the seven changed or new short-test questions',async()=>{
 const {dom,w,previous}=await boot();
 assert.equal(w.localStorage.getItem('uruguay-compass-v1-archive'),previous);
 assert.equal(w.localStorage.getItem('uruguay-compass-v1'),null);
 const state=JSON.parse(w.localStorage.getItem('uruguay-compass-v2'));
 assert.equal(state.answers.a5q1,3);assert.equal(state.answers.a4q1,undefined);assert.equal(state.answers.a10q1,undefined);
 assert.equal(state.completed,false);assert.ok(w.document.querySelector('.home-intro .notice').textContent.includes('El test anterior se conserva'));
 w.document.querySelector('.home-actions a[href="#iniciar"]').click();await waitFor(w,'#question-form');
 for(let i=0;i<7;i++){
  assert.ok(w.document.querySelector('#question-form'));
  const answer=w.document.querySelector('[name=answer][value="2"]');answer.checked=true;answer.dispatchEvent(new w.Event('change',{bubbles:true}));
  w.document.querySelector('#question-form').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));
 }
 await waitFor(w,'#axes-panel');
 const completed=JSON.parse(w.localStorage.getItem('uruguay-compass-v2'));assert.equal(completed.completed,true);assert.equal(completed.migrated,false);assert.equal(Object.keys(completed.answers).length,36);
 assert.equal(w.localStorage.getItem('uruguay-compass-v1-archive'),previous);
 w.location.hash='#privacidad';await waitFor(w,'[data-action=erase]');w.document.querySelector('[data-action=erase]').click();
 for(const key of ['uruguay-compass-v1','uruguay-compass-v2','uruguay-compass-v1-archive'])assert.equal(w.localStorage.getItem(key),null);
 dom.window.close();
});

test('failed migration writes keep the original saved test intact',async()=>{
 const {dom,w,previous}=await boot({blocked:true});
 assert.equal(w.localStorage.getItem('uruguay-compass-v1'),previous);
 assert.equal(w.localStorage.getItem('uruguay-compass-v2'),null);
 assert.ok(w.document.querySelector('.resume-actions'));
 dom.window.close();
});

test('migration preserves an existing archive as well as a different previous test',async()=>{
 const archive=JSON.stringify({schema:1,version:'short',answers:{a0q1:4},cursor:1,completed:false});
 const {dom,w,previous}=await boot({archive});
 assert.equal(w.localStorage.getItem('uruguay-compass-v1-archive'),archive);
 assert.equal(w.localStorage.getItem('uruguay-compass-v1'),previous);
 assert.equal(JSON.parse(w.localStorage.getItem('uruguay-compass-v2')).schema,3);
 dom.window.close();
});
