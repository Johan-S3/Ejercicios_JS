let palabra; // Declaro variable que se usará dentro de bucle.
// Creo bucle infinito.
while (true) {
    // Solicito ingresar una palabra y esto lo asigno a una variable.
    palabra = prompt("Escriba (Salir) para terminar").toLowerCase();
    // Si la palabra ingresada corresponde. Entonces rompe el bucle.
    if ((palabra === "salir")){
        alert("Se salió del programa.");
        break;      
    }  // Si no, muestra la palabra ingresada y hace otra iteración más.
    else alert(palabra);
}