// Declaro y asigno los valores correspondietes a las variables donde se almacena el peso por cada caja y la cantidad de cajas que trasnporta el camión.
let pesoCaja = 748;
let cantCajas = 25;

// Creo funcion donde se calcula el pesos total de la carga recibiendo como paramtros los valores declarados inicialmente.
function calcPeso(pesoCaja, cantCajas) {
    let resultado = pesoCaja * cantCajas;
    return resultado;
}

// Muestro el peso totoal llamando la funcion enviando como argumentos los valores declarados inicialmente.
alert(`El camión lleva de cargar ${calcPeso(pesoCaja, cantCajas)} Kg`)