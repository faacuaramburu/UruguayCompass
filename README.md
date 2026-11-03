# Uruguay Compass — Los 12 Ejes

Test político educativo sobre Uruguay, con doce puntajes independientes, comparaciones documentadas y una mini enciclopedia.

**Estado: trabajo en curso.** Este commit guarda la portada A2 implementada y los módulos de preguntas, contexto, referencias políticas y cálculo. El flujo del cuestionario, resultados y enciclopedia todavía no está conectado a la interfaz. El botón «Empezar el test» y los enlaces internos son, por ahora, parte de la portada y no abren esas pantallas.

## Continuar con una IA

Leer primero [AGENTS.md](AGENTS.md), después [HANDOFF.md](HANDOFF.md) y el [brief completo](docs/BRIEF.md). El diseño ya fue elegido y aprobado; no hace falta volver a proponer estilos.

## Ejecutar

Requiere Node.js 20 o posterior. No hay dependencias de npm que instalar.

```sh
npm start
```

Abrir `http://127.0.0.1:4173/`.

```sh
npm test
npm run check
```

La carpeta `dist/` se puede servir con cualquier servidor estático. No abrir `index.html` mediante `file://`, porque los módulos JavaScript requieren HTTP.

## Diseño elegido

![A2, referencia aprobada](docs/design-a2.png)

Fondo claro, texto a la izquierda, radar ilustrativo a la derecha, selector discreto de duración y una acción principal. Las imágenes de referencia son para reproducir el diseño con HTML, CSS y gráficos de datos, no para usarlas como una interfaz rasterizada.

## Contenido y límites

- 240 afirmaciones: 20 por eje; versiones de 36, 60 y 240 preguntas.
- 12 ejes, 26 términos de glosario, 12 hitos históricos y 10 respuestas de FAQ.
- 16 figuras y 6 partidos con fuentes públicas.
- La comparación equilibrada inicial contiene seis candidaturas de 2024, una por partido. Usa sus programas como referencias editoriales, no como una medición de convicciones personales.
- La evidencia común para ese ranking cubre **cinco ejes**: economía, seguridad/libertades, comercio exterior, educación/seguridad social y ambiente/desarrollo. Los doce puntajes de la persona se calculan completos; no se deben anunciar afinidades documentadas en los doce ejes.
- Las figuras históricas tienen fichas y ubicaciones parciales; todavía no existe una matriz histórica comparable que permita incluirlas en el ranking.
- Es un recurso educativo, sin validación científica y sin recomendación de voto.

Las preguntas y los textos editoriales necesitan revisión humana. Las fuentes respaldan propuestas y hechos; no validan científicamente los números asignados.

La tipografía Biryani se incluye localmente bajo SIL Open Font License: [licencia](dist/fonts/OFL.txt).
