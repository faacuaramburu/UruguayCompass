# Espectro político con referentes

La brújula de resultados se amplió por pedido del usuario. Mantiene economía y seguridad/libertades y muestra el marcador de la persona junto a referencias editoriales. No es un eje universal de izquierda/derecha ni una medición de autoritarismo.

## Catálogo y coordenadas

Hay 50 figuras. El catálogo incorpora todos los 32 nombres solicitados, incluidos los históricos. Las fichas históricas describen su época y enlazan fuentes; no reciben puntajes contemporáneos ni entran al ranking.

27 tienen evidencia para economía y seguridad. Las otras 23 conservan sus fuentes y su contexto sin coordenadas. Un dato parcial económico no permite completar seguridad con el centro de la escala. Danilo Astori y Beatriz Argimón comparten en el mapa el programa de las fórmulas de 2009 y 2019 que integraron, respectivamente; ahora participan del resultado con los cinco temas del programa compartido. El empate con Mujica o Lacalle Pou se muestra expresamente.

Las fórmulas de 2024 usan el programa electoral que representaron, no convicciones personales de cada integrante. Cosse/Orsi, Ripoll/Delgado y las otras fórmulas pueden compartir coordenadas. Las personas de 2019 y las gestiones anteriores identifican expresamente ese período. La cercanía visual entre años con coberturas distintas no constituye un ranking de similitud.

## Rúbrica editorial

Economía conserva 0 = mercado, 100 = participación estatal; seguridad conserva 0 = libertades y garantías, 100 = control de seguridad. En el mapa, Estado queda a la izquierda, mercado a la derecha, control arriba y libertades abajo. Las coordenadas de la persona se calculan exactamente como antes.

Se documentan propuestas concretas en profile/rationale/evidence de cada figura. Los números son una interpretación orientativa en pasos de cinco, no datos de encuestas ni valores emitidos por las personas. 25–35 representa orientación al mercado o a garantías; 65–85, mayor papel estatal o control, según el eje. Los extremos requieren propuestas explícitas, como la estatización bancaria de Unidad Popular (95 en economía). Un 50 exige evidencia de una combinación de instrumentos; no reemplaza un dato desconocido. Los datos de gobierno se describen como parciales y no se extrapolan a toda una trayectoria.

## Fuentes principales nuevas

