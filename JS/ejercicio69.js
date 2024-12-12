// Declaro variable donde se almacenará el número ingresado.
let numero = parseInt(prompt("Ingrese un número entero positivo:"));

// Valido que el numero no sea negativa o no sea un número
if(numero < 1 || isNaN(numero)) alert("El valor ingresado no es valido");
else {
    // Creo un bucle para iterar la cantidad de veces el número ingresado.
    for (let i = 1; i <= numero; i++) {
        // Muestro por consola un asterisco repetido la cantidad de veces la posicion del bucle.
        console.log("* ".repeat(i));
    }
}