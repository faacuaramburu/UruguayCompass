import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {FIGURES} from '../dist/politics.js';
import {hasMapEvidence,spectrumGroups,filteredSpectrum,renderSpectrumView,placeSpectrumLabels} from '../dist/spectrum.js';

test('expanded catalog keeps evidence, unknowns and the balanced ranking separate',()=>{
 assert.equal(FIGURES.length,28);
 assert.equal(new Set(FIGURES.map(e=>e.id)).size,28);
 assert.equal(FIGURES.filter(e=>e.rankEligible).length,6);
 assert.equal(FIGURES.filter(hasMapEvidence).length,21);
 for(const f of FIGURES.filter(hasMapEvidence))for(const axis of [0,3]){
  const evidence=f.evidence.find(e=>e.axis===axis);assert.ok(f.sources[evidence.source].url.startsWith('https://'));assert.ok(evidence.note.length>20);assert.ok(f.mapBasis);
 }
 const artigas=FIGURES.find(e=>e.id==='artigas');assert.equal(hasMapEvidence(artigas),false);assert.equal(artigas.profile[0],null);assert.equal(artigas.profile[3],null);
 assert.equal(hasMapEvidence({...FIGURES[0],evidence:[]}),false);
});
test('shared coordinates retain every name without moving data points',()=>{
 const groups=spectrumGroups(FIGURES);
 assert.equal(groups.reduce((sum,g)=>sum+g.figures.length,0),21);
 const fa=groups.find(g=>g.figures.some(e=>e.id==='orsi'));assert.deepEqual(fa.figures.map(e=>e.id).sort(),['cosse','orsi']);assert.equal(fa.economy,80);assert.equal(fa.security,40);
 for(const g of groups)for(const f of g.figures)assert.deepEqual([g.economy,g.security],[f.profile[0],f.profile[3]]);
});
test('filters support accents, party membership and unknown historical profiles',()=>{
 assert.equal(filteredSpectrum(FIGURES,{query:'cesar'}).at(0).id,'vega');
 assert.equal(filteredSpectrum(FIGURES,{party:'historic'}).at(0).id,'artigas');
 assert.ok(filteredSpectrum(FIGURES,{party:'pn'}).every(e=>e.party==='pn'));
 assert.deepEqual(filteredSpectrum(FIGURES,{query:'<script>'}),[]);
});
test('number labels avoid one another while source points remain fixed',()=>{
 const groups=spectrumGroups(FIGURES),positioned=placeSpectrumLabels(groups,Array(12).fill(50));
 for(let i=0;i<positioned.length;i++){
  const a=positioned[i];assert.ok(a.label.x>=120&&a.label.x<=640);assert.ok(a.label.y>=86&&a.label.y<=504);
  assert.equal(a.point.x,100+(100-a.economy)*5.6);assert.equal(a.point.y,65+(100-a.security)*4.6);
  for(const b of positioned.slice(i+1))assert.ok(Math.hypot(a.label.x-b.label.x,a.label.y-b.label.y)>=51.9);
 }
});
test('map and full catalog stay accessible, including missing data and exact overlaps',()=>{
 const p=Array(12).fill(50);p[0]=80;p[3]=40;
 const dom=new JSDOM(renderSpectrumView(p,FIGURES,{selectedId:'cosse'}));const d=dom.window.document;
 assert.equal(d.querySelectorAll('.spectrum-reference').length,28);assert.equal(d.querySelectorAll('.spectrum-marker').length,spectrumGroups(FIGURES).length);
 assert.equal(d.querySelector('.spectrum-user-label').textContent,'Vos');assert.equal(d.querySelectorAll('.spectrum-user-ring').length,1);
 assert.ok(d.querySelector('.spectrum-detail').textContent.includes('Yamandú Orsi'));assert.ok(d.querySelector('.spectrum-detail').textContent.includes('0 puntos'));
 assert.ok([...d.querySelectorAll('.spectrum-marker')].every(e=>e.getAttribute('role')==='button'&&e.getAttribute('tabindex')==='0'));
 const hidden=new JSDOM(renderSpectrumView(p,FIGURES,{selectedId:'artigas'}));assert.ok(hidden.window.document.querySelector('.spectrum-detail').textContent.includes('sin colocar un punto inventado'));
 const empty=new JSDOM(renderSpectrumView(p,FIGURES,{query:'nadie-con-este-nombre'}));assert.ok(empty.window.document.querySelector('.spectrum-user-label'));assert.equal(empty.window.document.querySelectorAll('.spectrum-marker').length,0);
 for(const instance of [dom,hidden,empty])instance.window.close();
});
