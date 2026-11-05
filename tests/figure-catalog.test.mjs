import test from 'node:test';
import assert from 'node:assert/strict';
import {DOCUMENTED_FIGURES as FIGURES} from '../dist/politics.js';
import {COMPARISON_AXES} from '../dist/comparison-profiles.js';
import {hasMapEvidence,filteredSpectrum,spectrumGroups} from '../dist/spectrum.js';

const removed=['topolansky','blanca-rodriguez','da-silva','artigas','rivera','oribe','lavalleja','berro','haedo','batlle','latorre'];
test('31 sourced numerical references retain their coverage alongside 22 documentary additions',()=>{
 assert.equal(FIGURES.length,53);assert.equal(new Set(FIGURES.map(f=>f.id)).size,53);
 assert.equal(FIGURES.filter(f=>f.rankEligible).length,31);
 for(const f of FIGURES.filter(f=>f.rankEligible)){
  assert.ok(f.rankEligible&&f.eligible&&f.comparable,f.id);
  assert.ok(f.bio.length>50&&f.actions.length>0&&f.sources.length>0,f.id);
  assert.ok(f.sources.every(s=>s.title&&s.url.startsWith('https://')),f.id);
  assert.equal(f.profile.length,12);assert.equal(f.rationale.length,12);
  assert.ok(hasMapEvidence(f),f.id);
  for(const [axis,value] of f.profile.entries())if(value!==null){
   assert.ok(Number.isFinite(value)&&value>=0&&value<=100,f.id);
   assert.ok(f.evidence.some(e=>e.axis===axis&&f.sources[e.source]?.url),f.id+' evidence');
  }
  for(const axis of COMPARISON_AXES)assert.ok(Number.isFinite(f.profile[axis]),f.id);
 }
 assert.equal(removed.length,11);
 for(const id of removed){assert.ok(!FIGURES.some(f=>f.id===id),id);assert.ok(!filteredSpectrum(FIGURES,{query:id}).some(f=>f.id===id),id)}
 assert.equal(filteredSpectrum(FIGURES,{query:'Aparicio Sarabia'}).length,0);
});

test('Lacalle Herrera uses only the five documented topics of the signed 2009 ticket program',()=>{
 const f=FIGURES.find(f=>f.id==='lacalle-herrera');
 assert.equal(f.comparisonLabel,'Programa de fórmula de 2009');
 assert.deepEqual(f.profile,[75,null,null,85,null,null,null,10,null,null,60,35]);
 for(const axis of COMPARISON_AXES){const e=f.evidence.find(e=>e.axis===axis);assert.ok(e.page>=12&&e.page<=25);assert.equal(f.sources[e.source].url,'https://impo.com.uy/diariooficial/2009/10/01/avisosdeldia.pdf')}
 assert.ok(f.comparisonNote.includes('no una medición personal'));
});

test('vicepresidential references preserve shared programs and explicit ties',()=>{
 const groups=spectrumGroups(FIGURES);
 for(const [vice,president,year] of [['astori','mujica',2009],['argimon','lacalle',2019]]){
  const a=FIGURES.find(f=>f.id===vice),b=FIGURES.find(f=>f.id===president);
  assert.ok(a.rankEligible&&a.mapBasis.includes(year));
  assert.deepEqual([a.profile[0],a.profile[3]],[b.profile[0],b.profile[3]]);
  assert.ok(groups.some(g=>g.figures.some(f=>f.id===vice)&&g.figures.some(f=>f.id===president)));
  assert.ok(a.profile.filter(v=>v===null).length<=7);
 }
});

test('restored presidents identify government evidence, keep unknowns and balance security sources',()=>{
 for(const [id,period] of [['sanguinetti','1995–2000'],['jorge-batlle','2000–2005']]){
  const f=FIGURES.find(f=>f.id===id);
  assert.equal(f.comparisonType,'government');assert.equal(f.comparisonLabel,`Medidas de gobierno ${period}`);
  assert.ok(f.comparisonNote.includes('no un programa electoral'));
  assert.ok(f.comparisonNote.includes('no se atribuye su autoría exclusiva'));
  assert.ok(f.profile.filter(v=>v===null).length<=7);
  assert.deepEqual([...new Set(f.evidence.map(e=>e.axis))],COMPARISON_AXES);
 }
 const batlle=FIGURES.find(f=>f.id==='jorge-batlle');
 const security=batlle.evidence.filter(e=>e.axis===3);
 assert.equal(security.length,2);assert.ok(security.some(e=>batlle.sources[e.source].url.includes('17726-2003')));
 assert.ok(batlle.rationale[3].includes('alternativas'));
});

test('dated public statements cover five shared topics without filling unknowns or copying a party',()=>{
 for(const [id,period] of [['bergara','2024'],['andrade','2016–2019']]){
  const f=FIGURES.find(f=>f.id===id);assert.equal(f.comparisonType,'statements');
  assert.equal(f.comparisonLabel,'Declaraciones públicas de '+period);
  assert.ok(f.profile.filter(v=>v===null).length<=7);
  for(const axis of COMPARISON_AXES)assert.ok(f.evidence.some(e=>e.axis===axis));
  assert.ok(f.comparisonNote.includes('se presume que estas posiciones sigan vigentes'));
 }
 const f=FIGURES.find(f=>f.id==='andrade'),e=f.evidence.find(e=>e.axis===7);
 assert.ok(e.note.includes('2016'));assert.ok(f.sources[e.source].url.includes('elobservador'));
});
