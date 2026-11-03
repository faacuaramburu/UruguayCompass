// Keep the displayed subject when a documentary image contains other people or graphics.
export function portraitStyle(photo){
 if(!photo.crop)return '';
 const [x,y,w,h]=photo.crop,[width]=photo.dimensions;
 return `aspect-ratio:${w}/${h};--photo-width:${width/w*100}%;--photo-left:${-x/w*100}%;--photo-top:${-y/h*100}%`;
}
export function portraitRect(photo,width,height,ratio){
 let [x,y,w,h]=photo.crop||[0,0,width,height];
 if(w/h>ratio){const next=h*ratio;x+=(w-next)/2;w=next}
 else {const next=w/ratio;y+=(h-next)*.25;h=next}
 return [x,y,w,h];
}
export function photoCredit(photo){return `${photo.author}${photo.license?' · '+photo.license:''}`}
