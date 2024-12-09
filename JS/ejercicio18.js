// Solicito ingresar 3 numeros que en el caso de la expresion serian a, b y c.
let num1 = parseFloat(prompt("Ingrese el primer numero: "));
let num2 = parseFloat(prompt("Ingrese el segundo numero: "));
let num3 = parseFloat(prompt("Ingrese el tercero numero: "));

// Creo función donde se realiza el calculo de la expresion tomando como parametro los valoes ingresados previamente.
function calculoExp(a, b, c) {
    let resultado = (a + 7 * c) / (b + 2 - a) + 2 * b;
    return resultado;
}
// Manejo exepciones para validar que los valores ingreados sean números.
try {
    if(isNaN(num1) || isNaN(num2) || isNaN(num3)) throw new Error("Alguno de los valores ingresados no es un número.");
    // Muestro el resultado de la expresion llamando la funcion enviando como argumentos los datos ingresados.
    else alert(`El resultado de la expresion es: ${calculoExp(num1, num2, num3)}`);
} catch (error) {
    alert(error);
}
