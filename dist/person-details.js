import {ADDITIONAL_PERSON_DETAILS} from './additional-figures.js';
// Display metadata, reviewed 2026-11-04. Sources and classification criteria:
// docs/PERSONAS.md. These descriptions do not take part in affinity scoring.
export const PERSON_DETAILS={
 orsi:{party:'Frente Amplio · MPP',orientation:'Izquierda democrática',role:'Presidente de la República (2025–2030)'},
 delgado:{party:'Partido Nacional',orientation:'Centroderecha · liberalismo económico',role:'Presidente del Directorio del Partido Nacional'},
 ojeda:{party:'Partido Colorado',orientation:'Liberalismo',role:'Senador · secretario general del Partido Colorado'},
 manini:{party:'Cabildo Abierto',orientation:'Nacionalismo conservador',role:'Dirigente de Cabildo Abierto · exsenador (2020–2025)'},
 mieres:{party:'Partido Independiente',orientation:'Socialdemocracia',role:'Presidente del Partido Independiente'},
 salle:{party:'Identidad Soberana',orientation:'Soberanismo',role:'Diputado (2025–2030)'},
 vazquez:{party:'Frente Amplio',orientation:'Socialdemocracia',role:'Expresidente (2005–2010 y 2015–2020) · fallecido en 2020'},
 mujica:{party:'Frente Amplio · MPP',orientation:'Izquierda democrática',role:'Expresidente (2010–2015) · fallecido en 2025'},
 lacalle:{party:'Partido Nacional',orientation:'Liberalismo económico',role:'Expresidente de la República (2020–2025)'},
 cosse:{party:'Frente Amplio',orientation:'Izquierda progresista',role:'Vicepresidenta de la República (2025–2030)'},
 ripoll:{party:'Partido Nacional · D Centro',orientation:'Centro (autodefinición)',role:'Líder de la agrupación Somos'},
 silva:{party:'Partido Colorado',orientation:'Batllismo',role:'Senador (2025–2030)'},
 quintana:{party:'Ex Cabildo Abierto · proyecto propio',orientation:'Conservadurismo cristiano',role:'Dirigente de Mujeres de Influencia'},
 bottero:{party:'Partido Independiente',orientation:'Socialdemocracia',role:'Periodista · exdirectora de Inmujeres (2020–2025)'},
 canoniero:{party:'Identidad Soberana (candidatura de 2024)',orientation:'Soberanismo (propuesta de 2024)',role:'Expresidenta de Identidad Soberana; renunció en julio de 2026'},
 martinez:{party:'Frente Amplio',orientation:'Socialismo democrático',role:'Ingeniero · exintendente de Montevideo (2015–2019)'},
 talvi:{party:'Partido Colorado (trayectoria en Uruguay)',orientation:'Liberalismo progresista',role:'Asesor del equipo económico de Argentina (desde 2026)'},
 'gonzalo-martinez':{party:'Unidad Popular · 26 de Marzo',orientation:'Izquierda antiimperialista',role:'Integrante de la Dirección Nacional del 26 de Marzo'},
 lust:{party:'Partido Constitucional Ambientalista',orientation:'Constitucionalismo · ambientalismo',role:'Fundador del PCA · exdiputado (2020–2025)'},
 vega:{party:'Partido Ecologista Radical Intransigente',orientation:'Ecologismo',role:'Fundador del PERI · exdiputado (2020–2025)'},
 'lacalle-herrera':{party:'Partido Nacional',orientation:'Herrerismo · liberalismo económico',role:'Expresidente de la República (1990–1995)'},
 bergara:{party:'Frente Amplio · Fuerza Renovadora',orientation:'Izquierda seregnista',role:'Intendente de Montevideo (2025–2030)'},
 andrade:{party:'Frente Amplio · Partido Comunista',orientation:'Comunismo',role:'Senador (2025–2030)'},
 sanguinetti:{party:'Partido Colorado',orientation:'Batllismo · liberalismo social',role:'Expresidente (1985–1990 y 1995–2000)'},
 'jorge-batlle':{party:'Partido Colorado',orientation:'Liberalismo económico',role:'Expresidente (2000–2005) · fallecido en 2016'},
 astori:{party:'Frente Amplio · Asamblea Uruguay',orientation:'Socialdemocracia',role:'Exvicepresidente (2010–2015) · fallecido en 2023'},
 raffo:{party:'Partido Nacional',orientation:'Liberalismo económico',role:'Directora de Antel'},
 argimon:{party:'Partido Nacional',orientation:'Nacionalismo · tradición wilsonista',role:'Embajadora de Uruguay ante la UNESCO'},
 sartori:{party:'Partido Nacional',orientation:'Liberalismo económico',role:'Empresario · exsenador (2020–2025)'},
 larranaga:{party:'Partido Nacional · Alianza Nacional',orientation:'Wilsonismo',role:'Exministro del Interior (2020–2021) · fallecido en 2021'},
 bordaberry:{party:'Partido Colorado',orientation:'Liberalismo conservador',role:'Senador (2025–2030)'},
 ...ADDITIONAL_PERSON_DETAILS
};
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function personDetailLines(entity){const p=PERSON_DETAILS[entity.id];return p?[p.party,p.orientation,p.role]:[]}
export function renderPersonDetails(entity){return `<span class="person-details">${personDetailLines(entity).map((line,i)=>`<span class="person-${['party','orientation','role'][i]}">${esc(line)}</span>`).join('')}</span>`}
