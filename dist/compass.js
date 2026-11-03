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
 const emphasis=n=>Math.abs(n-50)<20?'algo más de peso':'más peso';
 const economyText=e==='center'?'Tus respuestas económicas quedan entre el protagonismo del mercado y la participación estatal.':e==='low'?`Tus respuestas dan ${emphasis(economy)} a la iniciativa privada y la competencia que a un papel económico más activo del Estado.`:`Tus respuestas dan ${emphasis(economy)} a la participación y la regulación del Estado que al protagonismo del mercado.`;
 const securityText=s==='center'?'En seguridad, quedan entre ampliar los instrumentos de control y priorizar las garantías individuales.':s==='low'?`En seguridad, dan ${emphasis(security)} a las garantías y libertades individuales que a ampliar los instrumentos de control.`:`En seguridad, dan ${emphasis(security)} a los instrumentos de control que a priorizar las garantías individuales ante esas medidas.`;
 return {title:titles[e][s],text:`${economyText} ${securityText}${e==='center'||s==='center'?' Una posición intermedia puede combinar preferencias distintas; no significa estar de acuerdo con todas las propuestas.':''}`};
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
