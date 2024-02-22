let miPromesa = new Promise((resolved, rejected) => {
    let expresion = true;
    if( expresion )
        resolved('Resuelto');
    else
        rejected('Se produjo un error');
});

/*miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);*/

/*miPromesa
    .then(valor => console.log(valor))
    .catch(error => console.log(error));*/

    let promesa = new Promise((resolved) => {
    //  console.log('Inicio de promesa');
        setTimeout(()=> resolved('Saludos con promesa y time out'),3000);
    //  console.log('Fin promesa');
    });

//promesa.then(valor => console.log(valor));
//async indica que una funcion regresa una promesa

async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
}

//miFuncionConPromesa().then(valor => console.log(valor));

//async/await

async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolved => {
        resolved('Promesa con await');
    });
    console.log(await miPromesa);
}

//funcionConPromesaYAwait();


//promesas, await, async y setTimeout

async function funcionConPromesaAwaitYTimeOut(){
    let miPromesa = new Promise(resolved => {
        setTimeout(() => resolved('Promesa con await y timeout'),3000);
//        console.log( await miPromesa);
    });
    console.log(await miPromesa);
    console.log('Fin de la funcion');
}

funcionConPromesaAwaitYTimeOut();
