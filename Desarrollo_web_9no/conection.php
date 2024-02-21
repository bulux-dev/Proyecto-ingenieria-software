<?php



$servidor = "localhost:3306";
$usuario = "root";
$contraseña = "";
$baseDatos = "desarrollo";

$conexion = mysqli_connect($servidor,$usuario,$contraseña,$baseDatos) or die (mysqli_error($conexion));



insertar($conexion);

function insertar($conexion){
    $nombre = $_POST['nombre'];

##poner los seis
    $consulta = "INSERT INTO humano(nombre) VALUES ('$nombre');";
    #inserta las que se pusieorn en el metodo post
    
##poner la consulta que va a tirar el php 

    mysqli_query($conexion,$consulta);
    echo '<h2 style="color:green">Datos correctos </h2>';

    mysqli_close($conexion);

}

?>

