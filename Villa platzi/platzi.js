var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var mapa = "tile.png";



var vaca = {
    url: "vaca.png",
    cargaOk: false
};



var fondo = {
    url: "tile.png",
    cargaOK: false
}


fondo.imagen = new Image();
fondo.imagen.src = mapa;
fondo.imagen.addEventListener("load", cargarFondo);



vaca.imagen = new Image();
vaca.imagen.src = "vaca.png";
vaca.imagen.addEventListener("load", cargarVacas);





function dibujar() {
    if (fondo.cargaOK == true) { papel.drawImage(fondo.imagen, 0, 0) }
    if (vaca.cargaOk == true) {
        var x = aleatorio(0, 420)
        var y = aleatorio(0, 420)
        papel.drawImage(vaca.imagen, x, y)
    }
}
/*

var cerdo = new Image();
cerdo.src = "cerdo.png";
cerdo.addEventListener("load", cargarCerdos);


var pollo = new Image();
pollo.src = new "pollo.png";
pollo.addEventListener("load", cargarPollos);



*/
function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}


function cargarVacas() {
    vaca.cargaOk = true;
    dibujar();
}

function cargarCerdos() {
    papel.drawImage(cerdo, 30, 30);
}

function cargarPollos() {
    papel.drawImage(pollo, 50, 50);
}



var z;
for (var i = 0; i < 10; i++) {
    z = aleatorio(5, 0);
    document.write(z + ", ");

}

function aleatorio(min, max) {
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}