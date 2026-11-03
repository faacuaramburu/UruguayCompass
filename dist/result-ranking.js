import {rankProfiles} from './core.js';

export function rankFigures(profile,figures,preferredId=null){
 const result=rankProfiles(profile,figures.filter(f=>f.rankEligible));
 const closest=result.ranked.filter(x=>x.score===result.ranked[0]?.score);
 const preferred=closest.find(x=>x.entity.id===preferredId);
 // A presentation choice may reorder an exact displayed tie, never a score.
 return {...result,closest,ranked:preferred?[preferred,...result.ranked.filter(x=>x!==preferred)]:result.ranked};
}

export function affinitySummary(ranking){
 const ordered=[...ranking].sort((a,b)=>b.score-a.score||a.entity.name.localeCompare(b.entity.name,'es'));
 const closest=ordered.slice(0,5),farthest=ordered.slice(Math.max(5,ordered.length-2));
 const selected=[...closest,...farthest],total=selected.reduce((sum,x)=>sum+x.score,0);
 const shares=selected.map(x=>({...x,shareUnits:total?Math.floor(x.score*1000/total):null}));
 if(total){
  // Largest remainders distribute tenths of a percent, so the displayed total is exactly 100.0%.
  const remainders=selected.map((x,index)=>({index,remainder:x.score*1000/total-shares[index].shareUnits}));
  remainders.sort((a,b)=>b.remainder-a.remainder||a.index-b.index);
  const missing=1000-shares.reduce((sum,x)=>sum+x.shareUnits,0);
  for(let i=0;i<missing;i++)shares[remainders[i].index].shareUnits++;
 }
 return {closest:shares.slice(0,closest.length),farthest:shares.slice(closest.length),normalized:total>0};
}
