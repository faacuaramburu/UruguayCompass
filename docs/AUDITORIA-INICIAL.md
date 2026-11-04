# Auditoría inicial del sistema político

Fecha: 4 de noviembre de 2026. Base examinada: `82fc9499d6b0438395486201319da1f0ddb916ab`.

## Circuito observado antes de modificar el cálculo

`questions.js` contiene 240 afirmaciones, veinte por eje. Las versiones eligen las primeras tres, cinco o veinte. La respuesta es un entero de 0 a 4. `core.js` transforma cada respuesta en `(respuesta − 2) × dirección` y cada eje en `redondear(50 + 25 × media)`. El orden no altera esa media. Una respuesta desconocida no entra, pero los resultados exigen completar el cuestionario.

`politics.js` compone tablas mediante siete módulos de ampliación y migración. Seis candidaturas reciben directamente el programa de su partido; ocho compañeros de fórmula heredan cinco ubicaciones del candidato presidencial. Otras referencias usan programas de distintas elecciones, declaraciones o leyes promulgadas durante una administración. `service-evidence.js` agrega una ubicación educativa a todos los perfiles. Las ubicaciones son estimaciones editoriales; las fuentes no publican esos números.

`rankFigures` compara exclusivamente los ejes 0, 3, 7, 10 y 11: `100 − media de distancias absolutas`. Ordena antes del redondeo; los empates exactos se resuelven alfabéticamente para destacar una foto. No calcula compatibilidad por afirmación. Los otros siete ejes respondidos no modifican la afinidad personal. `rankProfiles` conserva además un orden por porcentajes ya redondeados para partidos y países.

## Problemas comprobables

1. **Atribución:** un programa compartido no demuestra la posición individual sobre cada propuesta. La pertenencia a una fórmula produce perfiles idénticos sin investigación individual suficiente.
2. **Resolución:** el promedio de un eje pierde desacuerdos entre preguntas. Dos personas pueden promediar lo mismo respondiendo de manera opuesta a cuestiones concretas.
3. **Cobertura:** una referencia educativa se aplica también a respuestas sobre ASSE, mutualistas y cuidados. Una propuesta de seguridad no prueba una postura sobre cada garantía civil. Un acuerdo comercial no implica apertura unilateral general.
4. **Temporalidad:** se comparan períodos y tipos de prueba distintos. Promulgar una ley no demuestra autoría exclusiva ni una postura contemporánea. Las biografías pueden mencionar cargos posteriores al período puntuado.
5. **Falsa precisión:** faltan escalas explícitas de confianza, cobertura por pregunta y límites del resultado por información ausente. Los porcentajes parecen más completos de lo que son.
6. **Dependencia:** afirmaciones cercanas o inversas dentro de un mismo asunto suman como observaciones independientes. Ejemplos: a1q8/a1q16 (patrimonio), a2q2/a2q4/a2q20 (negociación colectiva), a5q7/a5q8 (identidad documental), a8q9/a8q15 (mediación).
7. **Preguntas multidimensionales:** a5q3 reúne embarazo, anticoncepción y cuidados reproductivos; a10 agrupa educación, salud y cuidados. No corresponde extrapolar evidencia de un componente a los demás. a6q9/a6q10 no son negaciones lógicas: la neutralidad de financiación puede coexistir con financiar organizaciones religiosas. Conservar ambas respuestas no autoriza atribuir una postura desconocida.
8. **Medición:** los doce ejes y los cinco modelos ideológicos son construcciones editoriales, sin validación psicométrica. Un promedio central puede significar neutralidad o posiciones contrapuestas. No se debe presentar como identidad demostrada.

## Límites de esta auditoría inicial

No se detecta una inversión aritmética general de los polos ni una dependencia del orden en `scoreProfile`. No hay base para afirmar ausencia de sesgo empírico, precisión científica o validez predictiva. Los porcentajes anteriores no son probabilidades. Los problemas anteriores exigen reemplazar las atribuciones personales y validar el nuevo algoritmo, no ajustar cifras para producir ganadores ideológicamente esperados.

Se conservarán las preguntas, sus identificadores, las respuestas guardadas y las 31 fichas. Las afirmaciones ambiguas se identificarán; una posición sin evidencia específica no recibirá una puntuación personal heredada del eje o del partido. Las correcciones y la matriz por respuesta se documentarán por separado.
