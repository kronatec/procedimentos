// Adiciona evento de clique em todos os elementos com classe "toggle"
document.querySelectorAll(".toggle").forEach(h3 => {
    h3.addEventListener("click", function() {
        let content = this.nextElementSibling;
        content.classList.toggle("mostrar");

        // Adiciona transição suave ao conteúdo
        if (content.classList.contains("mostrar")) {
            content.style.opacity = "1";
        } else {
            content.style.opacity = "0";
        }
    });
});

// Alterna visibilidade das opções no botão principal
document.getElementById("mostrarBtn").addEventListener("click", function() {
    let botoes = document.getElementById("botoes");

    // Alterna exibição com suavidade
    if (botoes.style.display === "none" || botoes.style.display === "") {
        botoes.style.display = "flex"; // Define como flex para alinhar conforme o CSS
        botoes.style.opacity = "1";
        this.textContent = "Ocultar Opções"; 
    } else {
        botoes.style.opacity = "0";

        // Aguarda a opacidade antes de ocultar
        setTimeout(() => {
            botoes.style.display = "none";
        }, 300); // Temporizador baseado na transição do CSS
        this.textContent = "Mostrar Opções"; 
    }
});
