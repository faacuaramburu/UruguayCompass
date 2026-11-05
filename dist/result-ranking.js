import {rankTwelveAxisProfiles} from './political-axis-research.js';

export function rankFigures(profile,figures){
 return rankTwelveAxisProfiles(profile,figures.filter(f=>f.rankEligible));
}

export function rankParties(profile,parties){return rankTwelveAxisProfiles(profile,parties)}
