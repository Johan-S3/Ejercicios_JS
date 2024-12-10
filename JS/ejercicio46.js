// Declaro y asigno a una variable el valor 0 que es donde se almacenara el número mayor.
let mayor = 0;

// Creo bucle for para recorrer 3 veces es decir, solicitar el número 3 veces.
for (let i = 0; i < 3; i++) {
    let num = parseInt(prompt("Ingrese un número:"))
    // Se evalua si el número ingresado es mayor que el que está en la varaible mayor y si es asi se le asigna a hora a esa variable.
    if(num > mayor) mayor = num;
}
// Muestro cual fue el número mayor ingresado.
alert(`El mayor número ingresado fue el: ${mayor}`);