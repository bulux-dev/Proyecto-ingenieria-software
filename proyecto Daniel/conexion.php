<?php

// Declaración de variables para la conexión
$servidor = "localhost";
$usuario = "root";
$contraseña = "";
$base_de_datos = "form";

// Establecer conexión
$conexion = mysqli_connect($servidor, $usuario, $contraseña, $base_de_datos) or die(mysqli_error($conexion));

// Verificar si la conexión fue exitosa
if ($conexion) {
    echo "¡Conexión exitosa a la base de datos!<br>";
}

// Realizar inserción
insertar($conexion);

// Función de inserción
function insertar($conexion) {
    $codigo = $_POST['codigo_empleado'];
    $nombre = $_POST['nombre_empleado'];
    $estado = $_POST['status'];

    // Realizar el insert
    $consulta = "INSERT INTO estudiantes(Codigo, Nombre, Estado) VALUES ('$codigo', '$nombre', '$estado')";
    
    if (mysqli_query($conexion, $consulta)) {
        echo "¡Inserción exitosa de datos!<br>";
    } else {
        echo "Error en la inserción: " . mysqli_error($conexion) . "<br>";
    }

    mysqli_close($conexion);
}

?>
