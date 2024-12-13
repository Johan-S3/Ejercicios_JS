// Declaro e asigno a la variable la cantidad de asteriscos que inicialmente seria 1.
let ast = 1; 
// Hago bucle para iterar los espacios en blanco
for (let i = 5; i >= 1; i--) {
    // Muestro por consola cada iteracion imprimiendo primero los espacios segun el indice del bucle luego la cantidad asteriscos y luego la misma cantidad de espacios.
    console.log("  ".repeat(i) + "* ".repeat(ast) + "  ".repeat(i));
    ast = ast + 2; // A la variable que contine los caracteristicos le sumo 2.
}