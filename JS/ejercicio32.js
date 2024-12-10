// Solicito el valor de los 5 productos.
let producto1 = parseFloat(prompt("Ingrese el valor del primer producto: "));
let producto2 = parseFloat(prompt("Ingrese el valor del segundo producto: "));
let producto3 = parseFloat(prompt("Ingrese el valor del tercer producto: "));
let producto4 = parseFloat(prompt("Ingrese el valor del cuarto producto: "));
let producto5 = parseFloat(prompt("Ingrese el valor del quinto producto: "));

// Creo función para sacar el descuento del 5%
function desc5X100(prod) {
    valorDesc = prod * 0.05;
    valorFin = prod - valorDesc;
    return `El descuento del producto es: $${valorDesc}\nVALOR FINAL: $${valorFin}`;
}

// Creo función para sacar el descuento del 2%
function desc2X100(prod) {
    valorDesc = prod * 0.02;
    valorFin = prod - valorDesc;
    return `El descuento del producto es: $${valorDesc}\nVALOR FINAL: $${valorFin}`;
}

// Manejo exepciones para validar que los datos ingresados efectivamente sean números.
try {
    if (isNaN(producto1) || isNaN(producto2) || isNaN(producto3) || isNaN(producto4) || isNaN(producto5)) throw new Error("Algún dato ingresado no es un número.");
    else{
        alert(desc5X100(producto1));
        alert(desc5X100(producto2));
        alert(desc2X100(producto4));
        alert(desc2X100(producto5));
    }
} catch (error) {
    alert(error); 
}