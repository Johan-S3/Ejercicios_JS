// Solicito los datos del usuario, como nombre y edad
let nombre = prompt("Ingrese el nomnbre del cliente");
let edad = parseInt(prompt(`Ingrese la edad de ${nombre}`));

// Creo funcion donde se recibe como parametros la edad y el nombre ingresado por el usuario.
function determinarEntrada(edad, nombre) {
    if (edad < 4) alert(`El cliente (${nombre}) entra GRATIS.`);
    else if (edad >= 4 && edad <= 18) alert(`El cliente (${nombre}) debe pagar 5€.`);
    else if(edad > 18) alert(`El cliente (${nombre}) debe pagar 10€.`);
    else alert(`La edad ingresada es invalida...`);
}


determinarEntrada(edad, nombre); //Llamo la funcion donde se determina el valor de la entrada del usuario