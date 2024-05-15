<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "inscripcion_estudiante";

$connection = new mysqli($servername,$username,$password,$dbname);

if($connection->connect_error){
  die("Failure".$connection->connect_error);
}else{
  echo "Success";
}

$stmt = mysqli_prepare($connection, "INSERT INTO nsinscrito(nombre, email, DPI, talla) VALUES (?,?,?,?)");

if (!$stmt) {
  echo "Error creating prepared statement: " . $connection->error;
  exit();
}

$nombre = mysqli_real_escape_string($connection, $_REQUEST['nombre']);
$email = mysqli_real_escape_string($connection, $_REQUEST['email']);
$DPI = mysqli_real_escape_string($connection, $_REQUEST['DPI']);
$talla = mysqli_real_escape_string($connection, $_REQUEST['talla']);

if (!mysqli_stmt_bind_param($stmt, "ssss", $nombre, $email, $DPI, $talla)) {
  echo "Error binding parameters: " . $connection->error;
  exit();
}

$stmt->execute();
if($stmt->affected_rows>0){
  echo "Alumno agregado";
}else{
  echo "Error";
}

$stmt->close();
$connection->close();

?>
