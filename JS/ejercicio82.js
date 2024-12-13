// Declaro variable y asigno el valor ingresado por teclado.
let palabra = prompt("Ingrese la palabra: ")

// Uso condicionales para determinar si el valor de la varaible es nulo o es una cadena de texto vacia.
if (palabra == null || palabra === "") alert("Error: Palabra no valida");
else{
    // Creo función para invertir la palabra.
    function invertir(palabra) {
        palabra = palabra.trim(); //Quito espacios finales a la cadena de texto.
        let palabraInv = ""; // Creo varaible para ir almacenando letra por letra.
        // Cre un bucle para iterar en todos los indices de la palabra
        for (let i = palabra.length - 1; i >= 0.; i--) {
            palabraInv += palabra[i];
        }
        // Retorno la palabra invertida.
        return palabraInv;

    }
    // Muestro el resultado llamando la funcion enviando como argumento la palabra ingresada.
    alert(invertir(palabra));
}