// Declaro e inicilizo las variables en el valor solicitado.
let distancia = 2;
let tiempo = 5;

// Creo la función donde se calcula la velocidad y donde convierto de Km/m a m/s.
function velocidad(d, t) {
    let resultado = d*1000 / t/60;
    return resultado;
}

// Mostrar el resultado final.
alert(`La velovidad del proyactil es: ${velocidad(distancia, tiempo)} m/s`)