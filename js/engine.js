document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".toggle").forEach(h3 => {
        h3.addEventListener("click", function() {
            let content = this.nextElementSibling;
            content.classList.toggle("mostrar");

            if (content.classList.contains("mostrar")) {
                content.style.opacity = "1";
            } else {
                content.style.opacity = "0";
            }
        });
    });
});
