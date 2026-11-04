import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import {transitionTheme,syncThemeColor} from '../dist/theme-transition.js';

test('theme transition is click-triggered, survives rapid switches and respects reduced motion',async()=>{
 const dom=new JSDOM('<html data-theme="dark"><head><meta name="theme-color" content="#ffffff"></head><body><input value="respuesta"></body></html>');
 globalThis.window=dom.window;globalThis.document=dom.window.document;
 const root=document.documentElement,input=document.querySelector('input');input.focus();
 const meta=document.querySelector('meta[name="theme-color"]');
 syncThemeColor();assert.equal(meta.content,'#191c21','A restored dark theme also updates the browser toolbar');
 root.dataset.theme='light';syncThemeColor();assert.equal(meta.content,'#ffffff');
 assert.equal(root.classList.contains('theme-changing'),false);
 window.matchMedia=()=>({matches:false});
 transitionTheme(()=>root.dataset.theme='dark');assert.equal(root.dataset.theme,'dark');assert.ok(root.classList.contains('theme-changing'));
 assert.equal(meta.content,'#191c21');
 transitionTheme(()=>root.dataset.theme='light');assert.equal(root.dataset.theme,'light');
 assert.equal(meta.content,'#ffffff');
 assert.equal(document.activeElement,input);assert.equal(input.value,'respuesta');
 await new Promise(resolve=>setTimeout(resolve,270));assert.equal(root.classList.contains('theme-changing'),false);
 window.matchMedia=()=>({matches:true});transitionTheme(()=>root.dataset.theme='dark');
 assert.equal(root.dataset.theme,'dark');assert.equal(root.classList.contains('theme-changing'),false);
 assert.equal(meta.content,'#191c21','Reduced motion still updates the toolbar');
 dom.window.close();
});
