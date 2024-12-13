// Declaro e asigno a una variable el valor ingresado por teclado.
let cadena = prompt("Ingrese una palabra o frase: ");
let nuevaCadena = ""; // Declaro e asigno a una araible una cadena vacia que es donde se almacenara la cadena sin vocales.
function sinVocales(cadena) { 
    cadena = cadena.trim();
    // Creo un for para iterar en cada indice de la cadena
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] == "a" || cadena[i] == "e" || cadena[i] == "i" || cadena[i] == "o" || cadena[i] == "u") {
            continue;
            // Si no es vocal ese indice del parque procedemmos a seguir realizando las medadas correspondiente.
        }else nuevaCadena += cadena[i];
    }
    return nuevaCadena;
}

// Mostrar lo que retorna una función eviando como argumento la cadena de texto recian nacida.
alert(sinVocales(cadena));