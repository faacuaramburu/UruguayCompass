import {rankProfiles} from './core.js';

export function rankFigures(profile,figures,preferredId=null){
 const result=rankProfiles(profile,figures.filter(f=>f.rankEligible));
 const closest=result.ranked.filter(x=>x.score===result.ranked[0]?.score);
 const preferred=closest.find(x=>x.entity.id===preferredId);
 // A presentation choice may reorder an exact displayed tie, never a score.
 return {...result,closest,ranked:preferred?[preferred,...result.ranked.filter(x=>x!==preferred)]:result.ranked};
}
