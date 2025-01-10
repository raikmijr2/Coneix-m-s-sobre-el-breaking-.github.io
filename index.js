window.onload = function () {
    const NUMIMATGES = document.querySelectorAll('#blocImatges img').length - 1;
    const AMPLADAIMATGE = document.getElementById("marcImatges").offsetWidth;
    let imgAct = 0;

    const botoPrev = document.getElementById("botoPrev");
    const botoNext = document.getElementById("botoNext");
    const blocImatges = document.getElementById("blocImatges");
    const textoCarrusel = document.getElementById("textoCarrusel");
    const textos = ["Presentació", "Història", "Musica", "Elements Bàsics", "Esdeveniments", "Galería"];

    botoPrev.addEventListener("click", function (event) {
        event.preventDefault();
        if (imgAct > 0) {
            imgAct--;
            actualizarCarrusel();
        }
    });

    botoNext.addEventListener("click", function (event) {
        event.preventDefault();
        if (imgAct < NUMIMATGES) {
            imgAct++;
            actualizarCarrusel();
        }
    });

    function actualizarCarrusel() {
        const nouMarge = -AMPLADAIMATGE * imgAct;
        blocImatges.style.marginLeft = `${nouMarge}px`;
        textoCarrusel.textContent = textos[imgAct];
    }

    actualizarCarrusel();
    const imagenes = document.querySelectorAll("#galeria img");

    imagenes.forEach(imagen => {
        imagen.addEventListener("click", function () {
            if (this.classList.contains("grande")) {
                this.classList.remove("grande");
            } else {
                document.querySelectorAll(".grande").forEach(img => img.classList.remove("grande"));

                this.classList.add("grande");
            }
        });
    });


    let esconderbtn = document.getElementById("esconderbtn");
    let esconder = document.getElementById("esconder");

    esconderbtn.addEventListener("click", function () {
    esconder.classList.toggle("mostrar");
    if (esconder.classList.contains("mostrar")) {
        esconderbtn.textContent = "-Info"; 
    } else {
        esconderbtn.textContent = "+Info"; 
    }
});
};