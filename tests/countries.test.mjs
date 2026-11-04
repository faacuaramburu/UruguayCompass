import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
import {CURRENT_COUNTRIES,HISTORICAL_COUNTRIES,rankCountries} from '../dist/countries.js';
import {CURRENT_COUNTRY_DATA} from '../dist/country-data.js';
import {COUNTRY_CATALOG} from '../dist/country-catalog.js';
import {renderCountryResults} from '../dist/result-presentation.js';

test('all 195 country entries distinguish 193 comparable texts, two pending profiles and 23 historical texts',async()=>{
 assert.equal(CURRENT_COUNTRIES.length,195);assert.equal(CURRENT_COUNTRY_DATA.length,195);assert.equal(HISTORICAL_COUNTRIES.length,23);
 assert.deepEqual(CURRENT_COUNTRIES.map(x=>x.id).sort(),COUNTRY_CATALOG.map(x=>x.id).sort());
 assert.equal(new Set(HISTORICAL_COUNTRIES.map(x=>x.id)).size,23);
 for(const country of [...CURRENT_COUNTRIES,...HISTORICAL_COUNTRIES]){
  assert.equal(country.profile.length,12);assert.equal(country.profile.filter(Number.isFinite).length,country.review?0:3);assert.equal(country.notes.length,country.review?1:3);
  assert.match(country.period,country.review?/pendiente/:/\d{4}/);assert.ok(country.sources.length>0);
  for(const source of country.sources){assert.equal(new URL(source.url).protocol,'https:');assert.ok(source.title)}
 }
 for(const c of CURRENT_COUNTRIES){await access(new URL('../dist/flags/'+c.id+'.svg',import.meta.url));const svg=await readFile(new URL('../dist/flags/'+c.id+'.svg',import.meta.url),'utf8');assert.match(svg,/<svg/);assert.doesNotMatch(svg,/<script|\bon\w+\s*=|(?:href|src)\s*=\s*["'](?:https?:|javascript:)/i,c.id)}
 assert.deepEqual(CURRENT_COUNTRIES.find(c=>c.id==='uy').profile.filter(Number.isFinite),[25,25,0]);
 assert.deepEqual(CURRENT_COUNTRIES.find(c=>c.id==='us').profile.filter(Number.isFinite),[75,25,0]);
});

test('country ranking keeps the three-axis formula, bounds and input across varied answers',()=>{
 for(const mode of ['current','historical'])for(const p of [Array(12).fill(0),Array(12).fill(50),Array(12).fill(100),Array.from({length:12},(_,i)=>(i*17)%101)]){
  const before=[...p],result=rankCountries(p,mode);assert.equal(result.length,mode==='current'?193:23);
  for(const x of result){assert.equal(x.score,Math.round(100-[0,4,6].reduce((sum,i)=>sum+Math.abs(p[i]-x.entity.profile[i]),0)/3));assert.ok(x.score>=0&&x.score<=100)}
  assert.deepEqual(p,before);
 }
});

test('expanded country catalog stays bounded on the result and exposes sources without per-country disclosures',()=>{
 for(const mode of ['current','historical']){
  const dom=new JSDOM(renderCountryResults(Array(12).fill(50),mode)),d=dom.window.document;
  assert.equal(d.querySelectorAll('.country-match').length,4);assert.equal(d.querySelectorAll('.country-match details').length,0);
  assert.equal(d.querySelectorAll('.country-catalog li').length,mode==='current'?195:23);
  assert.ok([...d.querySelectorAll('.country-catalog li')].every(row=>row.querySelector('a')&&/%$|^Pendiente$/.test(row.querySelector('strong').textContent)));
  assert.doesNotMatch(d.body.textContent,/Sin datos suficientes|undefined|Más sobre/);
  assert.match(d.querySelector('.country-coverage').textContent,/no presupone que el texto siga vigente/);
  dom.window.close();
 }
});
