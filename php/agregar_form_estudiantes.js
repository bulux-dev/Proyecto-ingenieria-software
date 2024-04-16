function submitForm(){
    fetch('conexion_estudiante.php',{
        method: 'POST',
        body: new  FormData(document.getElementById('formulario_estudiante'))
    })
    .then(response => response.text())
    .then(data => {document.getElementById('result').innerHTML = data;})
    .catch(error => console.error(error))
}