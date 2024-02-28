function agregarGuiones(campo) {
    // Obtener el valor actual del campo
    const valorActual = campo.value;

    // Reemplazar cada cuatro o cinco dígitos con un guion
    const valorConGuiones = valorActual.replace(/(\d{4})(\d{5})/g, "$1-$2-");

    // Actualizar el valor del campo
    campo.value = valorConGuiones;
  }

  function agregarEnCarnet(campo2){
    const valorActualCarnet = campo2.value;
    const valorConGuionesCarnet = valorActualCarnet.replace(/(\d{4})(\d{2})/g, "$1-$2-");
    campo2.value = valorConGuionesCarnet;
  }