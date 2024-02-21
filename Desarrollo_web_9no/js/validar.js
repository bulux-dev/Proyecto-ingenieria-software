function validateEmail() {
    var emailField = document.getElementById("email");
    var validEmail = /^\w+([.-_+]?\w+)*@\miumg.edu.gt/;
    if (validEmail.test(emailField.value)) {
        alert("Correo valido en la organizacion");
        return true;
    } else {
        alert("Correo no perteneciente a la organizacion");
        return false;
    }
}