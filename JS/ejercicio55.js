// Solicito ingresar el valor del producto y si el usuario tiene membresia o no.
let valorProd = parseFloat(prompt("Ingrese el valor del producto: "));
let Sdescuento = parseInt(prompt("Usted tiene membresia : \n1. Sí \n2. No"));

// Si el usuario tiene membresia...
if (Sdescuento === 1) {
    // Solicito al usuario ingresar el tipo de membresia que tiene
    let membresia = prompt("¿Qué tipo de membresia tiene? (A - B - C) ").toUpperCase();
    // Si el tipo de mebresia es correcto se muestra el valor a pagar llamando la función donde se calcula enviando como argumentos el valor del producto y el tipo membresia.
    if (membresia === "A" || membresia === "B" || membresia === "C") alert(`Valor a pgar: $${descuento(valorProd, membresia)}`);
    else alert("El valor ingresado es incorrecto.")
    // Si el usuario no tiene menbresia se muestra el valor del producto.
}else if (Sdescuento === 2) alert(`Valor a pagar: $${valorProd}`);
else alert("El valor ingresado es incorrecto.");

// Creo función donde se calcula el descuento recibiendo como argumento el valor del producto y el tipo de membresia.
function descuento(valorProd, membresia) {
    let total;
    if(membresia === "A") total = valorProd - (valorProd * 0.1);
    else if(membresia === "B") total = valorProd - (valorProd * 0.15);
    else if(membresia === "C") total = valorProd - (valorProd * 0.20);
    return total;
}