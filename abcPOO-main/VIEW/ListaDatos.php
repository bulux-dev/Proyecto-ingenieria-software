<?php
require_once('../dao/devuelveEmpleados.php');

$empleados = new devuelveEmpleados();

if($_SERVER['REQUEST_METHOD']==='POST'){
    $codigo = $_POST['codigo'];
    $nombre = $_POST['nombre'];
    $estado = $_POST['estado'];

    $insert_resultado = $empleados->insert_empleados($codigo,$nombre,$estado);

    if($insert_resultado){
        echo "EXITO";
    }
    else{
        echo "ERROR EN LA INSERCION";
    }
}
?>