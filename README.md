# Uruguay Compass — Los 12 Ejes

Aplicación educativa sobre política uruguaya con doce posiciones independientes, test de 36/60/240 preguntas, comparación programática y enciclopedia.

## Ejecutar

Node.js 20.19+ (recomendado 22). Para servir la aplicación no se necesita instalar dependencias:

```sh
npm start
```

Abrir http://127.0.0.1:4173/. Para pruebas:

```sh
npm ci
npm test
npm run check
```

`dist/` es un sitio estático sin build ni dependencias externas de ejecución. Servir por HTTP, no `file://`. Las rutas hash permiten alojarlo en un subdirectorio, incluido GitHub Pages. No hay backend, cuentas propias ni analytics.

## Funciones

- Portada A2 aprobada, modos claro/oscuro y adaptación móvil.
- Cuestionario de una afirmación por pantalla, cinco respuestas, progreso, anterior/siguiente y reanudación local.
- Doce puntajes, radar y explicaciones con ambos polos.
- Tres referencias cercanas y una lejana; todas las candidaturas y partidos; comparación por eje, fundamentos y fuentes.
- Enciclopedia de doce ejes, 16 personajes, seis partidos, glosario con búsqueda e historia.
- Metodología, FAQ, privacidad y borrado local.
- Tarjeta PNG y compartir desde el dispositivo; reportes de corrección descargables o como borrador de Issue, nunca enviados automáticamente.

## Diseño

![Diseño A2 aprobado](docs/design-a2.png)

Ver [DESIGN.md](DESIGN.md). Para continuar con una IA: [AGENTS.md](AGENTS.md), [HANDOFF.md](HANDOFF.md), [brief](docs/BRIEF.md).

## Alcance de las comparaciones

Esta edición compara **seis candidaturas de 2024**, una por cada partido parlamentario, mediante el programa que representaron. Los índices usan los mismos **cinco ejes con evidencia común**. Los doce puntajes personales se muestran completos. Las figuras históricas tienen fichas y ubicaciones parciales, pero no se incluyen en el ranking sin evidencia comparable. No se reemplazan valores desconocidos por 50.

Los números son estimaciones editoriales, sin validación científica. Una proximidad no significa pensar igual en todo ni apoyar un partido. Las fuentes respaldan propuestas, no certifican el número asignado.

## Verificación

Pruebas de lógica y DOM pasan, incluyendo los tres tests completos. Ver [detalle y límites](docs/VERIFICACION.md): en esta sesión el navegador automatizado estaba deshabilitado, por lo que la nueva interfaz requiere revisión visual de escritorio/móvil y exportación nativa. No se afirma que esa revisión haya ocurrido ni que esta versión esté desplegada.

Biryani se sirve localmente bajo [SIL Open Font License](dist/fonts/OFL.txt).
