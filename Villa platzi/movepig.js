var vp = document.getElementById("muevecerdito");
var papel = vp.getContext("2d");
var mapa = "tile.png";



var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};


var fondo = { url: "tile.png", cargaOk: false };
var cerdo = { url: "cerdo.png", cargaOk: false };







fondo.imagen = new Image();
fondo.imagen.src = mapa;
fondo.imagen.addEventListener("load", cargarFondo);

cerdo.imagen = new Image();
cerdo.imagen.src = "cerdo.png";
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}

function cargarCerdos() {
    cerdo.cargaOk = true;
    dibujar();
}




function aleatorio(min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}


var y = 25;
var x = 25;

function movercerdito(evento) {
    var movimiento = 5;
    switch (evento.keyCode) {
        case teclas.DOWN:
            y = y + movimiento;
            break;
    }
}



function dibujar() {
    if (fondo.cargaOK == true) { papel.drawImage(fondo.imagen, 0, 0) }
    if (cerdo.cargaOk == true) {
        papel.drawImage(cerdo.imagen, x, y)
    }
}


function dibujarLinea()