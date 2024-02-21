
<?php
require_once('../dao/devuelveEmpleados.php');
$empleados = new devuelveEmpleados();
$array_empleados = $empleados->get_empleados();


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Empleados</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
 
</head>
<body>

<div class="container">
    <div class="row">
        <div class="col-md-4 mx-auto">
            
<form action="ListaDatos.php" method="post">
    <h1>Ingreso de datos</h1>
<input class="form-control" type="text" placeholder="Codigo" aria-label="default input example" name="codigo">
<br>
<input class="form-control" type="text" placeholder="Nombre input" aria-label="default input example" name="nombre">
<br>
<select class="form-select" aria-label="Estado" name="estado">
  <option selected>Selecciona una opcion </option>
  <option value="Activo">Activo</option>
  <option value="Inactivo">Inactivo</option>

</select>
<br>
<input type="submit" value="Insertar">

</form>



<div class="muestra">
    <h1>Lista de usuarios</h1>
    <table class="table table-hover">
        <tr>
            <th>ID</th>
            <th>Codigo</th>
            <th>Nombre</th>
            <th>Estado</th>
        </tr>

        <?php foreach ($array_empleados as $elemento): ?>
        <tr>
            <td><?php echo $elemento['id']; ?></td>
            <td><?php echo $elemento['Codigo']; ?></td>
            <td><?php echo $elemento['Nombre']; ?></td>
            <td><?php echo $elemento['Estado']; ?></td>
        </tr>
        <?php endforeach; ?>
    </table>
    
    </div>
</div>
</div>
        </div>

    
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
  
</body>
</html>
