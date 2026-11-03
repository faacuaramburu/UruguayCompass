import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {FIGURES} from '../dist/politics.js';
import {hasMapEvidence,spectrumGroups,filteredSpectrum,renderSpectrumView,placeSpectrumLabels} from '../dist/spectrum.js';

test('expanded catalog keeps evidence, unknowns and the balanced ranking separate',()=>{
 assert.equal(FIGURES.length,25);
 assert.equal(new Set(FIGURES.map(e=>e.id)).size,25);
 assert.equal(FIGURES.filter(e=>e.rankEligible).length,11);
 assert.equal(FIGURES.filter(hasMapEvidence).length,21);
 for(const f of FIGURES.filter(hasMapEvidence))for(const axis of [0,3]){
  const evidence=f.evidence.find(e=>e.axis===axis);assert.ok(f.sources[evidence.source].url.startsWith('https://'));assert.ok(evidence.note.length>20);assert.ok(f.mapBasis);
 }
 for(const id of ['artigas','batlle','herrera'])assert.equal(FIGURES.find(e=>e.id===id),undefined);
 const jorge=FIGURES.find(e=>e.id==='jorge-batlle');assert.equal(hasMapEvidence(jorge),false);assert.equal(jorge.profile[3],null);
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
 assert.deepEqual(filteredSpectrum(FIGURES,{party:'historic'}),[]);
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
 assert.equal(d.querySelectorAll('.spectrum-reference').length,25);assert.equal(d.querySelectorAll('.spectrum-marker').length,spectrumGroups(FIGURES).length);
 assert.equal(d.querySelector('.spectrum-user-label').textContent,'Vos');assert.equal(d.querySelectorAll('.spectrum-user-ring').length,1);
 assert.equal(d.querySelectorAll('.spectrum-selected-label').length,0);
 assert.equal(d.querySelector('.spectrum-detail h3').textContent,'Comparación con vos');assert.equal(d.querySelector('.spectrum-catalog').open,false);
 assert.ok(d.querySelector('.spectrum-user-ring').compareDocumentPosition(d.querySelector('.spectrum-marker'))&2,'User marker is drawn above all references');
 assert.ok(d.querySelector('.spectrum-detail').textContent.includes('Yamandú Orsi'));assert.ok(d.querySelector('.spectrum-detail').textContent.includes('Comparten posición'));
 assert.ok([...d.querySelectorAll('.spectrum-marker')].every(e=>e.getAttribute('role')==='button'&&e.getAttribute('tabindex')==='0'));
 const hidden=new JSDOM(renderSpectrumView(p,FIGURES,{selectedId:'jorge-batlle'}));assert.ok(hidden.window.document.querySelector('.spectrum-detail').textContent.includes('sin colocar un punto inventado'));
 const empty=new JSDOM(renderSpectrumView(p,FIGURES,{query:'nadie-con-este-nombre'}));assert.ok(empty.window.document.querySelector('.spectrum-user-label'));assert.equal(empty.window.document.querySelectorAll('.spectrum-marker').length,0);
 for(const instance of [dom,hidden,empty])instance.window.close();
});

test('all-party labels leave room for the user, their caption and every source point',()=>{
 const groups=spectrumGroups(FIGURES);
 const profiles=[[25,75],[0,0],[0,100],[100,0],[100,100],[50,50],...groups.map(g=>[g.economy,g.security])];
 for(const [economy,security] of profiles){
  const profile=Array(12).fill(50);profile[0]=economy;profile[3]=security;
  const user={x:100+(100-economy)*5.6,y:65+(100-security)*4.6};
  const caption={x:Math.max(140,Math.min(620,user.x)),y:Math.min(552,user.y+39)-10};
  const labels=placeSpectrumLabels(groups,profile);
  for(const [i,a] of labels.entries()){
   assert.ok(Math.hypot(a.label.x-user.x,a.label.y-user.y)>=49.99);
   assert.ok(Math.hypot(Math.max(0,Math.abs(a.label.x-caption.x)-34),Math.max(0,Math.abs(a.label.y-caption.y)-18))>=26.99);
   for(const b of labels)assert.ok(Math.hypot(a.label.x-b.point.x,a.label.y-b.point.y)>=28.99);
   for(const b of labels.slice(i+1))assert.ok(Math.hypot(a.label.x-b.label.x,a.label.y-b.label.y)>=53.99);
  }
 }
});
