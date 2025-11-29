// js/snow-footer.js

function criarFlocoRodape() {
  const rodape = document.querySelector("footer.natalino");
  if (!rodape) return;

  const floco = document.createElement("div");
  floco.classList.add("snowflake");
  floco.textContent = ["❄","❅","❆"][Math.floor(Math.random() * 3)];

  // posição horizontal aleatória
  floco.style.left = Math.random() * 100 + "%";

  // tamanho aleatório
  floco.style.fontSize = (Math.random() * 1.5 + 1) + "em";

  // duração da queda
  floco.style.animationDuration = (Math.random() * 3 + 5) + "s";

  // atraso aleatório
  floco.style.animationDelay = Math.random() * 3 + "s";

  // vento lateral aleatório
  const vento = Math.random() > 0.5 ? "20px" : "-20px";
  floco.style.setProperty("--vento", vento);

  rodape.appendChild(floco);

  setTimeout(() => {
    floco.remove();
  }, 8000);
}

// Criar flocos continuamente
setInterval(criarFlocoRodape, 500);
