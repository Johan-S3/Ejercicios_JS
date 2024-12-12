// Declaro e asigno a variables el valor del nombre del usuario y su edad.
let nombre = prompt("Ingrese el nombre del usuario: ");
let edad = parseInt(prompt(`Ingrese la edad de ${nombre}`));
// Manejo exepciones para validar que el valor ingresado en el campo de edad sea un número si no es asi entra al bucle.
try {
    if(isNaN(edad)) throw new Error("El valor ingresado no es valido.");
    else{
        // Creo bucle para iterar la cantidad de veces la edad del usuario.
        for (let i = 1; i <= edad; i++) {
            alert(`${nombre.toUpperCase()} ya cumplió ${i} años...`);
        }
    }
} catch (error) {
    alert(error);
}