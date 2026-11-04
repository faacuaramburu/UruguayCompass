// Concept groups limit repeated evidence. A group never supplies a missing answer.
// These are editorial content categories, not empirically validated latent traits.
const concepts=[
 ['combustibles','propiedad-publica','precios','precios','capital-empresas','empresa-publica','telecomunicaciones','inversion-publica','gestion-infraestructura','empresa-publica','competencia','servicios-no-rentables','financiacion-privada','inversion-publica','seguros','banca-publica','permisos-comercio','permisos-comercio','direccion-inversion','direccion-inversion'],
 ['nivel-tributario','progresividad','reasignacion-gasto','transferencias','renta-empresarial','herencias','ahorro','patrimonio','rebajas-recaudacion','progresividad','iva','rentas-capital','pymes','transferencias','renta-trabajo','patrimonio','incentivos-inversion','exoneraciones','limite-gasto','progresividad'],
 ['horarios','negociacion-colectiva','contratos-temporales','negociacion-colectiva','despido','jornada','negociacion-empresa','participacion-sindical','horarios','subcontratacion','salario-minimo','inspeccion','remuneracion-resultados','plataformas','teletrabajo','proteccion-sindical','excepciones-pymes','desconexion','huelga-esencial','negociacion-colectiva'],
 ['interceptacion','videovigilancia','manifestaciones','identificacion','prision-preventiva','vehiculos','datos-personales','reconocimiento-facial','circulacion','reincidencia','control-policial','respuesta-policial','rehabilitacion','eventos','datos-personales','patrullaje','filmar-policia','medidas-proteccion','informacion-publica','manifestaciones'],
 ['control-parlamentario','autonomia-ejecutivo','recursos-contralor','control-previo','control-parlamentario','coordinacion-ejecutivo','compras','presupuesto','transparencia','urgencia-legislativa','designacion-contralor','designacion-equipos','control-parlamentario','coordinacion-ejecutivo','compras','control-previo','control-parlamentario','coordinacion-ejecutivo','revision-emergencias','evaluacion-programas'],
 ['familias','familias','aborto','aborto','educacion-sexual','educacion-sexual','identidad-documental','identidad-documental','adopcion','familias','cannabis','cannabis','roles-genero','costumbres','inclusion-trans','reproduccion-asistida','identidad-formularios','ritmo-cambio','fin-vida','costumbres'],
 ['ceremonias','ceremonias','ensenanza-religion','ensenanza-religion','simbolos','simbolos','fundamento-decisiones','debate-publico','financiacion-social','financiacion-social','ensenanza-religion','ensenanza-religion','acceso-servicios','asistencia-espiritual','calendario','calendario','mensajes-oficiales','dialogo-social','practicas-obligatorias','ceremonias'],
 ['arancel-consumo','arancel-consumo','acuerdos','prioridad-nacional','acuerdos','compras-publicas','maquinaria','compras-publicas','competencia-importada','industria-naciente','tramites','ritmo-apertura','compras-personales','controles','compras-publicas','salvaguardas','cuotas','bienes-estrategicos','costo-importaciones','arancel-mercosur'],
 ['votos-internacionales','alianzas','pluralidad-relaciones','alianzas','conflictos','compromisos','autonomia-organismos','coordinacion-regional','mediacion','defensa','pluralidad-relaciones','alianzas','autonomia-regional','coordinacion-regional','mediacion','continuidad-alianzas','sanciones','sanciones','pluralidad-relaciones','coordinacion-regional'],
 ['ingreso','residencia','cupos','orientacion','ayudas','titulos','seleccion-laboral','idioma','residencia','refugio','empleo-publico','diversidad','refugio','acceso-servicios','residencia','antidiscriminacion','seleccion-laboral','participacion','adaptacion-cultural','diversidad'],
 ['educacion-publica','bonos-educativos','salud-publica','eleccion-salud','educacion-publica','eleccion-centro-publico','cuidados-publicos','eleccion-cuidados','terciaria-publica','contratacion-educativa','primera-infancia','eleccion-apoyos','cuidados-publicos','eleccion-salud','salud-publica','bonos-educativos','cuidados-publicos','eleccion-cuidados','educacion-publica','eleccion-salud'],
 ['agua','prioridad-productiva','evaluacion-impacto','permisos','agroquimicos','metodos-agro','areas-protegidas','prioridad-productiva','reparacion','infraestructura','energia','energia','forestacion','forestacion','mineria','mineria','transporte','transporte','costa','costa']
];
const warnings={
 a0q1:'Venta, importación y refinación son actividades distintas. Defender o rechazar la desmonopolización de ANCAP no responde este enunciado sobre venta; no extrapolar.',
 a0q2:'Propiedad y monopolio no son lo mismo: apoyar competencia no prueba querer privatizar ANCAP.',
 a1q1:'No subir impuestos no equivale a priorizar bajarlos. No deducir redistribución solo del partido.',
 a1q11:'Bajar el IVA puede ser una propuesta redistributiva: no presupone oposición a impuestos progresivos.',
 a3q2:'La videovigilancia puede coexistir con garantías y rehabilitación; no extrapolar a otras preguntas.',
 a4q1:'«Más importantes» no define un procedimiento concreto. Solo admitir respaldo específico a esta exigencia.',
 a5q3:'Versión 3: solo aborto dentro de plazos y garantías legales. No reutilizar la respuesta al anterior enunciado compuesto.',
 a5q18:'Gradualidad imprecisa: no se deduce de una etiqueta conservadora ni de apoyar una reforma concreta.',
 a5q19:'Versión 3: eutanasia voluntaria con requisitos. No extrapolar apoyo a cuidados paliativos ni reutilizar la respuesta anterior.',
 a6q8:'Participar en debate público no implica religión estatal. No puntuar por la fe personal del político.',
 a6q9:'Neutralidad entre organizaciones no se opone necesariamente a financiar entidades religiosas.',
 a6q10:'Financiar actividades sociales religiosas no equivale a financiar culto ni enseñanza confesional.',
 a7q3:'Un TLC particular no demuestra apoyar cualquier tratado ni abandonar Mercosur.',
 a8q4:'Coincidir con una democracia en un conflicto no prueba una política permanente de alianzas.',
 a10q1:'Apoyar una escuela pública no prueba preferencia presupuestal sobre todos los prestadores.',
 a10q3:'Separar ASSE de educación pública y de cuidados; no trasladar evidencia entre servicios.',
 a10q6:'Elegir entre centros públicos no equivale a privatizar ni a financiar centros privados.'
};
export const QUESTION_AUDIT=Object.freeze(Object.fromEntries(concepts.flatMap((row,axis)=>row.map((concept,i)=>{
 const id=`a${axis}q${i+1}`;
 return [id,Object.freeze({concept:`${axis}:${concept}`,weight:1,scorable:true,warning:warnings[id]||'Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.'})];
}))));
export function evidenceQuestionId(q){return q.id.replace(/v3$/,'')}
export function questionConcept(q){return QUESTION_AUDIT[evidenceQuestionId(q)]?.concept||q.concept||q.id}
