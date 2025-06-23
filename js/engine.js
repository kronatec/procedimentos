document.addEventListener("DOMContentLoaded", function () {
  // Elementos principais
  const card    = document.getElementById("info-card");
  const overlay = document.getElementById("overlay");
  const closeBtn= card.querySelector(".close");
  const toggles = document.querySelectorAll(".toggle");
  const fades   = document.querySelectorAll(".fade-in");

  // Função única de fechamento
  function fechar() {
    card.classList.remove("mostrar");
    overlay.classList.remove("mostrar");
    toggles.forEach(el => el.classList.remove("ativo"));
  }

  // 1) Fade-in imediato
  fades.forEach((el, i) => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      el.style.transitionDelay = `${i * 0.1}s`;
      el.classList.add("active");
    }
  });

  // 2) Fade-in em cascata ao rolar (com debounce)
  let scrollDebounce;
  window.addEventListener("scroll", () => {
    clearTimeout(scrollDebounce);
    scrollDebounce = setTimeout(() => {
      let delay = 0;
      fades.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.9
            && !el.classList.contains("active")) {
          el.style.transitionDelay = `${delay}s`;
          el.classList.add("active");
          delay += 0.1;
        }
      });
    }, 50);
  });

  // 3) Seções .show-inline
  document.querySelectorAll(".section.show-inline .content")
    .forEach(el => {
      el.style.maxHeight = "none";
      el.style.opacity   = "1";
    });

  // 4) Abrir card + overlay no click
  toggles.forEach(h3 => {
    h3.addEventListener("click", function () {
      const text = document.getElementById("card-text");
      toggles.forEach(el => el.classList.remove("ativo"));
      this.classList.add("ativo");
      text.innerHTML = this.nextElementSibling.innerHTML;
      card.classList.add("mostrar");
      overlay.classList.add("mostrar");
    });
  });

  // 5) Fechar pelo botão ×
  closeBtn.addEventListener("click", fechar);

  // 6) Fechar clicando no overlay
  overlay.addEventListener("click", fechar);

  // 7) Fechar ao apertar Esc
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") fechar();
  });

  // 8) Alternar tema (opcional)
  const toggleThemeBtn = document.getElementById("toggle-theme");
  if (toggleThemeBtn) {
    toggleThemeBtn.addEventListener("click", () => {
      card.classList.toggle("dark");
      card.classList.toggle("light");
    });
  }
});
