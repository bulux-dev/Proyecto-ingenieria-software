<?php

// Database connection details (replace with your actual details)
$host = "localhost";
$dbname = "estudiantes_inscritos_confirmados";
$username = "postgres";
$password = "admin";

// Get form data
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$carnet_universidad = $_POST["carnet_universidad"];
$talla_playera = $_POST["menu_talla"];

try {
  // Connect to the database
  $conn = new PDO("pgsql:host=$host, dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // Prepare SQL statement
  $sql = "INSERT INTO estudiantes_inscritos (nombre, email, carnet_universidad, talla_playera) 
          VALUES (:nombre, :email, :carnet_universidad, :talla_playera)";
  $stmt = $conn->prepare($sql);

  // Bind parameters to prevent SQL injection
  $stmt->bindParam(":nombre", $nombre);
  $stmt->bindParam(":email", $email);
  $stmt->bindParam(":carnet_universidad", $carnet_universidad);
  $stmt->bindParam(":talla_playera", $talla_playera);

  // Execute the statement
  $stmt->execute();

  echo "Estudiante inscrito exitosamente!";
} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}

$conn = null; // Close connection
?>
