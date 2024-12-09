// Solicito ingresar el valor del radio de la esfera.
let radio = parseFloat(prompt("Ingrese el radio de la esfera."));

// Creo la función donde se calcula el volumen de la esfera donde se trae como parametro el radio ingresado previamente.
function volumenEsf(radio) {
    let resultado = (4/3) * Math.PI * Math.pow(radio, 3);
    return resultado;
}
// Manejo exepciones para validar que el dato ingredado sea un número.
try {
    if (isNaN(radio)) throw new Error("El valor ingresado no es un numero...");
    else{
        // Muestro el resultado del volumen de la esfera.
        alert(`El volumen de la esfera es: ${volumenEsf(radio)} m^3`);
    }
} catch (error) {
    alert(error);
}