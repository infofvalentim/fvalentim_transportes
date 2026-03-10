/* ── MENU MOBILE ── */
function toggleMenu() {
  const menu = document.getElementById("menu");
  const isOpen = menu.style.display === "block";
  menu.style.display = isOpen ? "none" : "block";
}

// Fecha o menu ao clicar em qualquer link
document.querySelectorAll("nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.style.display = "none";
  });
});


/* ── CONTADOR COM INTERSECTIONOBSERVER ── */
function formatNumber(n) {
  return n.toLocaleString("pt-BR");
}

function startCounter(counter) {
  const target = +counter.getAttribute("data-target");
  const duration = 2000; // ms
  const steps = 60;
  const increment = target / steps;
  let current = 0;
  let step = 0;

  const timer = setInterval(function () {
    step++;
    current = Math.min(Math.ceil(increment * step), target);
    counter.innerText = formatNumber(current);

    if (current >= target) {
      clearInterval(timer);
      counter.innerText = formatNumber(target);
    }
  }, duration / steps);
}

const counters = document.querySelectorAll(".counter");

// Só inicia o contador quando a seção entrar na tela
const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        startCounter(entry.target);
        observer.unobserve(entry.target); // roda apenas uma vez
      }
    });
  },
  { threshold: 0.3 }
);

counters.forEach(function (counter) {
  counter.innerText = "0";
  observer.observe(counter);
});


/* ── FORMULÁRIO DE CONTATO ── */
function handleForm(event) {
  event.preventDefault();
  const feedback = document.getElementById("formFeedback");
  feedback.style.color = "#25d366";
  feedback.innerText = "✅ Mensagem enviada! Entraremos em contato em breve.";
  event.target.reset();

  // Limpa o feedback após 5 segundos
  setTimeout(function () {
    feedback.innerText = "";
  }, 5000);
}
