// Solicito ingresar el valor de x1, x2, y1, y2.
let x1 = parseInt(prompt("Ingrese el valor de X1: "));
let x2 = parseInt(prompt("Ingrese el valor de X2: "));
let y1 = parseInt(prompt("Ingrese el valor de Y1: "));
let y2 = parseInt(prompt("Ingrese el valor de Y2: "));

// Creo la función donde se calcula la distancia.
function calcularDistan(x1, x2, y1, y2) {
    let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distancia;
}

// Manejo exepcilnes para validar que los valores ingresados inicialmente sean números.
try {
    if (isNaN(x1) || isNaN(x2) || isNaN(y1) || isNaN(y2)) throw new Error("Algún valor ingresado no es un número.");
    else alert(`La distancia entro los dos puntos es: ${calcularDistan(x1, x2, y1, y2)} m`);
} catch (error) {
    alert(error);
}