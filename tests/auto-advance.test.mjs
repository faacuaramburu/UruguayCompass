import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
import {AXES} from '../dist/context.js';
import {QUESTIONS} from '../dist/questions.js';
import {questionSet} from '../dist/core.js';

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
 assert.equal(query('.test-options').parentElement,query('.test-controls'));
 assert.equal(query('#auto-advance-help'),null);
 assert.equal(query('.test-options p'),null);
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
 assert.equal(query('#auto-advance-help'),null);
 dom.window.close();
});

test('the question card identifies all twelve axes and keeps help separate from answers',async()=>{
 const {dom,query,saved}=await boot();
 const qs=questionSet(QUESTIONS,'short');
 const axisIcons=new Set();
 assert.deepEqual([...query('.answers').querySelectorAll('input')].map(input=>Number(input.value)),[4,3,2,1,0]);
 assert.equal(query('progress').value,0);
 for(let i=0;i<12;i++){
  assert.equal(query('.question-axis').textContent,AXES[qs[i].axis].name);
  const icon=query('.question-axis svg');assert.equal(icon.getAttribute('aria-hidden'),'true');axisIcons.add(icon.innerHTML);
  assert.equal(query('.question').textContent,qs[i].text);
  assert.equal(query('#question-context').hidden,true);
  query('[data-action=question-context]').click();
  assert.equal(query('[data-action=question-context]').getAttribute('aria-expanded'),'true');
  assert.equal(query('#question-context').hidden,false);
  assert.equal(Object.keys(saved().answers).length,i,'Opening help must not answer or advance');
  query('[data-action=question-context]').click();assert.equal(query('#question-context').hidden,true);
  query('[name=answer][value="4"]').click();
  assert.equal(saved().answers[qs[i].id],4,'Changing visual order preserves the stored answer value');
  query('#question-form button[type=submit]').click();
  assert.equal(query('progress').value,i+1);
 }
 assert.equal(axisIcons.size,12,'Each axis has its own icon');
 dom.window.close();
});

test('the test header has only an icon theme toggle and a restart control that preserves answers until confirmed',async()=>{
 const {dom,w,query,saved}=await boot();
 const nav=query('.app-header nav');
 assert.equal(nav.querySelectorAll('a').length,0);
 assert.deepEqual([...nav.querySelectorAll('button')].map(b=>b.dataset.action),['theme','reset']);
 const toggle=query('[data-action=theme]');
 assert.equal(toggle.textContent,'');assert.equal(toggle.getAttribute('aria-label'),'Activar modo oscuro');
 const moon=toggle.innerHTML;
 query('[name=answer][value="3"]').click();const before=saved();
 toggle.click();assert.equal(w.document.documentElement.dataset.theme,'dark');
 assert.equal(toggle.textContent,'');assert.equal(toggle.getAttribute('aria-label'),'Activar modo claro');assert.notEqual(toggle.innerHTML,moon);
 assert.equal(w.localStorage.getItem('compass-theme'),'dark');assert.deepEqual(saved(),before);
 toggle.click();assert.equal(toggle.innerHTML,moon);assert.deepEqual(saved(),before);
 query('.app-header [data-action=reset]').click();
 assert.ok(query('[data-action=confirm-reset]'));assert.deepEqual(saved(),before);
 query('.actions a[href="#test"]').click();await new Promise(r=>setTimeout(r,20));
 assert.equal(query('[name=answer][value="3"]').checked,true);
 query('.app-header [data-action=reset]').click();query('[data-action=confirm-reset]').click();
 await new Promise(r=>setTimeout(r,20));assert.equal(saved(),null);
 const homeToggle=query('[data-action=theme]');assert.equal(homeToggle.textContent,'');assert.ok(homeToggle.querySelector('svg'));
 w.location.hash='#metodologia';await new Promise(r=>setTimeout(r,20));
 assert.equal(query('.app-header nav').querySelectorAll('a').length,3);
 assert.equal(query('[data-action=theme]').textContent,'');
 dom.window.close();
});
