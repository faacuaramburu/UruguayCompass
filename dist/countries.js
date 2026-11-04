import {COUNTRY_CATALOG} from './country-catalog.js';
import {rankProfiles} from './core.js';
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
export const CURRENT_COUNTRIES=[
 entry('uy','Uruguay','🇺🇾','Constitución vigente · consulta 2026',[25,25,0],['Empresas públicas y monopolios autorizados por ley: arts. 50–51 y 185–189.','Control parlamentario y constitucional: arts. 85 y 256.','Separación entre Estado y religión: art. 5.'],[{title:'Constitución: economía',url:uy+'51'},{title:'Constitución: Parlamento',url:uy+'85'},{title:'Constitución: religión',url:uy+'5'}]),
 entry('us','Estados Unidos','🇺🇸','Constitución y enmiendas vigentes · consulta 2026',[75,25,0],['Protección de propiedad y compensación: enmienda V.','Competencias separadas del Congreso, Ejecutivo y tribunales: arts. I–III.','No establecimiento federal de religión: enmienda I.'],[{title:'National Archives · Constitución',url:us+'constitution-transcript'},{title:'National Archives · Bill of Rights',url:us+'bill-of-rights-transcript'}]),
 entry('jp','Japón','🇯🇵','Constitución de 1947 vigente · consulta 2026',[50,25,0],['Propiedad sujeta al bienestar público: art. 29.','Gabinete responsable ante la Dieta y control judicial: arts. 66 y 81.','Separación religiosa: art. 20.'],[{title:'Cámara de Representantes · Constitución',url:jp}]),
 entry('fr','Francia','🇫🇷','Constitución de 1958 vigente · consulta 2026',[25,50,0],['Preámbulo de 1946: nacionalización de monopolios y servicios nacionales, apartado 9.','Presidencia con competencias propias y controles parlamentarios y constitucionales.','República laica: art. 1.'],[{title:'Conseil constitutionnel · Constitución',url:fr},{title:'Légifrance · Preámbulo de 1946',url:fr46}])
];
export const HISTORICAL_COUNTRIES=[
 entry('uy-1830','Uruguay de 1830','🇺🇾','Texto constitucional de 1830',[75,25,100],['Protección de la propiedad, con compensación por uso público: art. 144.','Distribución de poderes: arts. 14 y siguientes.','Religión católica del Estado: art. 5.'],[{title:'Parlamento · Constitución de 1830',url:'https://biblioteca.parlamento.gub.uy/File/biblioteca/Constituciones/1830/1830%20Constitucion%20-%20OCR.pdf'}]),
 entry('jp-1889','Japón imperial','🇯🇵','Texto constitucional de 1889',[50,100,75],['Garantía de propiedad con límites legales: art. 27.','Soberanía del emperador y ministros responsables ante él: arts. 4 y 55.','Juramento imperial ante los antepasados y libertad de creencia condicionada: art. 28.'],[{title:'Biblioteca Nacional de Japón · Constitución de 1889',url:'https://www.ndl.go.jp/constitution/e/etc/c02.html'}]),
 entry('fr-1946','Francia de la IV República','🇫🇷','Texto constitucional de 1946',[25,25,0],['Preámbulo: nacionalización de monopolios y servicios nacionales.','Gobierno dependiente de la Asamblea Nacional: arts. 45–50.','República laica: art. 1.'],[{title:'Constitución de 1946 · transcripción en Wikisource',url:'https://fr.wikisource.org/wiki/Constitution_de_1946,_IVe_R%C3%A9publique'},{title:'Légifrance · Preámbulo de 1946',url:fr46}]),
 entry('us-1791','Estados Unidos de 1791','🇺🇸','Constitución de 1787 y Bill of Rights de 1791',[75,25,0],['Protección de propiedad: enmienda V.','Separación de poderes: arts. I–III.','No establecimiento federal de religión: enmienda I.'],[{title:'National Archives · Constitución',url:us+'constitution-transcript'},{title:'National Archives · Bill of Rights',url:us+'bill-of-rights-transcript'}])
];
export const HISTORICAL_CATALOG=[...HISTORICAL_COUNTRIES,...[
 ['roma','Imperio romano','27 a. C.–476 d. C.'],['atenas','Atenas clásica','siglos V–IV a. C.'],['egipto','Antiguo Egipto','c. 3100–30 a. C.'],['persia','Imperio aqueménida','c. 550–330 a. C.'],['bizancio','Imperio bizantino','330–1453'],['otomanos','Imperio otomano','c. 1299–1922'],['mongoles','Imperio mongol','1206–1368'],['incas','Imperio inca','siglos XV–XVI'],['espana-imperial','Monarquía hispánica','siglos XVI–XVIII'],['francia-1789','Francia revolucionaria','1789–1799'],['francia-napoleon','Francia napoleónica','1804–1815'],['reino-unido-victoriano','Reino Unido victoriano','1837–1901'],['alemania-weimar','República de Weimar','1919–1933'],['urss','Unión Soviética','1922–1991'],['yugoslavia','Yugoslavia socialista','1945–1992'],['china-mao','China bajo Mao','1949–1976']
].map(([id,name,period])=>({id,name,period,flag:'',profile:Array(12).fill(null)}))];
export function rankCountries(profile,mode='current'){return rankProfiles(profile,mode==='historical'?HISTORICAL_COUNTRIES:CURRENT_COUNTRIES).ranked}
export function countryCatalog(mode='current'){return mode==='historical'?HISTORICAL_CATALOG:COUNTRY_CATALOG.map(c=>CURRENT_COUNTRIES.find(p=>p.id===c.id)||{...c,profile:Array(12).fill(null)})}
