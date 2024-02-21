
/*CONEXION A BD */
function agregar(){
    /*GUARDAR DATOS*/
    var carnet1 = document.getElementById("carnet").value;
    var nombre1 = document.getElementById("nombre").value;
    var fnacimiento1 = document.getElementById("fnacimiento").value;
    var correo1 = document.getElementById("correo").value;
    
const mysql = require ('mysql')

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'root1234',
        database:'desarrolloweb1'
    }
)


connection.connect((err)=>{
    if(err) throw err
    console.log("conexion exitosa")
})


const insert = "insert into registroEstudiantes (id,carnet,nombre,fechaN,correo) values (null,'carnet1','nombre1','fechaN','correo1')"
connection.query(insert,(err,rows)=>
{
    if(err) throw err
    alert("Datos guardados correctamente. ")
})

connection.query('select * from registroEstudiantes',(err,rows)=>{
    if(err) throw err
    console.log('Datos a contuniacion')
    console.log(rows)
} )



connection.end()
}