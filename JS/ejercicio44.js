// Solicito que se ingrese los pesos para realizar la conversión.
let pesos = parseFloat(prompt("Ingrese los pesos: "));

// Declaro variables dolar y euro donde asigno el valor de esas monedas por cada peso.
const dolar = 0.00023;
const euro = 0.00022;

// Creo función donde se hace la conversión de monedas.
function converMoneda(pesos, dolar, euro) {
    let dolares = pesos * dolar;
    let euros = pesos * euro;
    return `${pesos} pesos es igual a: \n$${dolares} dolares \n€${euros} euros`;
}

// Manejo exepciones para validar que se ingrese un valor valido al campo.
try {
    if(isNaN(pesos)) throw new Error("El valor ingresado no es valido");
    else alert(converMoneda(pesos, dolar, euro));
} catch (error) {
    alert(error);
}