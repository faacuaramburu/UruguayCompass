import test from 'node:test';
import assert from 'node:assert/strict';
import {FIGURES} from '../dist/politics.js';
import {hasMapEvidence,filteredSpectrum,spectrumGroups} from '../dist/spectrum.js';

test('all 32 requested figures have distinct sourced profiles, including restored historical references',()=>{
 const requested=['cosse','astori','bergara','alejandro-sanchez','topolansky','andrade','blanca-rodriguez','martinez','lacalle-herrera','lema','raffo','argimon','da-silva','sartori','larranaga','bordaberry','sanguinetti','jorge-batlle','silva','pacheco-areco','artigas','rivera','oribe','lavalleja','berro','saravia','herrera','wilson','haedo','batlle','terra','latorre'];
 assert.equal(requested.length,32);assert.equal(FIGURES.length,50);assert.equal(new Set(FIGURES.map(f=>f.id)).size,50);
 for(const id of requested){
  const f=FIGURES.find(f=>f.id===id);assert.ok(f,id);
  assert.ok(f.bio.length>50,id);assert.ok(f.actions.length>0,id);
  assert.ok(f.sources.length>0,id);assert.ok(f.sources.every(s=>s.title&&s.url.startsWith('https://')),id);
  assert.equal(f.profile.length,12);assert.equal(f.rationale.length,12);
  for(const [axis,value] of f.profile.entries())if(value!==null){
   assert.ok(Number.isFinite(value)&&value>=0&&value<=100,id);
   assert.ok(f.evidence.some(e=>e.axis===axis&&f.sources[e.source]?.url),id+' evidence');
  }
  if(f.historical){assert.ok(f.profile.every(v=>v===null),id);assert.equal(f.rankEligible,false);assert.equal(hasMapEvidence(f),false);}
 }
 assert.notEqual(FIGURES.find(f=>f.id==='herrera').name,FIGURES.find(f=>f.id==='lacalle-herrera').name);
 assert.equal(filteredSpectrum(FIGURES,{query:'Aparicio Sarabia'})[0].id,'saravia');
 assert.equal(filteredSpectrum(FIGURES,{query:'Bernardo Berro'})[0].id,'berro');
});

test('vicepresidential formula references share dated coordinates also become real results on the same common coverage',()=>{
 const groups=spectrumGroups(FIGURES);
 for(const [vice,president,year] of [['astori','mujica',2009],['argimon','lacalle',2019]]){
  const a=FIGURES.find(f=>f.id===vice),b=FIGURES.find(f=>f.id===president);
  assert.equal(a.rankEligible,true);assert.ok(a.mapBasis.includes(year));
  assert.deepEqual([a.profile[0],a.profile[3]],[b.profile[0],b.profile[3]]);
  assert.ok(groups.some(g=>g.figures.some(f=>f.id===vice)&&g.figures.some(f=>f.id===president)));
  assert.equal(a.profile.filter(v=>v===null).length,7);
 }
 assert.equal(FIGURES.filter(f=>f.rankEligible).length,26);
});
