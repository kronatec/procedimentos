document.querySelectorAll(".toggle").forEach(h3 => {
    h3.addEventListener("click", function() {
        let content = this.nextElementSibling;
        content.classList.toggle("mostrar");
    });
});

document.getElementById("mostrarBtn").addEventListener("click", function() {
    let botoes = document.getElementById("botoes");

    if (botoes.style.display === "none" || botoes.style.display === "") {
        botoes.style.display = "block";
        this.textContent = "Ocultar Opções"; 
    } else {
        botoes.style.display = "none";
        this.textContent = "Mostrar Opções"; 
    }
});

