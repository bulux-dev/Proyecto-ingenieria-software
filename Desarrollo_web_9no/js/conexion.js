function agregar() {
    var codigo = document.getElementById("codigo_carrera").value;
    var anio = document.getElementById("year_carrera").value;
    var numero = document.getElementById("alumno_codigo").value;
    var nombre = document.getElementById("Student_name").value;
    var fecha = document.getElementById("fecha").value;
    var email = document.getElementById("email").value;
}

const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'desarrollo'
})

connection.connect((err) => {
    if (err) throw err;
    console.log("Conexion exitosa");

})

const insert = "insert into registroEstuantes (codigo_carrera,year_carrera,alumno_codigo,Student_name,fecha,email) values (null,codigo, anio, numeros,fecha,email')"
connection.query(insert, (err, results) => {
    if (err) throw err;
    alert("datos guardados correctamente. ")
})

connection.query('select * from registroEstudiantes', (err, rows) => {
    if (err) throw err
    Console.LOG('Datos continuacion')
    console.log(rows)
})
connection.end()



/*


function agregar(){
    var carnet1 = document.getElementById("carnet").value;
    var nombre1 = document.getElementById("nombre").value;
    var fnacimiento1 = document.getElementById("fnacimiento").value;
    var correo1 = document.getElementById("correo").value;


*/