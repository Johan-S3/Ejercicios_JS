// Solicito ingresar por teclado las notas de los 3 parciales, el examen final y el trabajo final.
let parcial1 = parseFloat(prompt("Ingrese la nota del parcial 1:"));
let parcial2 = parseFloat(prompt("Ingrese la nota del parcial 2:"));
let parcial3 = parseFloat(prompt("Ingrese la nota del parcial 3:"));
let examFinal = parseFloat(prompt("Ingrese la nota del examen final:"));
let trabajoFinal = parseFloat(prompt("Ingrese la nota del trabajo final:"));

// Creo una funcion para sacar el promedio de los 3 parciales.
function promedioParc(parcial1, parcial2, parcial3) {
    let resultado = (parcial1 + parcial2 + parcial3) / 3;
    return resultado;
}
// Creo variable para luego asignarle la funcion anterior a ella.
let promedioP;
// Creo función donde se calcula el promedio final teniendo en cuenta el promedio de los parciales y el porcentaje que vale cada nota.
function promedioFinal(promedioP = promedioParc(parcial1, parcial2, parcial3), examFinal, trabajoFinal) {
    let resultado = (promedioP * 0.55) + (examFinal * 0.30) + (trabajoFinal * 0.15);
    return resultado;
}
// Utilizo exepciones para validar que los datos ingresados sean números.
try {
    if(isNaN(parcial1) || isNaN(parcial2) || isNaN(parcial3) || isNaN(examFinal) || isNaN(trabajoFinal)) throw new Error("Algún dato ingresado no es valido...");
    // Muestro el promedio final enviando como argumentos el la funcion donde se calcula el promedio de los parciales, la nota del examen final y la nota del trabajo final.
    else alert(`El promedio final del estudiantes es: ${promedioFinal(promedioParc(parcial1, parcial2, parcial3), examFinal, trabajoFinal).toFixed(2)}`);
} catch (error) {
    alert(error);
}




