// Declaro array con números dentro de el
let numeros = [1, 56, 45, 256, 13, 15, 26, 37];
// Declaro e inicilizo en 0 varaible donde se almacenara el número mayor del arreglo.
let mayor = 0;
// Creo un bucl e para iterar la cantidad de veces la longitud del array.
for (let i = 0; i < numeros.length; i++) {
    // Si en esa iteracion el número del array es mayor que la varaible mayor se le asigna a esa varaible el npumero de esa posicion;
    if(numeros[i] > mayor) mayor = numeros[i];
}

// Muestro el número mayor.
alert("El numero mayor es: " + mayor);