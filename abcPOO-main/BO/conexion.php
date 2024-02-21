<?php
//aqui se llama a la conexion del archivo config
include("config.php");

//se crea una clase para establecer la conexion
class conexion{

    protected $conexion_db;

    public function __construct(){

        $this->conexion_db = new mysqli(BD_HOST,BD_USUARIO,BD_CONTRASEÑA,BD_NOMBRE);

        if ($this->conexion_db->connect_errno){
            echo"ERROR EN LA CONEXION";
            return;
        }

        $this->conexion_db->set_charset(BD_CHARSET);

    }

}

?>