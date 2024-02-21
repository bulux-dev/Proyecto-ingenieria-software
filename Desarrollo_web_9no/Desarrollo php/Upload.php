<html>
<body>
<?php
$codigo=$_POST['CODE']; 
$nombre=$_POST['NAME']; 
$status=$_POST['STATUS']; 

$link = mysqli_connect("localhost", "root","","mysql");   
 
  if (mysqli_connect_errno()) 
       {  echo "Error al conectar : " . mysqli_connect_error(); }    
   
  else {echo "Conexion Ok  \n";}
     $sql = "INSERT INTO ta (CODE,NAME,STATUS) VALUES ($codigo, '$nombre', '$status')";
     echo $sql;
     echo "\n";
     $result = mysqli_query($link,$sql);
     mysqli_close($link);
     echo "Datos grabados correctamente.\n";
?>
<div align="center"><a href="ABCLista.php">Visualizar lista de personas</a></div>

</body>
</html>