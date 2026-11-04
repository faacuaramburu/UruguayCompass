# Uruguay Compass

**Explore your political views across 12 dimensions and compare your answers with Uruguayan political figures and parties.** Take the questionnaire, find your closest matches, and understand where your views align or differ. A built-in encyclopedia explains the issues, people, and history behind the results.

**[Take the test at uruguaycompass.onrender.com](https://uruguaycompass.onrender.com/)** · Spanish (Uruguay) · Desktop and mobile

![Uruguay Compass home screen in dark mode, with the questionnaire options and an example twelve-axis radar](docs/images/uruguay-compass-dark.jpg)

## Take the test

Choose a version and respond to statements about political debates in Uruguay:

- **Short:** 36 questions, about 5 minutes.
- **Full:** 60 questions, about 9 minutes.
- **Extreme:** 240 questions, about 30 minutes.

Each statement has five responses, from strongly disagree to strongly agree, including a neutral option. Go back to review an answer or leave and resume later in the same browser. No account is required.

Your results show separate scores for economy, taxation, labor, security, institutions, social values, religion, trade, foreign policy, immigration, education and services, and the environment. Each scale shows both ends and names the predominant pole beside its percentage, or shows a balanced position near the center. The result opens with a named ideological model, an editorial first-person phrase, and its percentage; details explain the four-axis model and ties. A score of 0 or 100 refers to that specific axis, not to a universal left–right label.

## Understand your results

- **Political compatibility:** compare exact answers with individually sourced, dated positions for 31 retained references. Unknown positions remain unknown; parties and electoral tickets never supply personal answers. Signed points distinguish agreement, disagreement and neutrality. Results disclose observed coverage, confidence, missing-evidence bounds and provisional rankings.
- **Political spectrum:** browse all 31 references and see your position alongside figures with evidence in both plotted axes on an economy and security map. Search by name, filter by party, or select a number to identify its figures and read the evidence. People who share coordinates remain grouped together.
- **Your twelve axes:** see your positions with labeled percentages, colored bars, and pole icons. Explanations remain available in the encyclopedia.
- **Interpretations:** see the closest of five educational models, compare distinctive positions with documented reference medians, and inspect similarities and differences. The political compass appears near the end of the results; the earlier explanatory scale and separate model list have been removed.
- **Countries:** browse 195 current states (193 UN members and two observers) and a selection of 22 historical entries, with period tabs and search. Constitutional affinity covers all 195 current countries and 22 historical documentary profiles on three axes. Dated texts are compared without assuming current legal force or describing present governments. See [country sources and rubric](docs/PAISES.md).
- **Parties:** the result shows the three closest and two most distant program references with locally stored identifying images and their credits. The full comparison page retains all six parties.
- **Themes:** the sun/moon control switches between a light palette and a black dark palette, with a short click-triggered transition that respects reduced motion.
- **Shareable result:** generate a dark PNG card with your observed political compatibility and its coverage, other references, countries, and twelve positions. Saving or sharing requires an explicit action.

These are educational, editorial comparisons, not a scientifically validated assessment or a voting recommendation. The political engine uses **(answer − 2) × (documented position − 2)** on a 0–4 answer scale. Each axis receives 1/12 of planned weight; repeated concepts share their axis weight and each variant keeps its fraction. The observed index is 50 + 12.5 × the weighted mean of known points. Unknowns neither reward nor penalize, but unequal evidence means conditional percentages alone cannot establish a complete comparison. Identification bounds vary missing evidence across its possible range, constrained by the known answer: neutral responses allow zero points, moderate responses allow ±2. They are not statistical confidence intervals. A unique result requires non-overlapping bounds; otherwise it is explicitly provisional.

Research remains **partial**: sectors, full trajectories, numerous parliamentary votes and most question-level positions still need corroboration. Source dates describe historical evidence, not guaranteed current beliefs. Actions distinguish shared institutional responsibility from individual authorship. Parties use their own official programs, separately. The independent educational ideology models and constitutional country comparison are not validated by this audit.

The current questionnaire archives prior saved tests before migrating unchanged answers. Revised abortion/euthanasia statements require new answers; old responses are not reused. See the [initial audit](docs/AUDITORIA-INICIAL.md), [full audit report](dist/auditoria/informe.md), [answer matrix](dist/auditoria/matriz.csv), and [evidence data](dist/auditoria/datos.json). Reproduce them with `npm run audit` after changing evidence or question concepts.

## Explore the encyclopedia

Browse explanations of all twelve axes, profiles of **31 political figures** and **six parties**, a searchable glossary, and a political history timeline. References without sufficient personal evidence retain their catalog entries and sources without invented percentages or map coordinates.

The methodology and FAQ explain how scores and comparisons work. Found an error or disagree with a placement? Use the correction form to prepare a report, or [open a GitHub issue](https://github.com/faacuaramburu/UruguayCompass/issues) with supporting sources. Reports are never submitted automatically.

## Your answers stay in your browser

Answers, progress, and results are processed and stored locally. They are not sent to a server, analytics, correction reports, or share links. You can repeat the test or delete your saved data from the app. Clearing browser storage also removes your progress; there is no account sync between devices.

The live site uses Cloudflare Web Analytics for traffic and performance statistics. Automatic SPA navigation tracking is disabled, and the app does not send questionnaire answers, scores, political affinities, or test interaction events to analytics. Result images are generated on your device.

## Built with

- **Languages:** JavaScript ES modules, HTML, and CSS.
- **Frontend:** static pages with hash-based routing, data-driven SVG charts, and Canvas for the home illustration and PNG export. No runtime framework or build step.
- **Storage:** browser local storage, with handling for unavailable storage.
- **Testing:** Node.js test runner and jsdom for scoring, data integrity, and application flows.
- **Hosting:** Render Static Site, serving `dist/` from `main`.
- **Analytics:** Cloudflare Web Analytics.

## Run locally

Requires **Node.js 20.19 or newer** and npm.

```sh
git clone https://github.com/faacuaramburu/UruguayCompass.git
cd UruguayCompass
npm start
```

Open **[http://127.0.0.1:4173](http://127.0.0.1:4173)**. Stop the server with `Ctrl+C`. Serving the app does not require installing dependencies. Use HTTP rather than opening `index.html` directly.

Install development dependencies and run the checks:

```sh
npm ci
npm test
npm run check
```

The tests cover scoring extremes, neutral answers, question-level evidence, signed compatibility, uncertainty bounds, migration backups, invalid saved data, complete questionnaire flows, chart geometry, filters, and keyboard selection.

## Deploy

Create a Render **Static Site** connected to this repository and the `main` branch:

- **Build command:** `npm ci --include=dev && npm test && npm run check`
- **Publish directory:** `dist`

No backend, environment secrets, or bundling step are required. The Cloudflare beacon configuration lives in `dist/index.html`; its site identifier is public. Keep `spa: false` and do not add tracking that includes political answers or results.

## Credits and documentation

- Fonts: Biryani and Bricolage Grotesque, self-hosted under the [SIL Open Font License](dist/fonts/OFL.txt) and [Bricolage Grotesque license](dist/fonts/Bricolage-OFL.txt).
- Political portraits: locally served documentary photographs with individual author and source credits; license information is recorded where provided. See [photo credits](docs/FOTOS.md).
- Editorial criteria: [result interpretations](docs/LECTURAS.md) and [political spectrum](docs/ESPECTRO.md).
