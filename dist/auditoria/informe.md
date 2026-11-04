# Auditoría de puntuación política — UruguayCompass

Revisión 2026-11-04.1. Base anterior: `82fc9499d6b0438395486201319da1f0ddb916ab`. Reproducible con `npm run audit`.

## Alcance y resultado honesto

Se conservaron las 31 personas y las 240 preguntas. Se revisaron entrevistas individuales, documentos de precandidaturas, normas y seis programas oficiales. La matriz contiene 8880 filas: cada persona/programa frente a cada pregunta y los puntos de sus cinco respuestas.

**La reconstrucción técnica está implementada; la investigación no constituye una reconstrucción exhaustiva de las 31 trayectorias.** Hay 76 posiciones individuales codificadas de 7440 posibles. 4 personas permanecen sin puntaje individual suficiente en toda la batería. No son neutrales ni se eliminaron. Un vacío no se cubre con su partido, una etiqueta izquierda/derecha ni un programa compartido.

Las posiciones admitidas son interpretaciones editoriales del enunciado específico. Una fuente puede acreditar el acto o declaración, pero no publica el entero asignado. Se necesita revisión humana independiente de la codificación y contrastación adicional; no se proclama máxima precisión alcanzada, validez psicométrica ni ausencia de sesgo empírico.

## Hallazgos y cambios respecto a la base

El informe inicial está en `docs/AUDITORIA-INICIAL.md` y la tabla previa en `docs/AUDITORIA-BASELINE.json`. Se retiraron siete capas de perfiles numéricos que heredaban posiciones de partidos y fórmulas. Antes se restaba una distancia entre cinco promedios de eje; siete ejes no cambiaban la afinidad. La evidencia educativa se extrapolaba a salud y cuidados. Un promedio idéntico podía ocultar respuestas opuestas. Faltaban cobertura por afirmación y confianza.

Ahora cada compatibilidad personal exige persona, pregunta, postura, fuente fechada, localizador, fundamento y confianza. Los programas pertenecen exclusivamente al resultado de partidos. Promulgar/refrendar una norma se distingue de declaración y de autoría exclusiva. El período se muestra; no se presupone vigencia en 2026. No se usa una postura de 2025 para reconstruir automáticamente una administración de 1998. En fuentes normativas, la fecha registrada identifica la promulgación; puede diferir de su publicación en el Diario Oficial.

Se descartaron extrapolaciones no justificadas: expansión de liceos públicos ≠ prioridad de toda provisión pública; legalización de cannabis ≠ rechazo de cualquier restricción; competencia de combustibles ≠ venta de ANCAP; oposición a un proyecto concreto de eutanasia ≠ rechazo de cualquier régimen posible. El caso de Larrañaga identifica 2012 como fecha original de la entrevista republicada en 2021.

## Fórmula y escala

Respuesta y posición codificada toman valores 0 a 4. Puntos = (respuesta − 2) × (posición − 2), de −4 a +4. Desconocido = null: no suma, no resta, no se reemplaza por neutral. Una neutralidad documentada o una respuesta neutral aporta cero. La intensidad moderada genera evidencia moderada: coincidir en «de acuerdo» no representa una coincidencia extrema de +4. La dirección del eje solo se usa para los gráficos de polos, no se aplica dos veces a la compatibilidad.

| Respuesta \ postura | 0 | 1 | 2 | 3 | 4 |
|---|---:|---:|---:|---:|---:|
| Muy en desacuerdo | 4 | 2 | 0 | -2 | -4 |
| En desacuerdo | 2 | 1 | 0 | -1 | -2 |
| Ni de acuerdo ni en desacuerdo | 0 | 0 | 0 | 0 | 0 |
| De acuerdo | -2 | -1 | 0 | 1 | 2 |
| Muy de acuerdo | -4 | -2 | 0 | 2 | 4 |

| Puntos | Interpretación |
|---:|---|
| 4 | Compatibilidad muy alta |
| 2 | Compatibilidad alta |
| 1 | Compatibilidad parcial |
| 0 | Neutral o sin señal direccional |
| -1 | Incompatibilidad parcial |
| -4 | Incompatibilidad alta |

Cada eje tiene 1/12 del peso previsto. Cada concepto pesa igual dentro de su eje y sus variantes se reparten ese peso. Las repeticiones exactas de un ID se ignoran. Una variante desconocida conserva su fracción desconocida; un grupo con una sola fuente no se presenta como evidencia sobre todas sus variantes. Los conceptos son categorías editoriales, no factores estadísticos demostrados.

Índice observado = 50 + 12,5 × suma(peso × puntos conocidos) / cobertura. Cobertura = suma de pesos conocidos. El índice está normalizado en la misma escala, pero **porcentajes con distinta cobertura no establecen el mismo conocimiento ni permiten afirmar por sí solos quién es más cercano globalmente**. Si faltan once ejes, el único observado puede dominar la media condicional: el peso previsto, cobertura, límites y aviso provisional impiden presentarlo como certeza general. No existe una solución sin supuestos que convierta ausencias desiguales en una comparación completa y a la vez no impute/penalice esos vacíos.

Los límites sustituyen los puntos desconocidos por sus extremos posibles, restringidos por la respuesta conocida: una respuesta neutral limita a cero y una moderada a ±2. Son límites de identificación, no intervalos estadísticos ni márgenes de error probabilísticos. Solo se declara resultado único si el límite inferior del primero supera los superiores de todos los demás y hay señal no neutral. El orden usa precisión completa y los empates se explican; el alfabeto decide la foto, nunca una puntuación mayor. La confianza global es baja si cobertura <50%, menos de tres ejes o alguna evidencia baja. Este umbral es editorial y no altera los puntos.

## Preguntas modificadas y guardados

`a5q3v3` se limita al aborto legal dentro de plazos y garantías, en lugar de mezclar decisiones reproductivas. `a5q19v3` pregunta por eutanasia voluntaria con requisitos, antes insuficientemente distinguida. Sus IDs antiguos no se reutilizan. No se eliminó ninguna persona ni se cambió la cantidad de preguntas. Los tests de esquemas 1/2 se respaldan antes de escribir el esquema 3, conservando respuestas de enunciados sin cambios. Si falla el archivo, no se sobrescribe el original. Un archivo previo diferente también se conserva. Las preguntas nuevas/reformuladas deben completarse antes de resultados.

## Investigación individual y pendientes

El partido identifica el contexto de la ficha, no es prueba de ninguna respuesta. El sector no está verificado de forma independiente para todas las personas. Tampoco se completaron las evoluciones ideológicas ni todos los registros nominales parlamentarios. Los apartados siguientes permiten ver exactamente qué se codificó; el resto de las 240 celdas de cada persona queda desconocido.

### Yamandú Orsi

Partido de contexto: Frente Amplio. Período documental: **2024**. 4/240 afirmaciones documentadas.

No aumentar impuestos no implica priorizar rebajas. Su declaración individual se conserva separada del programa del FA.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a0q6: 4 — Apoyo directo; confianza media; justificación orsi-1 en datos.json.
- a0q8: 4 — Apoyo directo; confianza media; justificación orsi-1 en datos.json.
- a3q13: 4 — Apoyo directo; confianza media; justificación orsi-3 en datos.json.
- a0q14: 3 — Apoyo calificado; confianza media; justificación orsi-2 en datos.json.

