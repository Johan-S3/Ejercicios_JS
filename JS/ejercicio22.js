// Solicito la cnatidad de minutos que duró la llamada.
let minutos = Math.ceil(parseFloat(prompt("¿Cuantos minutos duró la llamada?")));

// Creo una función donde se calcula el valor de la llamada.
function calcularPago(minutos) {
    // Primero calculo el precio por minuto de llamada incluyendo el IVA
    precMin = 355 + (355*0.20);
    // Luego retorno ese resultado multiplicandolo por la cantidad de minutos ingresados por teclado inicialmente.
    return precMin * minutos;
}

try {
    // Muestro la cantidad a pagar.
    if(!isNaN(minutos)) alert(`El valor a pagar por la llamada es de: $${calcularPago(minutos)}`);
    else throw new Error("El valor ingresado no es un número.");
} catch (error) {
    alert(error);
}