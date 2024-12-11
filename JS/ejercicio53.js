// Creo un bucle para que se itere 5 veces.
for (let i = 0; i < 5; i++) {
    // Solicito el nombre de producto y el valor del mismo.
    let producto = prompt("Ingrese el nombre del producto: ");
    let valorPro = parseFloat(prompt("Ingrese el valor del producto: "));
    let porcIva = 0.19;
    
    // Si el valor ingresado no es un número entonces no es valido
    if (isNaN(valorPro)) alert("Dato ingresado no valido...");
    else alert(`Producto: ${producto} \nIVA: $${calcularIva(valorPro, porcIva)} \nSubtotal: ${valorPro} \nTOTAL: $${valorPro + calcularIva(valorPro, porcIva)}`);
}

// Creo funcion donde se calcula el iva.
function calcularIva(valorPro, porcIva) {
    let iva = valorPro * porcIva;
    return iva;
}