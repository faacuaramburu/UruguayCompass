import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {AXES} from '../dist/context.js';
import {describeAxisPosition,renderAxisSummary} from '../dist/axis-presentation.js';

test('axis percentages name the corresponding pole without reversing the stored position',()=>{
 for(const axis of AXES){
  assert.deepEqual(describeAxisPosition(axis,30),{label:`70% ${axis.left}`,side:'left',percent:70});
  assert.deepEqual(describeAxisPosition(axis,70),{label:`70% ${axis.right}`,side:'right',percent:70});
  assert.equal(describeAxisPosition(axis,0).label,`100% ${axis.left}`);
  assert.equal(describeAxisPosition(axis,100).label,`100% ${axis.right}`);
 }
 for(const value of [41,50,59])assert.equal(describeAxisPosition(AXES[0],value).label,'Equilibrado');
 assert.equal(describeAxisPosition(AXES[0],40).label,'60% Mercado');
 assert.equal(describeAxisPosition(AXES[0],60).label,'60% Estado');
 for(const value of [null,undefined,NaN,-1,101])assert.equal(describeAxisPosition(AXES[0],value).label,'Sin dato');
});

test('axis summaries expose named readings, decorative emojis and correctly directed bars',()=>{
 for(const [value,side,start] of [[30,'left',30],[70,'right',50]]){
  const dom=new JSDOM(renderAxisSummary(AXES[0],value)),d=dom.window.document;
  assert.equal(d.querySelector('.axis-summary').dataset.side,side);
  assert.equal(d.querySelector('.axis-marker').style.left,`${value}%`);
  assert.equal(d.querySelector('.axis-fill').style.left,`${start}%`);
  assert.equal(d.querySelector('.axis-fill').style.width,'20%');
  assert.equal(d.querySelector('.axis-pole.is-selected').textContent.includes(AXES[0][side]),true);
  assert.equal(d.querySelectorAll('.axis-icon[aria-hidden=true]').length,2);
  assert.ok(d.querySelector('[role=img]').getAttribute('aria-label').includes(`70% ${AXES[0][side]}`));
  assert.ok(!d.body.textContent.includes('/100'));dom.window.close();
 }
 const neutral=new JSDOM(renderAxisSummary(AXES[0],50));
 assert.equal(neutral.window.document.querySelectorAll('.is-selected').length,0);
 assert.equal(neutral.window.document.querySelector('.axis-fill').style.width,'0%');neutral.window.close();
 const missing=new JSDOM(renderAxisSummary(AXES[0],null));
 assert.equal(missing.window.document.querySelector('.axis-scale'),null);assert.ok(!missing.window.document.body.innerHTML.includes('NaN'));missing.window.close();
});
