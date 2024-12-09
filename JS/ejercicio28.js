// Solicito ingresar el nombre del empleado, la cantidad de horas trabajadas y el valor de la hora trabajada.
let nombre = prompt("Ingrese el nombre del empleado:");
let horasTrab = parseInt(prompt(`¿cuantas horas trabajó ${nombre}?`));
let pagoHora = parseFloat(prompt("¿Que valor tiene la hora de trabajo?"));

// Cre la función donde se calcula el sueldo del empleado de acuerdo a los parametros recibidos que son la cantidad de horas trabajadas y el valor por hora de trabajo.
function calcSueldo(horasTrab, pagoHora) {
    let resultado = horasTrab * pagoHora;
    return resultado;
}

// Manejo exepciones para validar que en los campos donde solicito las horas trabajadas y el valor por hora sea un número.
try {
    // Si no creo un error y que posteriormente lo muestro por alert.
    if (isNaN(horasTrab) || isNaN(pagoHora)) throw new Error("Algún valor ingresado no es valido...");
    // Si es asi muestro el valor a pagar llamando la función donde se calcula enviando como argumento los datos ingresados por teclado.
    else alert(`El sueldo a pagar de ${nombre} es de: $${calcSueldo(horasTrab, pagoHora)}`);
} catch (error) {
    alert(error);
}