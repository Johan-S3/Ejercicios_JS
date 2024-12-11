// Declaro e inicializo variable total donde se acumulara los pagos recibidos.
let total = 0;
// Cre bucle while
while (true) {
    // Solicito ingresar una opcion.
    let opcion = parseInt(prompt("Ingrese una opción: \n1. Agregar pago \n2. Salir"));
    if (opcion === 1) { // Si opción es igual a 1. Es decir, agregar un pago
        let consumo = parseFloat(prompt("¿De cuanto fue el consumo?")); // Solicito ingresar el valor del consumo
        if (consumo > 130000) consumo = consumo - (consumo*0.15); // Si el valor del consumo es mayor a 130000 se le hace un descuento.
        total += consumo; // Se adiciona y asigna a la variable total el consumo hecho.
    }else if (opcion === 2) { // Si la opcion es 2. Es decir, salir. Etonces se muestra el valor total de los pagos recibidos y se rompe el bucle.
        alert(`El valor total de los pagos recibidos fue de: \n$${total}`);
        break;
    }else alert("Opción ingresada no valida");
}