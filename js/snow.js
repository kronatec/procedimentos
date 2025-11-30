// js/snow.js

const frasesNatalinas = [
  "Feliz Natal e próspero Ano Novo! 🎅✨",
  "Que a magia do Natal ilumine sua vida! 🎄",
  "Boas festas e muita alegria! 🎁",
  "Que seu coração se encha de esperança! 🌟",
  "Paz, amor e união neste Natal! ❄️"
];

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

  // Evento de clique → mostra tooltip
  floco.addEventListener("click", (e) => {
    const frase = frasesNatalinas[Math.floor(Math.random() * frasesNatalinas.length)];
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.textContent = frase;

    // Posição da tooltip perto do clique
    tooltip.style.left = e.pageX + "px";
    tooltip.style.top = (e.pageY - 30) + "px";

    document.body.appendChild(tooltip);

    // Remover tooltip após animação
    setTimeout(() => tooltip.remove(), 3000);
  });

  document.body.appendChild(floco);

  // Remover floco depois que cair
  setTimeout(() => {
    floco.remove();
  }, 15000);
}

// Criar flocos continuamente
setInterval(criarFloco, 400); // ajuste: menor valor = mais neve
