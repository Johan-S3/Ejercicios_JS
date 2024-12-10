// Solicito la edad actual de la madre y del hijo.
let edadM = parseInt(prompt("Ingrese la edad de la madre: "));
let edadH = parseInt(prompt("Ingrese la edad del hijo: "));

// Creo función donde se calcula la edad de la madre cuando su hijo nació.
function calEdadM(edadM, edadH) {
    let edad = edadM - edadH;
    return edad
}

// Manejo exepciones para validar que los valores ingresados sean números.
try {
    if (isNaN(edadM) || isNaN(edadH)) throw new Error("La edad ingresada en algún campo no es valida");
    else alert(`La edad de la madre cuando su hijo nació era: \n${calEdadM(edadM, edadH)} años.`);
} catch (error) {
    alert(error);
}