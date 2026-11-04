export function trackResultSection(root,view=window){
 const links=[...root.querySelectorAll('.results-index [data-jump]')];
 const sections=links.map(link=>root.querySelector(`#${link.dataset.jump}`));
 let frame=null;
 const select=id=>{for(const link of links){if(link.dataset.jump===id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')}};
 const update=()=>{
  frame=null;if(!sections.length)return;
  const threshold=Math.min(160,view.innerHeight*.25);
  let current=sections[0];
  for(const section of sections)if(section.getBoundingClientRect().top<=threshold)current=section;
  const last=sections.at(-1);
  if(view.scrollY>0&&last.getBoundingClientRect().bottom<=view.innerHeight)current=last;
  select(current.id);
 };
 const schedule=()=>{if(frame===null)frame=view.requestAnimationFrame(update)};
 const jump=event=>{const link=event.target.closest('[data-jump]');if(link&&root.contains(link)&&sections.some(section=>section.id===link.dataset.jump))select(link.dataset.jump)};
 select(sections[0]?.id);
 view.addEventListener('scroll',schedule,{passive:true});view.addEventListener('resize',schedule);root.addEventListener('click',jump);
 return ()=>{view.removeEventListener('scroll',schedule);view.removeEventListener('resize',schedule);root.removeEventListener('click',jump);if(frame!==null)view.cancelAnimationFrame(frame)};
}
