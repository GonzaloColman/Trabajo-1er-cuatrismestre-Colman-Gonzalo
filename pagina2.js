const esCorreoValido = (correo) => {
    const correoRegex = new RegExp(/^[A-Za-z0-9_!#$%&"*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    return correoRegex.test(correo)
}
// validacion al instante si hay error
const validarNombre = () => {
    const nombreInput = document.getElementById("nombre");
    if (nombreInput.value.trim() == "") {
        // error de espacio en blanco
        document.getElementById("error-nombre").innerHTML = "El nombre es requerido";
        nombreInput.classList.add("is-invalid");
    } else if (nombreInput.value.trim().length < 5) {
        // error de escritura minima
        document.getElementById("error-nombre").innerHTML = "El nombre debe tener al menos 5 caracteres";
        nombreInput.classList.add("is-invalid");
    } else {
        document.getElementById("error-nombre").innerHTML = "";
        nombreInput.classList.remove("is-invalid");
    }
}

const enviarFormulario = () => {
    let formularioCorrecto = true;
    const nombreInput = document.getElementById("nombre");
    if (nombreInput.value.trim() == "") {
        //error de escritura
        document.getElementById("error-nombre").innerHTML = "el nombre es requerido";
        let formularioCorrecto = false;
    }
    else if (nombreInput.value.trim().length < 5) {
        // error de cantidad de letra 
        document.getElementById("error-nombre").innerHTML = "el nombre debe tener 5 caracteres";

    }
    else {
        document.getElementById("error-nombre").innerHTML = "";
    }

    const correoInput = document.getElementById("correo");
    if (correoInput.value.trim() == "") {
        // error de espacio en blanco 
        document.getElementById("error-correo").innerHTML = "El correo es requerido";
        formularioCorrecto = false;
    } else if (!esCorreoValido(correoInput.value)) {
        // error al escribir el correo
        document.getElementById("error-correo").innerHTML = "Direccion de correo incorrecta";
        formularioCorrecto = false;
    } else {
        document.getElementById("error-correo").innerHTML = "";
    }
    const notificaciones = document.getElementById("notificaciones");
    if (formularioCorrecto) {
        console.log("Nombre:", nombreInput.value);
        console.log("Email:", emailInput.value);
        console.log("Recibe Notificaciones:", notificaciones.checked);
    } else {
        console.log("Formulario incorrecto")
    }
}
const inicializarjs = () => {
    const button = document.getElementById("enviar");
    button.addEventListener("click", function (e) {
        enviarFormulario();
    })

    document.getElementById("nombre").addEventListener("blur", function (e) {
        validarNombre();
    })

}
//inicia el js 
window.addEventListener("load", inicializarjs);