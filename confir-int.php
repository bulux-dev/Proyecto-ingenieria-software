<?php
$servername = "sql113.infinityfree.com";
$username = "if0_36562686";
$password = "Y5miUappmv";
$dbname = "if0_36562686_inscripcion_estudiante";

$connection = new mysqli($servername,$username,$password,$dbname);

if($connection->error){
    die("Failure".$connection->connect_error);
}else{
    
}
$carnet = mysqli_real_escape_string($connection,$_REQUEST["carnet"]);




$stmt = $connection->prepare("
SELECT n.nombre, n.email, n.carnet, n.talla, bp.numero_boleta FROM inscripcion_student_active n
INNER JOIN boleta_pago_estudiante bp ON n.carnet = bp.carnet WHERE n.carnet = ?
");




$stmt->bind_param("s", $carnet); 
$stmt->execute();
$result = $stmt->get_result(); 


if(!$result){
    die("Query failed: ".mysqli_error($connection));
}

if(mysqli_num_rows($result)>0){
    while($row = mysqli_fetch_assoc($result)){
        echo "-Nombre: ".$row["nombre"]."<br>"."-Email: ".$row["email"]."<br>"."-Carnet: ".$row["carnet"]."<br>"."-Talla:" .$row["talla"]."<br>"."<br>";
    }
}else{
    echo "No hay confirmacion para carnet: ".$carnet;
}


$connection->close();

?>
