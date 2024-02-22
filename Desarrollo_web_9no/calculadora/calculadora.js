var numero1 = 0;
var numero2 = 0;
var resultado = 0;

// Definimos las funciones para realizar las operaciones matemáticas
function sumar() {
    resultado = numero1 + numero2;
}

function restar() {
    resultado = numero1 - numero2;
}

function multiplicar() {
    resultado = numero1 * numero2;
}

function dividir() {
    resultado = numero1 / numero2;
}

// Definimos la función que se ejecutará al hacer clic en un botón
function calcular() {
    // Obtenemos el valor del número ingresado
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;

    // Realizamos la operación matemática
    switch (document.getElementById("operacion").value) {
        case "+":
            sumar();
            break;
        case "-":
            restar();
            break;
        case "*":
            multiplicar();
            break;
        case "/":
            dividir();
            break;
    }

    // Mostramos el resultado en la pantalla
    document.getElementById("resultado").innerHTML = resultado;
}

// Inicializamos el documento
document.addEventListener("DOMContentLoaded", function() {
    // Asignamos los eventos a los botones
    document.getElementById("sumar").addEventListener("click", calcular);
    document.getElementById("restar").addEventListener("click", calcular);
    document.getElementById("multiplicar").addEventListener("click", calcular);
    document.getElementById("dividir").addEventListener("click", calcular);
});