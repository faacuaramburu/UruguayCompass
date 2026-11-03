// Proyección de datos, no clasificación ideológica. Economía se invierte en X
// para conservar Estado a la izquierda y Mercado a la derecha.
export function describeCompass(economy,security){
 const category=n=>n<=40?'low':n>=60?'high':'center';
 const e=category(economy),s=category(security);
 const titles={
  low:{low:'Mercado y libertades individuales',center:'Mercado, con equilibrio en seguridad',high:'Mercado y mayor control de seguridad'},
  center:{low:'Economía intermedia y libertades individuales',center:'Una posición intermedia en ambos ejes',high:'Economía intermedia y mayor control de seguridad'},
  high:{low:'Participación estatal y libertades individuales',center:'Participación estatal, con equilibrio en seguridad',high:'Participación estatal y mayor control de seguridad'}
 };
 const examples={
  low:{
   low:'Una propuesta compatible sería abrir un servicio a la competencia y, al mismo tiempo, exigir autorización y límites para la vigilancia policial. La combinación pone límites distintos al poder estatal en la economía y en la seguridad: cada medida debe justificarse por lo que hace y cómo se controla.',
   center:'Una propuesta compatible sería facilitar la entrada de empresas a un sector y evaluar las medidas de seguridad caso a caso. La pregunta que esta combinación deja abierta es qué condiciones exigís para ampliar una facultad policial: eficacia, autorización previa, revisión o límites de duración.',
   high:'Una propuesta compatible sería simplificar la actividad empresarial y aumentar los recursos de investigación policial. La combinación requiere separar dos decisiones: qué papel cumple el Estado como productor o regulador y qué facultades tiene para prevenir e investigar delitos.'
  },
  center:{
   low:'Podrías combinar empresas públicas en algunos servicios y competencia privada en otros, manteniendo límites estrictos a la vigilancia. Para profundizar, conviene mirar qué sectores querés gestionar públicamente y qué garantías exigirías ante una medida de seguridad.',
   center:'El punto central puede resultar de apoyar propuestas distintas según el caso. Una forma de profundizar es elegir un servicio concreto y una medida de seguridad: ¿quién debería prestarlo y bajo qué reglas?, ¿qué facultades aceptarías y con qué supervisión? Las respuestas individuales ayudan a ver esa diferencia.',
   high:'Podrías combinar gestión pública y privada según el servicio y respaldar más herramientas de investigación. El debate práctico pasa por definir qué instituciones las administran, qué objetivos deben cumplir y qué controles permiten evaluar su actuación.'
  },
  high:{
   low:'Una propuesta compatible sería sostener una empresa pública y exigir controles judiciales estrictos para la vigilancia. Esta combinación distingue la capacidad del Estado para prestar servicios de sus facultades sobre la vida privada. El diseño debe atender tanto la calidad de los servicios como las garantías de las personas.',
   center:'Una propuesta compatible sería invertir en servicios públicos y condicionar cada medida de seguridad a sus resultados y garantías. La discusión reúne capacidad de gestión, financiamiento y controles: un mismo apoyo a la acción estatal puede tener condiciones diferentes en cada área.',
   high:'Una propuesta compatible sería ampliar servicios públicos y reforzar la capacidad de investigación policial. Ese conjunto exige recursos y buena coordinación institucional; también plantea cómo supervisar las decisiones, evaluar sus resultados y responder ante errores o abusos.'
  }
 };
 return {title:titles[e][s],text:examples[e][s]};
}
export function compassCoordinates(economy,security){
 const bounded=n=>Math.max(0,Math.min(100,Number.isFinite(n)?n:50));
 return {x:60+(100-bounded(economy))*2.6,y:55+(100-bounded(security))*2.6};
}
export function renderCompass(profile){
 const {x,y}=compassCoordinates(profile[0],profile[3]);
 const guideLines=[.25,.75].map(f=>`<path class="compass-grid-line" d="M${60+260*f} 55V315 M60 ${55+260*f}H320"/>`).join('');
 return `<svg class="compass-graphic" viewBox="0 0 380 365" role="img" aria-labelledby="compass-svg-title compass-svg-desc">
 <title id="compass-svg-title">Tu posición en economía y seguridad</title>
 <desc id="compass-svg-desc">Economía: ${profile[0]} de 100, desde Mercado hacia Estado. Seguridad: ${profile[3]} de 100, desde Libertades hacia Control. El punto marcado Vos muestra la intersección de ambas posiciones.</desc>
 <text class="compass-edge" x="190" y="24" text-anchor="middle">Más control de seguridad</text>
 <text class="compass-edge" x="190" y="348" text-anchor="middle">Más libertades individuales</text>
 <text class="compass-edge" transform="translate(24 185) rotate(-90)" text-anchor="middle">Más Estado</text>
 <text class="compass-edge" transform="translate(356 185) rotate(90)" text-anchor="middle">Más mercado</text>
 <rect class="compass-zone zone-state-control" x="60" y="55" width="130" height="130"/>
 <rect class="compass-zone zone-market-control" x="190" y="55" width="130" height="130"/>
 <rect class="compass-zone zone-state-liberty" x="60" y="185" width="130" height="130"/>
 <rect class="compass-zone zone-market-liberty" x="190" y="185" width="130" height="130"/>
 ${guideLines}
 <path class="compass-main-axis" d="M190 55V315 M60 185H320"/>
 <rect class="compass-outline" x="60" y="55" width="260" height="260" rx="2"/>
 <g class="compass-zone-label"><text x="72" y="77">Estado</text><text x="72" y="92">+ control</text><text x="308" y="77" text-anchor="end">Mercado</text><text x="308" y="92" text-anchor="end">+ control</text><text x="72" y="288">Estado</text><text x="72" y="303">+ libertades</text><text x="308" y="288" text-anchor="end">Mercado</text><text x="308" y="303" text-anchor="end">+ libertades</text></g>
 <path class="compass-projection" d="M${x} ${y}H190 M${x} ${y}V185"/>
 <circle class="compass-center" cx="190" cy="185" r="3"/>
 <circle class="compass-point-outer" cx="${x}" cy="${y}" r="10"/>
 <circle class="compass-point" cx="${x}" cy="${y}" r="4"/>
 <text class="compass-point-label" x="${Math.max(80,Math.min(300,x))}" y="${y-17}" text-anchor="middle">Vos</text>
 </svg>`;
}
