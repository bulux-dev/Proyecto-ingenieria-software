var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);




var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

var ancho = d.width;

console.log(lienzo);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}




function dibujoPorClick() {
    var xxx = parseInt(texto.value);
    var lineas = xxx;
    var l = 0;
    var k = 300;
    var xi, yi, xf, yf;
    var colorcito = "#FAA";
    espacio = ancho / lineas;

    for (l = 0; l < lineas; l++) {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea("cyan", 0, yi, xf, ancho);
        console.log("Linea " + l);

    }
    for (l = 0; l < lineas; l++) {
        xi = 300 - (espacio * l);
        yf = espacio * (l + 1);
        dibujarLinea("red", xi, 0, 0, yf);
    }
    for (l = 0; l < lineas; l++) {
        xi = espacio * l;
        yf = espacio * (l + 1);
        dibujarLinea("blue", xi, 0, ancho, yf);
    }

    for (l = 0; l < lineas; l++) {
        xi = espacio * l;
        yf = 300 - espacio * (l + 1);
        dibujarLinea("purple", xi, ancho, ancho, yf);
    }

}