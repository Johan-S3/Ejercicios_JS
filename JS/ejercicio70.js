// Solicito al usuario ingresar una contraseña y almaceno el valor ingresado en una varaible.
let contra = prompt("Ingrese un contraseña: ");

// Si la contraseña ingresada no está vacia...
if (contra != "") {
    // Muestro mensaje de guardado.
    alert("Contraseña guardada exitosamente.")

    // Creo bucle infinito
    while (true) {
        // Solicito al usuario ingresar la contraseña de nuevo aseignadola a otra variable
        let reContra = prompt("Ingrese su contraseña: ");
        // Si el valor de las dos variables es igual entonces mostrar mensaje de confirmación y romper el bucle.
        if (reContra === contra) {
            alert("Contraseña correcta.")
            break;
        }else alert("Contraseña INCORRECTA.\nIntentalo nuevamente...") //Si no es asi, mostrar mensaje de error.
    }
}else alert("Valor ingresado no valido.")

