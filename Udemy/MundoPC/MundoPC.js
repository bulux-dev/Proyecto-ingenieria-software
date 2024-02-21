class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }    
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: {idRaton: ${this._idRaton}, Entrada: {Entrada: ${this._tipoEntrada}, Marca: ${this._marca}}`;
    }
}

let raton1 = new Raton('USB', 'HP');
console.log(raton1.toString());

let raton2 = new Raton('Bluetooth', 'Dell');
console.log(raton2.toString());
raton2.marca = 'HP';
console.log(raton2.toString());


class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return  this._idTeclado;
    }
    toString(){
        return `Teclado: {idTeclado: ${this._idTeclado}, Entrada: {Entrada: ${this._tipoEntrada}, Marca: ${this._marca}}`;
    }
}


let teclado1 = new Teclado('Wireless', 'Corsair');
console.log(teclado1.toString());

let teclado2 = new Teclado('USB', 'HyperX');
console.log(teclado2.toString());
raton2.marca = 'HP';
console.log(teclado2.toString());


class Monitor{
    static contadorMonitor = 0;
    constructor(marca, tamano){
        this._marca = marca;
        this._tamano = tamano;
        this._idMonitor = ++Monitor.contadorMonitor;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamano(){
        return this._tamano;
    }
    set tamano(tamano){
        this._tamano = tamano;
    }
    toString(){
        return `Monitor: {idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamano: ${this._tamano}"`
    }
}

let monitor1 = new Monitor('HP', 15);
console.log(monitor1.toString());

let monitor2 = new Monitor('AOC', 27);
console.log(monitor2.toString());
monitor2.marca = 'HP';
console.log(monitor2.toString());


