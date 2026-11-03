import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {radarPoint,renderResultRadar} from '../dist/radar.js';
import {AXES} from '../dist/context.js';
test('result radar preserves axis order, scale, center and missing data',()=>{
 assert.deepEqual(radarPoint(0,0),{x:360,y:340});
 assert.deepEqual(radarPoint(0,100),{x:360,y:120});
 assert.deepEqual(radarPoint(3,100),{x:580,y:340});
 assert.deepEqual(radarPoint(6,50),{x:360,y:450});
 assert.equal(radarPoint(0,null),null);assert.equal(radarPoint(0,undefined),null);
 assert.deepEqual(radarPoint(0,150),radarPoint(0,100));
});
test('result radar exposes all twelve scores and labels without a canvas size dependency',()=>{
 const values=[0,20,40,60,80,100,0,20,40,60,80,100];
 const markup=renderResultRadar(values,AXES),dom=new JSDOM(markup),d=dom.window.document;
 assert.equal(d.querySelector('#result-radar').tagName.toLowerCase(),'svg');
 assert.equal(d.querySelector('#result-radar').getAttribute('viewBox'),'0 0 720 680');
 assert.equal(d.querySelectorAll('.radar-axis-label').length,12);
 assert.equal(d.querySelectorAll('.radar-axis-number').length,12);
 assert.equal(d.querySelectorAll('.radar-key li').length,12);
 assert.equal(d.querySelectorAll('.result-radar-dot').length,12);
 const description=d.querySelector('desc').textContent;
 AXES.forEach((a,i)=>assert.ok(description.includes(`${a.name}: ${values[i]} de 100`)));
 assert.ok(d.querySelector('figcaption').textContent.includes('línea punteada 50'));
 assert.equal(d.querySelectorAll('canvas').length,0);assert.ok(!markup.includes('NaN'));
 dom.window.close();
});
test('missing radar values stay missing instead of appearing as a central score',()=>{
 const values=Array(12).fill(70);values[3]=null;
 const dom=new JSDOM(renderResultRadar(values,AXES)),d=dom.window.document;
 assert.equal(d.querySelectorAll('.result-radar-dot').length,11);
 assert.equal(d.querySelectorAll('.result-radar-profile').length,0);
 assert.equal(d.querySelector('.radar-key li:nth-child(4) strong').textContent,'Sin dato');
 dom.window.close();
});
