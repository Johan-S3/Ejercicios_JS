// Declaro e inicializo en 0 la variable que voy a utilizar para ir acumulando el los gatos y vueltos ingresados.
let dineroTotal = 0;
let opcion; //Declaro variable que se utilizara dentro del bucle;

// Hago un bucle para solicitar los vaores.
do {
    // Solicito al usuario ingresar la opción.
    opcion = parseInt(prompt("Selecciona alguna opcion: \n1. Gastos \n2. Vueltos"));
    if (opcion === 1) { // Si la opcion es 1 (gastos)
        // Pregunta que se compró, la cantidad y el valor unitario de lo que se compró.
        let nombre = prompt("¿Que compraste?");
        let cant = parseInt(prompt(`¿Que cantidad de ${nombre} compraste?`));
        valor = parseFloat(prompt(`Cual fue le valor por unidad de ${nombre}`));
        // Se hace la acumulación de los gastado en esa compra.
        dineroTotal += calGasto(cant, valor);
    }else if(opcion === 2){ // Si la opcion es 2 (Vueltos)
        // Se pregunta cuanto le sobro, se acumula en el dineto total y se rompe el bucle.
        let valor = parseFloat(prompt("¿Cuanto dinero te sobró?"));
        dineroTotal += valor;
        break;
    }
    else{
        alert("Opcion no valida...")
    }
} while (true);

// Mostrar el dinero total
alert(`En total tenias: $${dineroTotal}`);

// Función donde se calculan los gastos por cada compra.
function calGasto(cant, valor) {
    let resultado = cant * valor;
    return resultado;
}