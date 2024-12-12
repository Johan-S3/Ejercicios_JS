// Declaro e asigno a variables el valor ingresado por teclado y un array vacio donde se almacenaran los número impares desde 1 hasta el número ingresado.
let numero = parseInt(prompt("Ingrese un número entreo positivo: "));
let array = [];
if (numero > 0) { //Si el número es positivo...
    // Hce iteracion y valida si el número es impra y lo agrega al array
    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            array.push(i);
        }
    }
    // Por ultimo muestra el array
    alert(array);
}else alert("El valor ingresado no es valido.");