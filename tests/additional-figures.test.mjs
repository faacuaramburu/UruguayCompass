import test from 'node:test';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {access,readFile} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
import {ADDITIONAL_FIGURES} from '../dist/additional-figures.js';
import {FIGURES,PARTIES} from '../dist/politics.js';
import {rankFigures} from '../dist/result-ranking.js';
import {distinctivePriorities} from '../dist/result-presentation.js';
import {comparisonEntities,renderComparator} from '../dist/political-comparator.js';
import {renderDocumentaryProfile} from '../dist/figure-research-view.js';
import {PHOTOS} from '../dist/photos.js';
import {hasMapEvidence} from '../dist/spectrum.js';

const hash=value=>createHash('sha256').update(JSON.stringify(value)).digest('hex');
const previous=FIGURES.filter(f=>!f.researchOnly);
test('all 31 previous profiles and 100 complete ranking results match the pre-change baseline',()=>{
 const records=previous.map(({id,profile,rationale,evidence,sources,rankEligible,eligible,comparable})=>({id,profile,rationale,evidence,sources,rankEligible,eligible,comparable}));
 assert.equal(hash(records),'4e34ec0c49ff3bb2d9a09d71d0ac4104c8f3eaf3e6044fe658eb420dbcc33e06');
 const profiles=Array.from({length:100},(_,n)=>Array.from({length:12},(_,i)=>(n*17+i*29)%101));
 assert.equal(hash(profiles.map(p=>rankFigures(p,FIGURES))),'97ce95fafab3b19c6db0649243a0da503273385ba1519299baac364cbd00c07b');
 for(const p of profiles)assert.deepEqual(distinctivePriorities(p,FIGURES),distinctivePriorities(p,previous));
});

test('22 distinct additions preserve unknowns and have independently referenced twelve-axis research',()=>{
 assert.equal(ADDITIONAL_FIGURES.length,22);assert.equal(new Set(ADDITIONAL_FIGURES.map(f=>f.id)).size,22);
 assert.equal(ADDITIONAL_FIGURES.filter(f=>f.historical).length,16);
 for(const f of ADDITIONAL_FIGURES){
  assert.ok(!f.rankEligible&&!f.eligible&&!f.comparable&&f.researchOnly,f.id);
  assert.ok(f.profile.length===12&&f.profile.every(v=>v===null),f.id);
  assert.equal(hasMapEvidence(f),false);assert.equal(f.axisResearch.length,12);
  assert.ok(f.period&&f.evolution&&f.orientation&&f.role&&f.bio,f.id);
  assert.ok(f.axisResearch.some(a=>a.kind!=='unknown'),f.id);
  for(const [axis,a] of f.axisResearch.entries()){
   assert.equal(a.axis,axis);assert.ok(a.position&&a.basis);
   if(a.kind==='unknown'){assert.equal(a.confidence,null);assert.deepEqual(a.refs,[])}
   else{assert.ok(['alta','media','baja'].includes(a.confidence));assert.ok(a.refs.length>0);assert.ok(['documented','interpreted'].includes(a.kind))}
   for(const ref of a.refs){assert.ok(f.sources[ref.source]?.url.startsWith('https://'),f.id);assert.ok(ref.page===null||(Number.isInteger(ref.page)&&ref.page>0))}
  }
  const d=new JSDOM(renderDocumentaryProfile(f)).window.document;
  assert.equal(d.querySelectorAll('.research-axis').length,12);assert.ok(d.querySelectorAll('a[href^="https://"]').length>0);
  assert.doesNotMatch(d.body.textContent,/undefined|NaN|\d+%/);
 }
 for(const id of ['sendic-antonaccio','batlle-ordonez','batlle-berres','juan-maria-bordaberry'])assert.ok(ADDITIONAL_FIGURES.some(f=>f.id===id));
 assert.match(ADDITIONAL_FIGURES.find(f=>f.id==='lema').evolution,/Dejó Aire Fresco en 2025/);
 assert.match(ADDITIONAL_FIGURES.find(f=>f.id==='sendic-antonaccio').role,/1989/);
});

test('documentary comparisons show text, confidence and evidence without manufacturing distances',()=>{
 const choices=comparisonEntities(FIGURES,PARTIES);
 for(const f of ADDITIONAL_FIGURES){
  const d=new JSDOM(renderComparator(choices,'persona/'+f.id,'persona/orsi')).window.document;
  assert.equal(d.querySelectorAll('.compare-documentary').length,12);
  assert.equal(d.querySelectorAll('.compare-documentary .compare-track').length,0);
  assert.ok([...d.querySelectorAll('.compare-gap')].every(p=>p.textContent.includes('Sin puntajes comunes')));
  assert.doesNotMatch([...d.querySelectorAll('.compare-documentary')].map(e=>e.textContent).join(' '),/\d+%|undefined|NaN/);
  for(const a of f.axisResearch.filter(a=>a.kind!=='unknown'))assert.ok(d.body.textContent.includes(a.position));
 }
});

test('22 authentic local photo assets have provenance, rights status and valid subject crops',async()=>{
 for(const f of ADDITIONAL_FIGURES){
  const photo=PHOTOS[f.id];assert.ok(photo.author&&photo.source.startsWith('https://'));
  await access(new URL('../dist/'+photo.src,import.meta.url));
  const data=await readFile(new URL('../dist/'+photo.src,import.meta.url));assert.equal(data.readUInt16BE(0),0xffd8);
  assert.ok(photo.license||photo.rightsStatus==='unspecified');
  if(photo.crop){const [x,y,w,h]=photo.crop,[width,height]=photo.dimensions;assert.ok(x>=0&&y>=0&&w>0&&h>0&&x+w<=width&&y+h<=height,f.id)}
 }
 assert.equal(PHOTOS['sendic-antonaccio'].license,null);assert.equal(PHOTOS['sendic-antonaccio'].author,'Chacho Guerra');
 assert.match(PHOTOS.arismendi.note,/no su interlocutor/);assert.match(PHOTOS.michelini.note,/retrato izquierdo/);
});
