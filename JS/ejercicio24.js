// Creo la expresión regular asignadola en una variable.
let regEx = /^[0-9-e]+(\.[0-9-e]+)$/;
// ^.....$ Esto significa que debe empezar y terminar con la expresion.
// [0-9-e]+ Esto significa que puede ser cualquier caracter que esté entre 0 y 9, el signo menos "-" y la letra e; y que se cumple 1 o mas veces.
// (\.[0-9-e]+) ESto signifca que está dentro de un grupo que no se puede repetir es decir no puede haber mas de 1 punto "." y el resto es lo mismo a la linea de arriba.

// Solicito ingresar un número.
let numero = prompt("Ingrese un número flotante \n(por ejemplo -2.3e-1, -3e2, 23, 3.2).")

// Pruebo si hay coincidencia en la cadena ingresada con la expresion regular.
if (regEx.test(numero)) {
    alert("El número ingresado es VALIDO.")
}else{
    alert("El número ingresado es NO VALIDO.")
}