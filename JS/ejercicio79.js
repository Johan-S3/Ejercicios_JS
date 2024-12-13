
// Declaro e asigno a una varaible la palabra ingresada;
let palabra = prompt("Ingrese la palabra:");
// Creo función donde se valida la cantidad de silabas en la palabra
function silabas(palabra) {
    // Creo expresion regular y la asigno a una variable.
    regex = /([aeiouáéíóú])(?:[aeiouyáéíóú]?)(?![aeiouáéíóú])/gi;
    // Adigno a otra variable la cantidad de coincidencias de la regex en la palabra ingresada.
    let cantSilabas = palabra.match(regex);
    // Por ultimo muestro el mensaje
    console.log(`La palabra tiene ${cantSilabas.length} silabas`);
    
}

// LLamo a la guncion para que se envie como argumento la palabra ingresada inicialmente.
silabas(palabra);