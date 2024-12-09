
// Derclaro e inicilizo la variable notas en 0 que es donde se iran acumulando las notas ingresadas por el usuario.
let notas = 0;
// Declaro e inicilizo la variable cont que es lo que nos ayuda a ponerle limite al buble, haciendo un incremento unario dentro de el.
let cont = 1;
// Creo bucle para solicitar las notas e ir acumulandolas.
while (cont <= 4) {
    let nota = parseFloat(prompt(`Ingrese la nota del examen ${cont} (1-5)`));
    if (nota > 0 && nota <= 5){ //Si la elk valor ingresado es mayor a 0 y menor o igual a 5 entonces...
        notas += nota; //Se acumula la nota en la variable notas...
        cont++; //Y se hace un post-incremento unario a la variable cont.
    } 
    else{ //Si no mostrar alerta de que el valor ingresado no es valido.
        alert("El valor ingresado no es valido...")
    }
}

// Creo la función donde se calcula el promedio de las notas.
function promedio(notas) {
    resultado = notas / 4;
    return resultado;
}

// Por ultimo muestro el resultado del calculo del promedio.
alert(`El promedio final del estudiante es ${promedio(notas)}`)