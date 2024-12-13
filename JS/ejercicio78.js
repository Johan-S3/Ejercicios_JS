// Declaro variable e asigno el valor ingresado por el usuario.
let palabra = prompt("Ingrese una palabra:");

// Creo funcion donde se calcula longitud de la variable.
function longitud(palabra) {
    if(palabra.length < 5) return "Palabra corta";
    else return "Palabra larga";
}

// Valido si el valor ingresdao es una cadena de texto vacia o es nulo.
if (palabra == null || palabra === "") alert("Valor ingresado no valido.");
else alert(`La palabra ingresa es una: \n${longitud(palabra)}`);