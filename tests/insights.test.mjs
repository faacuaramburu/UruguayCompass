import test from 'node:test';import assert from 'node:assert/strict';
import {responseStats,strongestAxes,comparisonDetails,readingModels,possibleTradeoffs,explainAxis} from '../dist/insights.js';
import {AXES} from '../dist/context.js';
test('each axis explains its own score and direction without a universal left/right label',()=>{for(const axis of AXES){for(const value of [0,33,50,67,100]){const text=explainAxis(axis.id,value,axis);assert.ok(text.length>100);assert.ok(!text.includes(`${value}/100`));assert.ok(!text.includes('undefined'))}}assert.ok(explainAxis(0,67,AXES[0]).includes('libre mercado'));assert.ok(explainAxis(0,33,AXES[0]).includes('empresas públicas'));assert.ok(explainAxis(0,null,AXES[0]).includes('No hay un puntaje'))});
test('a neutral profile is described without inventing conviction or certainty',()=>{const p=Array(12).fill(50);assert.deepEqual(strongestAxes(p),[]);const s=responseStats([{axis:0,id:'a',direction:1},{axis:0,id:'b',direction:-1}],{a:2,b:2})[0];assert.equal(s.neutral,2);assert.equal(s.left+s.right,0);assert.equal(s.intensity,0);assert.equal(readingModels(p)[0].id,'mixta');assert.deepEqual(possibleTradeoffs(p),[])});
test('comparison excludes missing evidence and separates real distances',()=>{const p=Array(12).fill(50),ref=Array(12).fill(null);ref[0]=50;ref[3]=100;ref[6]=45;const d=comparisonDetails(p,ref,[0,3,6,10]);assert.equal(d.near[0].axis,0);assert.equal(d.far[0].axis,3);assert.ok(d.far.every(x=>x.gap>0));assert.equal(d.near.length,3)});
test('opposite signed answers are counted without interpreting uncertainty',()=>{const s=responseStats([{axis:0,id:'a',direction:1},{axis:0,id:'b',direction:-1}],{a:4,b:4})[0];assert.equal(s.left,1);assert.equal(s.right,1);assert.equal(s.intensity,100)});

test('the pedagogical models retain their meanings with the requested pole order',()=>{
 for(const [id,values] of [['socialdemocrata',[25,20,20,20]],['liberal',[80,75,75,30]],['conservadora',[75,70,70,80]],['socialconservadora',[30,30,25,80]],['mixta',[50,50,50,50]]]){
  const p=Array(12).fill(50);[0,1,2,5].forEach((axis,i)=>{p[axis]=values[i]});
  const result=readingModels(p);assert.equal(result[0].id,id);assert.equal(result[0].score,100);
 }
});
