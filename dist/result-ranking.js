import {rankProfiles,sameAffinity} from './core.js';

export function rankFigures(profile,figures,preferredId=null){
 const result=rankProfiles(profile,figures.filter(f=>f.rankEligible));
 const closest=result.ranked.filter(x=>sameAffinity(x,result.ranked[0]));
 const preferred=closest.find(x=>x.entity.id===preferredId);
 // A presentation choice may reorder an exact distance tie, never a score.
 return {...result,closest,ranked:preferred?[preferred,...result.ranked.filter(x=>x!==preferred)]:result.ranked};
}
