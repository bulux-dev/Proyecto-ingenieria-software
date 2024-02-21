let captcha_valido = false;

function verifyCaptcha(response){
    captcha_valido = true;
    document.getElementById('error').innerHTML = '';
}
function validarCampos(event){
    event.preventDefault();

    var carnet = document.getElementById("carnet").value;
    var nombre = document.getElementById("nombre").value;
    var fnacimiento = document.getElementById("fnacimiento").value;
    var correo = document.getElementById("correo").value;
    const a = "";
    const regexCarnet= /[0-9]{4}\-[0-9]{2}\-[0-9]{5}/ 
    const regexCorreo = /[aA-zZ]+[0-9]*@miumg\.edu\.gt/

    if(!captcha_valido){
        document.getElementById('error').innerHTML = 'Por favor, Marca reCaptcha ';
        return;
    }
    if(carnet == a || nombre == a || fnacimiento == a || correo ==a){
        alert("Hola, por favor, rellena los campos faltantes. ")
        

    }
    else{
        if(regexCarnet.test(carnet) && regexCorreo.test(correo)){
            alert("Sus datos son correctos :) ");

        }
        else{
            alert("Verifica el carnet y correo electronico. ")
        }
    }


    
}



