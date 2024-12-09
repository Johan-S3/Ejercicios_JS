// Solicito ingresar las medidades del alto, largo y ancho del elipsoide.
let alto = parseFloat(prompt("Ingrese el medida del alto del elipsoide:"));
let largo = parseFloat(prompt("Ingrese el medida del largo del elipsoide:"));
let ancho = parseFloat(prompt("Ingrese el medida del ancho del elipsoide:"));

// Creo función donde se calcula el volumen.
function volumenElip(a, b, c) {
    let resultado = (4/3) * Math.PI * a * b * c;
    return resultado;
}
// Manejo exepciones para validar que los valores ingresados sean números
try {
    if(isNaN(alto) || isNaN(largo) || isNaN(ancho)) throw new Error("Algún dato ingresado no es número.");
    else alert(`El volumen del elipsoide es: ${volumenElip(alto, largo, ancho)} m^3`);
} catch (error) {
    alert(error);
}