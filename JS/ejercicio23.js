// Solicito ingresar la valocidad del automovil en Km/h
let velocidad = parseFloat(prompt("Ingrese la velocidad del automovil en Km/h:"));

// Creo una función donde se hace la conversion.
function conversion(velocidad) {
    let resultado = velocidad * 0.2778;
    return resultado;
}
// Menejo exepciones para validar que el valor ingresado inicialmente sea un número.
try{
    // Si la velocidad es un numero...
    if(!isNaN(velocidad)) alert(`La velocidad de automovil en m/s es: ${conversion(velocidad).toFixed(3)}`); //Utilizo el metodo fixed para mostrar 3 digitos depsues de la coma redondeando to el valor despues de ella.
    // Si no creo un mensaje de error.
    else throw new Error("El valor ingresado no es un número");
} catch (error) {
    // Mostrar el mensaje de error.
    alert(error);
}