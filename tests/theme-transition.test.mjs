import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {transitionTheme} from '../dist/theme-transition.js';

test('theme transition is click-triggered, survives rapid switches and respects reduced motion',async()=>{
 const dom=new JSDOM('<html data-theme="light"><body><input value="respuesta"></body></html>');
 globalThis.window=dom.window;globalThis.document=dom.window.document;
 const root=document.documentElement,input=document.querySelector('input');input.focus();
 assert.equal(root.classList.contains('theme-changing'),false);
 window.matchMedia=()=>({matches:false});
 transitionTheme(()=>root.dataset.theme='dark');assert.equal(root.dataset.theme,'dark');assert.ok(root.classList.contains('theme-changing'));
 transitionTheme(()=>root.dataset.theme='light');assert.equal(root.dataset.theme,'light');
 assert.equal(document.activeElement,input);assert.equal(input.value,'respuesta');
 await new Promise(resolve=>setTimeout(resolve,270));assert.equal(root.classList.contains('theme-changing'),false);
 window.matchMedia=()=>({matches:true});transitionTheme(()=>root.dataset.theme='dark');
 assert.equal(root.dataset.theme,'dark');assert.equal(root.classList.contains('theme-changing'),false);
 dom.window.close();
});
