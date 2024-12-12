// Declaro una variable y le asigno al valor ingresado por teclado
let palabra = prompt("Ingrese una palabra:"); 
// Si el valor de la varaible es nula o vacia...
if (palabra !== "" && palabra != null) {
    palabra = palabra.trim(); //Utilizo el metodo trim para eliminar espacios al final de la palabra si los llega a tener.

    // Creo un bucle para recorrer toda la palabra y mostrar una a una las letras al reves.
    for (let i = palabra.length - 1; i >= 0; i--) {
        console.log(palabra[i]);
    }
}else alert("Valor ingresado no valido...")