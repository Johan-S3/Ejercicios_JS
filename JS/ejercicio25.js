// Solicito el valor inicial del medicamento.
let valorMedic = parseFloat(prompt("Ingrese el valor del medicamento:"));

// Creo funcion donde se calcula el descuento del medicamento de acuerdo al porcentaje.
let descuento = function (valorMedic) {
    let desc = 0.10 * valorMedic;
    return desc;    
}

// Creo función donde se calcula el valor final del medicamento de acuerdo al descuento realizado en la funcion anterior.
function calcValF(valorMedic ,descuento) {
    let valorFinal = valorMedic - descuento;
    return valorFinal;
}

// Mostrar el descuento y el precio final del medicamento.
alert(`El descuesto sobre el medicamento es: $${descuento(valorMedic)} \ny el valor final es: $${calcValF(valorMedic ,descuento(valorMedic))}`);