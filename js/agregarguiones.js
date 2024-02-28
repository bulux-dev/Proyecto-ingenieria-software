function agregarGuiones(campo) {
    // Obtener el valor actual del campo
    const valorActual = campo.value;

    // Reemplazar cada cuatro o cinco dígitos con un guion
    const valorConGuiones = valorActual.replace(/(\d{4})(\d{5})/g, "$1-$2-");

    // Actualizar el valor del campo
    campo.value = valorConGuiones;
  }