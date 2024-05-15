<?php
$servername = "localhost";
$username = "root";
$password = ""; // Replace with your actual password
$dbname = "inscripcion_estudiante";

$connection = new mysqli($servername,$username,$password,$dbname);

if($connection->connect_error){
  die("Failure".$connection->connect_error);
}else{
  echo "Success";
}

// Prepare the select statement with a parameter for carnet
$stmt = mysqli_prepare($connection, "SELECT * FROM inscripcion_student_active WHERE carnet = ?");

if (!$stmt) {
  echo "Error creating prepared statement: " . $connection->error;
  exit();
}

// Get the carnet value (assuming it's from a form or user input)
$carnet_to_find = mysqli_real_escape_string($connection, $_REQUEST['carnet_to_find']); // Replace 'carnet_to_find' with your input name

// Bind the carnet value to the prepared statement
if (!mysqli_stmt_bind_param($stmt, "s", $carnet_to_find)) {
  echo "Error binding parameters: " . $connection->error;
  exit();
}

// Execute the statement
$stmt->execute();

$result = $stmt->get_result(); // Get the result set

// Check if any rows were found
if ($result->num_rows > 0) {
  echo "Found student(s) with carnet " . $carnet_to_find . ":<br>";
  // Loop through each row and display data (replace with your desired output format)
  while($row = $result->fetch_assoc()) {
    echo "Nombre: " . $row["nombre"] . ", Email: " . $row["email"] . ", Talla: " . $row["talla"] . "<br>";
  }
} else {
  echo "No student found with carnet " . $carnet_to_find;
}

$stmt->close();
$result->close(); // Close the result set
$connection->close();

?>
