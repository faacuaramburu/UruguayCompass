import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {FIGURES,PARTIES,DOCUMENTED_FIGURES,DOCUMENTED_PARTIES} from '../dist/politics.js';
import {completeWithHypotheses,hypothesisAxes} from '../dist/political-hypotheses.js';
import {assertTwelveAxisCoverage} from '../dist/political-axis-research.js';
import {rankFigures} from '../dist/result-ranking.js';
import {renderDocumentaryProfile} from '../dist/figure-research-view.js';
import {comparisonEntities,renderComparator} from '../dist/political-comparator.js';
import {distinctivePriorities,renderDifferences} from '../dist/result-presentation.js';

test('all 53 people and six parties have twelve explicit positions while the original source layer is preserved',()=>{
 assert.equal(FIGURES.length,53);assert.equal(PARTIES.length,6);
 assertTwelveAxisCoverage(FIGURES);assertTwelveAxisCoverage(PARTIES);
 assert.equal(FIGURES.reduce((n,e)=>n+hypothesisAxes(e).length,0),188);
 assert.equal(PARTIES.reduce((n,e)=>n+hypothesisAxes(e).length,0),8);
 for(const [current,raw] of [[FIGURES,DOCUMENTED_FIGURES],[PARTIES,DOCUMENTED_PARTIES]])for(const entity of current){
  const original=raw.find(e=>e.id===entity.id);
  assert.equal(entity.profile.length,12);assert.ok(entity.profile.every(v=>Number.isFinite(v)&&v>=0&&v<=100));
  assert.equal(entity.axisResearch.length,12);
  for(const [axis,value] of original.profile.entries())if(value!==null)assert.equal(entity.profile[axis],value,`${entity.id}/${axis}: preserve sourced coordinates`);
  for(const axis of hypothesisAxes(entity)){
   const item=entity.placementResearch[axis];assert.equal(original.profile[axis],null);
   assert.equal(item.confidence,'muy-baja');assert.ok(item.note.length>40&&item.period&&item.refs.length&&item.basisAxes.length);
   assert.equal(entity.evidence.some(e=>e.axis===axis),false,'An analogy cannot be added as topical evidence');
   assert.equal(entity.axisResearch[axis].referenceRole,'context');assert.match(entity.rationale[axis],/no evidencia de esta postura/);
  }
 }
 assert.ok(DOCUMENTED_FIGURES.find(e=>e.id==='saravia').profile.every(v=>v===null));
 assert.equal(FIGURES.find(e=>e.id==='saravia').placementResearch[11].kind,'hypothesis');
 assert.equal(FIGURES.find(e=>e.id==='terra').placementResearch[11].kind,'estimated','Fauna law remains topical research, independent of the new hypotheses');
 assert.deepEqual(completeWithHypotheses(FIGURES),FIGURES);
});

test('hypotheses cannot lose their labels, borrow unrelated references or masquerade as topical evidence',()=>{
 const f=FIGURES.find(e=>e.id==='saravia'),axis=11;
 const alter=patch=>({...f,placementResearch:f.placementResearch.map((p,i)=>i===axis?{...p,...patch}:p)});
 assert.throws(()=>assertTwelveAxisCoverage([alter({confidence:'alta'})]),/Hipótesis/);
 assert.throws(()=>assertTwelveAxisCoverage([alter({refs:[]})]),/Hipótesis/);
 assert.throws(()=>assertTwelveAxisCoverage([alter({basisAxes:[axis]})]),/Hipótesis/);
 assert.throws(()=>assertTwelveAxisCoverage([alter({refs:[{source:0,page:99999}]})]),/no es evidencia temática/);
 assert.throws(()=>assertTwelveAxisCoverage([{...f,evidence:[...f.evidence,{axis,source:0}]}]),/no es evidencia temática/);
 assert.throws(()=>completeWithHypotheses([{id:'new-person',profile:Array(12).fill(null),rationale:Array(12).fill(''),evidence:[],sources:[]}]),/Falta una hipótesis explícita/);
});

test('fiches and the comparator visibly distinguish each hypothesis from its contextual sources',()=>{
 for(const f of FIGURES){
  const d=new JSDOM(renderDocumentaryProfile(f)).window.document;
  assert.equal(d.querySelectorAll('.research-axis').length,12);
  assert.equal(d.querySelectorAll('[data-research-kind="hypothesis"]').length,f.hypothesisCount);
  for(const item of d.querySelectorAll('[data-research-kind="hypothesis"]')){
   assert.match(item.querySelector('summary').textContent,/Hipótesis · confianza muy baja/);
   assert.match(item.textContent,/no demuestra esta postura/);assert.ok(item.querySelector('a[href^="https://"]'));
  }
  assert.doesNotMatch(d.body.textContent,/undefined|NaN/);
 }
 const d=new JSDOM(renderComparator(comparisonEntities(FIGURES,PARTIES),'persona/saravia','persona/terra')).window.document;
 assert.equal(d.querySelectorAll('.compare-axis').length,12);
 assert.equal(d.querySelectorAll('.cmp-hypothesis').length,14);
 assert.match(d.querySelector('.cmp-axis[data-axis="11"]').textContent,/Contexto de la inferencia/);
});

test('uncertain assumptions participate in the twelve-axis ranking without becoming empirical medians',()=>{
 const p=Array(12).fill(50),ranking=rankFigures(p,FIGURES);
 assert.deepEqual(ranking.axes,Array.from({length:12},(_,i)=>i));assert.equal(ranking.ranked.length,53);
 for(const row of ranking.ranked)assert.equal(row.score,Math.round(100-row.entity.profile.reduce((n,v)=>n+Math.abs(v-50),0)/12));
 const factual={profile:Array(12).fill(20)},invented={profile:Array(12).fill(90),placementResearch:Array.from({length:12},()=>({kind:'hypothesis'}))};
 assert.equal(distinctivePriorities(p,[factual,invented]),distinctivePriorities(p,[factual]),'A hypothesis cannot move the documented-reference median');
});


test('result differences identify hypothetical reference positions at the point of comparison',()=>{
 const f=FIGURES.find(e=>e.id==='saravia');
 const details={near:[{axis:11,user:70,reference:f.profile[11]}],far:[{axis:4,user:80,reference:f.profile[4]}]};
 const d=new JSDOM(renderDifferences(f,details)).window.document;
 const rows=d.querySelectorAll('.axis-comparison');
 assert.match(rows[0].textContent,/Hipótesis de confianza muy baja/);
 assert.doesNotMatch(rows[1].textContent,/Hipótesis/);
});
