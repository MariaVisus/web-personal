
//ANIMACION DEL HOLA

const titulo = document.querySelector("h1");
const texto = titulo.textContent;
titulo.textContent = "";

for (let i = 0; i < texto.length; i++) {

    const caracter = texto[i];
    const letra = document.createElement("span");
    letra.textContent = caracter;
    letra.style.opacity = "0";
    titulo.appendChild(letra);

    setTimeout(() => {
        letra.style.opacity = "1";
    }, i * 100);
}

//ANIMACION DE ME LLAMO 
const textoPresentacionOrignal = document.querySelector(".texto-presentacion");
const textoPresentacion= textoPresentacionOrignal.textContent;
textoPresentacionOrignal.textContent="";

const retraso = texto.length * 100;

let i=0;

for (i = 0; i < textoPresentacion.length; i++) {

    const caracter = textoPresentacion[i];

    const letra = document.createElement("span");
    letra.textContent = caracter;
    letra.style.opacity = "0";

    textoPresentacionOrignal.appendChild(letra);

    setTimeout(() => {
        letra.style.opacity = "1";
    }, retraso + i * 100);
}

// ANIMACIÓN MARIA

const nombre = document.querySelector(".letras-nombre");

const textoNombre = nombre.textContent;

nombre.textContent = "";

const retrasoMaria = retraso + i * 100;

let j=0;

for (j = 0; j < textoNombre.length; j++) {

    const caracter = textoNombre[j];

    const letra = document.createElement("span");

    letra.textContent = caracter;

    letra.style.opacity = "0";

    nombre.appendChild(letra);

    setTimeout(() => {

        letra.style.opacity = "1";

    }, retrasoMaria + j * 100);

}

// ANIMACIÓN SUBTITULO PORTADA
const subtitulo = document.querySelector(".subtitulo-portada");

const textoSubtitulo = subtitulo.textContent;

subtitulo.textContent = "";

const retrasoSubtitulo = retrasoMaria + (j+1) * 100;

let k=0;

for (k = 0; k < textoSubtitulo.length; k++) {

    const caracter = textoSubtitulo[k];

    const letra = document.createElement("span");

    letra.textContent = caracter;

    letra.style.opacity = "0";

    subtitulo.appendChild(letra);

    setTimeout(() => {

        letra.style.opacity = "1";

    }, retrasoSubtitulo + k * 40);

}

// DELAY DE SCROLL

const scroll = document.querySelector(".scroll-indicator");

scroll.style.opacity = "0";

setTimeout(() => {

    scroll.style.opacity = "1";
    scroll.classList.add("parpadeando");

}, retrasoSubtitulo + (k + 1) * 40);


/*CONTANTO - APARICIÓN DE LOS CÍRCULOS*/ 
const contacto = document.querySelector(".contacto");
const circuloPrincipal = document.querySelector(".circulo-principal");

circuloPrincipal.addEventListener("mouseenter", () => {
    contacto.classList.add("abierto");
});

contacto.addEventListener("mouseleave", () => {

    setTimeout(() => {
        contacto.classList.remove("abierto");
    }, 200);

});






