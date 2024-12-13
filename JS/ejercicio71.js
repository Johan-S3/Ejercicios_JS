//Declaro e asigno a variable el número ingresado por teclado.
let numero = parseInt(prompt("Ingrese el número: "));

// Uso condicinales para validar lo retornado de la funcion que se llama enviando como argumento el número ingresado.
if (esPrimo(numero)) alert("El número ES PRIMO.");
else alert("El número NO es primo");

// Creo función donde se valida si el número es primo
function esPrimo(num) {
    // Creo bucle para recorrer desde el 2 hasta la mitad del número ingresado.
    for (let i = 2; i < num / 2 ; i++) { //Si el residuo de dividir el número ingresado por el número de la iteracion es 0 entonces ya no es primo, porque ya hay mas de dos números que al ser divisores de el el residuo es 0.
        if (num % i === 0) return false;
    }
    // Retorno true si al recorrer nunca cumple la condición.
    return true;
}