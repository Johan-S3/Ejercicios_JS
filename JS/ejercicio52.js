// Solicito ingresae el nombre del empleado, el sector en el que trabaja y la cantidad de horas que trabajó.
let nombreEmp = prompt("Ingrese el nombre del empleado:");
let opcion = parseInt(prompt(`¿A que sector pertenece ${nombreEmp}?\nIngrese una opción: \n1. Planta \n2. Administrativo`));
let horas = parseInt(prompt(`¿Cuantas horas trabajó ${nombreEmp}?`));

// Si la opcion es 1. Es decir de planta, se llama a la funcion y se le envia como argumentos la cantida de horas ingresadas por el usuario y el valor de la paga por hora.
if (opcion === 1) alert(`El sueldo del empleado es: \n$${calSueldo(horas, 20000)}`);
// Si la opcion es 2. Es decir de administrativo, se llama a la funcion y se le envia como argumentos la cantida de horas ingresadas por el usuario y el valor de la paga por hora.
else if (opcion == 2) alert(`El sueldo del empleado es: \n$${calSueldo(horas, 10000)}`);
else alert("Opcion ingresada no valida...")

// Creo función donde se calcular el sueldo de un empleado recibiendo como parametros el total de horas y el valor por pago de hora trabajada.
function calSueldo(horas, pagoHora) {
    let total = horas * pagoHora;
    return total;
}