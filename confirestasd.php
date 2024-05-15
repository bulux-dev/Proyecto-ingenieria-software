<?php
$servername = "localhost";
$username = "root";
$password = ""; // Replace with your actual password
$dbname = "inscripcion_estudiante";

$connection = new mysqli($servername,$username,$password,$dbname);

if($connection->connect_error){
  die("Connection failed: " . $connection->connect_error);
}

$stmt = mysqli_prepare($connection, "INSERT INTO `boleta_pago_n_estudiante` (`DPI`, `numero_boleta`) VALUES (?, ?)");
if (!$stmt) {
  echo "Error creating prepared statement: " . $connection->error;
  exit();
}

// **Optional: Data Validation**
// Validate $carnet and $boleta here based on your requirements
$carnet = mysqli_real_escape_string($connection, $_REQUEST["DPI"]);

$boleta = intval($_REQUEST['boleta_code']);

if(!mysqli_stmt_bind_param($stmt, "si", $carnet, $boleta)){
  echo "Error binding parameters: ".$connection->error;
  exit();
}

$stmt->execute();
if($stmt->affected_rows > 0){
  echo "Boleta agregada";
}else{
  echo "Error adding boleta. Please check the data."; // More descriptive message
}

$stmt->close();
$connection->close();
?>
