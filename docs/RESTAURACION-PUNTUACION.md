# Restauración de la puntuación anterior

4 de noviembre de 2026.

## Motivo y alcance

La PR #19 introdujo una comparación por preguntas documentadas cuya cobertura
variaba entre referentes. Aunque mostraba esa cobertura y advertía incertidumbre,
ordenaba porcentajes normalizados sobre subconjuntos distintos. Una coincidencia
en pocos temas podía encabezar la lista por encima de un perfil más completo.
Las advertencias no solucionaban esa falta de comparabilidad.

Se restaura la puntuación de la revisión `82fc949`, anterior a esa PR:

- Perfil del usuario: media de respuestas orientadas por eje, con la escala anterior.
- Personas y partidos: distancia absoluta media sobre los mismos cinco ejes
  compartidos: economía, seguridad, comercio exterior, educación y servicios,
  ambiente. Afinidad = 100 menos esa distancia.
- Se recuperan las tablas y las 31 referencias de esa edición, sus fuentes,
  comparaciones, imágenes y exportación. No se fuerzan ganadores por partido.
- Se retienen el esquema de almacenamiento 3 y las dos preguntas aclaradas de
  aborto y eutanasia. Rebajar el esquema o reutilizar sus identificadores antiguos
  perdería respuestas o atribuiría una respuesta a un enunciado diferente.
- Los tests de esquema 3 se leen sin conversión. Se mantiene el respaldo del
  esquema 2 antes de migrarlo, incluso si falla el almacenamiento del respaldo.

Esto es una reversión del sistema de puntuación, no una nueva validación de las
estimaciones editoriales anteriores. Las afinidades de una persona y de su partido
pueden diferir: corresponden a referencias y períodos distintos. No se igualan por
pertenencia partidaria. La investigación de la PR #19 queda conservada en Git,
pero deja de intervenir en el resultado público.

## Investigación histórica inicial

Se comprobaron fuentes sobre los cuatro referentes solicitados. Estos hechos
permiten preparar preguntas históricas o conceptos comparables, sin atribuirles
respuestas a instituciones y debates que no existían en su época:

| Referente | Hecho documentado | Fuente consultada |
| --- | --- | --- |
| José Artigas | El Reglamento de 1815 distribuye tierras entre sectores desfavorecidos y también establece obligaciones productivas y medidas de orden rural. | [ANEP, Reglamento de tierras](https://uruguayeduca.anep.edu.uy/efemerides/reglamento-de-tierras-de-artigas) |
| José Batlle y Ordóñez | Presentó proyectos sobre limitación de la jornada de trabajo en 1906 y 1911; la ley de ocho horas se aprobó en noviembre de 1915. Debe distinguirse su impulso de la fecha y gobierno de aprobación. | [ANEP, ley de ocho horas](https://uruguayeduca.anep.edu.uy/efemerides/se-aprueba-ley-de-las-8-horas) |
| Gabriel Terra | El 31 de marzo de 1933 disolvió la Asamblea General y el Consejo Nacional de Administración. Es evidencia sobre concentración del poder en ese período. | [Corte Electoral, ruptura institucional de 1933](https://www.gub.uy/corte-electoral/comunicacion/publicaciones/1933-golpe-estado-intervencion-corte-electoral) |
| Fructuoso Rivera | La INDDHH documenta su responsabilidad presidencial y la del Estado Mayor en la matanza de Salsipuedes de 1831. No es una postura sobre inmigración contemporánea. | [INDDHH, Paso de Salsipuedes](https://www.gub.uy/institucion-nacional-derechos-humanos-uruguay/comision-nacional-honoraria-sitios-memoria/sitios-memoria/paso-salsipuedes-territorio-masacre) |

Estos cuatro perfiles no se agregan numéricamente en esta restauración. Todavía
faltan investigación completa, selección de preguntas históricamente comparables,
contraste de fuentes y validación conjunta antes de ampliar el catálogo. Una
respuesta generada por IA sobre lo que habrían pensado hoy no constituye evidencia
histórica de una posición política.