- [Corte Electoral: fórmulas nacionales de 2024](https://www.gub.uy/corte-electoral/sites/corte-electoral/files/2024-11/ACTA%20N%C2%BA%2010739%20-%20Declaraci%C3%B3n%20de%20segunda%20elecci%C3%B3n.pdf).
- [Programas de 2024](https://www.gub.uy/corte-electoral/comunicacion/publicaciones/programas-gobierno-nacional): programas de las seis fórmulas parlamentarias y de Asamblea Popular, PCA y PERI.
- [Programas de 2019](https://www.gub.uy/corte-electoral/comunicacion/publicaciones/programas-gobierno-partidos-politicos-para-periodo-2020-2025): Frente Amplio, Partido Nacional y Partido Colorado.
- Mujica: [programa 2010–2015](https://www.frenteamplio.uy/wp-content/uploads/programa_2010_2015_1_0-2.pdf), candidatura de 2009.
- Vázquez: [programa 2015–2020](https://www.gub.uy/corte-electoral/sites/corte-electoral/files/documentos/publicaciones/Programa_nacional_FA_2015_2020.pdf), candidatura de 2014.
- Sanguinetti: leyes [16.906 de inversiones](https://www.impo.com.uy/bases/leyes-originales/16906-1998) y [16.707 de seguridad ciudadana](https://www.impo.com.uy/bases/leyes-originales/16707-1995), en su versión original.

## Interacción y límites

Los números corresponden a grupos de coordenadas idénticas. Los puntos permanecen en sus coordenadas reales; los números se separan y se conectan al punto con una línea para evitar superposición. Todos los nombres aparecen como botones accesibles y amplios; los puntos también se seleccionan con Enter o espacio. Buscar no modifica las respuestas ni las envía a ningún servicio. La ficha seleccionada muestra los documentos utilizados y permite abrir su contexto completo.

Los filtros pueden dejar el mapa sin referentes: el punto de la persona permanece. Las fichas sin coordenadas se identifican como tales. El ranking de personas y la tarjeta usan 26 referentes con cobertura documentada. Se incorporaron propuestas de Bordaberry (2014), Sartori (2019), Raffo (2024), la fórmula con Larrañaga (2014), los programas de PCA, PERI y Unidad Popular de 2024 y los integrantes de las fórmulas con cobertura común. Todas se comparan sobre economía, seguridad, comercio exterior, educación/seguridad social y ambiente. No se mezclan gestiones ni se completan los otros siete ejes desconocidos. El ranking de partidos mantiene seis programas de 2024. Esta selección no tiene igual cantidad de referencias por partido ni mide preferencias electorales actuales.

## Cobertura programática del ranking ampliado

Los cinco programas incorporados tienen sus valores, páginas y fundamentos en `dist/comparison-profiles.js`. Para Mujica y Vázquez se reemplazó la aproximación parcial a sus gobiernos por el programa de una elección concreta. Cada referencia habilitada puede aparecer entre las más cercanas. Los empates se muestran completos: el orden alfabético inicial no significa mayor cercanía y la persona puede elegir cuál mostrar en la foto y la tarjeta.

La combinación educación/seguridad social es un eje compuesto: el puntaje resume instrumentos de provisión y ahorro, no calidad de enseñanza ni generosidad de prestaciones. Una propuesta pública en educación puede coexistir con ahorro previsional mixto. Los números son lecturas editoriales gruesas, no una medición exacta.

## Ampliación biográfica

`dist/figure-catalog.js` incorpora 25 fichas nuevas, evita duplicados y mantiene separadas trayectoria, propuestas documentadas y cobertura comparable. El catálogo incluye todos los nombres solicitados, y `dist/ranking-expansion.js` completa la comparación de quienes tienen los cinco temas documentados. Los datos desconocidos siguen siendo `null`. Las fichas históricas muestran contexto y fuentes en lugar de doce escalas vacías.

Las fuentes incluyen Udelar, Presidencia, gobiernos departamentales, Parlamento, ANEP, INDDHH, el MNAV y documentos publicados por las propias candidaturas. Las fuentes partidarias documentan declaraciones propias; no se las presenta como evaluaciones independientes. Los alias de búsqueda reconocen «Aparicio Sarabia» como Aparicio Saravia sin crear otra ficha.

## Resultados ampliados y avance guardado

El cálculo habilita referencias por cobertura documental en los cinco temas comunes, no por la sola existencia de una ficha. `dist/result-ranking.js` recalcula también los tests guardados; no altera las respuestas ni requiere repetir el cuestionario. Las pruebas verifican que todos los referentes habilitados puedan aparecer como resultado y que las propuestas de Raffo, Sartori y Bordaberry puedan obtener una coincidencia máxima independiente. Elegir una foto entre referentes empatados no puede promover una afinidad inferior ni modificar un porcentaje.

Las propuestas de educación y previsión forman un eje compuesto. Algunas fuentes documentan principalmente educación; otras, el régimen previsional. Cada fundamento identifica esa cobertura parcial dentro del tema. No se interpreta como una evaluación integral de ambas políticas.

Referencias contemporáneas que siguen sin cobertura suficiente para el resultado: Wilson Ferreira Aldunate, Líber Seregni, Julio María Sanguinetti, Jorge Batlle, Luis Alberto Lacalle Herrera, Mario Bergara, Alejandro Sánchez, Lucía Topolansky, Óscar Andrade, Blanca Rodríguez, Martín Lema, Sebastián Da Silva. Los doce históricos conservan su contexto sin trasladarlos a debates posteriores.
