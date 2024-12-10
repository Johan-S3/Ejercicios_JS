// Solicito ingresar una frase.
let frase = prompt("Ingrese una frase que lo identifque como programador de software:");

// Creo función donde se invirte la frase ingresada.
function invertirFrase(frase) {
    let fraseInvertida = ""; //Declaro e asigno a una variable una cadena.
    for (let i = frase.length - 1; i >= 0; i--) { // Creo un bucle for para que tome la ultima posicion de la frase ingresada y valla pasando por cada posicon de atras hacia delante.
        fraseInvertida += frase[i]; // Y lo voy añadiendo a la variable.
    }
    return fraseInvertida;
}

// Manejo exepciones para validar que el usuario halla ingresado al menos una letra o palabra.
try {
    if(frase == "") throw new Error("Debes ingresar al menos una palabra en el campo.");
    else alert(`La frase que ingresaste, investida es: \n${invertirFrase(frase).toLowerCase()}`);
} catch (error) {
    alert(error);
}