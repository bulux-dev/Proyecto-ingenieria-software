
let miFuncion = function(){
    console.log('Saludos desde mi funcion');
}/*

const miFuncionFlecha = () => {
    console.log('Saludos desde mi funcion flecha');
}*/

//const miFuncionFlecha = () => console.log('Saludos desde mi funcion flecha');

//const saludar = () => {return 'Saludos desde mi funcion flecha'}

const saludar = () => 'Saludos desde mi funcion flecha'

console.log(saludar());

//miFuncionFlecha();


const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Perez'});
console.log(regresaObjeto());


const funcionConParametrosClasico = function(mensaje){
    console.log(mensaje);
}
/*
const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros('Saludos con parametros');
*/

const funcionConParametros = (op1,op2) => op1+op2;

console.log(funcionConParametros(1,2));