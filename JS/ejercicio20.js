// Solicito los valoes de a, b y c.
let a = parseInt(prompt("Ingrese el valor de a:"));
let b = parseInt(prompt("Ingrese el valor de b:"));
let c = parseInt(prompt("Ingrese el valor de c:"));

// Creo una función para hallar el discriminante obteninedo como parametros los valores ingresados por teclado.
function HallarDiscriminante(a, b, c) {
    let resultado = Math.pow(b, 2) - 4 * a * c;
    return resultado;
}

// Creo la función donde se hallan las raices reales dependiendo del resultado del discriminante.
function raicesReales(a, b, c) {
    let discriminante = HallarDiscriminante(a, b, c);
    if (discriminante > 0) { //Si el discriminante es positivo...
        let x1 = (-b + Math.sqrt(discriminante)) / 2 * a;
        let x2 = (-b - Math.sqrt(discriminante)) / 2 * a;
        return `Esta ecuacion tiene 2 raices reales: \n Raiz 1: ${x1} \n Raiz 2: ${x2}`
    }else if (discriminante == 0) { //Si el discriminante es igual a 0...
        let x = (-b + Math.sqrt(discriminante)) / 2 * a;
        return `Esta ecuacion tiene 1 raiz real: ${x}`
    }else return `ninguna de las soluciones son raices reales`
}
// Manejo exepciones para validar que los datos ingresados sean numeros.
try {
    if(isNaN(a) || isNaN(b) || isNaN(c)) throw new Error("Algún dato ingresado no es un número.");
    else alert(raicesReales(a, b, c));
} catch (error) {
    alert(error);
}


