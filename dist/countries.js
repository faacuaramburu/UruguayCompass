import {COUNTRY_CATALOG} from './country-catalog.js';
import {rankProfiles} from './core.js';
import {CURRENT_COUNTRY_DATA} from './country-data.js';
import {HISTORICAL_COUNTRY_DATA} from './country-history.js';
import {countryNotes} from './country-rubric.js';
export const COUNTRY_AXES=[0,4,6];
const uy='https://www.impo.com.uy/bases/constitucion/1967-1967/';
const us='https://www.archives.gov/founding-docs/';
const jp='https://www.shugiin.go.jp/internet/itdb_english.nsf/html/statics/english/constitution_e.htm';
const fr='https://www.elysee.fr/en/french-presidency/constitution-of-4-october-1958';
const fr46='https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006071193';
function entry(id,name,flag,period,values,notes,sources){const profile=Array(12).fill(null);COUNTRY_AXES.forEach((axis,i)=>profile[axis]=values[i]);return {id,name,flag,period,profile,notes,sources}}
// Editorial rubric, not observed national ideology. Only the constitutional text is compared.
// Economy: 25 explicit public provision/nationalisation; 50 property with social limits; 75 strong property protection.
// Institutions: 25 parliamentary/judicial counterweights; 50 stronger executive within checks; 100 sovereign ruler.
// Religion: 0 explicit separation/non-establishment; 75 ruler linked to religious tradition; 100 official state religion.
const ORIGINAL_CURRENT_COUNTRIES=[
 entry('uy','Uruguay','🇺🇾','Constitución vigente · consulta 2026',[25,25,0],['Empresas públicas y monopolios autorizados por ley: arts. 50–51 y 185–189.','Control parlamentario y constitucional: arts. 85 y 256.','Separación entre Estado y religión: art. 5.'],[{title:'Constitución: economía',url:uy+'51'},{title:'Constitución: Parlamento',url:uy+'85'},{title:'Constitución: religión',url:uy+'5'}]),
 entry('us','Estados Unidos','🇺🇸','Constitución y enmiendas vigentes · consulta 2026',[75,25,0],['Protección de propiedad y compensación: enmienda V.','Competencias separadas del Congreso, Ejecutivo y tribunales: arts. I–III.','No establecimiento federal de religión: enmienda I.'],[{title:'National Archives · Constitución',url:us+'constitution-transcript'},{title:'National Archives · Bill of Rights',url:us+'bill-of-rights-transcript'}]),
 entry('jp','Japón','🇯🇵','Constitución de 1947 vigente · consulta 2026',[50,25,0],['Propiedad sujeta al bienestar público: art. 29.','Gabinete responsable ante la Dieta y control judicial: arts. 66 y 81.','Separación religiosa: art. 20.'],[{title:'Cámara de Representantes · Constitución',url:jp}]),
 entry('fr','Francia','🇫🇷','Constitución de 1958 vigente · consulta 2026',[25,50,0],['Preámbulo de 1946: nacionalización de monopolios y servicios nacionales, apartado 9.','Presidencia con competencias propias y controles parlamentarios y constitucionales.','República laica: art. 1.'],[{title:'Conseil constitutionnel · Constitución',url:fr},{title:'Légifrance · Preámbulo de 1946',url:fr46}])
];
const ORIGINAL_HISTORICAL_COUNTRIES=[
 entry('uy-1830','Uruguay de 1830','🇺🇾','Texto constitucional de 1830',[75,25,100],['Protección de la propiedad, con compensación por uso público: art. 144.','Distribución de poderes: arts. 14 y siguientes.','Religión católica del Estado: art. 5.'],[{title:'Parlamento · Constitución de 1830',url:'https://biblioteca.parlamento.gub.uy/File/biblioteca/Constituciones/1830/1830%20Constitucion%20-%20OCR.pdf'}]),
 entry('jp-1889','Japón imperial','🇯🇵','Texto constitucional de 1889',[50,100,75],['Garantía de propiedad con límites legales: art. 27.','Soberanía del emperador y ministros responsables ante él: arts. 4 y 55.','Juramento imperial ante los antepasados y libertad de creencia condicionada: art. 28.'],[{title:'Biblioteca Nacional de Japón · Constitución de 1889',url:'https://www.ndl.go.jp/constitution/e/etc/c02.html'}]),
 entry('fr-1946','Francia de la IV República','🇫🇷','Texto constitucional de 1946',[25,25,0],['Preámbulo: nacionalización de monopolios y servicios nacionales.','Gobierno dependiente de la Asamblea Nacional: arts. 45–50.','República laica: art. 1.'],[{title:'Constitución de 1946 · transcripción en Wikisource',url:'https://fr.wikisource.org/wiki/Constitution_de_1946,_IVe_R%C3%A9publique'},{title:'Légifrance · Preámbulo de 1946',url:fr46}]),
 entry('us-1791','Estados Unidos de 1791','🇺🇸','Constitución de 1787 y Bill of Rights de 1791',[75,25,0],['Protección de propiedad: enmienda V.','Separación de poderes: arts. I–III.','No establecimiento federal de religión: enmienda I.'],[{title:'National Archives · Constitución',url:us+'constitution-transcript'},{title:'National Archives · Bill of Rights',url:us+'bill-of-rights-transcript'}])
];
export const CURRENT_COUNTRIES=COUNTRY_CATALOG.map(country=>{
 const data=CURRENT_COUNTRY_DATA.find(x=>x.id===country.id);
 if(!data)throw new Error(`Falta perfil documental: ${country.id}`);
 const original=ORIGINAL_CURRENT_COUNTRIES.find(x=>x.id===country.id);
 const result=entry(country.id,country.name,country.flag,`Texto comparado: ${data.title}`,data.values,data.notes||countryNotes(data.values),data.sources);
 if(original){result.notes=original.notes;result.sources=original.sources}
 result.document=data.document;result.subsequentlyAmended=data.subsequentlyAmended;
 return result;
});
const EXTRA_HISTORY=[
 entry('urss-1936','Unión Soviética de 1936','','Constitución de 1936 · edición con enmiendas',[0,75,0],['Propiedad social de los medios de producción y planificación económica: artículos 4–6 y 11.','Papel dirigente del Partido Comunista: artículo 126.','Separación de Iglesia y Estado: artículo 124; se compara la garantía escrita, no su cumplimiento.'],[{title:'Constitución soviética de 1936 · Marxists Internet Archive',url:'https://www.marxists.org/reference/archive/stalin/works/1936/12/05.htm'}]),
 entry('cn-1954','China de 1954','','Constitución de 1954',[25,75,25],['Economía estatal y cooperativa junto con propiedad individual y capitalista en transición: artículos 5–10.','El preámbulo atribuye la dirección política al Partido Comunista; la Asamblea concentra el poder estatal.','Libertad de creencia religiosa: artículo 88.'],[{title:'Cornell · Constitución china de 1954',url:'https://ecommons.cornell.edu/entities/publication/7ba1f815-e4c0-4bcf-9693-74cf0de56202'},{title:'Constitución de 1954 · transcripción',url:"https://en.wikisource.org/wiki/Constitution_of_the_People%27s_Republic_of_China_(1954)"}]),
 entry('fr-1804','Francia napoleónica','','Texto constitucional de 1804',[75,100,75],['El juramento imperial protege la irrevocabilidad de la venta de los bienes nacionales: artículo 53.','El gobierno y la justicia quedan bajo el emperador; sucesión hereditaria: artículos 1–3.','El juramento preserva el Concordato y la libertad de cultos: artículo 53.'],[{title:'Fondation Napoléon · Sénatus-consulte de 1804',url:'https://www.napoleon.org/histoire-des-2-empires/articles/senatus-consulte-organique-du-28-floreal-xii-18-mai-1804/'}]),
 entry('otomanos-1876','Imperio otomano de 1876','','Constitución de 1876, antes de la reforma de 1909',[75,100,100],['Garantía de propiedad con expropiación indemnizada: artículo 21.','El sultán designa y destituye ministros, y conserva prerrogativas soberanas: artículos 5 y 7.','El islam es religión del Estado: artículo 11.'],[{title:'Constitución otomana de 1876 · transcripción del original',url:'https://en.wikisource.org/wiki/Ottoman_constitution_of_1876'}])
];
export const HISTORICAL_COUNTRIES=[...ORIGINAL_HISTORICAL_COUNTRIES,...HISTORICAL_COUNTRY_DATA.map(x=>entry(x.id,x.name,x.flag,x.period,x.values,x.notes||countryNotes(x.values),x.sources)),...EXTRA_HISTORY];
export const HISTORICAL_CATALOG=HISTORICAL_COUNTRIES;
export function rankCountries(profile,mode='current'){return rankProfiles(profile,mode==='historical'?HISTORICAL_COUNTRIES:CURRENT_COUNTRIES).ranked}
export function countryCatalog(mode='current'){return mode==='historical'?HISTORICAL_CATALOG:CURRENT_COUNTRIES}
