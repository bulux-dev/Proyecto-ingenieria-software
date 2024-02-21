<?php
require_once('../bo/conexion.php');

class devuelveEmpleados extends conexion {

    public function __construct() {
        parent::__construct();
    }

    public function get_empleados() {
        $resultado = $this->conexion_db->query('SELECT * FROM estudiantes');
        $empleados = $resultado->fetch_all(MYSQLI_ASSOC);
        return $empleados;
    }

    public function insert_empleados($codigo,$nombre,$estado){
        $query = 'INSERT INTO estudiantes (Codigo, Nombre, Estado) VALUES ("' . $codigo . '", "' . $nombre . '", "' . $estado . '")';

        $result = $this->conexion_db->query($query);
        return $result;

    }
}
?>
