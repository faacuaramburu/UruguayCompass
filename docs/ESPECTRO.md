# Espectro político y cobertura de resultados

El mapa representa economía y seguridad/libertades. No equivale a una escala universal de izquierda y derecha ni mide autoritarismo. La persona conserva sus doce puntajes; el mapa solo proyecta dos.

## Catálogo vigente

Hay **31 referentes**, todos disponibles como resultado y en el mapa. Se comparan los mismos cinco temas documentados: economía, seguridad, comercio exterior, educación y servicios, y ambiente. Los otros ejes sin evidencia suficiente permanecen en `null`; nunca se sustituyen por 50.

Los programas corresponden a elecciones de 2009, 2014, 2019 y 2024. Se agregan dos referencias de medidas de gobierno, explícitamente identificadas y distintas de un programa electoral: Sanguinetti (1995–2000) y Jorge Batlle (2000–2005). Cada ficha identifica su documento y período. Los integrantes de una misma fórmula pueden compartir programa y afinidad: se muestra el empate y se permite elegir el retrato sin modificar el puntaje. No se copia un programa a una persona solo por pertenecer a su partido.

## Incorporación tras la segunda revisión

**Luis Alberto Lacalle Herrera** participa con el programa de la fórmula Lacalle Herrera–Larrañaga de 2009, firmado por ambos y publicado por la Corte Electoral en el [Diario Oficial del 1/10/2009](https://impo.com.uy/diariooficial/2009/10/01/avisosdeldia.pdf#page=12). No se mezcla con su gobierno de 1990–1995 ni con el programa de Larrañaga de 2014.

| Tema | Puntaje editorial | Página del PDF |
| --- | --- | --- |
| Economía | 75 | 14 |
| Seguridad y libertades | 85 | 25 |
| Comercio exterior | 10 | 14 |
| Ambiente/desarrollo | 35 | 18 |

Los fundamentos están en `dist/ranking-expansion.js`. Las propuestas sustentan la lectura; los números no aparecen en el programa y son estimaciones editoriales. La educación/previsión de las tablas anteriores no se reutiliza para Educación y servicios. Ese eje y el nuevo eje Instituciones permanecen sin puntaje en los referentes hasta seleccionar evidencia comparable.

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

Las fuentes y páginas de cada ubicación se encuentran en las fichas y en `dist/comparison-profiles.js` y `dist/ranking-expansion.js`. Los seis programas partidarios de 2024 se comparan por separado. Se adaptan al nuevo orden de polos y a los cinco temas comunes con evidencia educativa nueva y específica en dist/service-evidence.js. Instituciones sigue sin datos comparables.

La afinidad es 100 menos el promedio de las diferencias absolutas en los cinco temas comunes. `dist/result-ranking.js` compara los cinco temas comunes de la nueva edición. Las respuestas guardadas se migran por identidad de pregunta; Instituciones y Educación y servicios deben completarse antes de mostrar un resultado nuevo. Las pruebas verifican que todos los referentes del catálogo puedan salir y que el resultado se seleccione automáticamente por distancia sin redondear, conservando la información de empates exactos.

## Interacción del mapa

Economía usa 0 = Intervencionismo estatal y 100 = Libre mercado; Seguridad usa 0 = Libertades individuales y 100 = Control y autoridad. El mapa coloca Estado a la izquierda, mercado a la derecha, control arriba y libertades abajo.

Las coordenadas idénticas se agrupan bajo un número. Las etiquetas se separan para evitar superposiciones y una línea las une al punto real, sin mover los datos. Se puede buscar por nombre, filtrar por partido y seleccionar un referente con clic, Enter o espacio. Buscar o seleccionar no modifica ni transmite las respuestas. El punto de la persona permanece cuando un filtro no encuentra referentes.

## Nuevas referencias de gobierno

Se recuperaron Sanguinetti y Jorge Batlle al completar la búsqueda con normas originales y declaraciones de sus administraciones. Los cuatro temas se conservan, pero la fuente cambia: medidas aprobadas y declaraciones en ejercicio, no promesas electorales. La ficha y la metodología explican esa limitación. La promulgación no prueba autoría exclusiva del presidente ni describe toda su trayectoria. Esta edición añade la expansión educativa pública documentada en cada administración; los otros siete ejes permanecen sin puntaje.

Los fundamentos y fuentes están en `dist/government-references.js`:

- **Sanguinetti, 1995–2000:** inversión (Ley 16.906), seguridad (Ley 16.707), acuerdo comercial Chile–Mercosur de 1996 (OEA/SICE), previsión mixta (Ley 16.713) y áreas protegidas (Ley 17.234, promulgada en febrero de 2000).
- **Jorge Batlle, 2000–2005:** inversión y seguridad (Ley 17.243), alternativas a la prisión preventiva (Ley 17.726, como contrapeso a las medidas penales anteriores), TLC con México (Ley 17.766), respaldo expreso a las AFAP en mayo de 2004 y prevención/precaución ambiental (Ley 17.283).

Estos dos perfiles pueden resultar los más cercanos de forma independiente. También se recalculan en los tests guardados. Las pruebas verifican la cobertura, los tipos de fuente, el contrapeso en seguridad y que las figuras aún retiradas no reaparezcan.

## Declaraciones públicas incorporadas

Bergara (2024) y Andrade (2016–2019) completan los cuatro temas con declaraciones propias fechadas, sin copiar el programa de su partido. No se presume que sigan vigentes. Los fundamentos están en `dist/statement-references.js`; los números son interpretaciones editoriales.

- **Mario Bergara:** [entrevista en Voces, 4/5/2024](https://semanariovoces.com/mario-bergara-los-cucos-de-bolches-y-tupas-insultan-la-inteligencia-de-la-gente/), sobre inversión, seguridad, inserción comercial, previsión y ambiente.
- **Óscar Andrade:** [entrevista en Voces, 8/6/2019](https://semanariovoces.com/oscar-andrade-si-esperas-la-bendicion-de-los-sectores-mas-poderosos-no-vas-a-hacer-nada/), y [declaraciones sobre un TLC con China, 2/10/2016](https://www.elobservador.com.uy/nota/posible-tlc-con-china-divide-y-pone-en-alerta-al-pit-cnt-20161022500). El fundamento comercial se limita a ese acuerdo y fecha; no se interpreta como rechazo a todo comercio.

La evidencia educativa o previsional anterior no completa automáticamente el nuevo eje Educación y servicios. Instituciones tampoco hereda posiciones sobre memoria histórica. Los ocho ejes restantes de estas referencias se mantienen sin puntaje.
