import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {trackResultSection} from '../dist/result-index.js';

test('result index follows scrolling, clicks, viewport changes and the final short section, then releases listeners',()=>{
 const dom=new JSDOM('<main><section id="one"></section><section id="two"></section><section id="three"></section><aside class="results-index"><a data-jump="one">One</a><a data-jump="two"><span>Two</span></a><a data-jump="three">Three</a></aside></main>');
 const w=dom.window,root=w.document.querySelector('main');let scroll=0,height=800,pending=null;
 const view={get innerHeight(){return height},get scrollY(){return scroll},requestAnimationFrame:fn=>(pending=fn,1),cancelAnimationFrame:()=>{pending=null},addEventListener:(...args)=>w.addEventListener(...args),removeEventListener:(...args)=>w.removeEventListener(...args)};
 ['one','two','three'].forEach((id,i)=>{root.querySelector('#'+id).getBoundingClientRect=()=>({top:i*600-scroll,bottom:(i+1)*600-scroll})});
 const active=()=>root.querySelector('[aria-current=location]')?.dataset.jump;
 const stop=trackResultSection(root,view);assert.equal(active(),'one');
 root.querySelector('[data-jump=two] span').click();assert.equal(active(),'two');
 scroll=500;w.dispatchEvent(new w.Event('scroll'));pending();assert.equal(active(),'two');
 scroll=1050;w.dispatchEvent(new w.Event('scroll'));pending();assert.equal(active(),'three');
 scroll=950;height=900;w.dispatchEvent(new w.Event('resize'));pending();assert.equal(active(),'three','The final short section can be active at the page end');
 scroll=0;w.dispatchEvent(new w.Event('scroll'));pending();assert.equal(active(),'one');
 assert.equal(root.querySelectorAll('[aria-current]').length,1);
 stop();root.querySelector('[data-jump=two] span').click();assert.equal(active(),'one');
 dom.window.close();
});
