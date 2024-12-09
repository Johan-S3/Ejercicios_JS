// Solicito ingresar el radio y la altura del cilindro.
let radio = parseFloat(prompt("Ingrese el radio del cilindro:"));
let altura = parseFloat(prompt("Ingrese la altura del cilindro:"));

// Creo función donde se calcula el area del cilindro
function areaCil(r, h) {
    let resultado = (2 * Math.PI * r * h) + (2 * Math.PI * Math.pow(r, 2)) ;
    return resultado;
}

// Creo función donde se calcula el volumen del cilindro
function volumenCil(r, h) {
    let resultado = Math.PI * Math.pow(r, 2) * h;
    return resultado;
}
// Manejo exepciones para validar que los datos ingresados sean numeros.
try {
    if(isNaN(radio) || isNaN(altura)) throw new Error("Algún dato ingresado no es un número.");
    else{
        // Si es asi entonces mostrar el resultado del area y volumen del cilindro.
        alert(`El area del cilindro es: ${areaCil(radio, altura)} m^2`);
        alert(`El volumen del cilindro es: ${volumenCil(radio, altura)} m^3`);
    }
} catch (error) {
    alert(error);
}