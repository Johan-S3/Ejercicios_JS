// Solicito el nombre y el año de nacimiento del usuario.
let nombre = prompt("Ingrese el nombre del usuario:");
let anioNacim = parseInt(prompt(`Ingrese el año en el que nació ${nombre}: `));

// Creo una función donde se calcule la edad usando la Date para determinar la fecha actual, obtener el año de ella y restarle el año de nacimiento ingresado por el usuario.
function calcularEdad(anioNacim) {
    let fechaActual = new Date();
    edad =  fechaActual.getFullYear() - anioNacim;
    return edad;
}

// Manejo exepciones para validar que los datos ingresados sean números.
try {
    if (isNaN(anioNacim)) throw new Error("El año de nacimiento no es valido...");
    else alert (`${nombre} tiene ${calcularEdad(anioNacim)} años.`)
} catch (error) {
    alert(error);
}