document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".slide");
    const puntos = document.querySelectorAll(".indicadores span");

    let actual = 0;

    function cambiarSlide(indice){

        slides.forEach(slide => {
            slide.classList.remove("activo");
        });

        puntos.forEach(punto => {
            punto.classList.remove("activo");
        });

        slides[indice].classList.add("activo");
        puntos[indice].classList.add("activo");
    }

    setInterval(() => {

        actual++;

        if(actual >= slides.length){
            actual = 0;
        }

        cambiarSlide(actual);

    }, 3000);

});