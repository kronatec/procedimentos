document.addEventListener("DOMContentLoaded", function () {
  // Elementos principais
  const card       = document.getElementById("info-card");
  const overlay    = document.getElementById("overlay");
  const closeBtn   = card?.querySelector(".close");
  const toggles    = document.querySelectorAll(".toggle");
  const fades      = document.querySelectorAll(".fade-in");
  const hamburguer = document.querySelector(".hamburguer");
  const menu       = document.querySelector(".menu");
  // Fade-in do mockup cyberpunk
  const mockupImg = document.querySelector('.mockup-img');
  if (mockupImg) {
    // espera tudo carregar, então revela
    window.setTimeout(() => {
      mockupImg.classList.add('visible');
    }, 200); // 0.2s de delay pra suavizar
  }

  // 1) Animação fade-in imediata
  fades.forEach((el, i) => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      el.style.transitionDelay = `${i * 0.1}s`;
      el.classList.add("active");
    }
  });

  // 2) Fade-in em cascata ao rolar
  let scrollDebounce;
  window.addEventListener("scroll", () => {
    clearTimeout(scrollDebounce);
    scrollDebounce = setTimeout(() => {
      let delay = 0;
      fades.forEach(el => {
        if (
          el.getBoundingClientRect().top < window.innerHeight * 0.9 &&
          !el.classList.contains("active")
        ) {
          el.style.transitionDelay = `${delay}s`;
          el.classList.add("active");
          delay += 0.1;
        }
      });
    }, 50);
  });

  // 3) Exibir seções inline automaticamente
  document.querySelectorAll(".section.show-inline .content").forEach(el => {
    el.style.maxHeight = "none";
    el.style.opacity = "1";
  });

  // 4) Abrir card e overlay ao clicar nos toggles
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

  // 5) Fechar card (botão, overlay ou tecla Esc)
  function fechar() {
    card?.classList.remove("mostrar");
    overlay?.classList.remove("mostrar");
    toggles.forEach(el => el.classList.remove("ativo"));
  }

  closeBtn?.addEventListener("click", fechar);
  overlay?.addEventListener("click", fechar);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") fechar();
  });

  // 6) Menu hamburguer responsivo
  hamburguer?.addEventListener("click", () => {
    menu?.classList.toggle("active");
    hamburguer.classList.toggle("active");
  });

  // 7) Dashboard: dados simulados por tecnologia
  const dadosTecnologias = {
    onix:     { viagem: 4, parado: 1 },
    omnilink: { viagem: 2, parado: 2 },
    sascar:   { viagem: 5, parado: 1 },
    autotrac: { viagem: 1, parado: 3 }
  };

  function preencherPainel(dados) {
    let totalViagem = 0;
    let totalParado = 0;

    for (const [tecnologia, valores] of Object.entries(dados)) {
      const elViagem = document.getElementById(`${tecnologia}-viagem`);
      const elParado = document.getElementById(`${tecnologia}-parado`);

      if (elViagem) elViagem.textContent = valores.viagem;
      if (elParado) elParado.textContent = valores.parado;

      totalViagem += valores.viagem;
      totalParado += valores.parado;
    }

    const viagemEl = document.getElementById('viagem');
    const paradosEl = document.getElementById('parados');
    const totalEl = document.getElementById('total');

    if (viagemEl && paradosEl && totalEl) {
      viagemEl.textContent = totalViagem;
      paradosEl.textContent = totalParado;
      totalEl.textContent = totalViagem + totalParado;
    }

    // Novo painel futurista: total detalhado
    const totalViagemEl = document.getElementById('total-viagem');
    const totalParadoEl = document.getElementById('total-parado');
    const totalGeralEl = document.getElementById('total-geral');

    if (totalViagemEl) totalViagemEl.textContent = totalViagem;
    if (totalParadoEl) totalParadoEl.textContent = totalParado;
    if (totalGeralEl) totalGeralEl.textContent = totalViagem + totalParado;
  }

  preencherPainel(dadosTecnologias);
});
