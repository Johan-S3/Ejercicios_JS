// Solicito al usuario ingresar el radio de la circunferencia.
let radio = parseFloat(prompt("Ingrese el radio de la circunferencia"));

// Creo función donde se calcula la logitud de acuerdo al valor recibido como parametro(radio.)
function longitudCirc(radio) {
    let resultado = 2 * Math.PI * radio;
    return resultado;
}

// Creo función donde se calcula el area de acuerdo al valor recibido como parametro(radio.)
function areaCirc(radio) {
    let resultado = Math.PI * Math.pow(radio, 2);
    return resultado;
}
// Menejo exepciones para validar que el dato ingresado sea un numero
try {
    if (isNaN(radio)) {
        throw new Error("El el valor ingresado no es valido.");
    }
    else{
        // Si es así entonces muestro la longitud y el area de la circunferencia respectivamente.
        alert(`La longitud de la circunferencia es: ${longitudCirc(radio)} cm`);
        alert(`El area de la circunferencia es: ${areaCirc(radio)} cm^2`);
    }
} catch (error) {
    alert(error);
}