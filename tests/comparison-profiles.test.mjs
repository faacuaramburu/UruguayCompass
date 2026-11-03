import test from 'node:test';
import assert from 'node:assert/strict';
import {FIGURES,PARTIES,POLITICAL_META} from '../dist/politics.js';
import {COMPARISON_AXES} from '../dist/comparison-profiles.js';
import {rankProfiles,sharedAxes} from '../dist/core.js';
import {PHOTOS} from '../dist/photos.js';

test('older candidacies can win the same four-axis comparison without filling unknowns',()=>{
 const eligible=FIGURES.filter(f=>f.rankEligible);
 assert.equal(eligible.length,31);
 assert.deepEqual(sharedAxes(eligible),COMPARISON_AXES);
 for(const [id,year] of [['mujica',2009],['vazquez',2014],['lacalle',2019],['martinez',2019],['talvi',2019]]){
  const f=eligible.find(e=>e.id===id);
  const profile=f.profile.map(n=>n??50);
  const result=rankProfiles(profile,eligible);
  assert.ok(result.ranked.some(x=>x.entity.id===id&&x.score===result.ranked[0].score),`${id} can be a closest reference`);
  assert.equal(result.ranked[0].score,100);
  assert.equal(f.comparisonLabel,`Programa de candidatura de ${year}`);
  assert.equal(f.profile.filter(n=>n===null).length,8);
  for(const axis of COMPARISON_AXES){const e=f.evidence.find(e=>e.axis===axis);assert.ok(e?.page>0);assert.ok(f.sources[e.source].url.startsWith('https://'));}
  assert.ok(PHOTOS[id]?.src);
 }
 assert.deepEqual(POLITICAL_META.figuresInRanking,eligible.map(f=>f.id));
});

test('party comparisons and the six 2024 candidacies keep their original coverage and values',()=>{
 const current=FIGURES.filter(f=>f.cohort==='candidaturas-2024');
 assert.equal(current.length,6);assert.equal(PARTIES.length,6);
 for(const f of current)assert.deepEqual(f.profile,PARTIES.find(p=>p.id===f.party).profile);
 assert.deepEqual(sharedAxes(PARTIES),COMPARISON_AXES);
 assert.ok(FIGURES.filter(f=>!f.rankEligible).every(f=>!POLITICAL_META.figuresInRanking.includes(f.id)));
});
