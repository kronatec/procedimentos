// js/snow.js

function criarFloco() {
  const floco = document.createElement("div");
  floco.classList.add("snowflake");

  // Símbolo aleatório
  floco.textContent = ["❄","❅","❆"][Math.floor(Math.random() * 3)];

  // Posição horizontal aleatória
  floco.style.left = Math.random() * 100 + "vw";

  // Tamanho aleatório
  floco.style.fontSize = (Math.random() * 1.5 + 1) + "em";

  // Duração aleatória da queda
  floco.style.animationDuration = (Math.random() * 5 + 8) + "s";

  // Atraso aleatório
  floco.style.animationDelay = Math.random() * 5 + "s";

  document.body.appendChild(floco);

  // Remover floco depois que cair
  setTimeout(() => {
    floco.remove();
  }, 15000);
}

// Criar flocos continuamente
setInterval(criarFloco, 400); // ajuste: menor valor = mais neve
