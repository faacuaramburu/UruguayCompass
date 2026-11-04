import test from 'node:test';
import assert from 'node:assert/strict';
import {FIGURES} from '../dist/politics.js';
import {hasMapEvidence} from '../dist/spectrum.js';
import {PHOTOS} from '../dist/photos.js';
test('all 31 identities and portraits remain, including unknown positions',()=>{
 assert.equal(FIGURES.length,31);assert.equal(new Set(FIGURES.map(f=>f.id)).size,31);assert.ok(FIGURES.some(f=>!f.rankEligible));
 for(const f of FIGURES){assert.ok(f.bio&&PHOTOS[f.id]);assert.equal(f.profile.length,12);assert.equal(f.rationale.length,12);assert.ok(f.sources.length&&f.research.note);assert.match(f.comparisonLabel,/Evidencia individual/);
  for(const [axis,v] of f.profile.entries())if(v!==null){assert.ok(v>=0&&v<=100);assert.ok(f.evidence.some(e=>e.axis===axis&&f.sources[e.source]?.url))}
  if(hasMapEvidence(f))assert.ok(Number.isFinite(f.profile[0])&&Number.isFinite(f.profile[3]));
 }assert.equal(hasMapEvidence(FIGURES.find(f=>f.id==='canoniero')),false);
});
test('dated actions distinguish shared institutional responsibility and incomplete history',()=>{
 for(const id of ['sanguinetti','jorge-batlle','vazquez','astori','mujica']){const f=FIGURES.find(f=>f.id===id);assert.equal(f.comparisonType,'individual-evidence');assert.match(f.comparisonNote,/No se heredan/);assert.ok(f.profile.some(v=>v===null))}
 assert.match(FIGURES.find(f=>f.id==='larranaga').research.note,/original/);assert.match(FIGURES.find(f=>f.id==='ripoll').research.note,/cambio de militancia/);
});
