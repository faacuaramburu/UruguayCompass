// Índice documental editorial. La ausencia de un dato nunca se convierte en 50.
export const COUNTRY_RUBRIC={
 economy:{
  0:'El texto organiza los medios fundamentales de producción mediante propiedad social y planificación central.',
  25:'Prevé dirección económica estatal, socialización o provisión pública de sectores productivos.',
  50:'Reconoce propiedad o iniciativa privadas junto con función social, límites de interés general o sectores públicos.',
  75:'Protege jurídicamente la propiedad privada frente a su privación arbitraria; no equivale a ausencia de regulación.'
 },
 institutions:{
  25:'El diseño establece responsabilidad parlamentaria o separación de poderes con controles legislativos y judiciales.',
  50:'Otorga facultades reforzadas al Ejecutivo, junto con órganos legislativos o judiciales de control.',
  75:'Reconoce una posición política dirigente a un partido, autoridad religiosa o estructura militar.',
  100:'Concentra la autoridad soberana en una jefatura que no depende de la confianza parlamentaria.'
 },
 religion:{
  0:'Establece separación entre Estado y confesiones, carácter laico o prohibición de una religión estatal.',
  25:'Garantiza libertad religiosa o de conciencia; este valor describe esa garantía, sin presumir separación completa.',
  75:'Reconoce un lugar especial a una tradición, confesión o autoridad religiosa sin equipararlo a laicismo.',
  100:'Define una religión estatal o una jefatura del Estado de naturaleza confesional.'
 }
};
export function countryNotes(values){return ['economy','institutions','religion'].map((key,i)=>{
 const note=COUNTRY_RUBRIC[key][values[i]];
 if(!note)throw new Error(`Categoría documental desconocida: ${key} ${values[i]}`);
 return note;
})}
