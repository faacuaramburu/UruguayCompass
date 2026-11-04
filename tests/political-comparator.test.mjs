import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
import {FIGURES,PARTIES} from '../dist/politics.js';
import {compareEntities,comparisonEntities,renderComparator} from '../dist/political-comparator.js';
import {entityMedia} from '../dist/entity-media.js';
import {CURRENT_COUNTRIES,HISTORICAL_COUNTRIES,rankCountries} from '../dist/countries.js';

test('comparator uses the existing twelve positions without mutation, scores or invented unknowns',()=>{
 const first={profile:[0,50,100,null,25,...Array(7).fill(null)]},second={profile:[100,50,80,50,30,...Array(7).fill(null)]};
 const before=structuredClone([first,second]),rows=compareEntities(first,second);
 assert.equal(rows.length,12);assert.equal(rows[0].gap,100);assert.equal(rows[0].different,true);
 assert.equal(rows[1].gap,0);assert.equal(rows[1].similar,true);assert.equal(rows[2].gap,20);assert.equal(rows[3].gap,null);
 assert.ok(rows.filter(x=>x.gap===null).every(x=>!x.similar&&!x.different));
 assert.deepEqual([first,second],before);
});

test('all person-person, party-party and mixed selections render twelve axes and sources',async()=>{
 const choices=comparisonEntities(FIGURES,PARTIES);assert.equal(choices.length,59);assert.equal(new Set(choices.map(x=>x.id)).size,59);
 for(const [a,b]of[['persona/orsi','persona/sartori'],['partido/fa','partido/pn'],['persona/manini','partido/fa'],['persona/orsi','persona/orsi']]){
  const dom=new JSDOM(renderComparator(choices,a,b)),d=dom.window.document;
  assert.equal(d.querySelectorAll('.compare-axis').length,12);assert.equal(d.querySelectorAll('.compare-position').length,24);
  assert.equal(d.querySelectorAll('select option').length,118);assert.equal(d.querySelectorAll('.compare-identity img').length,2);
  assert.ok(d.querySelectorAll('.compare-axis details a').length>0);assert.doesNotMatch(d.body.textContent,/undefined|NaN/);
  if(a===b){assert.match(d.querySelector('[role=status]').textContent,/misma referencia/);assert.equal(d.querySelectorAll('.compare-tag--difference').length,0)}
  for(const image of d.querySelectorAll('.entity-media img'))await access(new URL('../dist/'+image.getAttribute('src'),import.meta.url));
  dom.window.close();
 }
 for(const id of ['canoniero','gonzalo-martinez'])assert.equal(new JSDOM(entityMedia(FIGURES.find(x=>x.id===id))).window.document.querySelector('img'),null);
});

test('obsolete constitutions retain their values only in the historical catalog',()=>{
 const af=CURRENT_COUNTRIES.find(x=>x.id==='af'),sy=CURRENT_COUNTRIES.find(x=>x.id==='sy');
 for(const c of [af,sy]){assert.ok(c.profile.every(v=>v===null));assert.match(c.period,/pendiente/)}
 assert.deepEqual(HISTORICAL_COUNTRIES.find(x=>x.id==='af-2004').profile.filter(Number.isFinite),[75,50,100]);
 assert.match(HISTORICAL_COUNTRIES.find(x=>x.id==='sy-2012').period,/2025/);
 const ranked=rankCountries(Array(12).fill(50));assert.equal(ranked.length,193);assert.ok(ranked.every(x=>!['af','sy'].includes(x.entity.id)));
});

test('standalone navigation, selectors, theme persistence, directories and media fallback work without a test',async()=>{
 const html=await readFile(new URL('../dist/index.html',import.meta.url),'utf8'),dom=new JSDOM(html,{url:'https://example.org/#comparador',pretendToBeVisual:true}),w=dom.window;
 for(const key of ['window','document','localStorage','location','FormData','File'])globalThis[key]=w[key];
 w.scrollTo=()=>{};w.HTMLElement.prototype.scrollIntoView=()=>{};w.HTMLCanvasElement.prototype.getContext=()=>new Proxy({},{get:()=>()=>{}});
 await import('../dist/app.js?comparator-integration');
 const waitFor=async selector=>{const deadline=Date.now()+2000;while(!w.document.querySelector(selector)&&Date.now()<deadline)await new Promise(r=>setTimeout(r,10));assert.ok(w.document.querySelector(selector),selector)};
 assert.equal(w.document.querySelectorAll('.compare-axis').length,12);assert.equal(w.localStorage.getItem('uruguay-compass-v2'),null);
 const select=w.document.getElementById('compare-first');select.value='partido/fa';select.dispatchEvent(new w.Event('change',{bubbles:true}));
 assert.match(w.document.querySelector('.compare-identity h2').textContent,/Frente Amplio/);assert.equal(w.document.activeElement.id,'compare-first');
 w.document.querySelector('[data-action=theme]').click();assert.equal(w.document.documentElement.dataset.theme,'dark');assert.equal(w.localStorage.getItem('compass-theme'),'dark');
 w.location.hash='#inicio';await waitFor('.home-header');assert.equal(w.document.querySelectorAll('[data-action=theme]').length,1);assert.ok(w.document.querySelector('.home-header>[data-action=theme]'));assert.equal(w.document.querySelectorAll('.home-tools [data-action=theme]').length,0);
 w.location.hash='#enciclopedia';await waitFor('.axis-guide-grid');assert.equal(w.document.querySelectorAll('.axis-guide-card').length,12);
 w.location.hash='#figuras';await waitFor('.entity-directory');assert.equal(w.document.querySelectorAll('.entity-directory>a').length,53);assert.equal(w.document.querySelectorAll('.entity-directory img').length,50);
 const image=w.document.querySelector('.entity-directory img');image.dispatchEvent(new w.Event('error'));assert.ok(!image.closest('.entity-media').classList.contains('has-image'));
 w.document.getElementById('entity-search').value='Sartori';w.document.getElementById('entity-search').dispatchEvent(new w.Event('input',{bubbles:true}));assert.equal([...w.document.querySelectorAll('.entity-directory>a')].filter(x=>!x.hidden).length,1);
 w.location.hash='#partidos';await waitFor('.entity-media--party');assert.equal(w.document.querySelectorAll('.entity-directory img').length,6);
 dom.window.close();
});
