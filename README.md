# 🚚 Luna Transportes

Site institucional desenvolvido como projeto de estudo front-end, simulando uma empresa de transportes e logística em Santa Bárbara d'Oeste - SP.

🔗 **[Ver site ao vivo](https://infofvalentim.github.io/luna_transportes/)**

---

## 🎯 Objetivo

Praticar e consolidar conceitos de desenvolvimento web front-end, desde HTML semântico até organização de código com módulos JS e metodologia BEM no CSS.

---

## 🛠️ Tecnologias Utilizadas

- HTML5 semântico
- CSS3 com metodologia BEM
- JavaScript ES Modules (sem frameworks)
- Google Fonts (Barlow Condensed + Montserrat)
- Font Awesome 6.5
- GitHub Pages (deploy)

---

## 📚 Conceitos Praticados

| Seção / Recurso | Conceito |
|---|---|
| Header fixo + menu mobile | Flexbox, `position: fixed`, toggle de classe |
| Hero com carrossel | `opacity` transition, `IntersectionObserver`, `setInterval` |
| Seção Sobre | CSS Grid, posicionamento absoluto |
| Cards de Serviços | `auto-fit`, `minmax()`, hover com transição |
| Frota | Grid responsivo, `object-fit: cover` |
| Barra de clientes | CSS `animation`, `mask-image`, loop infinito |
| Contadores animados | `IntersectionObserver`, `setInterval` |
| Formulários | Acessibilidade com `aria-*`, `role="status"` |
| Depoimentos | `blockquote` semântico, CSS quotes |
| Animações de entrada | `IntersectionObserver` + fade-in escalonado |
| Acessibilidade | Skip link, `aria-label`, `aria-expanded`, `role`, `tabindex`, `:focus-visible` |
| BEM | Nomenclatura `.bloco__elemento--modificador` em todo o CSS |
| Módulos JS | `import/export`, separação por responsabilidade |

---

## 📁 Estrutura de Arquivos

```
luna_transportes/
├── index.html
├── style.css
├── js/
│   ├── main.js        ← ponto de entrada, importa todos os módulos
│   ├── menu.js        ← menu mobile + acessibilidade por teclado
│   ├── counter.js     ← contadores animados
│   ├── forms.js       ← formulários de cotação e contato
│   ├── scroll.js      ← header, voltar ao topo, smooth scroll, fade-in
│   └── carousel.js    ← carrossel automático do hero com fade
├── images/
│   ├── logo.png       ← logo da empresa (fundo transparente)
│   ├── hero.png       ← imagem principal do hero
│   ├── hero1.png      ← caminhão no galpão
│   ├── hero2.png      ← equipe
│   ├── hero3.png      ← galpão Santa Bárbara d'Oeste
│   ├── fleet1.png
│   ├── fleet2.png
│   └── fleet3.png
└── README.md
```

---

## ✅ Funcionalidades Implementadas

- [x] Menu mobile com toggle e fechamento por ESC
- [x] Carrossel automático no hero com fade entre slides
- [x] Dots clicáveis no carrossel com pausa ao hover
- [x] Logo da empresa no header
- [x] Barra rolante infinita de clientes com pausa ao hover
- [x] Contadores animados disparados pela viewport
- [x] Formulário de cotação com feedback visual
- [x] Formulário de contato com feedback visual
- [x] Botão voltar ao topo
- [x] Botão flutuante WhatsApp
- [x] Fade-in escalonado nos cards ao rolar
- [x] Sombra progressiva no header ao rolar
- [x] Skip link para acessibilidade por teclado
- [x] Scroll suave com offset do header fixo
- [x] Open Graph tags para compartilhamento social
- [x] CSS com variáveis customizadas (`--blue`, `--red`, etc.)

---

## 🚀 Como Rodar Localmente

```bash
git clone https://github.com/infofvalentim/luna_transportes.git
cd luna_transportes

# Abrir com Live Server (VS Code) ou qualquer servidor local
# Não abrir direto como arquivo — os módulos JS precisam de servidor HTTP
```

> ⚠️ Os módulos JS (`type="module"`) não funcionam abrindo o `index.html` direto no navegador. Use o Live Server do VS Code ou `npx serve .`

---

## 🗺️ Próximos Passos (Roadmap)

- [ ] Integrar Formspree nos formulários (envio real de e-mail)
- [ ] Google Analytics GA4
- [ ] Google Search Console + sitemap.xml
- [ ] Migrar CSS para SASS/SCSS
- [ ] Migrar para React (componentização)

---

## ⚠️ Dados Fictícios

Este é um projeto de estudo. Todos os dados (CNPJ, RNTRC, telefone, e-mail, depoimentos) são fictícios e foram criados apenas para fins de aprendizado.

---

Desenvolvido por **infofvalentim** — projeto de estudo front-end.
