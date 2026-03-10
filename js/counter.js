/**
 * counter.js
 * Anima os contadores quando a seção entra na viewport.
 * Usa IntersectionObserver para disparar apenas uma vez.
 */

function formatNumber(n) {
  return n.toLocaleString("pt-BR");
}

function animateCounter(el) {
  const target   = +el.getAttribute("data-target");
  const duration = 1800; // ms
  const steps    = 60;
  const increment = target / steps;
  let step = 0;

  const timer = setInterval(() => {
    step++;
    const current = Math.min(Math.ceil(increment * step), target);
    el.textContent = formatNumber(current);

    if (current >= target) {
      clearInterval(timer);
      el.textContent = formatNumber(target);
    }
  }, duration / steps);
}

export function initCounters() {
  const counters = document.querySelectorAll(".counter");
  if (!counters.length) return;

  counters.forEach(el => { el.textContent = "0"; });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(el => observer.observe(el));
}
