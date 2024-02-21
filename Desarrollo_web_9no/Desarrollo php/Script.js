function retraer() {
    var code = document.getElementById("CODE").value;
    var name = document.getElementById("NAME").value;
    var status = document.getElementById("STATUS").value;
    //    alert("Funcino");
}

const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'ta'
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("Conexion exitosa!");
});