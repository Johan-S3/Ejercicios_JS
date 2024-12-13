// Genero un npumero aleatoro utilizando el metodo random de la libreria math y lo asigno a una variable.
num = Math.floor(Math.random() * 10);

// Cre0 funcion para determinar si es par o impar el npumero
function parImpar(num) {
    if (num % 2 === 0) return `Es par`;
    else return `Es impar`;
}

// Finalmente muestro el resultado.
alert(`El número ${num} es: ${parImpar(num)}`);