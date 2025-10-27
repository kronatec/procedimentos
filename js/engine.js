document.addEventListener("DOMContentLoaded", function () {
  // Elementos principais
  const card = document.getElementById("info-card");
  const overlay = document.getElementById("overlay");
  const closeBtn = card?.querySelector(".close");
  const toggles = document.querySelectorAll(".toggle");
  const fades = document.querySelectorAll(".fade-in");
  const hamburguer = document.querySelector(".hamburguer");
  const menu = document.querySelector(".menu");
  const mockupImg = document.querySelector(".mockup-img");
  const videoBtn = document.getElementById("mostrarBtn");
  const videoCard = document.getElementById("videoCard");

  // 1) Mostrar mockup com fade-in
  function mostrarMockup() {
    if (mockupImg) {
      setTimeout(() => {
        mockupImg.classList.add("visible");
      }, 200);
    }
  }

  // 2) Fade-in imediato
  function aplicarFadeInicial() {
    fades.forEach((el, i) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
        el.style.transitionDelay = `${i * 0.1}s`;
        el.classList.add("active");
      }
    });
  }

  // 3) Fade-in ao rolar
  function aplicarFadeScroll() {
    let delay = 0;
    fades.forEach((el) => {
      if (
        el.getBoundingClientRect().top < window.innerHeight * 0.9 &&
        !el.classList.contains("active")
      ) {
        el.style.transitionDelay = `${delay}s`;
        el.classList.add("active");
        delay += 0.1;
      }
    });
  }

  // 4) Exibir seções inline
  function exibirSecoesInline() {
    document.querySelectorAll(".section.show-inline .content").forEach((el) => {
      el.style.maxHeight = "none";
      el.style.opacity = "1";
    });
  }

  // 5) Abrir card de informações
  function abrirCard(toggle) {
    const text = document.getElementById("card-text");
    toggles.forEach((el) => el.classList.remove("ativo"));
    toggle.classList.add("ativo");
    text.innerHTML = toggle.nextElementSibling.innerHTML;
    card.classList.add("mostrar");
    overlay.classList.add("mostrar");
  }

  // 6) Fechar card
  function fecharCard() {
    card?.classList.remove("mostrar");
    overlay?.classList.remove("mostrar");
    toggles.forEach((el) => el.classList.remove("ativo"));
  }

  // 7) Alternar menu hamburguer
  function alternarMenu() {
    menu?.classList.toggle("active");
    hamburguer.classList.toggle("active");
  }

  // 8) Mostrar card de vídeos
  function mostrarVideoCard() {
    if (videoCard) {
      videoCard.style.display =
        videoCard.style.display === "none" ? "block" : "none";
    }
  }

  // Inicializações
  mostrarMockup();
  aplicarFadeInicial();
  exibirSecoesInline();

  // Eventos
  let scrollDebounce;
  window.addEventListener("scroll", () => {
    clearTimeout(scrollDebounce);
    scrollDebounce = setTimeout(aplicarFadeScroll, 50);
  });

  toggles.forEach((h3) => {
    h3.addEventListener("click", () => abrirCard(h3));
  });

  closeBtn?.addEventListener("click", fecharCard);
  overlay?.addEventListener("click", fecharCard);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharCard();
  });

  hamburguer?.addEventListener("click", alternarMenu);
  videoBtn?.addEventListener("click", mostrarVideoCard);
});
