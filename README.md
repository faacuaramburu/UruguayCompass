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

Your results show separate scores for economy, taxation, labor, security, social values, secularism, trade, foreign policy, immigration, historical memory, education and social security, and the environment. Each scale shows both ends; expand its explanation to read what your position means. A score of 0 or 100 refers to that specific axis, not to a universal left–right label.

## Understand your results

- **Closest political matches:** compare your answers with 29 documented political references covering election platforms from 2009–2024 and government measures from 1995–2005, with portraits, source documents, and a breakdown of similarities and differences. Every ranked reference uses the same five shared topics. Sanguinetti (1995–2000) and Jorge Batlle (2000–2005) use dated government measures, explicitly distinguished from election platforms. Shared electoral programs produce visible ties; you can choose a tied figure for the portrait and export card without changing the score.
- **Political spectrum:** see your position alongside 29 documented political figures on an economy and security map. Search by name, filter by party, or select a number to identify its figures and read the evidence. People who share coordinates remain grouped together.
- **Your twelve axes:** read plain-language explanations, review the answers behind each score, inside an individual disclosure for each axis, and switch to a labeled radar chart.
- **Interpretations:** explore five educational ideological models, expressed priorities, and comparisons with individual references.
- **Shareable result:** generate a PNG card with your closest figure, party comparison, and twelve scores. Saving or sharing requires an explicit action.

These are educational, editorial comparisons, not a scientifically validated assessment or a voting recommendation. The main ranking compares documented policy positions, not a complete reconstruction of a person's beliefs. Presidential programs, primary-election proposals, and shared tickets are dated and identified explicitly. Laws enacted during an administration do not imply sole presidential authorship, and government measures are a different source type from electoral promises. Only references with all five topics documented appear in the catalog and ranking. Saved answers automatically use the current comparison dataset. Sources support the documented positions; the numerical placements are editorial estimates. Missing evidence stays missing rather than becoming a score of 50.

## Explore the encyclopedia

Browse explanations of all twelve axes, profiles of **29 political figures** and **six parties**, a searchable glossary, and a political history timeline. Every figure in the catalog can appear as a result and on the two-axis map. References without sufficient comparable evidence have been removed. Luis Alberto Lacalle Herrera is included through the documented program of his 2009 presidential ticket.

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

The tests cover scoring extremes, neutral answers, shared comparison coverage, invalid saved data, complete questionnaire flows, chart geometry, filters, and keyboard selection.

## Deploy

Create a Render **Static Site** connected to this repository and the `main` branch:

- **Build command:** `npm ci --include=dev && npm test && npm run check`
- **Publish directory:** `dist`

No backend, environment secrets, or bundling step are required. The Cloudflare beacon configuration lives in `dist/index.html`; its site identifier is public. Keep `spa: false` and do not add tracking that includes political answers or results.

## Credits and documentation

- Fonts: Biryani and Bricolage Grotesque, self-hosted under the [SIL Open Font License](dist/fonts/OFL.txt) and [Bricolage Grotesque license](dist/fonts/Bricolage-OFL.txt).
- Political portraits: locally served documentary photographs with individual author, source, and license credits. See [photo credits](docs/FOTOS.md).
- Editorial criteria: [result interpretations](docs/LECTURAS.md) and [political spectrum](docs/ESPECTRO.md).
