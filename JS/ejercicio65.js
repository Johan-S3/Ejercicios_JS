// Declaro e asigno a variables el valor ingresado por teclado y un array vacio donde se almacenaran los número desde el número ingresado hasta el 0.
let numero = parseInt(prompt("Ingrese un número entreo positivo: "));
let array = [];
if (numero > 0) { //Si el número es positivo...
    // Hace iteracion y lo agrega al array.
    for (let i = numero; i >= 0; i--) {
            array.push(i);
    }
    // Por ultimo muestra el array
    alert(array);
}else alert("El valor ingresado no es valido.");