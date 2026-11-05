import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {FIGURES,PARTIES,DOCUMENTED_FIGURES} from '../dist/politics.js';
import {comparisonEntities,compareEntities,renderComparator,searchComparisonProfiles,selectedComparisonProfiles,comparisonIdsFromRoute,comparisonShareHash} from '../dist/political-comparator.js';
import {mountComparator} from '../dist/comparator-controller.js';
const choices=comparisonEntities(FIGURES,PARTIES);

test('search covers 53 people and six parties, ignores accents and excludes selected profiles',()=>{
 assert.equal(choices.length,59);
 assert.ok(searchComparisonProfiles(choices,[],'jose batlle').some(x=>x.id==='persona/batlle-ordonez'));
 assert.ok(searchComparisonProfiles(choices,[],'Bianchi').some(x=>x.id==='persona/bianchi'));
 assert.equal(searchComparisonProfiles(choices,['persona/orsi'],'Orsi').length,0);
 assert.equal(searchComparisonProfiles(choices,[],'  ').length,0);
 assert.deepEqual(selectedComparisonProfiles(choices,['persona/orsi','persona/orsi','invalid']).map(x=>x.id),['persona/orsi']);
 assert.equal(selectedComparisonProfiles(choices,choices.slice(0,5).map(x=>x.id)).length,3);
 const ids=['persona/orsi','partido/pn','persona/terra'];assert.deepEqual(comparisonIdsFromRoute(comparisonShareHash(ids).split('/')[1]),ids);
 assert.deepEqual(comparisonIdsFromRoute('%broken'),[]);
});

test('two and three profiles retain exact positions, individual evidence and genuine missing values',()=>{
 for(const ids of [['persona/orsi','persona/delgado'],['persona/orsi','partido/pn','persona/bianchi']]){
  const selected=selectedComparisonProfiles(choices,ids),before=structuredClone(selected.map(x=>x.entity));
  const dom=new JSDOM(renderComparator(choices,ids)),d=dom.window.document;
  assert.equal(d.querySelectorAll('.cmp-profile').length,ids.length);assert.equal(d.querySelectorAll('.compare-axis').length,12);
  for(const axis of d.querySelectorAll('.compare-axis')){
   const i=Number(axis.dataset.axis),known=selected.filter(x=>Number.isFinite(x.entity.profile[i]));
   const pins=axis.querySelectorAll('.cmp-pin');assert.equal(pins.length,known.length);
   for(const [j,pin] of [...pins].entries()){assert.equal(pin.style.left,known[j].entity.profile[i]+'%');assert.ok(pin.getAttribute('aria-label').includes(known[j].entity.name))}
  }
  assert.equal(d.querySelectorAll('.cmp-pair').length,ids.length===3?3:1);
  assert.ok(d.querySelectorAll('.cmp-evidence a[href^="https://"]').length>0);
  assert.doesNotMatch(d.body.textContent,/undefined|NaN/);assert.deepEqual(selected.map(x=>x.entity),before);
  dom.window.close();
 }
 const empty=new JSDOM(renderComparator(choices,[]));assert.equal(empty.window.document.querySelectorAll('.compare-axis').length,0);
 const one=new JSDOM(renderComparator(choices,['persona/orsi','persona/orsi']));assert.equal(one.window.document.querySelectorAll('.cmp-profile').length,1);
 const unknown=new JSDOM(renderComparator(comparisonEntities(DOCUMENTED_FIGURES,PARTIES),['persona/terra','persona/saravia']));assert.equal(unknown.window.document.querySelectorAll('.cmp-pin').length,0);assert.equal(unknown.window.document.querySelector('.cmp-compass'),null);
 const same=FIGURES.find(f=>f.id==='orsi');assert.ok(compareEntities(same,same).every(row=>row.gap===null||row.gap===0));
});

test('overlapping labels use separate lanes without moving scores or shared compass coordinates',()=>{
 const custom=choices.slice(0,3).map((item,i)=>({...item,id:'test/'+i,entity:{...item.entity,profile:Array(12).fill(50)}}));
 const d=new JSDOM(renderComparator(custom,custom.map(x=>x.id))).window.document;
 const pins=[...d.querySelectorAll('.compare-axis[data-axis="0"] .cmp-pin')];
 assert.deepEqual(pins.map(x=>x.style.left),['50%','50%','50%']);
 assert.deepEqual(pins.map(x=>x.style.getPropertyValue('--pin-row')),['0','1','2']);
 for(const track of d.querySelectorAll('.cmp-track')){const count=Number(track.style.getPropertyValue('--profile-count'));for(const pin of track.querySelectorAll('.cmp-pin'))assert.ok(Number(pin.style.getPropertyValue('--profile-index'))<count)}
 assert.equal(d.querySelectorAll('.cmp-compass g').length,1);assert.match(d.querySelector('.cmp-compass g text').textContent,/1·2·3/);
});

test('combobox keyboard navigation, Escape, zero matches and cleanup work without submitting the test',async()=>{
 const dom=new JSDOM('<main>'+renderComparator(choices,[])+'</main>',{url:'https://example.org/#comparador',pretendToBeVisual:true}),w=dom.window,root=w.document.querySelector('main');
 let changed=null;const cleanup=mountComparator(root,choices,[],ids=>changed=ids,w),input=root.querySelector('#compare-search');
 const search=text=>{input.value=text;input.dispatchEvent(new w.Event('input',{bubbles:true}))};
 search('Mónica');assert.equal(input.getAttribute('aria-expanded'),'true');assert.ok(root.querySelector('[role=option]'));
 input.dispatchEvent(new w.KeyboardEvent('keydown',{key:'ArrowDown',bubbles:true}));assert.equal(input.getAttribute('aria-activedescendant'),'cmp-option-0');
 input.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Enter',bubbles:true,cancelable:true}));assert.deepEqual(changed,['persona/bottero']);
 input.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape',bubbles:true}));assert.equal(input.getAttribute('aria-expanded'),'false');assert.equal(root.querySelectorAll('[aria-selected="true"]').length,0);
 search('a');const options=[...root.querySelectorAll('[role=option]')],scrolled=[];for(const [i,option] of options.entries())option.scrollIntoView=()=>scrolled.push(i);
 input.dispatchEvent(new w.KeyboardEvent('keydown',{key:'ArrowUp',bubbles:true}));assert.equal(input.getAttribute('aria-activedescendant'),'cmp-option-'+(options.length-1));assert.equal(scrolled.at(-1),options.length-1);
 input.dispatchEvent(new w.KeyboardEvent('keydown',{key:'ArrowDown',bubbles:true}));assert.equal(input.getAttribute('aria-activedescendant'),'cmp-option-0');
 for(let i=0;i<20;i++)input.dispatchEvent(new w.KeyboardEvent('keydown',{key:'ArrowDown',bubbles:true}));assert.equal(scrolled.at(-1),20);
 input.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape',bubbles:true}));assert.equal(root.querySelectorAll('[aria-selected="true"]').length,0);assert.equal(input.hasAttribute('aria-activedescendant'),false);
 search('nombre inexistente');assert.equal(root.querySelector('#compare-empty').hidden,false);assert.equal(input.hasAttribute('aria-activedescendant'),false);
 cleanup();changed=null;search('Orsi');input.dispatchEvent(new w.KeyboardEvent('keydown',{key:'ArrowDown',bubbles:true}));input.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Enter',bubbles:true}));assert.equal(changed,null);
 assert.equal(w.localStorage.length,0);dom.window.close();
});
