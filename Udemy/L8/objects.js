let persona1 = {
    nombre: 'juan',
    apellido: 'perez',
    nombreCompleto: function (titulo, tel){
//        return this.nombre + ' ' + this.apellido;
        return titulo + ': ' + this.nombre  + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'martinez'
}

let arreglo = ['Ing', 423,555];
console.log(persona1.nombreCompleto('Lic', 234));
console.log(persona1.nombreCompleto.apply(persona2, arreglo));
let a = 89;
let b = 447;
function porcentaje(a,b){
    return Math.round(a/b*100)+'%';
}
console.log(porcentaje(a,b));
let c;

function missing(a,b){
    return 1-a/b;
}
console.log(missing(a,b));
