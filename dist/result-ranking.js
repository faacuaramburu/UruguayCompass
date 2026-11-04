import {rankProfiles} from './core.js';

export function rankFigures(profile,figures){
 const result=rankProfiles(profile,figures.filter(f=>f.rankEligible));
 const ranked=result.ranked.map(x=>({...x,distance:result.axes.reduce((sum,i)=>sum+Math.abs(profile[i]-x.entity.profile[i]),0)})).sort((a,b)=>a.distance-b.distance||a.entity.name.localeCompare(b.entity.name,'es'));
 const closest=ranked.filter(x=>x.distance===ranked[0]?.distance);
 // Select the actual minimum distance before rounding. An exact documentary tie
 // remains a tie; the UI highlights its first alphabetical reference automatically.
 return {...result,closest,ranked};
}
