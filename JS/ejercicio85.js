// Declaro variable e asigno array vacio que es odnde se almacenaran los números ingresados.
let numeros = [];
let suma = 0; //Declaro e inicilizo varaible en 0 que sirve para que valla acumulando el valor de la suma de los números.
let cantNumeros = parseInt(prompt("¿Cuantos números va a ingresar?")); // Declaro e asigno a varaible que contiene la cantidad de números a ingresar.

// Creo bucle para preguntar por número las veces que corresponde.
for (let i = 0; i < cantNumeros; i++) {
    let num = parseInt(prompt("Ingrese un número: "));
    numeros.push(num);
}

// Creo función para sumar números positivos de array 
function sumarPositivos(numeros) {
    // Creo bucle para validar y adicionar y asignar el valor de la variable.
    for (let e = 0; e < numeros.length ; e++) {
        if(numeros[e] > 0) suma += numeros[e];
    }
    return suma;
}

// Por ultimo muestro la suma de los números positivos.
alert(`La suma de los números positivos es: ${sumarPositivos(numeros)}`);