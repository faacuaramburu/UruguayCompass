import {POLITICAL_CATALOG,PARTY_CATALOG} from './political-catalog.js';
import {auditedProfiles} from './audited-profiles.js';
export const FIGURES=auditedProfiles(POLITICAL_CATALOG);
export const PARTIES=auditedProfiles(PARTY_CATALOG,{party:true});
export const POLITICAL_META={
 updatedAt:'2026-11-04',period:'Cada registro identifica la fecha y el tipo de evidencia; no presume vigencia en 2026.',
 cohort:'31 fichas conservadas. Solo las respuestas respaldadas individualmente intervienen en la afinidad personal.',
 figuresInRanking:FIGURES.filter(f=>f.rankEligible).map(f=>f.id),
 balanceNote:'La cobertura es desigual y se informa. La fórmula no utiliza partido ni sector; esto no demuestra ausencia de sesgo en las fuentes o preguntas.',
 limits:'Compatibilidad editorial por pregunta, no probabilidad ni identidad política. La información ausente no suma ni resta; amplía los límites del resultado.',
 individualLimit:'Se distinguen declaración, compromiso personal firmado y acto verificable. Una acción institucional no implica autoría exclusiva ni reconstruye convicciones privadas.',
 historicalLimit:'No se trasladan automáticamente posiciones antiguas al presente ni se sustituyen vacíos con el programa del partido.',
 missing:'Desconocida en las fuentes examinadas; se excluye del cálculo observado.',
 precision:'Se muestra el entero redondeado, se ordena por el valor sin redondear y se informa cobertura, confianza y límites por falta de datos.'
};
