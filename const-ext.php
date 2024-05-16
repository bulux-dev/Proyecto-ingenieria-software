<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "inscripcion_estudiante";

$connection = new mysqli($servername,$username,$password,$dbname);

if($connection->error){
    die("Failure".$connection->connect_error);
}else{
    
}
$DPI = mysqli_real_escape_string($connection,$_REQUEST['DPI']);




$stmt = $connection->prepare("
SELECT n.nombre, n.email, n.DPI, n.talla, bp.numero_boleta FROM nsinscrito n
INNER JOIN boleta_pago_n_estudiante bp ON n.DPI = bp.DPI WHERE n.DPI = ?
");




$stmt->bind_param("s", $DPI); // Bind the DPI parameter
$stmt->execute();
$result = $stmt->get_result(); // Get the results from the prepared statement


if(!$result){
    die("Query failed: ".mysqli_error($connection));
}

if(mysqli_num_rows($result)>0){
    while($row = mysqli_fetch_assoc($result)){
        echo "-Nombre: ".$row["nombre"]."<br>"."-Email: ".$row["email"]."<br>"."-DPI: ".$row["DPI"]."<br>"."-Talla:" .$row["talla"]."<br>"."<br>";
    }
}else{
    echo "No hay confirmacion para DPI: ".$DPI;
}


$connection->close();

?>
