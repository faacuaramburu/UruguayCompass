let cleanupTimer;
export function syncThemeColor(){
 const root=document.documentElement,meta=document.querySelector('meta[name="theme-color"]');
 if(meta)meta.content=window.getComputedStyle(root).getPropertyValue('--paper').trim()||(root.dataset.theme==='dark'?'#191c21':'#ffffff');
}
export function transitionTheme(update){
 const root=document.documentElement;
 clearTimeout(cleanupTimer);
 const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
 root.classList.toggle('theme-changing',!reduced);
 update();
 syncThemeColor();
 if(!reduced)cleanupTimer=setTimeout(()=>root.classList.remove('theme-changing'),240);
}
