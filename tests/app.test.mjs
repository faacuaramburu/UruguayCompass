import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {JSDOM} from 'jsdom';
import {FIGURES,PARTIES} from '../dist/politics.js';
import {rankFigures} from '../dist/result-ranking.js';
import {rankProfiles} from '../dist/core.js';

test('complete application flows, persistence, content, corrections and privacy',async()=>{
 const html=await readFile(new URL('../dist/index.html',import.meta.url),'utf8');
 const dom=new JSDOM(html,{url:'https://example.org/UruguayCompass/',pretendToBeVisual:true});
 const beacon=dom.window.document.querySelector('script[data-cf-beacon]');
 assert.equal(beacon.src,'https://static.cloudflareinsights.com/beacon.min.js');
 assert.equal(beacon.type,'module');
 assert.deepEqual(JSON.parse(beacon.dataset.cfBeacon),{token:'58c830bd7ae74871a38f05c29dfb759d',spa:false});
 const {window:w}=dom;for(const key of ['window','document','localStorage','location','FormData','File'])globalThis[key]=w[key];
 w.scrollTo=()=>{};w.HTMLElement.prototype.scrollIntoView=()=>{};
 const cardText=[];
 w.HTMLCanvasElement.prototype.getContext=()=>new Proxy({},{get:(_,key)=>key==='measureText'?text=>({width:text.length*11}):key==='fillText'?text=>cardText.push(text):()=>{}});
 globalThis.Image=class{naturalWidth=300;naturalHeight=400;set src(value){queueMicrotask(()=>this.onload?.())}};
 let sharedFile=null;Object.defineProperty(globalThis,'navigator',{configurable:true,value:{canShare:()=>true,share:async data=>{sharedFile=data.files[0]}}});
 Object.defineProperty(w.document,'fonts',{value:{ready:Promise.resolve()}});
 w.HTMLCanvasElement.prototype.toBlob=function(callback){callback(new Blob(['png-test'],{type:'image/png'}))};
 await import('../dist/app.js');
 const click=s=>{const el=w.document.querySelector(s);assert.ok(el,`Missing ${s}`);el.click()};
 const route=async hash=>{w.location.hash=hash;await new Promise(r=>setTimeout(r,15))};
 const text=()=>w.document.querySelector('#app').textContent;
 for(const[version,n]of [['short',36],['full',60],['extreme',240]]){
  await route('#inicio');if(w.document.querySelector('.resume-actions')){click('[data-action=reset]');click('[data-action=confirm-reset]');await new Promise(r=>setTimeout(r,10))}
  assert.deepEqual([...w.document.querySelectorAll('.home-actions a')].map(a=>a.textContent),['Iniciar','Ver 12 ejes']);
  assert.equal(w.document.querySelector('[name=version]'),null);
  click('.home-actions a[href="#enciclopedia"]');await new Promise(r=>setTimeout(r,15));
  assert.equal(w.document.querySelectorAll('.reading-list a[href^="#eje/"]').length,12);
  await route('#inicio');click('.home-actions a[href="#iniciar"]');await new Promise(r=>setTimeout(r,15));
  assert.equal(w.document.querySelectorAll('[name=version]').length,3);
  const radio=w.document.querySelector(`[name=version][value=${version}]`);radio.checked=true;radio.dispatchEvent(new w.Event('change',{bubbles:true}));click('[data-action=start]');await new Promise(r=>setTimeout(r,10));
  assert.ok(text().includes(`Pregunta 1 de ${n}`));assert.equal(w.document.querySelector('button[type=submit]').disabled,true);
  for(let i=0;i<n;i++){
   const answer=w.document.querySelector('[name=answer][value="2"]');answer.checked=true;answer.dispatchEvent(new w.Event('change',{bubbles:true}));
   if(i===1){click('[data-action=previous]');assert.ok(w.document.querySelector('[name=answer]:checked'));w.document.querySelector('#question-form').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));}
   w.document.querySelector('#question-form').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));
  }
  await new Promise(r=>setTimeout(r,15));assert.ok(text().includes('Coincidencias con personajes'));assert.equal(w.document.querySelectorAll('.axis-tile').length,12);assert.ok([...w.document.querySelectorAll('.axis-tile-heading>strong')].every(e=>e.textContent==='Equilibrado'));
  assert.equal(w.document.querySelectorAll('#axes-panel .axis-icon[aria-hidden=true]').length,24);
  assert.equal(w.document.querySelectorAll('#axes-panel .axis-pole.is-selected').length,0);
  assert.ok(w.document.querySelector('#scale-panel').textContent.includes('70% Intervencionismo estatal'));
  assert.ok(w.document.querySelector('#scale-panel').textContent.includes('70% Libre mercado'));
  assert.equal(w.document.querySelectorAll('.results-index nav a').length,11);assert.equal(w.document.querySelectorAll('.model-row').length,5);
  assert.equal(w.document.querySelector('.results-content>section').id,'ideology-panel');assert.equal(w.document.querySelector('.results-content>section:nth-child(2)').id,'scale-panel');assert.ok(w.document.querySelector('#scale-panel').textContent.includes('no etiquetas políticas'));assert.ok(w.document.querySelector('#ideology-panel h2').textContent.includes('equilibrio'));
  assert.ok(w.document.querySelector('#ideology-panel').textContent.includes('¿Qué propone este modelo?'));assert.ok(w.document.querySelector('#ideology-panel .closest-person .portrait img'));assert.ok(w.document.querySelector('.ranking-coverage').textContent.includes('31 referentes'));assert.ok(w.document.querySelector('#closest-reference'));const portraitPick=w.document.querySelector('#closest-reference');portraitPick.value='bottero';portraitPick.dispatchEvent(new w.Event('change',{bubbles:true}));assert.ok(w.document.querySelector('.closest-person h4').textContent.includes('Mónica Bottero'));assert.ok(w.document.querySelector('.card-preview-person h3').textContent.includes('Mónica Bottero'));assert.ok(w.document.querySelector('.closest-person').textContent.includes('Misma afinidad'));assert.equal(w.document.activeElement.id,'closest-reference');assert.ok(w.document.querySelector('#ideology-panel .closest-person').textContent.includes('comparación distinta'));assert.equal(w.document.querySelector('#axes-panel').tagName,'SECTION');assert.equal(w.document.querySelectorAll('#axes-panel .axis-tile-heading').length,12);assert.equal(w.document.querySelectorAll('#axes-panel .axis-scale').length,12);assert.equal(w.document.querySelectorAll('.axis-reading').length,0);assert.equal(w.document.querySelector('#axes-panel > .section-description'),null);click('[data-jump=axes-panel]');assert.equal(w.document.querySelectorAll('.axis-explanation').length,0);
  const ref=w.document.querySelector('#insight-reference');ref.value='salle';ref.dispatchEvent(new w.Event('change',{bubbles:true}));assert.ok(w.document.querySelector('#difference-content').textContent.includes('Gustavo Salle'));
  click('[data-jump="compass-panel"]');assert.equal(w.document.activeElement.id,'compass-panel');assert.equal(w.location.hash,'#resultados');
  assert.ok(w.document.querySelector('#compass-panel svg[role="group"]'));assert.equal(w.document.querySelectorAll('.spectrum-user-coordinates strong').length,2);assert.equal(w.document.querySelector('.compass-point-label').textContent,'Vos');
  assert.equal(w.document.querySelectorAll('.spectrum-reference').length,31);
  assert.ok(w.document.querySelector('.radar-details svg#result-radar'));
  assert.equal(w.document.querySelectorAll('.radar-details .radar-key li').length,12);
  if(version==='short'){
   const spectrumSearch=w.document.querySelector('#spectrum-search');spectrumSearch.focus();spectrumSearch.value='talvi';spectrumSearch.dispatchEvent(new w.Event('input',{bubbles:true}));assert.equal(w.document.activeElement,spectrumSearch);assert.equal(w.document.querySelectorAll('.spectrum-reference').length,1);assert.ok(w.document.querySelector('.spectrum-detail').textContent.includes('Ernesto Talvi'));
   const spectrumParty=w.document.querySelector('#spectrum-party');spectrumParty.value='pn';spectrumParty.dispatchEvent(new w.Event('change',{bubbles:true}));assert.equal(w.document.querySelectorAll('.spectrum-reference').length,0);assert.ok(w.document.querySelector('.spectrum-user-label'));
   click('[data-spectrum-reset]');assert.equal(w.document.querySelectorAll('.spectrum-reference').length,31);
   const stableStrip=w.document.querySelector('.spectrum-selection'),stableFigure=w.document.querySelector('.spectrum-figure'),stableMap=w.document.querySelector('.spectrum-graphic');
   w.document.querySelector('.spectrum-marker[data-spectrum-pick="ojeda"]').dispatchEvent(new w.MouseEvent('click',{bubbles:true}));
   assert.equal(w.document.querySelector('.spectrum-selection'),stableStrip,'Selection keeps the identification strip mounted');
   assert.equal(w.document.querySelector('.spectrum-figure'),stableFigure,'Selection keeps the chart container mounted');
   assert.equal(w.document.querySelector('.spectrum-graphic'),stableMap,'Selection keeps the map and its scroll anchor mounted');
   assert.ok(w.document.querySelector('.spectrum-selection').textContent.includes('Andrés Ojeda y Robert Silva'));
   assert.ok(w.document.querySelector('.spectrum-selection').compareDocumentPosition(w.document.querySelector('.spectrum-graphic'))&4,'Identification is before the map');
   click('.spectrum-selection [data-jump]');assert.equal(w.document.activeElement.id,'spectrum-selected-detail');
   click('.spectrum-reference[data-spectrum-pick="lacalle-herrera"]');assert.ok(w.document.querySelector('.spectrum-detail').textContent.includes('Luis Alberto Lacalle Herrera'));assert.equal(w.document.querySelectorAll('.spectrum-marker[data-spectrum-pick="lacalle-herrera"]').length,1);assert.equal(w.document.querySelectorAll('[data-spectrum-pick="wilson"]').length,0);
   const marker=w.document.querySelector('.spectrum-marker');marker.focus();marker.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Enter',bubbles:true}));assert.equal(w.document.querySelector(`.spectrum-marker[data-spectrum-pick="${marker.dataset.spectrumPick}"]`).getAttribute('aria-pressed'),'true');assert.ok(w.document.activeElement.classList.contains('spectrum-marker'));
   assert.ok(w.document.querySelector('.spectrum-selection').textContent.includes('Andrés Ojeda')||w.document.querySelector('.spectrum-selection h3').textContent.length>3);
   assert.equal(w.document.activeElement,marker,'Keyboard selection preserves the actual focused SVG node');
  }
  assert.equal(w.document.querySelectorAll('.match-row .portrait img').length,Math.max(3,rankFigures(Array(12).fill(50),FIGURES).closest.length)+1);
  assert.ok(w.document.querySelector('.card-preview-party').textContent.includes('Partido Independiente'));
  const saved=JSON.parse(w.localStorage.getItem('uruguay-compass-v2'));assert.equal(saved.completed,true);assert.equal(Object.keys(saved.answers).length,n);
  if(version==='short'){click('[data-action=share]');await new Promise(r=>setTimeout(r,10));assert.equal(sharedFile.name,'uruguay-compass.png');assert.equal(w.document.querySelector('#share-preview').hidden,false);assert.equal(cardText.filter(t=>t.startsWith('0 ')&&t.endsWith(' 100')).length,12);assert.ok(cardText.includes('Partido más cercano'));assert.ok(cardText.some(t=>t.includes('Partido Independiente')));assert.equal(w.document.querySelector('#share-preview').height,1680)}
  await route('#comparaciones');assert.equal(w.document.querySelectorAll('.match-row').length,37);assert.equal(w.document.querySelectorAll('.match-row h3 a[href^="#partido/"]').length,6);
  await route('#comparar/orsi');assert.equal(w.document.querySelectorAll('tbody tr').length,12);assert.equal([...w.document.querySelectorAll('tbody tr td:nth-child(3)')].filter(e=>e.textContent==='Sin evidencia').length,2); // New topics never inherit old estimates.
 }
 for(const hash of ['#enciclopedia','#figuras','#partidos','#glosario','#historia','#metodologia','#faq','#eje/0','#ficha/mujica','#partido/fa']){await route(hash);assert.ok(w.document.querySelector('h1'));assert.ok(!text().includes('undefined'))}
 await route('#figuras');assert.equal(w.document.querySelectorAll('#entity-list>a').length,31);assert.ok([...w.document.querySelectorAll('.entity-status')].every(e=>e.textContent==='Disponible como resultado'));const actorSearch=w.document.querySelector('#entity-search');actorSearch.value='lacalle herrera';actorSearch.dispatchEvent(new w.Event('input',{bubbles:true}));assert.equal([...w.document.querySelectorAll('#entity-list>a')].filter(e=>!e.hidden)[0].textContent.includes('Luis Alberto Lacalle Herrera'),true);await route('#ficha/lacalle-herrera');assert.ok(text().includes('programa de fórmula de 2009'));assert.ok(w.document.querySelector('main .portrait img').src.includes('lacalle-herrera.jpg'));assert.ok(w.document.querySelector('a[href*="avisosdeldia.pdf#page=25"]'));for(const id of ['artigas','lema','wilson']){await route('#ficha/'+id);assert.ok(text().includes('No encontramos esa página'))}for(const id of ['sanguinetti','jorge-batlle']){await route('#ficha/'+id);assert.ok(text().includes('Medidas y declaraciones')||text().includes('medidas y declaraciones'));assert.ok(w.document.querySelector('main .portrait img'));assert.ok(text().includes('no un programa electoral'));assert.ok(w.document.querySelector('a[href="#comparar/'+id+'"]'))}await route('#ficha/raffo');assert.ok(text().includes('Laura Raffo'));assert.ok(w.document.querySelector('a[href*="Formula_Raffo.pdf"]'));
 for(const id of ['bergara','andrade','canoniero','gonzalo-martinez']){await route('#ficha/'+id);assert.ok(w.document.querySelector('main .portrait img'));assert.ok(!text().includes(' · null'));if(['canoniero','gonzalo-martinez'].includes(id))assert.ok(w.document.querySelector('.portrait-window'))}
 await route('#glosario');const search=w.document.querySelector('input');search.value='<script>';search.dispatchEvent(new w.Event('input',{bubbles:true}));assert.equal(w.document.querySelector('#search-empty').hidden,false);assert.equal(w.document.querySelectorAll('script').length,2);
 await route('#correcciones');for(const[name,value]of [['subject','ANCAP <b>'],['message','Esta propuesta requiere una revisión de fuentes.'],['source','https://www.impo.com.uy/']])w.document.querySelector(`[name=${name}]`).value=value;
 w.document.querySelector('form').dispatchEvent(new w.Event('submit',{bubbles:true,cancelable:true}));assert.equal(w.document.querySelector('#correction-output').hidden,false);assert.ok(w.document.querySelector('#correction-preview').textContent.includes('<b>'));assert.equal(w.document.querySelector('#correction-preview b'),null);assert.ok(!w.document.querySelector('#issue-link').href.includes('a0q'));
 click('[data-action=theme]');assert.equal(w.document.documentElement.dataset.theme,'dark');
 const beforeSkip=w.location.hash;click('.skip-link');assert.equal(w.location.hash,beforeSkip);assert.equal(w.document.activeElement.id,'main');
 await route('#privacidad');click('[data-action=erase]');assert.equal(w.localStorage.getItem('uruguay-compass-v2'),null);
 await route('#resultados');assert.ok(text().includes('Todavía falta tu perfil'));
 await route('#__proto__');assert.ok(text().includes('No encontramos esa página'));
 await route('#privacidad');const remove=w.Storage.prototype.removeItem;w.Storage.prototype.removeItem=()=>{throw new Error('Storage blocked')};click('[data-action=erase]');assert.ok(w.document.querySelector('#erase-status').textContent.includes('impidió borrar'));w.Storage.prototype.removeItem=remove;
 dom.window.close();
});
