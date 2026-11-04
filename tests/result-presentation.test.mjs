import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {readFile} from 'node:fs/promises';
import {CURRENT_COUNTRIES,HISTORICAL_COUNTRIES,COUNTRY_AXES,rankCountries,countryCatalog} from '../dist/countries.js';
import {ideologyDescription,renderCountryResults,distinctivePriorities,differenceCard} from '../dist/result-presentation.js';
import {readingModels} from '../dist/insights.js';
import {FIGURES} from '../dist/politics.js';
import {renderPoliticalGrid} from '../dist/compass.js';

test('country coverage is explicit and unknown profiles never receive a score',()=>{
 const catalog=countryCatalog();assert.equal(catalog.length,195);assert.equal(new Set(catalog.map(c=>c.id)).size,195);
 const p=Array(12).fill(50),before=structuredClone(p);
 for(const mode of ['current','historical']){
  const ranked=rankCountries(p,mode),known=mode==='current'?CURRENT_COUNTRIES:HISTORICAL_COUNTRIES;
  assert.equal(ranked.length,known.length);
  for(const row of ranked){assert.equal(row.score,Math.round(100-COUNTRY_AXES.reduce((sum,i)=>sum+Math.abs(p[i]-row.entity.profile[i]),0)/3));assert.ok(row.entity.sources.length);assert.ok(row.entity.sources.every(s=>s.url.startsWith('https://')))}
  const doc=new JSDOM(renderCountryResults(p,mode)).window.document;
  assert.equal(doc.querySelectorAll('.country-catalog li').length,countryCatalog(mode).length);
  assert.equal([...doc.querySelectorAll('.country-catalog strong')].filter(e=>e.textContent.endsWith('%')).length,known.length);
  assert.ok(doc.querySelector('.country-coverage').textContent.includes('constitucional'));
 }
 assert.deepEqual(p,before);
 for(const entity of [...CURRENT_COUNTRIES,...HISTORICAL_COUNTRIES])assert.equal(entity.profile.filter(v=>v===null).length,9);
});

test('ideology names and phrases retain the existing model scores and values',()=>{
 for(const model of readingModels(Array(12).fill(50))){const description=ideologyDescription(model);assert.ok(description.name&&description.phrase);assert.equal(description.score,model.score);assert.deepEqual(description.values,model.values)}
 const doc=new JSDOM(differenceCard({axis:0,user:30,reference:70})).window.document;
 assert.ok(doc.body.textContent.includes('70% Intervencionismo estatal'));assert.ok(doc.body.textContent.includes('70% Libre mercado'));
 assert.ok(doc.querySelector('.sr-only').textContent.includes('vos 30, referencia 70'));
 assert.equal(doc.querySelector('.axis-pole.is-selected .axis-pole-percent').textContent,'70%');
 assert.equal(doc.querySelector('.axis-tile-heading>strong'),null);
 assert.equal(doc.querySelector('.axis-scale,.axis-marker,.axis-reference-marker'),null);
 assert.equal(doc.querySelector('.difference'),null,'Legacy horizontal flex layout must not apply');
});

test('distinctive priorities use only evidenced medians and the compass preserves axis meaning',()=>{
 const p=Array(12).fill(50),doc=new JSDOM(distinctivePriorities(p,FIGURES)).window.document;
 assert.equal(doc.querySelectorAll('.distinctive-grid>article').length,0);
 assert.ok(doc.body.textContent.includes('evidencia'));assert.ok(!doc.body.textContent.includes('undefined'));
 const grid=new JSDOM(renderPoliticalGrid(p)).window.document;
 assert.equal(grid.querySelectorAll('rect').length,82);
 assert.ok(grid.body.textContent.includes('no mide autoritarismo'));
});

test('the theme palettes separate light and dark backgrounds instead of forcing black globally',async()=>{
 const css=await readFile(new URL('../dist/styles.css',import.meta.url),'utf8');
 const dom=new JSDOM(`<style>${css}</style>`);const rules=[...dom.window.document.styleSheets[0].cssRules];
 const root=rules.filter(r=>r.selectorText===':root').find(r=>r.style.getPropertyValue('--paper'));
 assert.equal(root.style.getPropertyValue('--paper'),'#fff');
 const dark=rules.filter(r=>r.selectorText==='html[data-theme=dark]').at(-1);
 assert.equal(dark.style.getPropertyValue('--paper'),'#000');
 assert.ok(!rules.some(r=>r.selectorText==='html,body,#app'&&r.style.background==='#000'));
 dom.window.close();
});
