let cleanupTimer;
export function transitionTheme(update){
 const root=document.documentElement;
 clearTimeout(cleanupTimer);
 const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
 root.classList.toggle('theme-changing',!reduced);
 update();
 if(!reduced)cleanupTimer=setTimeout(()=>root.classList.remove('theme-changing'),240);
}
