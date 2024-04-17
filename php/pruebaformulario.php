<?php
  $server = 'localhost';
  $user = 'root';

  // **Use environment variables or a configuration file to store the password**
  $password = ''; // Assuming you have a DB_PASSWORD environment variable set

  $dbname = 'prueba_proyecto';

  $connection = mysqli_connect($server, $user, $password, $dbname);

  if (!$connection) {
      die("Connection failed: " . mysqli_connect_error());
  }

  echo 'conexion exitosa';

  // **Prepare the query to prevent SQL injection**
  $stmt = mysqli_prepare($connection, "INSERT INTO formulario_estudiante(nombre, email, carnet, talla) VALUES (?, ?, ?, ?)");

  // **Bind parameters to the prepared statement**
  $stmt->bind_param("ssss", $nombre, $email, $carnet, $talla);

  // **Sanitize user input before assigning to variables**
  $nombre = mysqli_real_escape_string($connection, $_REQUEST['nombre']);
  $email = mysqli_real_escape_string($connection, $_REQUEST['email']);
  $carnet = mysqli_real_escape_string($connection, $_REQUEST['carnet_universidad']);
  $talla = mysqli_real_escape_string($connection, $_REQUEST['menu_talla']);

  $stmt->execute();

  // Check if query execution was successful
  if ($stmt->affected_rows > 0) {
      echo "Alumno agregado";
  } else {
      echo "Error adding student";
  }

  $stmt->close();
  mysqli_close($connection);
?>
