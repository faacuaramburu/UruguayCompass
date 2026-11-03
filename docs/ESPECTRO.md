# Espectro político y cobertura de resultados

El mapa representa economía y seguridad/libertades. No equivale a una escala universal de izquierda y derecha ni mide autoritarismo. La persona conserva sus doce puntajes; el mapa solo proyecta dos.

## Catálogo vigente

Hay **31 referentes**, todos disponibles como resultado y en el mapa. Se comparan los mismos cuatro temas documentados: economía, seguridad y libertades, comercio exterior, ambiente/desarrollo. Los otros ejes sin evidencia suficiente permanecen en `null`; nunca se sustituyen por 50.

Los programas corresponden a elecciones de 2009, 2014, 2019 y 2024. Se agregan dos referencias de medidas de gobierno, explícitamente identificadas y distintas de un programa electoral: Sanguinetti (1995–2000) y Jorge Batlle (2000–2005). Cada ficha identifica su documento y período. Los integrantes de una misma fórmula pueden compartir programa y afinidad: se muestra el empate y se permite elegir el retrato sin modificar el puntaje. No se copia un programa a una persona solo por pertenecer a su partido.

## Incorporación tras la segunda revisión

**Luis Alberto Lacalle Herrera** participa con el programa de la fórmula Lacalle Herrera–Larrañaga de 2009, firmado por ambos y publicado por la Corte Electoral en el [Diario Oficial del 1/10/2009](https://impo.com.uy/diariooficial/2009/10/01/avisosdeldia.pdf#page=12). No se mezcla con su gobierno de 1990–1995 ni con el programa de Larrañaga de 2014.

| Tema | Puntaje editorial | Página del PDF |
| --- | --- | --- |
| Economía | 25 | 14 |
| Seguridad y libertades | 85 | 25 |
| Comercio exterior | 10 | 14 |
| Ambiente/desarrollo | 35 | 18 |

Los fundamentos están en `dist/ranking-expansion.js`. Las propuestas sustentan la lectura; los números no aparecen en el programa y son estimaciones editoriales. Educación y jubilaciones se documentan por separado como contexto, sin un puntaje conjunto ni participación en la afinidad.

## Referencias retiradas

Se retiraron estas **19 fichas** del catálogo, los resultados y el mapa porque esta revisión no reunió evidencia comparable suficiente en los cuatro temas. Esto no significa que no existan fuentes sobre sus trayectorias.

- Wilson Ferreira Aldunate
- Líber Seregni
- Alejandro Sánchez
- Lucía Topolansky
- Blanca Rodríguez
- Martín Lema
- Sebastián Da Silva
- Jorge Pacheco Areco
- José Artigas
- Fructuoso Rivera
- Manuel Oribe
- Juan Antonio Lavalleja
- Bernardo Prudencio Berro
- Aparicio Saravia
- Luis Alberto de Herrera
- Eduardo Víctor Haedo
- José Batlle y Ordóñez
- Gabriel Terra
- Lorenzo Latorre

Las referencias más antiguas no se proyectan sobre instituciones y debates posteriores a su época. La sección educativa de historia política continúa como contexto general, sin convertir a esas figuras en candidatos del resultado.

## Fuentes y cálculo

- [Corte Electoral: fórmulas nacionales de 2024](https://www.gub.uy/corte-electoral/sites/corte-electoral/files/2024-11/ACTA%20N%C2%BA%2010739%20-%20Declaraci%C3%B3n%20de%20segunda%20elecci%C3%B3n.pdf).
- [Programas de 2024](https://www.gub.uy/corte-electoral/comunicacion/publicaciones/programas-gobierno-nacional).
- [Programas de 2019](https://www.gub.uy/corte-electoral/comunicacion/publicaciones/programas-gobierno-partidos-politicos-para-periodo-2020-2025).
- Mujica: [programa 2010–2015](https://www.frenteamplio.uy/wp-content/uploads/programa_2010_2015_1_0-2.pdf), candidatura de 2009.
- Vázquez: [programa 2015–2020](https://www.gub.uy/corte-electoral/sites/corte-electoral/files/documentos/publicaciones/Programa_nacional_FA_2015_2020.pdf), candidatura de 2014.

Las fuentes y páginas de cada ubicación se encuentran en las fichas y en `dist/comparison-profiles.js` y `dist/ranking-expansion.js`. Los seis programas partidarios de 2024 se comparan por separado y no cambian con esta revisión.

La afinidad es 100 menos el promedio de las diferencias absolutas en los cuatro temas. Se ordena por distancia sin redondear y se muestran porcentajes enteros; solo una distancia idéntica constituye empate. `dist/result-ranking.js` recalcula también los tests guardados sin alterar respuestas ni requerir repetir el cuestionario. Las pruebas verifican que todos los referentes del catálogo puedan salir y que seleccionar una foto no altere la afinidad.

## Interacción del mapa

Economía conserva 0 = mercado, 100 = Estado; seguridad conserva 0 = libertades, 100 = control. El mapa coloca Estado a la izquierda, mercado a la derecha, control arriba y libertades abajo.

Las coordenadas idénticas se agrupan bajo un número. Las etiquetas se separan para evitar superposiciones y una línea las une al punto real, sin mover los datos. Se puede buscar por nombre, filtrar por partido y seleccionar un referente con clic, Enter o espacio. Buscar o seleccionar no modifica ni transmite las respuestas. El punto de la persona permanece cuando un filtro no encuentra referentes.

## Nuevas referencias de gobierno

Se recuperaron Sanguinetti y Jorge Batlle al completar la búsqueda con normas originales y declaraciones de sus administraciones. Los cuatro temas se conservan, pero la fuente cambia: medidas aprobadas y declaraciones en ejercicio, no promesas electorales. La ficha y la metodología explican esa limitación. La promulgación no prueba autoría exclusiva del presidente ni describe toda su trayectoria. Los otros ocho ejes permanecen sin puntaje.

Los fundamentos y fuentes están en `dist/government-references.js`:

- **Sanguinetti, 1995–2000:** inversión (Ley 16.906), seguridad (Ley 16.707), acuerdo comercial Chile–Mercosur de 1996 (OEA/SICE), previsión mixta (Ley 16.713) y áreas protegidas (Ley 17.234, promulgada en febrero de 2000).
- **Jorge Batlle, 2000–2005:** inversión y seguridad (Ley 17.243), alternativas a la prisión preventiva (Ley 17.726, como contrapeso a las medidas penales anteriores), TLC con México (Ley 17.766), respaldo expreso a las AFAP en mayo de 2004 y prevención/precaución ambiental (Ley 17.283).

Estos dos perfiles pueden resultar los más cercanos de forma independiente. También se recalculan en los tests guardados. Las pruebas verifican la cobertura, los tipos de fuente, el contrapeso en seguridad y que las figuras aún retiradas no reaparezcan.

## Declaraciones públicas incorporadas

Bergara (2024) y Andrade (2016–2019) completan los cuatro temas con declaraciones propias fechadas, sin copiar el programa de su partido. No se presume que sigan vigentes. Los fundamentos están en `dist/statement-references.js`; los números son interpretaciones editoriales.

- **Mario Bergara:** [entrevista en Voces, 4/5/2024](https://semanariovoces.com/mario-bergara-los-cucos-de-bolches-y-tupas-insultan-la-inteligencia-de-la-gente/), sobre inversión, seguridad, inserción comercial, previsión y ambiente.
- **Óscar Andrade:** [entrevista en Voces, 8/6/2019](https://semanariovoces.com/oscar-andrade-si-esperas-la-bendicion-de-los-sectores-mas-poderosos-no-vas-a-hacer-nada/), y [declaraciones sobre un TLC con China, 2/10/2016](https://www.elobservador.com.uy/nota/posible-tlc-con-china-divide-y-pone-en-alerta-al-pit-cnt-20161022500). El fundamento comercial se limita a ese acuerdo y fecha; no se interpreta como rechazo a todo comercio.

La evidencia educativa no completa automáticamente la previsional ni viceversa: las fichas señalan qué parte está documentada. Los ocho ejes restantes se mantienen sin puntaje.

## Corrección de educación y jubilaciones · 3 de noviembre de 2026

Se revisaron los 31 referentes y los seis programas partidarios. El antiguo quinto eje mezclaba evidencia educativa de unos con evidencia jubilatoria de otros y daba el mismo peso a temas distintos. La revisión no cambia las posiciones de economía, seguridad, comercio o ambiente.

El porcentaje usa los cuatro temas comparables para todos. El bloque de preguntas original conserva sus IDs, textos, direcciones y respuestas guardadas. Dentro de su desplegable se calculan dos lecturas independientes: educación y jubilaciones. Las fichas conservan las propuestas por tema y sus fuentes, sin convertir un dato ausente en 50 ni trasladar una política de escuelas a pensiones. No se asignan nuevos puntajes políticos para completar vacíos.

Casos identificados en la referencia anterior:

- Educación sin una ubicación jubilatoria independiente: Raffo, Lust, Vega, Andrade y Lacalle Herrera.
- Previsión sin una ubicación educativa independiente: Bergara, Sanguinetti, Jorge Batlle, Lacalle Pou/Argimón, Delgado/Ripoll, Ojeda/Silva, Bordaberry, Larrañaga y Gonzalo Martínez.
- Documentos que reúnen ambos temas y necesitan fuentes separadas: Frente Amplio, Independiente e Identidad Soberana, entre otros. El PI se cita en educación (p. 32) y reforma previsional (p. 43); IS en educación en el hogar (p. 9) y reparto estatal (p. 13). El programa del FA de 2024 distingue educación (p. 39) y propuesta previsional de tres pilares (p. 35).

Las reglas y la clasificación completa están en `dist/education-pensions.js`. Las pruebas verifican la separación de respuestas, las fuentes de los 37 registros, la invariancia del ranking frente al antiguo eje mixto y que el redondeo no promueva un referente más distante. Es posible que aparezcan nuevos empates reales: Bordaberry y Lust, por ejemplo, comparten las cuatro ubicaciones actualmente comparables.
