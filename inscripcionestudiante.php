<?php
$servername = "sql113.infinityfree.com";
$username = "if0_36562686";
$password = "Y5miUappmv";
$dbname = "if0_36562686_inscripcion_estudiante";

$connection = new mysqli($servername,$username,$password,$dbname);

if($connection->connect_error){
  die("Failure".$connection->connect_error);
}else{
  echo "Success";
}

$stmt = mysqli_prepare($connection, "INSERT INTO inscripcion_student_active(nombre, email, carnet, talla) VALUES (?,?,?,?)");

if (!$stmt) {
  echo "Error creating prepared statement: " . $connection->error;
  exit();
}

$nombre = mysqli_real_escape_string($connection, $_REQUEST['nombre']);
$email = mysqli_real_escape_string($connection, $_REQUEST['email']);
$carnet = mysqli_real_escape_string($connection, $_REQUEST['carnet']);
$talla = mysqli_real_escape_string($connection, $_REQUEST['talla']);

if (!mysqli_stmt_bind_param($stmt, "ssss", $nombre, $email, $carnet, $talla)) {
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
