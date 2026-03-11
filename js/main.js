/**
 * main.js
 * Ponto de entrada da aplicação.
 * Importa e inicializa todos os módulos.
 */

import { initMenu }        from "./menu.js";
import { initCarousel }    from "./carousel.js";
import { initCounters }    from "./counter.js";
import { initForms }       from "./forms.js";
import { initHeader, initBackToTop, initSmoothScroll, initReveal } from "./scroll.js";

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initCarousel();
  initCounters();
  initForms();
  initHeader();
  initBackToTop();
  initSmoothScroll();
  initReveal();
});