Fuentes revisadas:
- [Voces · Entrevista a Yamandú Orsi](https://semanariovoces.com/yamandu-orsi-quiero-ministros-con-hambre-de-hacer/) — 2024-12-13; tipo interview.
- [Telemundo · Debate presidencial, intervenciones identificadas](https://www.teledoce.com/telemundo/nacionales/en-vivo-debate-entre-delgado-y-orsi-los-candidatos-ya-llegaron/) — 2024-11-17; tipo public-statement.

Sin posición admitida en ningún enunciado de estos temas: impuestos y gasto; trabajo y sindicatos; instituciones; derechos sociales, aborto y eutanasia; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Álvaro Delgado

Partido de contexto: Partido Nacional. Período documental: **2024**. 3/240 afirmaciones documentadas.

No extrapolar respaldo policial a cada facultad específica. La descentralización universitaria incluye oferta pública y privada.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a7q5: 3 — Apoyo calificado; confianza media; justificación delgado-3 en datos.json.
- a4q6: 3 — Apoyo calificado; confianza media; justificación delgado-1 en datos.json.
- a10q9: 3 — Apoyo calificado; confianza media; justificación delgado-2 en datos.json.

Fuentes revisadas:
- [Voces · Entrevista a Álvaro Delgado](https://semanariovoces.com/alvaro-delgado-no-tengo-ni-anteojeras-ni-prejuicios/) — 2024-11-23; tipo interview.
- [Telemundo · Debate presidencial, intervenciones identificadas](https://www.teledoce.com/telemundo/nacionales/en-vivo-debate-entre-delgado-y-orsi-los-candidatos-ya-llegaron/) — 2024-11-17; tipo public-statement.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; impuestos y gasto; trabajo y sindicatos; seguridad y cárceles; derechos sociales, aborto y eutanasia; religión y laicidad; diplomacia e integración; inmigración; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Andrés Ojeda

Partido de contexto: Partido Colorado. Período documental: **2024**. 3/240 afirmaciones documentadas.

Declaraciones reproducidas; falta corroboración temática adicional. La comparación con Milei no suministra posturas.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a5q3: 4 — Apoyo directo; confianza media; justificación ojeda-2 en datos.json.
- a5q11: 3 — Apoyo calificado; confianza media; justificación ojeda-1 en datos.json.
- a5q19: 3 — Apoyo calificado; confianza media; justificación ojeda-1 en datos.json.

Fuentes revisadas:
- [El País · Declaraciones de Ojeda en La Nación+](https://www.elpais.com.uy/informacion/politica/andres-ojeda-en-entrevista-con-un-canal-de-argentina-la-comparacion-con-milei-me-cae-muy-bien) — 2024-10-14; tipo attributed-statement.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; impuestos y gasto; trabajo y sindicatos; seguridad y cárceles; instituciones; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Guido Manini Ríos

Partido de contexto: Cabildo Abierto. Período documental: **2020**. 2/240 afirmaciones documentadas.

Snapshot explícito de 2020; no aplicar como postura actual ni confundir oposición al monopolio con venta de ANCAP.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a0q2: 4 — Apoyo directo; confianza media; justificación manini-1 en datos.json.
- a0q6: 4 — Apoyo directo; confianza media; justificación manini-2 en datos.json.

Fuentes revisadas:
- [Voces · Entrevista a Guido Manini Ríos](https://semanariovoces.com/guido-manini-rios-senador-nazis-fascistas-partido-militar-un-engendro-del-pepe-en-un-ano-fuimos-de-todo/) — 2020-02-29; tipo interview.

Sin posición admitida en ningún enunciado de estos temas: impuestos y gasto; trabajo y sindicatos; seguridad y cárceles; instituciones; derechos sociales, aborto y eutanasia; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Pablo Mieres

Partido de contexto: Partido Independiente. Período documental: **2022–2023**. 3/240 afirmaciones documentadas.

Distinguir liberalización de drogas, negociación salarial y desconocimiento explícito sobre alternativas tributarias.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a2q2: 3 — Apoyo calificado; confianza media; justificación mieres-2 en datos.json.
- a2q4: 3 — Apoyo calificado; confianza media; justificación mieres-2 en datos.json.
- a5q11: 3 — Apoyo calificado; confianza media; justificación mieres-1 en datos.json.

Fuentes revisadas:
- [Voces · Entrevista a Pablo Mieres](https://semanariovoces.com/pablo-mieres-no-creo-que-este-sea-un-gobierno-de-derecha-ni-que-gobierne-para-los-poderosos/) — 2022-10-22; tipo interview.
- [Presidencia · Presentación de pautas de Consejos de Salarios por Pablo Mieres](https://www.gub.uy/presidencia/comunicacion/noticias/poder-ejecutivo-presento-pautas-para-decima-ronda-consejos-salarios) — 2023-06-30; tipo public-statement.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; impuestos y gasto; seguridad y cárceles; instituciones; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Gustavo Salle

Partido de contexto: Identidad Soberana. Período documental: **2024**. 1/240 afirmaciones documentadas.

Una entrevista critica el ajuste previsional, sin responder impuestos, educación o salud; otra defiende valores tradicionales, sin precisar restricciones jurídicas. El programa de IS es contexto partidario. No se lo transforma en 240 respuestas personales de Salle.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a5q20: 3 — Apoyo calificado; confianza baja; justificación salle-1 en datos.json.

Fuentes revisadas:
- [Radio Uruguay · Entrevista a Gustavo Salle](https://mediospublicos.uy/salle-el-ajuste-fiscal-se-realiza-con-el-criterio-del-cobarde-que-es-lo-que-caracteriza/) — 2024-07-10; tipo interview.
- [El Pueblo · Entrevista a Gustavo Salle](https://elpueblodigital.uy/el-dr-gustavo-salle-tiene-una-mirada-cruda-diferente-y-acusadora-de-la-realidad-nacional-y-quiere-ser-presidente-de-la-republica-como-seria/) — 2024-07-15; tipo interview.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; impuestos y gasto; trabajo y sindicatos; seguridad y cárceles; instituciones; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Tabaré Vázquez

Partido de contexto: Frente Amplio. Período documental: **2007 (puntuación); 2014 (contexto)**. 2/240 afirmaciones documentadas.

Acto firmado de 2007. En 2014 explica su veto anterior al aborto, conserva su oposición personal y promete respetar la ley vigente y la voluntad popular. Ese compromiso institucional no se convierte en apoyo moral ni en propuesta de derogación; no se mezclan ambas épocas en un puntaje.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a10q4: 3 — Apoyo calificado; confianza media; justificación vazquez-2 en datos.json.
- a1q9: 3 — Apoyo calificado; confianza media; justificación vazquez-1 en datos.json.

Fuentes revisadas:
- [IMPO · Ley 18211, texto original](https://www.impo.com.uy/bases/leyes-originales/18211-2007) — 2007-12-05; tipo enacted-action.
- [Presidencia · Vázquez sobre ajustes de la reforma tributaria](https://archivo.presidencia.gub.uy/_web/noticias/2007/10/2007101002.htm) — 2007-10-10; tipo public-statement.
- [El País (España) · Entrevista a Tabaré Vázquez](https://elpais.com/internacional/2014/06/07/actualidad/1402095333_748625.html) — 2014-06-07; tipo interview.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; trabajo y sindicatos; seguridad y cárceles; instituciones; derechos sociales, aborto y eutanasia; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### José Mujica

Partido de contexto: Frente Amplio. Período documental: **2012–2013**. 4/240 afirmaciones documentadas.

Actos presidenciales documentados, sin atribuir autoría legislativa exclusiva ni extrapolar a todo progresismo.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a5q1: 3 — Apoyo calificado; confianza media; justificación mujica-2 en datos.json.
- a5q3: 4 — Apoyo directo; confianza media; justificación mujica-1 en datos.json.
- a10q9: 4 — Apoyo directo; confianza media; justificación mujica-4 en datos.json.
- a5q11: 3 — Apoyo calificado; confianza media; justificación mujica-3 en datos.json.

Fuentes revisadas:
- [IMPO · Ley 19075, texto original](https://www.impo.com.uy/bases/leyes-originales/19075-2013) — 2013-05-03; tipo enacted-action.
- [IMPO · Ley 19172, texto original](https://www.impo.com.uy/bases/leyes-originales/19172-2013) — 2013-12-20; tipo enacted-action.
- [IMPO · Ley 19043, texto original](https://www.impo.com.uy/bases/leyes-originales/19043-2012) — 2012-12-28; tipo enacted-action.
- [IMPO · Ley 18987, texto original](https://www.impo.com.uy/bases/leyes-originales/18987-2012) — 2012-10-22; tipo enacted-action.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; impuestos y gasto; trabajo y sindicatos; seguridad y cárceles; instituciones; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Luis Lacalle Pou

Partido de contexto: Partido Nacional. Período documental: **2022**. 3/240 afirmaciones documentadas.

Posturas personales sobre patrimonio y renta. No hereda toda la LUC ni todas las posiciones de sus aliados.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a1q8: 0 — Oposición directa; confianza media; justificación lacalle-1 en datos.json.
- a1q16: 1 — Oposición calificada; confianza media; justificación lacalle-1 en datos.json.
- a1q17: 3 — Apoyo calificado; confianza media; justificación lacalle-2 en datos.json.

Fuentes revisadas:
- [Voces · Entrevista a Luis Lacalle Pou](https://semanariovoces.com/luis-lacalle-pou-no-se-puede-ser-tan-soberbio-de-decir-que-se-hizo-todo-perfecto/) — 2022-10-01; tipo interview.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; trabajo y sindicatos; seguridad y cárceles; instituciones; derechos sociales, aborto y eutanasia; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Carolina Cosse

Partido de contexto: Frente Amplio. Período documental: **Precandidatura 2024**. 7/240 afirmaciones documentadas.

Plan personal fechado. No se copia el programa de Orsi ni se completa salud con evidencia educativa.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a11q1: 4 — Apoyo directo; confianza media; justificación cosse-1 en datos.json.
- a11q5: 4 — Apoyo directo; confianza media; justificación cosse-1 en datos.json.
- a0q6: 4 — Apoyo directo; confianza media; justificación cosse-4 en datos.json.
- a0q8: 4 — Apoyo directo; confianza media; justificación cosse-4 en datos.json.
- a11q11: 4 — Apoyo directo; confianza media; justificación cosse-4 en datos.json.
- a0q14: 3 — Apoyo calificado; confianza media; justificación cosse-3 en datos.json.
- a11q19: 4 — Apoyo directo; confianza media; justificación cosse-2 en datos.json.

Fuentes revisadas:
- [Carolina Cosse · Plan PAIS II](https://enperspectiva.uy/wp-content/uploads/2024/06/gacetilla_de_prensa_-_plan_pais_2_0-1.pdf) — 2024-06-10; tipo personal-platform.

Sin posición admitida en ningún enunciado de estos temas: impuestos y gasto; trabajo y sindicatos; seguridad y cárceles; instituciones; derechos sociales, aborto y eutanasia; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; educación, salud y cuidados. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Valeria Ripoll

Partido de contexto: Partido Nacional. Período documental: **2023–2024**. 1/240 afirmaciones documentadas.

Las entrevistas documentan cambio de militancia y defensa de inclusión. La reducción de jornada se limita al ejemplo municipal que respalda, sin trasladarlo a cualquier régimen laboral. No copiar a Delgado.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a2q6: 3 — Apoyo calificado; confianza media; justificación ripoll-1 en datos.json.

Fuentes revisadas:
- [Semanario Hebreo · Entrevista a Valeria Ripoll](https://www.semanariohebreojai.com/articulo/8173) — 2024-10-25; tipo interview.
- [Voces · Entrevista a Valeria Ripoll como secretaria general de ADEOM](https://semanariovoces.com/valeria-ripoll-secretaria-general-de-adeom-no-estoy-en-ningun-partido-y-me-siento-una-persona-libre/) — 2023-04-29; tipo interview.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; impuestos y gasto; seguridad y cárceles; instituciones; derechos sociales, aborto y eutanasia; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Robert Silva

Partido de contexto: Partido Colorado. Período documental: **2022**. 1/240 afirmaciones documentadas.

Explicita enseñanza imparcial en su defensa de la laicidad. Defiende educación pública y describe gestión y PPP. Eso no prueba bonos privados, financiación proporcional ni preferencia sobre ASSE.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a6q3: 3 — Apoyo calificado; confianza media; justificación silva-1 en datos.json.

Fuentes revisadas:
- [Voces · Entrevista a Robert Silva](https://semanariovoces.com/robert-silva-presidente-del-codicen-no-le-cedo-la-derecha-a-nadie-en-la-defensa-de-la-educacion-publica/) — 2022-12-18; tipo interview.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; impuestos y gasto; trabajo y sindicatos; seguridad y cárceles; instituciones; derechos sociales, aborto y eutanasia; comercio exterior; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Lorena Quintana

Partido de contexto: Cabildo Abierto. Período documental: **2024**. 2/240 afirmaciones documentadas.

Su oposición personal a adopción no se atribuye a Manini ni al programa. No se deduce laicidad de su fe; se distingue rechazo moral del aborto de una propuesta de derogación.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a5q9: 0 — Oposición directa; confianza alta; justificación quintana-1 en datos.json.
- a5q19: 0 — Oposición directa; confianza media; justificación quintana-2 en datos.json.

Fuentes revisadas:
- [Búsqueda · Entrevista a Lorena Quintana (2024; día no confirmado)](https://www.busqueda.com.uy/politica/lorena-quintana-detesto-que-las-mujeres-tengan-que-decidir-si-abortan-un-tema-economico-n5392340) — 2024; tipo interview.
- [Desayunos Informales · Entrevista a Lorena Quintana](https://www.teledoce.com/programas/desayunos-informales/primera-manana/no-estoy-de-acuerdo-con-la-adopcion-por-parejas-homosexuales-lorena-quintana/) — 2024-09-30; tipo interview.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; impuestos y gasto; trabajo y sindicatos; seguridad y cárceles; instituciones; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Mónica Bottero

Partido de contexto: Partido Independiente. Período documental: **2019–2024**. 3/240 afirmaciones documentadas.

Distinguir su respaldo a la agenda de derechos de la opinión de Mieres. El mantenimiento de normas no responde todos los mecanismos del test.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a5q1: 3 — Apoyo calificado; confianza media; justificación bottero-1 en datos.json.
- a5q3: 4 — Apoyo directo; confianza media; justificación bottero-2 en datos.json.
- a5q4: 1 — Oposición calificada; confianza media; justificación bottero-1 en datos.json.

Fuentes revisadas:
- [El País · Intervenciones de candidatas en encuentro del PIT-CNT](https://www.elpais.com.uy/informacion/politica/acuerdo-la-agenda-de-derechos-se-mantendra) — 2019-09-20; tipo attributed-statement.
- [El Pueblo · Entrevista a Mónica Bottero](https://elpueblodigital.uy/monica-bottero-periodista-y-vicepresidenciable-por-el-partido-independiente/) — 2024-09-15; tipo interview.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; impuestos y gasto; trabajo y sindicatos; seguridad y cárceles; instituciones; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### María Elvira Canoniero

Partido de contexto: Identidad Soberana. Período documental: **Fórmula 2024**. 0/240 afirmaciones documentadas.

No se pudo establecer con las fuentes examinadas evidencia individual suficiente que responda los enunciados. No heredar el programa de Salle.

Posturas admitidas (el código responde al enunciado, no a su polo):
- Ninguna posición individual suficientemente codificable. No implica neutralidad.

Fuentes revisadas:
- [Corte Electoral · Declaración de fórmulas de 2024](https://www.gub.uy/corte-electoral/sites/corte-electoral/files/2024-11/ACTA%20N%C2%BA%2010739%20-%20Declaraci%C3%B3n%20de%20segunda%20elecci%C3%B3n.pdf) — 2024; tipo candidate-registration.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; impuestos y gasto; trabajo y sindicatos; seguridad y cárceles; instituciones; derechos sociales, aborto y eutanasia; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Daniel Martínez

Partido de contexto: Frente Amplio. Período documental: **2015**. 1/240 afirmaciones documentadas.

Entrevista municipal fechada; no presentarla como programa presidencial de 2019 ni como postura vigente en 2026.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a0q2: 4 — Apoyo directo; confianza media; justificación martinez-1 en datos.json.

Fuentes revisadas:
- [Voces · Entrevista a Daniel Martínez](https://semanariovoces.com/daniel-martinez-gestionar-bien-no-se-compra-en-una-farmacia-ni-se-aprende-en-la-facultad/) — 2015-05-07; tipo interview.

Sin posición admitida en ningún enunciado de estos temas: impuestos y gasto; trabajo y sindicatos; seguridad y cárceles; instituciones; derechos sociales, aborto y eutanasia; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Ernesto Talvi

Partido de contexto: Partido Colorado. Período documental: **2019**. 1/240 afirmaciones documentadas.

Liceos públicos y rehabilitación explícitos. Gestión autónoma no equivale a privatizar educación.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a3q13: 4 — Apoyo directo; confianza media; justificación talvi-1 en datos.json.

Fuentes revisadas:
- [Voces · Entrevista a Ernesto Talvi](https://semanariovoces.com/ernesto-talvi-hay-vacas-sagradas-a-las-que-nadie-quiere-tocar/) — 2019-05-31; tipo interview.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; impuestos y gasto; trabajo y sindicatos; instituciones; derechos sociales, aborto y eutanasia; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Gonzalo Martínez

Partido de contexto: Asamblea Popular / Unidad Popular. Período documental: **2024**. 0/240 afirmaciones documentadas.

La entrevista defiende una reforma previsional. Pensiones y aportes patronales no sustituyen posiciones sobre educación, salud o impuestos a la renta. Sin herencia automática de UP.

Posturas admitidas (el código responde al enunciado, no a su polo):
- Ninguna posición individual suficientemente codificable. No implica neutralidad.

Fuentes revisadas:
- [APU · Entrevista a Gonzalo Martínez](https://www.apu.uy/noticias/martinez-si-no-triunfa-el-plebiscito-no-va-ser-por-falta-de-compromiso-en-nuestro-pueblo) — 2024-07-14; tipo interview.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; impuestos y gasto; trabajo y sindicatos; seguridad y cárceles; instituciones; derechos sociales, aborto y eutanasia; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Eduardo Lust

Partido de contexto: Partido Constitucional Ambientalista. Período documental: **2024**. 0/240 afirmaciones documentadas.

La entrevista defiende control parlamentario y ambiente en términos generales. No responde cada mecanismo específico; se conserva como contexto sin trasladar el programa del PCA.

Posturas admitidas (el código responde al enunciado, no a su polo):
- Ninguna posición individual suficientemente codificable. No implica neutralidad.

Fuentes revisadas:
- [Hoy Canelones · Entrevista a Eduardo Lust](https://hoycanelones.com.uy/?p=55158) — 2024-03-29; tipo interview.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; impuestos y gasto; trabajo y sindicatos; seguridad y cárceles; instituciones; derechos sociales, aborto y eutanasia; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### César Vega

Partido de contexto: Partido Ecologista Radical Intransigente. Período documental: **2020–2024 (autorreporte)**. 0/240 afirmaciones documentadas.

La memoria de PERI informa oposición al proyecto de eutanasia de 2022 y propuestas ambientales. No se transforma una objeción a ese proyecto en oposición universal a toda eutanasia con garantías; falta corroborar actas individuales. El autorreporte no se presenta como verificación independiente.

Posturas admitidas (el código responde al enunciado, no a su polo):
- Ninguna posición individual suficientemente codificable. No implica neutralidad.

Fuentes revisadas:
- [PERI · Memoria parlamentaria 2020–2024 (autorreporte, no acta independiente)](https://www.peri.org.uy/wp-content/uploads/2024/08/Trabajo-en-parlamento-PERI-2020-2024.pdf) — 2024-08; tipo self-report.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; impuestos y gasto; trabajo y sindicatos; seguridad y cárceles; instituciones; derechos sociales, aborto y eutanasia; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Luis Alberto Lacalle Herrera

Partido de contexto: Partido Nacional. Período documental: **2009**. 1/240 afirmaciones documentadas.

Competencia de combustibles y seguros documentada. Conserva apoyo a servicios públicos; no asignar todo el polo de mercado.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a0q15: 4 — Apoyo directo; confianza media; justificación lacalle-herrera-1 en datos.json.

Fuentes revisadas:
- [Voces · Entrevista a Luis Alberto Lacalle](https://semanariovoces.com/luis-alberto-lacalle-creo-que-ideas-hay-que-tener-pocas-pero-ideologia-ninguna/) — 2009-06-11; tipo interview.

Sin posición admitida en ningún enunciado de estos temas: impuestos y gasto; trabajo y sindicatos; seguridad y cárceles; instituciones; derechos sociales, aborto y eutanasia; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Mario Bergara

Partido de contexto: Frente Amplio. Período documental: **2024**. 3/240 afirmaciones documentadas.

Entrevista personal; falta traducir solo pasajes específicos verificables, sin puntuar todos los temas por su posición general.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a11q3: 3 — Apoyo calificado; confianza media; justificación bergara-3 en datos.json.
- a3q13: 4 — Apoyo directo; confianza media; justificación bergara-1 en datos.json.
- a0q14: 3 — Apoyo calificado; confianza media; justificación bergara-2 en datos.json.

Fuentes revisadas:
- [Voces · Entrevista a Mario Bergara](https://semanariovoces.com/mario-bergara-los-cucos-de-bolches-y-tupas-insultan-la-inteligencia-de-la-gente/) — 2024-05-04; tipo interview.

Sin posición admitida en ningún enunciado de estos temas: impuestos y gasto; trabajo y sindicatos; instituciones; derechos sociales, aborto y eutanasia; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; educación, salud y cuidados. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Óscar Andrade

Partido de contexto: Frente Amplio. Período documental: **2019**. 6/240 afirmaciones documentadas.

Entrevista personal; separar tributos, negociación laboral y ambiente. No trasladar rechazo a un TLC a toda la política exterior.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a1q2: 4 — Apoyo directo; confianza media; justificación andrade-1 en datos.json.
- a11q3: 4 — Apoyo directo; confianza media; justificación andrade-3 en datos.json.
- a1q8: 4 — Apoyo directo; confianza media; justificación andrade-1 en datos.json.
- a1q12: 4 — Apoyo directo; confianza media; justificación andrade-1 en datos.json.
- a1q18: 3 — Apoyo calificado; confianza media; justificación andrade-2 en datos.json.
- a1q20: 4 — Apoyo directo; confianza media; justificación andrade-1 en datos.json.

Fuentes revisadas:
- [Voces · Entrevista a Óscar Andrade](https://semanariovoces.com/oscar-andrade-si-esperas-la-bendicion-de-los-sectores-mas-poderosos-no-vas-a-hacer-nada/) — 2019-06-08; tipo interview.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; trabajo y sindicatos; seguridad y cárceles; instituciones; derechos sociales, aborto y eutanasia; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; educación, salud y cuidados. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Julio María Sanguinetti

Partido de contexto: Partido Colorado. Período documental: **1998 (acción); 2025 (contexto)**. 2/240 afirmaciones documentadas.

La acción de 1998 no representa toda su trayectoria ni se combina con comentarios de 2025 para reconstruir aquella administración.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a7q7: 3 — Apoyo calificado; confianza media; justificación sanguinetti-2 en datos.json.
- a1q17: 3 — Apoyo calificado; confianza media; justificación sanguinetti-1 en datos.json.

Fuentes revisadas:
- [IMPO · Ley 16906, texto original](https://www.impo.com.uy/bases/leyes-originales/16906-1998) — 1998-01-07; tipo enacted-action.
- [Voces · Entrevista a Julio María Sanguinetti](https://semanariovoces.com/julio-maria-sanguinetti-los-blancos-no-reconocen-la-realidad/) — 2025-11-27; tipo interview.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; trabajo y sindicatos; seguridad y cárceles; instituciones; derechos sociales, aborto y eutanasia; religión y laicidad; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Jorge Batlle

Partido de contexto: Partido Colorado. Período documental: **2000–2004 (acciones); 2012 (contexto)**. 3/240 afirmaciones documentadas.

Las exoneraciones de 2000 tienen alcance sectorial. La entrevista posterior no se atribuye al programa de 1999.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a7q5: 3 — Apoyo calificado; confianza media; justificación jorge-batlle-1 en datos.json.
- a1q13: 3 — Apoyo calificado; confianza media; justificación jorge-batlle-2 en datos.json.
- a1q17: 3 — Apoyo calificado; confianza media; justificación jorge-batlle-3 en datos.json.

Fuentes revisadas:
- [IMPO · Ley 17243, texto original](https://www.impo.com.uy/bases/leyes-originales/17243-2000) — 2000-06-29; tipo enacted-action.
- [IMPO · Ley 17.766, aprobación del TLC con México](https://www.impo.com.uy/bases/leyes/17766-2004) — 2004-05-17; tipo enacted-action.
- [Voces · Entrevista a Jorge Batlle](https://semanariovoces.com/jorge-batlle-este-gobierno-es-el-mas-derechista-que-he-visto-en-mi-vida-porque-jode-a-los-que-menos-tienen/) — 2012-04-12; tipo interview.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; trabajo y sindicatos; seguridad y cárceles; instituciones; derechos sociales, aborto y eutanasia; religión y laicidad; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Danilo Astori

Partido de contexto: Frente Amplio. Período documental: **2007 (acción); 2010 (contexto)**. 1/240 afirmaciones documentadas.

La firma ministerial es acción compartida, no prueba autoría exclusiva. No copiar a Mujica por integrar su fórmula.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a10q4: 3 — Apoyo calificado; confianza media; justificación astori-1 en datos.json.

Fuentes revisadas:
- [IMPO · Ley 18211, texto original](https://www.impo.com.uy/bases/leyes-originales/18211-2007) — 2007-12-05; tipo enacted-action.
- [Voces · Entrevista a Danilo Astori](https://semanariovoces.com/danilo-astori-no-nos-sacamos-del-todo-la-mentalidad-de-oposicion-no-somos-una-fuerza-de-gobierno-todavia/) — 2010-08-12; tipo interview.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; impuestos y gasto; trabajo y sindicatos; seguridad y cárceles; instituciones; derechos sociales, aborto y eutanasia; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Laura Raffo

Partido de contexto: Partido Nacional. Período documental: **2024**. 1/240 afirmaciones documentadas.

El respaldo general al programa del PN no demuestra cada postura individual. La entrevista accesible no sustenta la antigua ubicación educativa.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a7q19: 4 — Apoyo directo; confianza baja; justificación raffo-1 en datos.json.

Fuentes revisadas:
- [Radio Uruguay · Entrevista a Laura Raffo](https://mediospublicos.uy/los-uruguayos-quieren-mas-en-cinco-anos-no-se-puede-hacer-todo-afirmo-raffo/) — 2024-08-14; tipo interview.
- [Ámbito Uruguay · Propuesta de abastecimiento libre de Laura Raffo](https://www.ambito.com/uruguay/brecha-precios-argentina-raffo-propone-el-libre-abastecimiento-comercios-del-litoral-n6018778) — 2024-06-20; tipo attributed-statement.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; impuestos y gasto; trabajo y sindicatos; seguridad y cárceles; instituciones; derechos sociales, aborto y eutanasia; religión y laicidad; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Beatriz Argimón

Partido de contexto: Partido Nacional. Período documental: **2021 (posición); 2018 (contexto)**. 1/240 afirmaciones documentadas.

En 2018 declara no haber votado la despenalización del aborto; es autorreporte, no acta nominal. No se atribuye automáticamente a un período posterior. Pedir debate sobre modernización de ANCAP no demuestra apoyo ni oposición a desmonopolizarla. No copiar a Lacalle Pou. Su oposición a eutanasia en 2021 admite debate; se conserva esa calificación.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a5q19: 1 — Oposición calificada; confianza media; justificación argimon-1 en datos.json.

Fuentes revisadas:
- [Voces · Entrevista a Beatriz Argimón](https://semanariovoces.com/beatriz-argimon-estoy-convencida-que-no-es-un-referendum-a-favor-o-en-contra-del-gobierno/) — 2021-09-25; tipo interview.
- [Crónicas · Entrevista personal a Beatriz Argimón](https://www.cronicas.com.uy/wp-content/uploads/2018/03/Cr%C3%B3nicas23mar2018.pdf) — 2018-03-23; tipo interview.
- [El País Uruguay · Entrevista a Beatriz Argimón](https://www.elpais.com.uy/informacion/politica/beatriz-argimon-tenemos-que-ir-a-una-democracia-paritaria) — 2021-04-18; tipo interview.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; impuestos y gasto; trabajo y sindicatos; seguridad y cárceles; instituciones; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Juan Sartori

Partido de contexto: Partido Nacional. Período documental: **Precandidatura 2019**. 11/240 afirmaciones documentadas.

Propuestas de un documento personal firmado en primera persona. No atribuirle automáticamente el programa nacionalista posterior.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a7q1: 4 — Apoyo directo; confianza media; justificación sartori-5 en datos.json.
- a7q3: 4 — Apoyo directo; confianza media; justificación sartori-6 en datos.json.
- a1q5: 4 — Apoyo directo; confianza media; justificación sartori-3 en datos.json.
- a7q5: 4 — Apoyo directo; confianza media; justificación sartori-6 en datos.json.
- a7q12: 3 — Apoyo calificado; confianza media; justificación sartori-5 en datos.json.
- a0q13: 4 — Apoyo directo; confianza media; justificación sartori-2 en datos.json.
- a1q13: 4 — Apoyo directo; confianza media; justificación sartori-4 en datos.json.
- a4q16: 3 — Apoyo calificado; confianza media; justificación sartori-1 en datos.json.
- a0q17: 4 — Apoyo directo; confianza media; justificación sartori-1 en datos.json.
- a7q19: 4 — Apoyo directo; confianza media; justificación sartori-5 en datos.json.
- a7q20: 0 — Oposición directa; confianza media; justificación sartori-6 en datos.json.

Fuentes revisadas:
- [Juan Sartori · Plan de Todos, documento de su precandidatura](https://enperspectiva.uy/wp-content/uploads/2019/05/plan-de-todos-bases-programaticas-juan-sartori.pdf) — 2019-05-07; tipo personal-platform.

Sin posición admitida en ningún enunciado de estos temas: trabajo y sindicatos; seguridad y cárceles; derechos sociales, aborto y eutanasia; religión y laicidad; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Jorge Larrañaga

Partido de contexto: Partido Nacional. Período documental: **2012**. 3/240 afirmaciones documentadas.

Se corrige fecha original frente a republicación de 2021. Sus propuestas de 2012 no se mezclan con el programa de fórmula de 2014.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a0q8: 3 — Apoyo calificado; confianza media; justificación larranaga-1 en datos.json.
- a10q9: 4 — Apoyo directo; confianza media; justificación larranaga-2 en datos.json.
- a0q14: 3 — Apoyo calificado; confianza media; justificación larranaga-1 en datos.json.

Fuentes revisadas:
- [Voces · Entrevista a Jorge Larrañaga (fecha original; republicada en 2021)](https://semanariovoces.com/jorge-larranaga-no-creo-en-un-partido-blanquicolorado-ni-en-las-familias-ideologicas/) — 2012-03-15; tipo interview.

Sin posición admitida en ningún enunciado de estos temas: impuestos y gasto; trabajo y sindicatos; seguridad y cárceles; instituciones; derechos sociales, aborto y eutanasia; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

### Pedro Bordaberry

Partido de contexto: Partido Colorado. Período documental: **2014**. 3/240 afirmaciones documentadas.

Prioriza tributación al patrimonio y consumo frente a ingresos del trabajo. La rebaja de IVA se limita a canasta básica. La crítica a subsidios de ALUR no se extrapola a vender ANCAP ni a toda provisión no rentable.

Posturas admitidas (el código responde al enunciado, no a su polo):
- a1q8: 4 — Apoyo directo; confianza media; justificación bordaberry-1 en datos.json.
- a1q11: 3 — Apoyo calificado; confianza media; justificación bordaberry-2 en datos.json.
- a1q15: 4 — Apoyo directo; confianza media; justificación bordaberry-1 en datos.json.

Fuentes revisadas:
- [Voces · Entrevista a Pedro Bordaberry](https://semanariovoces.com/pedro-bordaberry-gane-quien-gane-nosotros-vamos-a-ir-por-la-gobernabilidad/) — 2014-10-16; tipo interview.

Sin posición admitida en ningún enunciado de estos temas: economía y empresas; trabajo y sindicatos; seguridad y cárceles; instituciones; derechos sociales, aborto y eutanasia; religión y laicidad; comercio exterior; diplomacia e integración; inmigración; educación, salud y cuidados; ambiente y energía. Los temas con evidencia también conservan preguntas desconocidas.
Pendiente: contrastar fuentes adicionales, sector y evolución completa, votaciones nominales y cambios de postura. Las biografías/contextos heredados no suministran puntajes.

## Revisión de las 240 afirmaciones

0/1 representan oposición fuerte/calificada; 2 neutralidad; 3/4 apoyo calificado/fuerte al enunciado. La dimensión y dirección indican cómo se proyectan sobre los polos. La matriz contiene los cinco puntos para todas las personas; datos.json enlaza cada celda conocida con su justificación y fuentes.

### a0q1 · Economía

Las empresas privadas deberían poder competir en la venta de combustibles.

Concepto: 0:combustibles. Apoyo al enunciado apunta a Libre mercado. Peso previsto en Extrema: 0.5556%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a0q1.
Venta, importación y refinación son actividades distintas. Defender o rechazar la desmonopolización de ANCAP no responde este enunciado sobre venta; no extrapolar.

### a1q1 · Impuestos

Bajar los impuestos debería ser una prioridad de la economía.

Concepto: 1:nivel-tributario. Apoyo al enunciado apunta a Impuestos bajos. Peso previsto en Extrema: 0.5208%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a1q1.
No subir impuestos no equivale a priorizar bajarlos. No deducir redistribución solo del partido.

### a2q1 · Trabajo

Las empresas deberían tener más libertad para acordar los horarios con cada trabajador.

Concepto: 2:horarios. Apoyo al enunciado apunta a Flexibilidad laboral. Peso previsto en Extrema: 0.2451%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a2q1, a2q9.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a3q1 · Seguridad

Para vigilar llamadas o mensajes, debería necesitarse el permiso de un juez en cada caso.

Concepto: 3:interceptacion. Apoyo al enunciado apunta a Libertades individuales. Peso previsto en Extrema: 0.4630%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a3q1.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a4q1 · Instituciones

Las decisiones más importantes del Poder Ejecutivo deberían requerir un debate parlamentario previo.

Concepto: 4:control-parlamentario. Apoyo al enunciado apunta a Gobierno controlado. Peso previsto en Extrema: 0.1603%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a4q1, a4q5, a4q13, a4q17.
«Más importantes» no define un procedimiento concreto. Solo admitir respaldo específico a esta exigencia.

### a5q1 · Valores sociales

El Estado debería reconocer por igual a los distintos tipos de familia.

Concepto: 5:familias. Apoyo al enunciado apunta a Progresismo. Peso previsto en Extrema: 0.2137%. 2/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a5q1, a5q2, a5q10.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a6q1 · Religión

Los actos oficiales deberían hacerse sin ceremonias religiosas.

Concepto: 6:ceremonias. Apoyo al enunciado apunta a Laicismo. Peso previsto en Extrema: 0.2315%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a6q1, a6q2, a6q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a7q1 · Comercio exterior

Uruguay debería bajar los impuestos que cobra a los productos de consumo que vienen del exterior.

Concepto: 7:arancel-consumo. Apoyo al enunciado apunta a Apertura comercial. Peso previsto en Extrema: 0.2604%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a7q1, a7q2.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a8q1 · Política exterior

Uruguay debería decidir cada voto internacional por su cuenta, sin comprometerse a votar con un bloque de países.

Concepto: 8:votos-internacionales. Apoyo al enunciado apunta a No alineamiento. Peso previsto en Extrema: 0.6944%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a8q1.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a9q1 · Inmigración

Debería haber requisitos más exigentes para venir a vivir a Uruguay.

Concepto: 9:ingreso. Apoyo al enunciado apunta a Restricción migratoria. Peso previsto en Extrema: 0.5556%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a9q1.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a10q1 · Educación y servicios

Al repartir el dinero del Estado para educación, debería darse prioridad a los centros públicos.

Concepto: 10:educacion-publica. Apoyo al enunciado apunta a Provisión pública. Peso previsto en Extrema: 0.2525%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a10q1, a10q5, a10q19.
Apoyar una escuela pública no prueba preferencia presupuestal sobre todos los prestadores.

### a11q1 · Ambiente

Para proteger las fuentes de agua, deberían limitarse las actividades productivas en las zonas cercanas.

Concepto: 11:agua. Apoyo al enunciado apunta a Protección ambiental. Peso previsto en Extrema: 0.5952%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a11q1.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a0q2 · Economía

ANCAP debería seguir siendo propiedad del Estado.

Concepto: 0:propiedad-publica. Apoyo al enunciado apunta a Intervencionismo estatal. Peso previsto en Extrema: 0.5556%. 2/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a0q2.
Propiedad y monopolio no son lo mismo: apoyar competencia no prueba querer privatizar ANCAP.

### a1q2 · Impuestos

Quienes ganan más deberían pagar en impuestos una parte mayor de sus ingresos.

Concepto: 1:progresividad. Apoyo al enunciado apunta a Redistribución. Peso previsto en Extrema: 0.1736%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a1q2, a1q10, a1q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a2q2 · Trabajo

Los Consejos de Salarios, donde negocian trabajadores, empresas y Gobierno, deberían seguir siendo centrales para fijar los sueldos.

Concepto: 2:negociacion-colectiva. Apoyo al enunciado apunta a Protección laboral. Peso previsto en Extrema: 0.1634%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a2q2, a2q4, a2q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a3q2 · Seguridad

La Policía debería usar más cámaras en los espacios públicos.

Concepto: 3:videovigilancia. Apoyo al enunciado apunta a Control y autoridad. Peso previsto en Extrema: 0.4630%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a3q2.
La videovigilancia puede coexistir con garantías y rehabilitación; no extrapolar a otras preguntas.

### a4q2 · Instituciones

El Poder Ejecutivo debería tener más margen para fijar prioridades de gestión sin autorizaciones parlamentarias adicionales.

Concepto: 4:autonomia-ejecutivo. Apoyo al enunciado apunta a Gobierno fuerte. Peso previsto en Extrema: 0.6410%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a4q2.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a5q2 · Valores sociales

Las políticas de apoyo a las familias deberían dar prioridad a las que se basan en el matrimonio.

Concepto: 5:familias. Apoyo al enunciado apunta a Conservadurismo. Peso previsto en Extrema: 0.2137%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a5q1, a5q2, a5q10.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a6q2 · Religión

Las autoridades deberían poder incluir expresiones religiosas en algunas ceremonias oficiales.

Concepto: 6:ceremonias. Apoyo al enunciado apunta a Tradicionalismo religioso. Peso previsto en Extrema: 0.2315%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a6q1, a6q2, a6q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a7q2 · Comercio exterior

El Estado debería cobrar impuestos a las importaciones para proteger a los productores que compiten con ellas.

Concepto: 7:arancel-consumo. Apoyo al enunciado apunta a Proteccionismo. Peso previsto en Extrema: 0.2604%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a7q1, a7q2.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a8q2 · Política exterior

Uruguay debería coordinar de forma estable sus posiciones internacionales con países que tienen posturas similares.

Concepto: 8:alianzas. Apoyo al enunciado apunta a Alineamiento internacional. Peso previsto en Extrema: 0.2315%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a8q2, a8q4, a8q12.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a9q2 · Inmigración

El trámite de residencia debería ser más simple para quienes quieran vivir en Uruguay.

Concepto: 9:residencia. Apoyo al enunciado apunta a Apertura migratoria. Peso previsto en Extrema: 0.1852%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a9q2, a9q9, a9q15.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a10q2 · Educación y servicios

Las familias deberían poder usar ayudas del Estado para elegir entre centros educativos públicos y privados.

Concepto: 10:bonos-educativos. Apoyo al enunciado apunta a Libertad de elección. Peso previsto en Extrema: 0.3788%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a10q2, a10q16.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a11q2 · Ambiente

Al decidir cómo se usa el territorio, debería darse más prioridad a los proyectos que generan empleo.

Concepto: 11:prioridad-productiva. Apoyo al enunciado apunta a Desarrollo productivo. Peso previsto en Extrema: 0.2976%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a11q2, a11q8.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a0q3 · Economía

Los precios de los servicios comerciales deberían depender principalmente de la competencia entre empresas.

Concepto: 0:precios. Apoyo al enunciado apunta a Libre mercado. Peso previsto en Extrema: 0.2778%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a0q3, a0q4.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a1q3 · Impuestos

Los nuevos programas del Estado deberían pagarse principalmente usando dinero que hoy se gasta en otras cosas.

Concepto: 1:reasignacion-gasto. Apoyo al enunciado apunta a Impuestos bajos. Peso previsto en Extrema: 0.5208%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a1q3.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a2q3 · Trabajo

Debería haber menos restricciones para contratar trabajadores por un tiempo limitado.

Concepto: 2:contratos-temporales. Apoyo al enunciado apunta a Flexibilidad laboral. Peso previsto en Extrema: 0.4902%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a2q3.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a3q3 · Seguridad

Las personas deberían poder hacer manifestaciones sin pedir permiso antes.

Concepto: 3:manifestaciones. Apoyo al enunciado apunta a Libertades individuales. Peso previsto en Extrema: 0.2315%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a3q3, a3q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a4q3 · Instituciones

Los organismos de control deberían contar con recursos propios para fiscalizar al gobierno.

Concepto: 4:recursos-contralor. Apoyo al enunciado apunta a Gobierno controlado. Peso previsto en Extrema: 0.6410%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a4q3.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a5q3v3 · Valores sociales

Las personas adultas deberían poder decidir interrumpir un embarazo dentro de los plazos y garantías establecidos por ley.

Concepto: 5:aborto. Apoyo al enunciado apunta a Progresismo. Peso previsto en Extrema: 0.3205%. 3/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a5q3v3, a5q4.
Versión 3: solo aborto dentro de plazos y garantías legales. No reutilizar la respuesta al anterior enunciado compuesto.

### a6q3 · Religión

La educación pública debería enseñar sobre las religiones sin promover ninguna.

Concepto: 6:ensenanza-religion. Apoyo al enunciado apunta a Laicismo. Peso previsto en Extrema: 0.1736%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a6q3, a6q4, a6q11, a6q12.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a7q3 · Comercio exterior

Uruguay debería poder negociar acuerdos comerciales con países de fuera del Mercosur.

Concepto: 7:acuerdos. Apoyo al enunciado apunta a Apertura comercial. Peso previsto en Extrema: 0.2604%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a7q3, a7q5.
Un TLC particular no demuestra apoyar cualquier tratado ni abandonar Mercosur.

### a8q3 · Política exterior

Uruguay debería mantener relaciones con muchos países, aunque tenga diferencias políticas con sus gobiernos.

Concepto: 8:pluralidad-relaciones. Apoyo al enunciado apunta a No alineamiento. Peso previsto en Extrema: 0.2315%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a8q3, a8q11, a8q19.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a9q3 · Inmigración

Uruguay debería limitar cuántas personas ingresan para vivir según su capacidad de integrarlas.

Concepto: 9:cupos. Apoyo al enunciado apunta a Restricción migratoria. Peso previsto en Extrema: 0.5556%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a9q3.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a10q3 · Educación y servicios

La ampliación de la atención de salud debería apoyarse principalmente en ASSE.

Concepto: 10:salud-publica. Apoyo al enunciado apunta a Provisión pública. Peso previsto en Extrema: 0.3788%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a10q3, a10q15.
Separar ASSE de educación pública y de cuidados; no trasladar evidencia entre servicios.

### a11q3 · Ambiente

Antes de autorizar nuevos proyectos productivos, debería estudiarse con más detalle su impacto ambiental.

Concepto: 11:evaluacion-impacto. Apoyo al enunciado apunta a Protección ambiental. Peso previsto en Extrema: 0.5952%. 2/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a11q3.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a0q4 · Economía

El Estado debería controlar los precios de los servicios cuando hay pocas empresas que los ofrecen.

Concepto: 0:precios. Apoyo al enunciado apunta a Intervencionismo estatal. Peso previsto en Extrema: 0.2778%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a0q3, a0q4.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a1q4 · Impuestos

El Estado debería dar más ayuda económica a los hogares con menos ingresos.

Concepto: 1:transferencias. Apoyo al enunciado apunta a Redistribución. Peso previsto en Extrema: 0.2604%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a1q4, a1q14.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a2q4 · Trabajo

Los acuerdos entre sindicatos y empresas deberían fijar condiciones mínimas para cada sector.

Concepto: 2:negociacion-colectiva. Apoyo al enunciado apunta a Protección laboral. Peso previsto en Extrema: 0.1634%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a2q2, a2q4, a2q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a3q4 · Seguridad

La Policía debería hacer más controles de identidad en las zonas con más delitos.

Concepto: 3:identificacion. Apoyo al enunciado apunta a Control y autoridad. Peso previsto en Extrema: 0.4630%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a3q4.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a4q4 · Instituciones

Las decisiones administrativas rutinarias del gobierno deberían aprobarse con menos controles previos.

Concepto: 4:control-previo. Apoyo al enunciado apunta a Gobierno fuerte. Peso previsto en Extrema: 0.3205%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a4q4, a4q16.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a5q4 · Valores sociales

Debería haber más restricciones al aborto.

Concepto: 5:aborto. Apoyo al enunciado apunta a Conservadurismo. Peso previsto en Extrema: 0.3205%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a5q3v3, a5q4.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a6q4 · Religión

Los centros educativos públicos deberían poder ofrecer actividades religiosas voluntarias fuera del horario de clase.

Concepto: 6:ensenanza-religion. Apoyo al enunciado apunta a Tradicionalismo religioso. Peso previsto en Extrema: 0.1736%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a6q3, a6q4, a6q11, a6q12.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a7q4 · Comercio exterior

Las reglas del comercio exterior deberían dar prioridad a la producción nacional en algunos sectores.

Concepto: 7:prioridad-nacional. Apoyo al enunciado apunta a Proteccionismo. Peso previsto en Extrema: 0.5208%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a7q4.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a8q4 · Política exterior

La política exterior debería dar prioridad a alianzas con países que comparten su forma de organizar las instituciones.

Concepto: 8:alianzas. Apoyo al enunciado apunta a Alineamiento internacional. Peso previsto en Extrema: 0.2315%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a8q2, a8q4, a8q12.
Coincidir con una democracia en un conflicto no prueba una política permanente de alianzas.

### a9q4 · Inmigración

Las personas migrantes deberían recibir orientación apenas llegan al país.

Concepto: 9:orientacion. Apoyo al enunciado apunta a Apertura migratoria. Peso previsto en Extrema: 0.5556%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a9q4.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a10q4 · Educación y servicios

Las personas deberían poder elegir entre prestadores de salud habilitados usando el financiamiento público disponible.

Concepto: 10:eleccion-salud. Apoyo al enunciado apunta a Libertad de elección. Peso previsto en Extrema: 0.2525%. 2/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a10q4, a10q14, a10q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a11q4 · Ambiente

Los permisos ambientales deberían resolverse más rápido para facilitar las inversiones.

Concepto: 11:permisos. Apoyo al enunciado apunta a Desarrollo productivo. Peso previsto en Extrema: 0.5952%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a11q4.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a0q5 · Economía

Las empresas públicas deberían poder recibir inversiones de privados a cambio de una parte de la empresa.

Concepto: 0:capital-empresas. Apoyo al enunciado apunta a Libre mercado. Peso previsto en Extrema: 0.5556%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a0q5.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a1q5 · Impuestos

Los impuestos a las ganancias de las empresas deberían bajar para favorecer la inversión.

Concepto: 1:renta-empresarial. Apoyo al enunciado apunta a Impuestos bajos. Peso previsto en Extrema: 0.5208%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a1q5.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a2q5 · Trabajo

El pago que recibe una persona al ser despedida debería variar según la situación económica de la empresa.

Concepto: 2:despido. Apoyo al enunciado apunta a Flexibilidad laboral. Peso previsto en Extrema: 0.4902%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a2q5.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a3q5 · Seguridad

La detención preventiva, antes del juicio, debería usarse solo en casos excepcionales.

Concepto: 3:prision-preventiva. Apoyo al enunciado apunta a Libertades individuales. Peso previsto en Extrema: 0.4630%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a3q5.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a4q5 · Instituciones

La oposición parlamentaria debería tener más herramientas para pedir información a los ministros.

Concepto: 4:control-parlamentario. Apoyo al enunciado apunta a Gobierno controlado. Peso previsto en Extrema: 0.1603%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a4q1, a4q5, a4q13, a4q17.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a5q5 · Valores sociales

Los centros educativos deberían enseñar sobre diversidad sexual.

Concepto: 5:educacion-sexual. Apoyo al enunciado apunta a Progresismo. Peso previsto en Extrema: 0.3205%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a5q5, a5q6.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a6q5 · Religión

Los edificios públicos deberían evitar símbolos que vinculen al Estado con una religión.

Concepto: 6:simbolos. Apoyo al enunciado apunta a Laicismo. Peso previsto en Extrema: 0.3472%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a6q5, a6q6.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a7q5 · Comercio exterior

Uruguay debería ampliar los acuerdos que facilitan el libre comercio con otros mercados.

Concepto: 7:acuerdos. Apoyo al enunciado apunta a Apertura comercial. Peso previsto en Extrema: 0.2604%. 3/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a7q3, a7q5.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a8q5 · Política exterior

Uruguay debería evitar acuerdos que lo obliguen a apoyar la postura de otros países en conflictos internacionales.

Concepto: 8:conflictos. Apoyo al enunciado apunta a No alineamiento. Peso previsto en Extrema: 0.6944%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a8q5.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a9q5 · Inmigración

Quienes recién llegan a vivir al país deberían esperar un tiempo antes de acceder a algunas ayudas sociales.

Concepto: 9:ayudas. Apoyo al enunciado apunta a Restricción migratoria. Peso previsto en Extrema: 0.5556%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a9q5.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a10q5 · Educación y servicios

La educación debería ampliarse principalmente a través de centros públicos.

Concepto: 10:educacion-publica. Apoyo al enunciado apunta a Provisión pública. Peso previsto en Extrema: 0.2525%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a10q1, a10q5, a10q19.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a11q5 · Ambiente

Debería haber más restricciones al uso de productos químicos para el campo cerca de ríos y arroyos.

Concepto: 11:agroquimicos. Apoyo al enunciado apunta a Protección ambiental. Peso previsto en Extrema: 0.5952%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a11q5.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a0q6 · Economía

El Estado debería mantener empresas propias en áreas importantes para el país.

Concepto: 0:empresa-publica. Apoyo al enunciado apunta a Intervencionismo estatal. Peso previsto en Extrema: 0.2778%. 3/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a0q6, a0q10.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a1q6 · Impuestos

Las grandes herencias deberían pagar un impuesto especial.

Concepto: 1:herencias. Apoyo al enunciado apunta a Redistribución. Peso previsto en Extrema: 0.5208%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a1q6.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a2q6 · Trabajo

La reducción de las horas de trabajo debería negociarse sin bajar el sueldo.

Concepto: 2:jornada. Apoyo al enunciado apunta a Protección laboral. Peso previsto en Extrema: 0.4902%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a2q6.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a3q6 · Seguridad

La Policía debería tener más facultades para hacer controles preventivos de vehículos.

Concepto: 3:vehiculos. Apoyo al enunciado apunta a Control y autoridad. Peso previsto en Extrema: 0.4630%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a3q6.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a4q6 · Instituciones

La Presidencia debería poder coordinar de forma más directa la gestión de los ministerios.

Concepto: 4:coordinacion-ejecutivo. Apoyo al enunciado apunta a Gobierno fuerte. Peso previsto en Extrema: 0.2137%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a4q6, a4q14, a4q18.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a5q6 · Valores sociales

Las familias deberían participar más al decidir qué se enseña sobre sexualidad.

Concepto: 5:educacion-sexual. Apoyo al enunciado apunta a Conservadurismo. Peso previsto en Extrema: 0.3205%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a5q5, a5q6.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a6q6 · Religión

Los símbolos religiosos que forman parte de una tradición deberían poder seguir en edificios públicos.

Concepto: 6:simbolos. Apoyo al enunciado apunta a Tradicionalismo religioso. Peso previsto en Extrema: 0.3472%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a6q5, a6q6.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a7q6 · Comercio exterior

Cuando el Estado compra productos o servicios, debería dar preferencia a proveedores uruguayos.

Concepto: 7:compras-publicas. Apoyo al enunciado apunta a Proteccionismo. Peso previsto en Extrema: 0.1736%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a7q6, a7q8, a7q15.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a8q6 · Política exterior

Uruguay debería mantener compromisos diplomáticos de largo plazo con sus socios principales.

Concepto: 8:compromisos. Apoyo al enunciado apunta a Alineamiento internacional. Peso previsto en Extrema: 0.6944%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a8q6.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a9q6 · Inmigración

El reconocimiento de títulos de estudio obtenidos en el exterior debería ser más rápido.

Concepto: 9:titulos. Apoyo al enunciado apunta a Apertura migratoria. Peso previsto en Extrema: 0.5556%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a9q6.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a10q6 · Educación y servicios

Las familias deberían tener más posibilidades de elegir a qué centro público van sus hijos.

Concepto: 10:eleccion-centro-publico. Apoyo al enunciado apunta a Libertad de elección. Peso previsto en Extrema: 0.7576%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a10q6.
Elegir entre centros públicos no equivale a privatizar ni a financiar centros privados.

### a11q6 · Ambiente

Quienes trabajan en el agro deberían tener más libertad para elegir sus métodos de producción.

Concepto: 11:metodos-agro. Apoyo al enunciado apunta a Desarrollo productivo. Peso previsto en Extrema: 0.5952%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a11q6.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a0q7 · Economía

Las empresas privadas deberían poder ofrecer nuevos servicios de telefonía e internet.

Concepto: 0:telecomunicaciones. Apoyo al enunciado apunta a Libre mercado. Peso previsto en Extrema: 0.5556%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a0q7.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a1q7 · Impuestos

Las familias deberían pagar menos impuestos por sus ahorros.

Concepto: 1:ahorro. Apoyo al enunciado apunta a Impuestos bajos. Peso previsto en Extrema: 0.5208%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a1q7.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a2q7 · Trabajo

Los acuerdos de una empresa con sus trabajadores deberían poder ser distintos a los del resto del sector.

Concepto: 2:negociacion-empresa. Apoyo al enunciado apunta a Flexibilidad laboral. Peso previsto en Extrema: 0.4902%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a2q7.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a3q7 · Seguridad

Las personas deberían poder saber qué datos suyos guarda el Estado.

Concepto: 3:datos-personales. Apoyo al enunciado apunta a Libertades individuales. Peso previsto en Extrema: 0.2315%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a3q7, a3q15.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a4q7 · Instituciones

Las grandes compras del Estado deberían pasar por controles independientes antes de contratarse.

Concepto: 4:compras. Apoyo al enunciado apunta a Gobierno controlado. Peso previsto en Extrema: 0.3205%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a4q7, a4q15.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a5q7 · Valores sociales

Para cambiar el género en los documentos, debería alcanzar con la declaración de la persona.

Concepto: 5:identidad-documental. Apoyo al enunciado apunta a Progresismo. Peso previsto en Extrema: 0.3205%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a5q7, a5q8.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a6q7 · Religión

Quienes tienen cargos públicos no deberían justificar sus decisiones oficiales en mandatos religiosos.

Concepto: 6:fundamento-decisiones. Apoyo al enunciado apunta a Laicismo. Peso previsto en Extrema: 0.6944%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a6q7.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a7q7 · Comercio exterior

Debería ser más fácil importar maquinaria que se usa para producir.

Concepto: 7:maquinaria. Apoyo al enunciado apunta a Apertura comercial. Peso previsto en Extrema: 0.5208%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a7q7.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a8q7 · Política exterior

Al participar en organismos internacionales, Uruguay debería conservar amplia libertad para decidir por su cuenta.

Concepto: 8:autonomia-organismos. Apoyo al enunciado apunta a No alineamiento. Peso previsto en Extrema: 0.6944%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a8q7.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a9q7 · Inmigración

Los permisos para vivir y trabajar en Uruguay deberían dar prioridad a los oficios y profesiones con más demanda de trabajadores.

Concepto: 9:seleccion-laboral. Apoyo al enunciado apunta a Restricción migratoria. Peso previsto en Extrema: 0.2778%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a9q7, a9q17.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a10q7 · Educación y servicios

El Estado debería gestionar directamente una mayor parte de los servicios de cuidados para personas mayores.

Concepto: 10:cuidados-publicos. Apoyo al enunciado apunta a Provisión pública. Peso previsto en Extrema: 0.2525%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a10q7, a10q13, a10q17.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a11q7 · Ambiente

Al planificar el uso del territorio, debería darse prioridad a ampliar las áreas naturales protegidas.

Concepto: 11:areas-protegidas. Apoyo al enunciado apunta a Protección ambiental. Peso previsto en Extrema: 0.5952%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a11q7.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a0q8 · Economía

Las inversiones de las empresas públicas deberían ayudar al desarrollo del país.

Concepto: 0:inversion-publica. Apoyo al enunciado apunta a Intervencionismo estatal. Peso previsto en Extrema: 0.2778%. 3/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a0q8, a0q14.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a1q8 · Impuestos

Una parte mayor de los impuestos debería cobrarse sobre la riqueza que las personas ya tienen.

Concepto: 1:patrimonio. Apoyo al enunciado apunta a Redistribución. Peso previsto en Extrema: 0.2604%. 3/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a1q8, a1q16.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a2q8 · Trabajo

Los sindicatos deberían participar cuando se deciden cambios importantes en la organización del trabajo.

Concepto: 2:participacion-sindical. Apoyo al enunciado apunta a Protección laboral. Peso previsto en Extrema: 0.4902%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a2q8.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a3q8 · Seguridad

Debería poder usarse tecnología que reconoce rostros para identificar a personas buscadas por la Justicia.

Concepto: 3:reconocimiento-facial. Apoyo al enunciado apunta a Control y autoridad. Peso previsto en Extrema: 0.4630%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a3q8.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a4q8 · Instituciones

Los ministerios deberían disponer de más autonomía para reasignar recursos dentro de sus presupuestos aprobados.

Concepto: 4:presupuesto. Apoyo al enunciado apunta a Gobierno fuerte. Peso previsto en Extrema: 0.6410%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a4q8.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a5q8 · Valores sociales

Para cambiar el género en los documentos, deberían exigirse evaluaciones adicionales.

Concepto: 5:identidad-documental. Apoyo al enunciado apunta a Conservadurismo. Peso previsto en Extrema: 0.3205%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a5q7, a5q8.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a6q8 · Religión

Las organizaciones religiosas deberían participar más en los debates públicos sobre temas éticos.

Concepto: 6:debate-publico. Apoyo al enunciado apunta a Tradicionalismo religioso. Peso previsto en Extrema: 0.6944%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a6q8.
Participar en debate público no implica religión estatal. No puntuar por la fe personal del político.

### a7q8 · Comercio exterior

Los productos importados que compra el Estado deberían tener una mayor parte de componentes hechos en Uruguay.

Concepto: 7:compras-publicas. Apoyo al enunciado apunta a Proteccionismo. Peso previsto en Extrema: 0.1736%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a7q6, a7q8, a7q15.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a8q8 · Política exterior

Uruguay debería promover posiciones compartidas con un bloque regional en los organismos internacionales.

Concepto: 8:coordinacion-regional. Apoyo al enunciado apunta a Alineamiento internacional. Peso previsto en Extrema: 0.2315%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a8q8, a8q14, a8q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a9q8 · Inmigración

Los servicios públicos deberían dar más ayuda a quienes tienen dificultades con el idioma.

Concepto: 9:idioma. Apoyo al enunciado apunta a Apertura migratoria. Peso previsto en Extrema: 0.5556%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a9q8.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a10q8 · Educación y servicios

Las familias deberían poder elegir quién presta los cuidados financiados con ayuda estatal.

Concepto: 10:eleccion-cuidados. Apoyo al enunciado apunta a Libertad de elección. Peso previsto en Extrema: 0.3788%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a10q8, a10q18.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a11q8 · Ambiente

Al decidir si se limita un proyecto en una zona de interés económico, debería importar sobre todo cuánto aporta a la producción.

Concepto: 11:prioridad-productiva. Apoyo al enunciado apunta a Desarrollo productivo. Peso previsto en Extrema: 0.2976%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a11q2, a11q8.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a0q9 · Economía

El Estado debería recurrir habitualmente a empresas privadas para gestionar obras como rutas y puertos.

Concepto: 0:gestion-infraestructura. Apoyo al enunciado apunta a Libre mercado. Peso previsto en Extrema: 0.5556%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a0q9.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a1q9 · Impuestos

Cuando el Estado recauda más, debería usar una parte de ese dinero para bajar impuestos.

Concepto: 1:rebajas-recaudacion. Apoyo al enunciado apunta a Impuestos bajos. Peso previsto en Extrema: 0.5208%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a1q9.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a2q9 · Trabajo

Las empresas deberían poder cambiar los turnos de trabajo con trámites más simples.

Concepto: 2:horarios. Apoyo al enunciado apunta a Flexibilidad laboral. Peso previsto en Extrema: 0.2451%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a2q1, a2q9.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a3q9 · Seguridad

Las restricciones para circular deberían durar poco tiempo y poder ser revisadas por un juez.

Concepto: 3:circulacion. Apoyo al enunciado apunta a Libertades individuales. Peso previsto en Extrema: 0.4630%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a3q9.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a4q9 · Instituciones

Los datos sobre las decisiones del gobierno deberían publicarse aunque generen críticas a su gestión.

Concepto: 4:transparencia. Apoyo al enunciado apunta a Gobierno controlado. Peso previsto en Extrema: 0.6410%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a4q9.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a5q9 · Valores sociales

Las parejas del mismo sexo deberían tener las mismas posibilidades de adoptar que las demás parejas.

Concepto: 5:adopcion. Apoyo al enunciado apunta a Progresismo. Peso previsto en Extrema: 0.6410%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a5q9.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a6q9 · Religión

Al financiar actividades sociales, el Estado no debería tener en cuenta la religión de quienes las organizan.

Concepto: 6:financiacion-social. Apoyo al enunciado apunta a Laicismo. Peso previsto en Extrema: 0.3472%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a6q9, a6q10.
Neutralidad entre organizaciones no se opone necesariamente a financiar entidades religiosas.

### a7q9 · Comercio exterior

Debería facilitarse la competencia de productos extranjeros, aunque las empresas uruguayas tengan que adaptarse.

Concepto: 7:competencia-importada. Apoyo al enunciado apunta a Apertura comercial. Peso previsto en Extrema: 0.5208%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a7q9.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a8q9 · Política exterior

Uruguay debería ayudar al diálogo entre países enfrentados sin sumarse a sus alianzas.

Concepto: 8:mediacion. Apoyo al enunciado apunta a No alineamiento. Peso previsto en Extrema: 0.3472%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a8q9, a8q15.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a9q9 · Inmigración

Para obtener la residencia permanente, debería exigirse un vínculo más largo con Uruguay.

Concepto: 9:residencia. Apoyo al enunciado apunta a Restricción migratoria. Peso previsto en Extrema: 0.1852%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a9q2, a9q9, a9q15.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a10q9 · Educación y servicios

La educación terciaria pública debería llegar a más lugares del país con dinero del Estado.

Concepto: 10:terciaria-publica. Apoyo al enunciado apunta a Provisión pública. Peso previsto en Extrema: 0.7576%. 3/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a10q9.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a11q9 · Ambiente

Las empresas deberían pagar una parte mayor del costo de recuperar los ambientes que afectan.

Concepto: 11:reparacion. Apoyo al enunciado apunta a Protección ambiental. Peso previsto en Extrema: 0.5952%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a11q9.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a0q10 · Economía

El Estado debería crear empresas cuando las que ya existen no cubren las necesidades.

Concepto: 0:empresa-publica. Apoyo al enunciado apunta a Intervencionismo estatal. Peso previsto en Extrema: 0.2778%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a0q6, a0q10.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a1q10 · Impuestos

Los impuestos deberían ayudar a reducir las diferencias de ingresos entre los hogares.

Concepto: 1:progresividad. Apoyo al enunciado apunta a Redistribución. Peso previsto en Extrema: 0.1736%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a1q2, a1q10, a1q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a2q10 · Trabajo

Cuando una empresa contrata a otra para hacer un trabajo, debería haber más obligaciones de proteger a esos trabajadores.

Concepto: 2:subcontratacion. Apoyo al enunciado apunta a Protección laboral. Peso previsto en Extrema: 0.4902%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a2q10.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a3q10 · Seguridad

Las penas deberían ser mayores para quienes vuelven a cometer delitos.

Concepto: 3:reincidencia. Apoyo al enunciado apunta a Control y autoridad. Peso previsto en Extrema: 0.4630%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a3q10.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a4q10 · Instituciones

El gobierno debería usar con más frecuencia los procedimientos de tratamiento legislativo urgente previstos en la Constitución.

Concepto: 4:urgencia-legislativa. Apoyo al enunciado apunta a Gobierno fuerte. Peso previsto en Extrema: 0.6410%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a4q10.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a5q10 · Valores sociales

Las campañas del Estado deberían promover especialmente los modelos de familia tradicionales.

Concepto: 5:familias. Apoyo al enunciado apunta a Conservadurismo. Peso previsto en Extrema: 0.2137%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a5q1, a5q2, a5q10.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a6q10 · Religión

El Estado debería poder financiar actividades comunitarias organizadas por instituciones religiosas.

Concepto: 6:financiacion-social. Apoyo al enunciado apunta a Tradicionalismo religioso. Peso previsto en Extrema: 0.3472%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a6q9, a6q10.
Financiar actividades sociales religiosas no equivale a financiar culto ni enseñanza confesional.

### a7q10 · Comercio exterior

Las nuevas actividades productivas deberían tener protección temporal frente a los productos importados.

Concepto: 7:industria-naciente. Apoyo al enunciado apunta a Proteccionismo. Peso previsto en Extrema: 0.5208%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a7q10.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a8q10 · Política exterior

La cooperación en defensa debería hacerse principalmente con un grupo estable de países aliados.

Concepto: 8:defensa. Apoyo al enunciado apunta a Alineamiento internacional. Peso previsto en Extrema: 0.6944%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a8q10.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a9q10 · Inmigración

Uruguay debería ampliar los programas para recibir personas refugiadas.

Concepto: 9:refugio. Apoyo al enunciado apunta a Apertura migratoria. Peso previsto en Extrema: 0.2778%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a9q10, a9q13.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a10q10 · Educación y servicios

El Estado debería contratar más servicios educativos de organizaciones privadas.

Concepto: 10:contratacion-educativa. Apoyo al enunciado apunta a Libertad de elección. Peso previsto en Extrema: 0.7576%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a10q10.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a11q10 · Ambiente

Las obras de infraestructura deberían avanzar más rápido cuando haya una necesidad concreta de la producción.

Concepto: 11:infraestructura. Apoyo al enunciado apunta a Desarrollo productivo. Peso previsto en Extrema: 0.5952%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a11q10.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a0q11 · Economía

Las empresas públicas que compiten con privadas deberían seguir las mismas reglas comerciales.

Concepto: 0:competencia. Apoyo al enunciado apunta a Libre mercado. Peso previsto en Extrema: 0.5556%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a0q11.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a1q11 · Impuestos

El IVA de los productos de consumo debería ser más bajo.

Concepto: 1:iva. Apoyo al enunciado apunta a Impuestos bajos. Peso previsto en Extrema: 0.5208%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a1q11.
Bajar el IVA puede ser una propuesta redistributiva: no presupone oposición a impuestos progresivos.

### a2q11 · Trabajo

Al ajustar el salario mínimo, debería importar sobre todo cuántos trabajadores pueden contratar las empresas.

Concepto: 2:salario-minimo. Apoyo al enunciado apunta a Flexibilidad laboral. Peso previsto en Extrema: 0.4902%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a2q11.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a3q11 · Seguridad

Los registros que hace la Policía deberían tener más control de un organismo independiente.

Concepto: 3:control-policial. Apoyo al enunciado apunta a Libertades individuales. Peso previsto en Extrema: 0.4630%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a3q11.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a4q11 · Instituciones

Los nombramientos en organismos de control deberían buscar acuerdos amplios entre partidos.

Concepto: 4:designacion-contralor. Apoyo al enunciado apunta a Gobierno controlado. Peso previsto en Extrema: 0.6410%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a4q11.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a5q11 · Valores sociales

Las reglas sobre cannabis deberían facilitar que las personas adultas accedan a él legalmente.

Concepto: 5:cannabis. Apoyo al enunciado apunta a Progresismo. Peso previsto en Extrema: 0.3205%. 3/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a5q11, a5q12.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a6q11 · Religión

En la educación pública, enseñar sobre derechos y deberes ciudadanos debería mantenerse separado de enseñar una fe.

Concepto: 6:ensenanza-religion. Apoyo al enunciado apunta a Laicismo. Peso previsto en Extrema: 0.1736%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a6q3, a6q4, a6q11, a6q12.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a7q11 · Comercio exterior

Uruguay debería simplificar los trámites para que las pequeñas empresas puedan importar.

Concepto: 7:tramites. Apoyo al enunciado apunta a Apertura comercial. Peso previsto en Extrema: 0.5208%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a7q11.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a8q11 · Política exterior

Uruguay debería mantener relaciones equilibradas con las distintas potencias mundiales.

Concepto: 8:pluralidad-relaciones. Apoyo al enunciado apunta a No alineamiento. Peso previsto en Extrema: 0.2315%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a8q3, a8q11, a8q19.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a9q11 · Inmigración

Al contratar personal, el Estado debería dar más preferencia a quienes tienen ciudadanía uruguaya.

Concepto: 9:empleo-publico. Apoyo al enunciado apunta a Restricción migratoria. Peso previsto en Extrema: 0.5556%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a9q11.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a10q11 · Educación y servicios

Los centros de atención a la primera infancia deberían ser gestionados principalmente por instituciones públicas.

Concepto: 10:primera-infancia. Apoyo al enunciado apunta a Provisión pública. Peso previsto en Extrema: 0.7576%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a10q11.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a11q11 · Ambiente

Las nuevas inversiones en energía deberían dar prioridad a reducir el impacto ambiental.

Concepto: 11:energia. Apoyo al enunciado apunta a Protección ambiental. Peso previsto en Extrema: 0.2976%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a11q11, a11q12.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a0q12 · Economía

Las empresas públicas deberían mantener servicios aunque dejen pocas ganancias.

Concepto: 0:servicios-no-rentables. Apoyo al enunciado apunta a Intervencionismo estatal. Peso previsto en Extrema: 0.5556%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a0q12.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a1q12 · Impuestos

Las ganancias que vienen de inversiones o propiedades deberían aportar más a las políticas sociales.

Concepto: 1:rentas-capital. Apoyo al enunciado apunta a Redistribución. Peso previsto en Extrema: 0.5208%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a1q12.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a2q12 · Trabajo

La inspección del trabajo debería tener más recursos para comprobar que se cumplan los acuerdos laborales.

Concepto: 2:inspeccion. Apoyo al enunciado apunta a Protección laboral. Peso previsto en Extrema: 0.4902%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a2q12.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a3q12 · Seguridad

Los procedimientos deberían permitir que la Policía actúe más rápido ante una denuncia de delito.

Concepto: 3:respuesta-policial. Apoyo al enunciado apunta a Control y autoridad. Peso previsto en Extrema: 0.4630%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a3q12.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a4q12 · Instituciones

Quien gana la elección debería tener más libertad para elegir los equipos que dirigen la administración.

Concepto: 4:designacion-equipos. Apoyo al enunciado apunta a Gobierno fuerte. Peso previsto en Extrema: 0.6410%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a4q12.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a5q12 · Valores sociales

Debería haber más restricciones a la venta legal de cannabis.

Concepto: 5:cannabis. Apoyo al enunciado apunta a Conservadurismo. Peso previsto en Extrema: 0.3205%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a5q11, a5q12.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a6q12 · Religión

Las familias deberían poder pedir espacios de enseñanza religiosa dentro de los centros educativos públicos.

Concepto: 6:ensenanza-religion. Apoyo al enunciado apunta a Tradicionalismo religioso. Peso previsto en Extrema: 0.1736%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a6q3, a6q4, a6q11, a6q12.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a7q12 · Comercio exterior

La apertura a productos extranjeros debería avanzar al ritmo en que puedan adaptarse los productores uruguayos.

Concepto: 7:ritmo-apertura. Apoyo al enunciado apunta a Proteccionismo. Peso previsto en Extrema: 0.5208%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a7q12.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a8q12 · Política exterior

Uruguay debería elegir socios prioritarios para cooperar en la política internacional.

Concepto: 8:alianzas. Apoyo al enunciado apunta a Alineamiento internacional. Peso previsto en Extrema: 0.2315%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a8q2, a8q4, a8q12.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a9q12 · Inmigración

Los centros educativos deberían enseñar más sobre las culturas de las comunidades migrantes.

Concepto: 9:diversidad. Apoyo al enunciado apunta a Apertura migratoria. Peso previsto en Extrema: 0.2778%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a9q12, a9q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a10q12 · Educación y servicios

Las personas con discapacidad deberían poder elegir entre prestadores de apoyo habilitados que reciban financiamiento estatal.

Concepto: 10:eleccion-apoyos. Apoyo al enunciado apunta a Libertad de elección. Peso previsto en Extrema: 0.7576%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a10q12.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a11q12 · Ambiente

Al decidir sobre energía, debería importar más cuánto les cuesta a los productores.

Concepto: 11:energia. Apoyo al enunciado apunta a Desarrollo productivo. Peso previsto en Extrema: 0.2976%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a11q11, a11q12.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a0q13 · Economía

El dinero para abrir nuevos negocios debería venir principalmente de inversores privados.

Concepto: 0:financiacion-privada. Apoyo al enunciado apunta a Libre mercado. Peso previsto en Extrema: 0.5556%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a0q13.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a1q13 · Impuestos

Los pequeños negocios deberían tener más beneficios para pagar menos impuestos.

Concepto: 1:pymes. Apoyo al enunciado apunta a Impuestos bajos. Peso previsto en Extrema: 0.5208%. 2/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a1q13.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a2q13 · Trabajo

Los contratos deberían permitir más formas de pagar según los resultados del trabajo.

Concepto: 2:remuneracion-resultados. Apoyo al enunciado apunta a Flexibilidad laboral. Peso previsto en Extrema: 0.4902%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a2q13.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a3q13 · Seguridad

Las personas presas deberían seguir teniendo acceso a programas que las ayuden a volver a vivir en sociedad.

Concepto: 3:rehabilitacion. Apoyo al enunciado apunta a Libertades individuales. Peso previsto en Extrema: 0.4630%. 3/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a3q13.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a4q13 · Instituciones

El Parlamento debería revisar con mayor frecuencia cómo se ejecutan las políticas del gobierno.

Concepto: 4:control-parlamentario. Apoyo al enunciado apunta a Gobierno controlado. Peso previsto en Extrema: 0.1603%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a4q1, a4q5, a4q13, a4q17.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a5q13 · Valores sociales

La educación debería cuestionar las ideas tradicionales sobre los roles de mujeres y varones.

Concepto: 5:roles-genero. Apoyo al enunciado apunta a Progresismo. Peso previsto en Extrema: 0.6410%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a5q13.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a6q13 · Religión

Para acceder a un servicio público, no debería ser necesario participar en prácticas religiosas.

Concepto: 6:acceso-servicios. Apoyo al enunciado apunta a Laicismo. Peso previsto en Extrema: 0.6944%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a6q13.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a7q13 · Comercio exterior

Las personas deberían tener más facilidades para comprar directamente en el exterior.

Concepto: 7:compras-personales. Apoyo al enunciado apunta a Apertura comercial. Peso previsto en Extrema: 0.5208%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a7q13.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a8q13 · Política exterior

Uruguay debería poder apartarse de una postura regional si tiene una opinión distinta.

Concepto: 8:autonomia-regional. Apoyo al enunciado apunta a No alineamiento. Peso previsto en Extrema: 0.6944%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a8q13.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a9q13 · Inmigración

El Estado debería limitar los nuevos programas de acogida cuando no hay alojamiento suficiente.

Concepto: 9:refugio. Apoyo al enunciado apunta a Restricción migratoria. Peso previsto en Extrema: 0.2778%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a9q10, a9q13.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a10q13 · Educación y servicios

Los servicios de cuidados deberían ampliarse principalmente con centros gestionados por el Estado.

Concepto: 10:cuidados-publicos. Apoyo al enunciado apunta a Provisión pública. Peso previsto en Extrema: 0.2525%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a10q7, a10q13, a10q17.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a11q13 · Ambiente

La expansión de las plantaciones forestales debería tener límites ambientales más exigentes.

Concepto: 11:forestacion. Apoyo al enunciado apunta a Protección ambiental. Peso previsto en Extrema: 0.2976%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a11q13, a11q14.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a0q14 · Economía

El Estado debería invertir dinero en proyectos que desarrollen la producción del país.

Concepto: 0:inversion-publica. Apoyo al enunciado apunta a Intervencionismo estatal. Peso previsto en Extrema: 0.2778%. 4/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a0q8, a0q14.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a1q14 · Impuestos

Las ayudas a hogares con bajos ingresos deberían aumentar, aunque el Estado necesite recaudar más.

Concepto: 1:transferencias. Apoyo al enunciado apunta a Redistribución. Peso previsto en Extrema: 0.2604%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a1q4, a1q14.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a2q14 · Trabajo

Quienes trabajan a través de aplicaciones deberían tener las protecciones laborales comunes.

Concepto: 2:plataformas. Apoyo al enunciado apunta a Protección laboral. Peso previsto en Extrema: 0.4902%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a2q14.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a3q14 · Seguridad

El Estado debería hacer más controles a la entrada de eventos con mucha gente.

Concepto: 3:eventos. Apoyo al enunciado apunta a Control y autoridad. Peso previsto en Extrema: 0.4630%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a3q14.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a4q14 · Instituciones

Los organismos públicos deberían seguir una conducción nacional más centralizada para ejecutar las prioridades del gobierno.

Concepto: 4:coordinacion-ejecutivo. Apoyo al enunciado apunta a Gobierno fuerte. Peso previsto en Extrema: 0.2137%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a4q6, a4q14, a4q18.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a5q14 · Valores sociales

La educación debería dar más importancia a transmitir las costumbres familiares.

Concepto: 5:costumbres. Apoyo al enunciado apunta a Conservadurismo. Peso previsto en Extrema: 0.3205%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a5q14, a5q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a6q14 · Religión

Los hospitales públicos deberían dar un lugar mayor a la asistencia religiosa o espiritual.

Concepto: 6:asistencia-espiritual. Apoyo al enunciado apunta a Tradicionalismo religioso. Peso previsto en Extrema: 0.6944%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a6q14.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a7q14 · Comercio exterior

Debería haber controles comerciales más estrictos a los productos importados que también se fabrican en Uruguay.

Concepto: 7:controles. Apoyo al enunciado apunta a Proteccionismo. Peso previsto en Extrema: 0.5208%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a7q14.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a8q14 · Política exterior

Los acuerdos regionales deberían exigir más coordinación entre los países en sus relaciones internacionales.

Concepto: 8:coordinacion-regional. Apoyo al enunciado apunta a Alineamiento internacional. Peso previsto en Extrema: 0.2315%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a8q8, a8q14, a8q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a9q14 · Inmigración

Quienes viven en Uruguay deberían acceder a servicios esenciales sin diferencias por su nacionalidad.

Concepto: 9:acceso-servicios. Apoyo al enunciado apunta a Apertura migratoria. Peso previsto en Extrema: 0.5556%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a9q14.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a10q14 · Educación y servicios

Los usuarios deberían tener más opciones para elegir el centro de salud donde reciben atención.

Concepto: 10:eleccion-salud. Apoyo al enunciado apunta a Libertad de elección. Peso previsto en Extrema: 0.2525%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a10q4, a10q14, a10q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a11q14 · Ambiente

Uruguay debería facilitar la expansión de las plantaciones forestales en las zonas aptas.

Concepto: 11:forestacion. Apoyo al enunciado apunta a Desarrollo productivo. Peso previsto en Extrema: 0.2976%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a11q13, a11q14.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a0q15 · Economía

Distintas empresas deberían poder competir en la venta de seguros comerciales.

Concepto: 0:seguros. Apoyo al enunciado apunta a Libre mercado. Peso previsto en Extrema: 0.5556%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a0q15.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a1q15 · Impuestos

Quien gana más por trabajar más debería quedarse con una parte mayor de ese ingreso extra.

Concepto: 1:renta-trabajo. Apoyo al enunciado apunta a Impuestos bajos. Peso previsto en Extrema: 0.5208%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a1q15.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a2q15 · Trabajo

Las reglas del teletrabajo deberían acordarse principalmente entre cada trabajador y su empresa.

Concepto: 2:teletrabajo. Apoyo al enunciado apunta a Flexibilidad laboral. Peso previsto en Extrema: 0.4902%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a2q15.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a3q15 · Seguridad

Los sistemas de vigilancia deberían borrar los datos de las personas que no están siendo investigadas.

Concepto: 3:datos-personales. Apoyo al enunciado apunta a Libertades individuales. Peso previsto en Extrema: 0.2315%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a3q7, a3q15.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a4q15 · Instituciones

Las excepciones a los procedimientos habituales de contratación deberían requerir una justificación pública más detallada.

Concepto: 4:compras. Apoyo al enunciado apunta a Gobierno controlado. Peso previsto en Extrema: 0.3205%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a4q7, a4q15.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a5q15 · Valores sociales

Las políticas de igualdad deberían incluir medidas específicas para las personas trans.

Concepto: 5:inclusion-trans. Apoyo al enunciado apunta a Progresismo. Peso previsto en Extrema: 0.6410%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a5q15.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a6q15 · Religión

Las fechas de los calendarios de las instituciones públicas deberían decidirse con criterios no religiosos.

Concepto: 6:calendario. Apoyo al enunciado apunta a Laicismo. Peso previsto en Extrema: 0.3472%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a6q15, a6q16.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a7q15 · Comercio exterior

Debería facilitarse que empresas extranjeras participen en los llamados para venderle al Estado.

Concepto: 7:compras-publicas. Apoyo al enunciado apunta a Apertura comercial. Peso previsto en Extrema: 0.1736%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a7q6, a7q8, a7q15.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a8q15 · Política exterior

Uruguay debería dar prioridad a mediar entre países antes que a sumarse a alianzas políticas internacionales.

Concepto: 8:mediacion. Apoyo al enunciado apunta a No alineamiento. Peso previsto en Extrema: 0.3472%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a8q9, a8q15.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a9q15 · Inmigración

Para regularizar la residencia, debería pedirse más documentación sobre cómo se mantiene económicamente la persona.

Concepto: 9:residencia. Apoyo al enunciado apunta a Restricción migratoria. Peso previsto en Extrema: 0.1852%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a9q2, a9q9, a9q15.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a10q15 · Educación y servicios

La atención de salud debería ampliarse principalmente mediante hospitales y policlínicas públicas.

Concepto: 10:salud-publica. Apoyo al enunciado apunta a Provisión pública. Peso previsto en Extrema: 0.3788%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a10q3, a10q15.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a11q15 · Ambiente

La minería debería cumplir requisitos ambientales más estrictos.

Concepto: 11:mineria. Apoyo al enunciado apunta a Protección ambiental. Peso previsto en Extrema: 0.2976%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a11q15, a11q16.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a0q16 · Economía

Los bancos públicos deberían tener un papel principal al prestar dinero para producir.

Concepto: 0:banca-publica. Apoyo al enunciado apunta a Intervencionismo estatal. Peso previsto en Extrema: 0.5556%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a0q16.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a1q16 · Impuestos

Quienes tienen grandes propiedades deberían pagar más impuestos por ellas.

Concepto: 1:patrimonio. Apoyo al enunciado apunta a Redistribución. Peso previsto en Extrema: 0.2604%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a1q8, a1q16.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a2q16 · Trabajo

Los representantes sindicales deberían tener más protección para hacer su trabajo como representantes.

Concepto: 2:proteccion-sindical. Apoyo al enunciado apunta a Protección laboral. Peso previsto en Extrema: 0.4902%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a2q16.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a3q16 · Seguridad

Debería haber más presencia policial permanente en los barrios con más denuncias.

Concepto: 3:patrullaje. Apoyo al enunciado apunta a Control y autoridad. Peso previsto en Extrema: 0.4630%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a3q16.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a4q16 · Instituciones

Las autorizaciones administrativas deberían resolverse más rápido aunque se reduzcan las instancias de revisión previa.

Concepto: 4:control-previo. Apoyo al enunciado apunta a Gobierno fuerte. Peso previsto en Extrema: 0.3205%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a4q4, a4q16.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a5q16 · Valores sociales

Debería haber más límites a las técnicas permitidas para ayudar a las personas a tener hijos.

Concepto: 5:reproduccion-asistida. Apoyo al enunciado apunta a Conservadurismo. Peso previsto en Extrema: 0.6410%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a5q16.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a6q16 · Religión

Las fiestas religiosas deberían tener más reconocimiento en el calendario oficial.

Concepto: 6:calendario. Apoyo al enunciado apunta a Tradicionalismo religioso. Peso previsto en Extrema: 0.3472%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a6q15, a6q16.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a7q16 · Comercio exterior

Los acuerdos comerciales deberían mantener opciones para proteger algunas actividades productivas nacionales.

Concepto: 7:salvaguardas. Apoyo al enunciado apunta a Proteccionismo. Peso previsto en Extrema: 0.5208%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a7q16.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a8q16 · Política exterior

Los distintos gobiernos uruguayos deberían mantener una misma alianza internacional.

Concepto: 8:continuidad-alianzas. Apoyo al enunciado apunta a Alineamiento internacional. Peso previsto en Extrema: 0.6944%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a8q16.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a9q16 · Inmigración

Las políticas contra la discriminación deberían incluir medidas específicas para las comunidades migrantes.

Concepto: 9:antidiscriminacion. Apoyo al enunciado apunta a Apertura migratoria. Peso previsto en Extrema: 0.5556%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a9q16.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a10q16 · Educación y servicios

Los centros educativos privados deberían recibir dinero del Estado según la cantidad de estudiantes que atienden.

Concepto: 10:bonos-educativos. Apoyo al enunciado apunta a Libertad de elección. Peso previsto en Extrema: 0.3788%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a10q2, a10q16.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a11q16 · Ambiente

Uruguay debería aprovechar más sus minerales cuando eso permita desarrollar nuevas actividades económicas.

Concepto: 11:mineria. Apoyo al enunciado apunta a Desarrollo productivo. Peso previsto en Extrema: 0.2976%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a11q15, a11q16.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a0q17 · Economía

Abrir un comercio debería requerir menos permisos previos.

Concepto: 0:permisos-comercio. Apoyo al enunciado apunta a Libre mercado. Peso previsto en Extrema: 0.2778%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a0q17, a0q18.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a1q17 · Impuestos

Deberían ampliarse las rebajas de impuestos que buscan atraer inversiones.

Concepto: 1:incentivos-inversion. Apoyo al enunciado apunta a Impuestos bajos. Peso previsto en Extrema: 0.5208%. 3/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a1q17.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a2q17 · Trabajo

Las empresas pequeñas deberían quedar exceptuadas de algunas reglas para contratar personal.

Concepto: 2:excepciones-pymes. Apoyo al enunciado apunta a Flexibilidad laboral. Peso previsto en Extrema: 0.4902%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a2q17.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a3q17 · Seguridad

Las personas deberían tener protegido el derecho a filmar una actuación de la Policía.

Concepto: 3:filmar-policia. Apoyo al enunciado apunta a Libertades individuales. Peso previsto en Extrema: 0.4630%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a3q17.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a4q17 · Instituciones

Las comisiones parlamentarias deberían tener más capacidad para investigar decisiones del Ejecutivo.

Concepto: 4:control-parlamentario. Apoyo al enunciado apunta a Gobierno controlado. Peso previsto en Extrema: 0.1603%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a4q1, a4q5, a4q13, a4q17.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a5q17 · Valores sociales

Los formularios de las instituciones públicas deberían contemplar distintas identidades y tipos de familia.

Concepto: 5:identidad-formularios. Apoyo al enunciado apunta a Progresismo. Peso previsto en Extrema: 0.6410%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a5q17.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a6q17 · Religión

Los mensajes oficiales no deberían dar por hecho que las personas tienen creencias religiosas.

Concepto: 6:mensajes-oficiales. Apoyo al enunciado apunta a Laicismo. Peso previsto en Extrema: 0.6944%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a6q17.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a7q17 · Comercio exterior

Deberían reducirse los límites a la cantidad de productos que se pueden importar.

Concepto: 7:cuotas. Apoyo al enunciado apunta a Apertura comercial. Peso previsto en Extrema: 0.5208%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a7q17.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a8q17 · Política exterior

Uruguay debería decidir por su cuenta si se suma a sanciones internacionales cuando no está obligado a hacerlo.

Concepto: 8:sanciones. Apoyo al enunciado apunta a No alineamiento. Peso previsto en Extrema: 0.3472%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a8q17, a8q18.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a9q17 · Inmigración

Uruguay debería dar prioridad al ingreso de personas con las habilidades que el Estado considere necesarias.

Concepto: 9:seleccion-laboral. Apoyo al enunciado apunta a Restricción migratoria. Peso previsto en Extrema: 0.2778%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a9q7, a9q17.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a10q17 · Educación y servicios

Los nuevos centros de rehabilitación y cuidados deberían ser gestionados principalmente por organismos públicos.

Concepto: 10:cuidados-publicos. Apoyo al enunciado apunta a Provisión pública. Peso previsto en Extrema: 0.2525%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a10q7, a10q13, a10q17.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a11q17 · Ambiente

Las políticas de transporte deberían dar prioridad a reducir las emisiones contaminantes.

Concepto: 11:transporte. Apoyo al enunciado apunta a Protección ambiental. Peso previsto en Extrema: 0.2976%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a11q17, a11q18.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a0q18 · Economía

Abrir grandes comercios debería depender de la planificación del Estado.

Concepto: 0:permisos-comercio. Apoyo al enunciado apunta a Intervencionismo estatal. Peso previsto en Extrema: 0.2778%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a0q17, a0q18.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a1q18 · Impuestos

El Estado debería revisar los beneficios para pagar menos impuestos cuando favorecen sobre todo a quienes tienen más ingresos.

Concepto: 1:exoneraciones. Apoyo al enunciado apunta a Redistribución. Peso previsto en Extrema: 0.5208%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a1q18.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a2q18 · Trabajo

Los trabajadores deberían tener derecho a no responder mensajes o llamadas laborales fuera de su horario.

Concepto: 2:desconexion. Apoyo al enunciado apunta a Protección laboral. Peso previsto en Extrema: 0.4902%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a2q18.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a3q18 · Seguridad

Deberían ser más duras las sanciones por incumplir medidas de protección ordenadas por un juez.

Concepto: 3:medidas-proteccion. Apoyo al enunciado apunta a Control y autoridad. Peso previsto en Extrema: 0.4630%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a3q18.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a4q18 · Instituciones

La Presidencia debería tener más herramientas para resolver desacuerdos de gestión entre organismos.

Concepto: 4:coordinacion-ejecutivo. Apoyo al enunciado apunta a Gobierno fuerte. Peso previsto en Extrema: 0.2137%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a4q6, a4q14, a4q18.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a5q18 · Valores sociales

Los cambios en las normas sobre familia deberían hacerse de forma más gradual.

Concepto: 5:ritmo-cambio. Apoyo al enunciado apunta a Conservadurismo. Peso previsto en Extrema: 0.6410%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a5q18.
Gradualidad imprecisa: no se deduce de una etiqueta conservadora ni de apoyar una reforma concreta.

### a6q18 · Religión

Las creencias religiosas deberían tener un lugar explícito en los espacios oficiales de diálogo social.

Concepto: 6:dialogo-social. Apoyo al enunciado apunta a Tradicionalismo religioso. Peso previsto en Extrema: 0.6944%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a6q18.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a7q18 · Comercio exterior

Uruguay debería mantener la capacidad de producir en el país los bienes que considera estratégicos.

Concepto: 7:bienes-estrategicos. Apoyo al enunciado apunta a Proteccionismo. Peso previsto en Extrema: 0.5208%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a7q18.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a8q18 · Política exterior

Coordinar sanciones con países aliados debería ser una herramienta habitual de la política exterior.

Concepto: 8:sanciones. Apoyo al enunciado apunta a Alineamiento internacional. Peso previsto en Extrema: 0.3472%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a8q17, a8q18.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a9q18 · Inmigración

Quienes recién llegan a vivir al país deberían tener más oportunidades de participar en actividades de su comunidad.

Concepto: 9:participacion. Apoyo al enunciado apunta a Apertura migratoria. Peso previsto en Extrema: 0.5556%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a9q18.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a10q18 · Educación y servicios

La ayuda estatal para cuidados debería seguir a la persona al prestador habilitado que elija.

Concepto: 10:eleccion-cuidados. Apoyo al enunciado apunta a Libertad de elección. Peso previsto en Extrema: 0.3788%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a10q8, a10q18.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a11q18 · Ambiente

Las obras de transporte deberían dar prioridad a mejorar el traslado de la producción.

Concepto: 11:transporte. Apoyo al enunciado apunta a Desarrollo productivo. Peso previsto en Extrema: 0.2976%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a11q17, a11q18.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a0q19 · Economía

Los dueños de una empresa deberían decidir principalmente en qué invierte.

Concepto: 0:direccion-inversion. Apoyo al enunciado apunta a Libre mercado. Peso previsto en Extrema: 0.2778%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a0q19, a0q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a1q19 · Impuestos

El gasto del Estado debería crecer menos para evitar futuras subas de impuestos.

Concepto: 1:limite-gasto. Apoyo al enunciado apunta a Impuestos bajos. Peso previsto en Extrema: 0.5208%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a1q19.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a2q19 · Trabajo

En los servicios esenciales, debería haber más límites al derecho a hacer huelga.

Concepto: 2:huelga-esencial. Apoyo al enunciado apunta a Flexibilidad laboral. Peso previsto en Extrema: 0.4902%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a2q19.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a3q19 · Seguridad

El derecho a publicar información de interés público debería protegerse aunque moleste a las autoridades.

Concepto: 3:informacion-publica. Apoyo al enunciado apunta a Libertades individuales. Peso previsto en Extrema: 0.4630%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a3q19.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a4q19 · Instituciones

Las políticas de emergencia deberían tener plazos de revisión parlamentaria más frecuentes.

Concepto: 4:revision-emergencias. Apoyo al enunciado apunta a Gobierno controlado. Peso previsto en Extrema: 0.6410%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a4q19.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a5q19v3 · Valores sociales

Las personas adultas con una enfermedad incurable y sufrimiento insoportable deberían poder solicitar eutanasia voluntaria con controles médicos y legales.

Concepto: 5:fin-vida. Apoyo al enunciado apunta a Progresismo. Peso previsto en Extrema: 0.6410%. 3/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a5q19v3.
Versión 3: eutanasia voluntaria con requisitos. No extrapolar apoyo a cuidados paliativos ni reutilizar la respuesta anterior.

### a6q19 · Religión

Las instituciones públicas deberían asegurar que las actividades obligatorias no incluyan prácticas religiosas.

Concepto: 6:practicas-obligatorias. Apoyo al enunciado apunta a Laicismo. Peso previsto en Extrema: 0.6944%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a6q19.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a7q19 · Comercio exterior

Bajar el costo de los productos importados debería ser una prioridad del comercio exterior.

Concepto: 7:costo-importaciones. Apoyo al enunciado apunta a Apertura comercial. Peso previsto en Extrema: 0.5208%. 2/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a7q19.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a8q19 · Política exterior

Uruguay debería tener distintos socios importantes para no depender de una sola alianza.

Concepto: 8:pluralidad-relaciones. Apoyo al enunciado apunta a No alineamiento. Peso previsto en Extrema: 0.2315%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a8q3, a8q11, a8q19.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a9q19 · Inmigración

La integración de las personas migrantes debería dar más importancia a que adopten las costumbres locales.

Concepto: 9:adaptacion-cultural. Apoyo al enunciado apunta a Restricción migratoria. Peso previsto en Extrema: 0.5556%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a9q19.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a10q19 · Educación y servicios

La planificación pública debería priorizar una oferta educativa común antes de financiar opciones alternativas.

Concepto: 10:educacion-publica. Apoyo al enunciado apunta a Provisión pública. Peso previsto en Extrema: 0.2525%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a10q1, a10q5, a10q19.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a11q19 · Ambiente

Al evaluar proyectos turísticos en la costa, debería darse más peso a conservar los ecosistemas.

Concepto: 11:costa. Apoyo al enunciado apunta a Protección ambiental. Peso previsto en Extrema: 0.2976%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a11q19, a11q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a0q20 · Economía

El Estado debería dirigir inversiones hacia las actividades que considere más importantes.

Concepto: 0:direccion-inversion. Apoyo al enunciado apunta a Intervencionismo estatal. Peso previsto en Extrema: 0.2778%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a0q19, a0q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a1q20 · Impuestos

Al decidir los impuestos, debería darse prioridad a reducir la desigualdad.

Concepto: 1:progresividad. Apoyo al enunciado apunta a Redistribución. Peso previsto en Extrema: 0.1736%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a1q2, a1q10, a1q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a2q20 · Trabajo

Más trabajadores que hoy negocian solos deberían quedar cubiertos por acuerdos entre sindicatos y empresas.

Concepto: 2:negociacion-colectiva. Apoyo al enunciado apunta a Protección laboral. Peso previsto en Extrema: 0.1634%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a2q2, a2q4, a2q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a3q20 · Seguridad

Las autoridades deberían poder limitar las concentraciones de personas si hay un riesgo concreto de violencia.

Concepto: 3:manifestaciones. Apoyo al enunciado apunta a Control y autoridad. Peso previsto en Extrema: 0.2315%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a3q3, a3q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a4q20 · Instituciones

El gobierno debería poder poner en marcha programas dentro de su competencia antes de completar evaluaciones externas adicionales.

Concepto: 4:evaluacion-programas. Apoyo al enunciado apunta a Gobierno fuerte. Peso previsto en Extrema: 0.6410%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a4q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a5q20 · Valores sociales

Al debatir cambios sociales, el Estado debería dar prioridad a conservar las tradiciones culturales.

Concepto: 5:costumbres. Apoyo al enunciado apunta a Conservadurismo. Peso previsto en Extrema: 0.3205%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a5q14, a5q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a6q20 · Religión

Las ceremonias que recuerdan hechos importantes del país deberían poder incluir representantes de distintas religiones.

Concepto: 6:ceremonias. Apoyo al enunciado apunta a Tradicionalismo religioso. Peso previsto en Extrema: 0.2315%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a6q1, a6q2, a6q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a7q20 · Comercio exterior

El Mercosur debería mantener medidas comunes para protegerse de la competencia de países de fuera del bloque.

Concepto: 7:arancel-mercosur. Apoyo al enunciado apunta a Proteccionismo. Peso previsto en Extrema: 0.5208%. 1/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a7q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a8q20 · Política exterior

Uruguay debería integrarse más en lo político con países de la región que tengan una orientación similar.

Concepto: 8:coordinacion-regional. Apoyo al enunciado apunta a Alineamiento internacional. Peso previsto en Extrema: 0.2315%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a8q8, a8q14, a8q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a9q20 · Inmigración

La diversidad de culturas debería tener más presencia en las actividades públicas.

Concepto: 9:diversidad. Apoyo al enunciado apunta a Apertura migratoria. Peso previsto en Extrema: 0.2778%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a9q12, a9q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a10q20 · Educación y servicios

Los usuarios deberían tener más opciones para cambiar de prestador de salud manteniendo el apoyo público.

Concepto: 10:eleccion-salud. Apoyo al enunciado apunta a Libertad de elección. Peso previsto en Extrema: 0.2525%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a10q4, a10q14, a10q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

### a11q20 · Ambiente

Al planificar el uso de la costa, debería darse más prioridad a nuevos proyectos turísticos.

Concepto: 11:costa. Apoyo al enunciado apunta a Desarrollo productivo. Peso previsto en Extrema: 0.2976%. 0/31 personas con evidencia admitida.
Grupo (no evidencia independiente por repetición): a11q19, a11q20.
Se requiere evidencia específica del enunciado; un puntaje general del eje no la sustituye.

## Validación y límites restantes

Las pruebas automatizadas cubren los 25 pares posibles de respuesta/postura; simetría y signo opuesto; extremos, moderación y neutralidad; desconocidos; orden de preguntas; empates antes del redondeo; igualdad de fórmulas entre partidos; diferenciación de integrantes de un mismo partido; duplicaciones; peso por eje/concepto; cobertura de variantes; conservación de respuestas y archivos; flujo completo de las tres versiones y exportación.

datos.json incluye cinco perfiles hipotéticos estilizados, sus respuestas, rankings, coberturas y límites reproducibles. Son ejemplos de entrada explícita, no definiciones universales de izquierda/centro/derecha ni pruebas de que una persona real deba ganar. Las pruebas de invariancia no demuestran ausencia de sesgo en la selección de preguntas, fuentes o codificación.

No se modificó el diseño, ni se certificó el parecido visual en escritorio/celular: el usuario realiza la comprobación estética. La lectura ideológica pedagógica, brújula y afinidad constitucional con países se mantienen como comparaciones independientes; no heredan el nuevo índice personal ni quedan validadas por él.

Investigación pendiente material: más preguntas documentadas para las 31 personas; contraste independiente de declaraciones; sectores y cambios de afiliación por fecha; actas de votaciones nominales; posiciones contradictorias; período representativo comparable; estudios con usuarios y validación externa de la rúbrica. No se rellenan esos vacíos para terminar con un ranking artificialmente completo.

Fuentes no recuperadas con suficiencia: acta parlamentaria d4422.pdf para eutanasia (fallo de acceso); algunas entrevistas solo en audio; documentos de propuestas personales de Raffo. No se afirma haber verificado su contenido íntegro ni se usa ese fallo como prueba de ausencia de postura. Memorias partidarias se conservan como autorreporte de contexto, no como corroboración independiente.
