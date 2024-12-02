// Solicito la edad y los ingresos del usuario y los almaceno en una variable cada uno.
let edad = parseInt(prompt("Ingrese su edad"));
let ingresos = parseFloat(prompt("¿Cuales son sus ingresos mensaules?"));

// Creo una funcion donde internamente se evalua si cumple con las condiciones para tributar o no.
function tributar(edad, ingresos) {
    if (edad > 16 && ingresos >= 1000) return "Usted debe tributar..."
    else return "Usted no cumple con las condiciones para tributar..."
}

// Mostrar lo que retorna la funcion.
alert(tributar(edad, ingresos));