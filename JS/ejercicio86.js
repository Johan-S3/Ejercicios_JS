// Solicitar al usuario que ingrese los dos números
let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));


function sumar(num1, num2) {
    // Sumar los dos números
    let suma = num1 + num2;
    return suma.toString(2); // ToStrign(2) lo que hace es convertir la suma a binario y devolverlo como cadena
}


// Calcular la suma en binario y mostrar el resultado.
alert(`La suma de ${numero1} y ${numero2} en binario es: ${sumar(numero1, numero2)}`);