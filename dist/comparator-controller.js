import {comparisonShareHash,renderComparisonOptions,searchComparisonProfiles} from './political-comparator.js';
import {trackResultSection} from './result-index.js';
export function mountComparator(root,choices,selected,onChange,view=window){
 const input=root.querySelector('#compare-search'),list=root.querySelector('#compare-options'),empty=root.querySelector('#compare-empty'),status=root.querySelector('#compare-status');
 let matches=[],active=-1;
 const close=()=>{if(!input)return;list.hidden=true;input.setAttribute('aria-expanded','false');input.removeAttribute('aria-activedescendant');activate(-1)};
 const activate=index=>{active=index;for(const [i,option] of [...list.children].entries())option.setAttribute('aria-selected',String(i===index));if(index>=0){input.setAttribute('aria-activedescendant','cmp-option-'+index);list.children[index]?.scrollIntoView?.({block:'nearest',inline:'nearest'})}else input.removeAttribute('aria-activedescendant')};
 const search=()=>{matches=searchComparisonProfiles(choices,selected,input.value);list.innerHTML=renderComparisonOptions(matches);list.hidden=matches.length===0;empty.hidden=!!matches.length||!input.value.trim();input.setAttribute('aria-expanded',String(matches.length>0));activate(-1);status.textContent=matches.length?`${matches.length} perfiles encontrados.`:input.value.trim()?'No hay perfiles con ese nombre.':''};
 const keydown=event=>{if(event.target!==input)return;if(event.key==='Escape'){close();empty.hidden=true;return}if(['ArrowDown','ArrowUp'].includes(event.key)&&matches.length){event.preventDefault();list.hidden=false;input.setAttribute('aria-expanded','true');activate(event.key==='ArrowDown'?(active+1)%matches.length:(active<0?matches.length-1:(active-1+matches.length)%matches.length))}else if(event.key==='Enter'&&active>=0&&!list.hidden){event.preventDefault();onChange([...selected,matches[active].id])}};
 const click=async event=>{
  const add=event.target.closest('[data-compare-add]'),remove=event.target.closest('[data-compare-remove]'),share=event.target.closest('[data-compare-share]');
  if(add&&selected.length<3&&choices.some(item=>item.id===add.dataset.compareAdd)&&!selected.includes(add.dataset.compareAdd)){onChange([...selected,add.dataset.compareAdd]);return}
  if(remove){onChange(selected.filter(id=>id!==remove.dataset.compareRemove));return}
  if(share){const url=new URL(view.location.href);url.hash=comparisonShareHash(selected);try{if(!view.navigator.clipboard?.writeText)throw Error('clipboard');await view.navigator.clipboard.writeText(url.href);status.classList.remove('sr-only');status.textContent='Enlace de la comparación copiado.'}catch{status.classList.remove('sr-only');status.textContent='Copiá este enlace para compartir: ';const field=root.ownerDocument.createElement('input');field.type='text';field.readOnly=true;field.value=url.href;field.setAttribute('aria-label','Enlace de la comparación');status.append(field);field.select()}return}
  if(input&&event.target!==input&&!list.contains(event.target))close();
 };
 const focusout=event=>{if(input&&event.target===input&&!list.contains(event.relatedTarget))close()};
 input?.addEventListener('input',search);input?.addEventListener('focus',()=>{if(input.value.trim())search()});root.addEventListener('keydown',keydown);root.addEventListener('click',click);root.addEventListener('focusout',focusout);
 const untrack=trackResultSection(root,view);
 return ()=>{untrack();input?.removeEventListener('input',search);root.removeEventListener('keydown',keydown);root.removeEventListener('click',click);root.removeEventListener('focusout',focusout)};
}
