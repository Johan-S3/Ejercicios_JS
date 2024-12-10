// Solicito que se ingrese el nombre del cliente, la cantidad de metros cuadrados que necesita pintar y cuanto se cobra por pintura de metro cuadrado.
nombreClientev = prompt("Ingrese el nombre del cliente: ");
cantM2 = parseInt(prompt(`¿Cuantos metros cuadrados requiere pintar ${nombreClientev}?`));
valorM2 = parseFloat(prompt("Cual es el costo de pintura por m^2?"));

// Creo función para calcular los costros recibiendo como parametros la cant de metros cuadrados y el valor de pintada por metro cuadrado.
function calCosto(cantM2, valorM2) {
    let resultado = cantM2 * valorM2;
    return resultado;
}

// Manejo exepciones para validar que los datos ingresados sean números.
try {
    if(isNaN(cantM2) || isNaN(valorM2)) throw new Error("Algun  valor ingresado no es valido.");
    else alert(`El valor total por pinta ${cantM2} m^2 es: \n$${calCosto(cantM2, valorM2)}`)
} catch (error) {
    alert(error);
}