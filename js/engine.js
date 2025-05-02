document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".toggle").forEach(h3 => {
        h3.addEventListener("click", function() {
            let card = document.getElementById("info-card");
            let text = document.getElementById("card-text");

            // Remove a classe ativa de todos os elementos antes de aplicar a um novo
            document.querySelectorAll(".toggle").forEach(el => el.classList.remove("ativo"));

            // Adiciona a classe ao elemento clicado
            this.classList.add("ativo");

            // Atualiza o conteúdo do card com a informação associada
            text.innerHTML = this.nextElementSibling.innerHTML;

            // Adiciona a classe para o efeito deslizante e exibe o card
            card.classList.add("mostrar");  
            card.style.display = "flex"; 
        });
    });

    // Evento para fechar o card ao clicar no botão de fechar
    document.querySelector(".close").addEventListener("click", function() {
        let card = document.getElementById("info-card");
        card.classList.remove("mostrar"); 
        
        setTimeout(() => {
            card.style.display = "none"; 
            document.querySelectorAll(".toggle").forEach(el => el.classList.remove("ativo")); // Remove destaque do elemento ativo
        }, 400);
    });

    // Fecha o card ao clicar fora dele
    window.addEventListener("click", function(event) {
        let card = document.getElementById("info-card");
        if (event.target === card) {
            card.classList.remove("mostrar"); // Remove efeito
            
            setTimeout(() => {
                card.style.display = "none";
                document.querySelectorAll(".toggle").forEach(el => el.classList.remove("ativo")); // Remove destaque
            }, 400);
        }
    });

    // Verifica se o botão de alternância de tema existe antes de adicionar evento
    let toggleButton = document.getElementById("toggle-theme");
    if (toggleButton) {
        toggleButton.addEventListener("click", function() {
            let card = document.getElementById("info-card");
            card.classList.toggle("dark");
            card.classList.toggle("light");
        });
    }
});
