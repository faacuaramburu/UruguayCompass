# Uruguay Compass — Los 12 Ejes

Aplicación educativa sobre política uruguaya con doce posiciones independientes, test de 36/60/240 preguntas, comparación programática y enciclopedia.

Sitio publicado: [uruguaycompass.onrender.com](https://uruguaycompass.onrender.com/). Repositorio: [UruguayCompass](https://github.com/faacuaramburu/UruguayCompass).

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

`dist/` es un sitio estático sin paso de compilación ni librerías externas para ejecutar el test. Servir por HTTP, no `file://`. Las rutas hash permiten alojarlo en un subdirectorio, incluido GitHub Pages. No hay backend ni cuentas propias. Cloudflare Web Analytics mide visitas y rendimiento; las respuestas y resultados se procesan y guardan localmente.

## Publicación y métricas

- Render Static Site: rama `main`, raíz del repositorio, carpeta publicada `dist`.
- Comando de validación antes de publicar: `npm ci --include=dev && npm test && npm run check`.
- Panel: [UruguayCompass en Render](https://dashboard.render.com/static/srv-dbkkbn6c6qcc73amibeg).
- El sitio estático se sirve desde CDN y no se suspende por inactividad.
- Métricas: Cloudflare → Observability → Analytics → Web analytics → `uruguaycompass.onrender.com`.
- El snippet está en `dist/index.html`; su token es un identificador público del sitio, no una clave API. `spa: false` desactiva la medición automática de cambios de pantalla. No agregar eventos de respuestas, resultados, puntajes ni afinidades políticas.
- Guía del proveedor: [Cloudflare Web Analytics](https://developers.cloudflare.com/web-analytics/about/) y [medición de SPA](https://developers.cloudflare.com/web-analytics/get-started/web-analytics-spa/).

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

Pruebas de lógica y DOM pasan, incluyendo los tres tests completos. Render ejecuta las pruebas y la revisión de datos antes de publicar. El primer deploy se verificó por HTTPS con respuesta 200. Ver [detalle y límites](docs/VERIFICACION.md) para las comprobaciones de interfaz pendientes.

Biryani se sirve localmente bajo [SIL Open Font License](dist/fonts/OFL.txt).

## Lecturas ampliadas

Los resultados ahora incluyen síntesis descriptiva, doce ejes visibles con revisión de respuestas, brújula, prioridades, prototipos pedagógicos, personajes con fotos, partidos, selector de coincidencias/diferencias y tarjeta con retrato. Ver [criterios y límites de estas lecturas](docs/LECTURAS.md). No incluyen humor ni porcentajes de confianza.
