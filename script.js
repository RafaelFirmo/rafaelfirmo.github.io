var btnCriptografar = document.querySelector('.left__btn1');
var btnDescriptografar = document.querySelector('.left__btn2');
var imgDetetive = document.querySelector('.right__img');
var resultado = document.querySelector('.right__resultado');
var paragrafo = document.querySelector('.right__paragrafo');
var texto = document.querySelector('.right__texto');

btnCriptografar.onclick = criptografar;
btnDescriptografar.onclick = descriptografar;


function criptografar() {
    frenteOculda();
    var caixaTexto = recuperarTexto()
    resultado.textContent = criptografarTexto(caixaTexto);
}

function descriptografar() {
    frenteOculda();
    var caixaTexto = recuperarTexto()
    resultado.textContent = descriptografarTexto(caixaTexto);
}

function recuperarTexto() {
    var caixaTexto = document.querySelector('.left__textarea')
    return caixaTexto.value
}

function frenteOculda() {
    imgDetetive.classList.add("ocultar");
    paragrafo.classList.add("ocultar");
    texto.classList.add("ocultar");
}

function criptografarTexto(mensagem) {
    var texto = mensagem;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "enter"
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "imes"
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "ober"
        }
        else if (texto[i] == "u") {
            textoFinal = textoFinal + "ufat"
        }
        else {
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function descriptografarTexto(mensagem) {
    var texto = mensagem;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i + 1;
        }
        else if (texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i + 4;
        }
        else if (texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i + 3;
        }
        else if (texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i + 3;
        }

        else if (texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = i + 3;
        }
        else {
            textoFinal = textoFinal + texto[i];
        }

    }

    return textoFinal;

};

const btnCopiar = document.querySelector(".btn__copiar");
btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".right__resultado").textContent;
    navigator.clipboard.writeText(contenido);
    return contenido;
});
//
