function agregarGuiones(campo1) {
// Obtener el valor actual del campo
    const valorActual1 = campo1.value;
// Reemplazar cada cuatro, dos y cinco dígitos con un guion
    const valorConGuionesCarnet = valorActual1.replace(/(\d{4})(\d{2})(\d{5})/g, "$1-$2-$3");
    // Actualizar el valor del campo
    campo1.value = valorConGuiones;
    }
    