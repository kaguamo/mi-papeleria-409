const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicadores span");

let indiceActual = 0;

function mostrarSlide(indice) {

    slides.forEach(slide => {
        slide.classList.remove("activo");
    });

    indicadores.forEach(indicador => {
        indicador.classList.remove("activo");
    });

    slides[indice].classList.add("activo");
    indicadores[indice].classList.add("activo");
}

function siguienteSlide() {

    indiceActual++;

    if (indiceActual >= slides.length) {
        indiceActual = 0;
    }

    mostrarSlide(indiceActual);
}

setInterval(siguienteSlide, 3000);

indicadores.forEach((indicador, indice) => {

    indicador.addEventListener("click", () => {

        indiceActual = indice;
        mostrarSlide(indiceActual);

    });

});