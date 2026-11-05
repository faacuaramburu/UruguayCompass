import test from 'node:test';
import assert from 'node:assert/strict';
import {FIGURES} from '../dist/politics.js';
import {extendPoliticalAxisResearch,axisResearchCoverage,assertTwelveAxisCoverage,rankTwelveAxisProfiles} from '../dist/political-axis-research.js';

test('research fills only supported gaps, retaining existing coordinates and input objects',()=>{
 const before=JSON.stringify(FIGURES),proposed=extendPoliticalAxisResearch(FIGURES);
 assert.equal(proposed.length,53);
 assert.equal(JSON.stringify(FIGURES),before);
 for(const [i,f] of proposed.entries())for(const [axis,v] of FIGURES[i].profile.entries()){
  if(v!==null){assert.equal(f.profile[axis],v);assert.equal(f.rationale[axis],FIGURES[i].rationale[axis])}
  else if(f.profile[axis]!==null){const placement=f.placementResearch[axis];assert.ok(placement?.period&&placement.note&&placement.refs.length,`${f.id}/${axis}`);assert.ok(['media','baja'].includes(placement.confidence));assert.ok(placement.refs.every(ref=>f.sources[ref.source]?.url.startsWith('https://')));assert.match(f.rationale[axis],/Estimación editorial/)}
 }
 const saravia=proposed.find(f=>f.id==='saravia');
 assert.equal(saravia.profile[9],null,'An emigrant family or residence abroad does not establish immigration policy');
 assert.equal(saravia.profile[11],null,'A rural occupation does not establish environmental policy');
 assert.equal(proposed.find(f=>f.id==='terra').profile[11],30,'Conservation is sourced independently of authoritarianism');
 assert.deepEqual(extendPoliticalAxisResearch(proposed),proposed,'Research is idempotent, including provenance');
});

test('coverage is counted honestly and prevents releasing an incomplete twelve-axis ranking',()=>{
 const proposed=extendPoliticalAxisResearch(FIGURES),coverage=axisResearchCoverage(proposed);
 assert.equal(coverage.total,636);assert.ok(coverage.placed>400&&coverage.placed<636);
 assert.equal(coverage.placed+coverage.missing.reduce((n,f)=>n+f.axes.length,0),636);
 assert.throws(()=>assertTwelveAxisCoverage(proposed),/Investigación incompleta/);
 assert.throws(()=>rankTwelveAxisProfiles(Array(12).fill(50),proposed),/Investigación incompleta/);
 assert.equal(FIGURES.filter(f=>f.rankEligible).length,31,'Live ranking is preserved while research remains incomplete');
});

const fixture=(id,values)=>({id,name:id,profile:values,sources:[{title:'Fixture',url:'https://example.org/evidence'}],evidence:values.map((_,axis)=>({axis,source:0}))});
test('the new ranking uses all twelve axes with identical denominators and unrounded tie ordering',()=>{
 const p=Array(12).fill(50),same=fixture('same',[...p]),other=fixture('other',p.map((v,i)=>[0,3,7,10,11].includes(i)?v:100));
 const result=rankTwelveAxisProfiles(p,[same,other]);
 assert.deepEqual(result.axes,Array.from({length:12},(_,i)=>i));
 assert.equal(result.ranked[0].score,100);assert.equal(result.ranked[1].score,71);
 assert.equal(result.ranked[1].distance,350);
 assert.deepEqual(result.closest.map(x=>x.entity.id),['same']);
 const a=fixture('Alfa',p.map((v,i)=>i===0?48:v)),b=fixture('Beta',p.map((v,i)=>i===0?49:v));
 const rounded=rankTwelveAxisProfiles(p,[a,b]);assert.equal(rounded.ranked[0].score,rounded.ranked[1].score);assert.equal(rounded.ranked[0].entity.id,'Beta');assert.deepEqual(rounded.closest.map(x=>x.entity.id),['Beta']);
 assert.equal(rankTwelveAxisProfiles(Array(12).fill(0),[fixture('opposite',Array(12).fill(100))]).ranked[0].score,0);
});

test('the twelve-axis ranking rejects unsupported, invalid and incomplete input instead of imputing it',()=>{
 const valid=fixture('valid',Array(12).fill(50));
 assert.throws(()=>assertTwelveAxisCoverage([]),/No hay referentes/);
 assert.throws(()=>assertTwelveAxisCoverage([{...valid,profile:Array(11).fill(50)}]),/Cantidad de ejes/);
 assert.throws(()=>assertTwelveAxisCoverage([{...valid,profile:[101,...Array(11).fill(50)]}]),/Ubicación inválida/);
 assert.throws(()=>assertTwelveAxisCoverage([{...valid,evidence:valid.evidence.slice(1)}]),/Ubicación sin fuente/);
 assert.throws(()=>rankTwelveAxisProfiles([null,...Array(11).fill(50)],[valid]),/doce ejes completos/);
 assert.throws(()=>rankTwelveAxisProfiles(Array(11).fill(50),[valid]),/doce ejes completos/);
 assert.throws(()=>rankTwelveAxisProfiles([NaN,...Array(11).fill(50)],[valid]),/doce ejes completos/);
});
