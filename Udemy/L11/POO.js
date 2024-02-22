class Empleado{
    constructor (nombre,sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }
    obtenerDetalles(){
        return `Empleado: nombre:${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo,departamento){
        super(nombre,sueldo);
        this._departamento = departamento;
    }
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()}, dept: ${this._departamento}`;
    }
}


function determinarTipo(tipo){
    console.log(tipo.obtenerDetalles());
    if(tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo._departamento);
    }else if(tipo instanceof Empleado){
        console.log('Es un objeto de tipo Empleado');
    }else if(tipo instanceof Object){
        console.log('Es un objeto de tipo Objeto');
    }
}


let empleado1 = new Empleado('Juan', 2000);
//console.log(empleado1.obtenerDetalles());

let gerente1 = new Gerente('Carlos', 2000,'Sistemas');
//console.log(gerente1.obtenerDetalles())

determinarTipo(empleado1);
determinarTipo(gerente1);


