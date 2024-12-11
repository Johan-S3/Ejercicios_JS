// Declaro una variable y asigno el valor ingresado por teclado solicitado (nota).
let calificacion = parseFloat(prompt("Ingrese la nota: (0 - 10)"));

// Manejo exepciones para validar que el valor ingresado sea un número.
try {
    if(isNaN(calificacion)) throw new Error("El valor ingresado no es valido...");
    else determinarNota(calificacion);
} catch (error) {
    alert(error);
}

// Creo una función donde se determina si el usuario aprueba o no aprueba dependiendo de la calificacion que es el parametro que recibe la función.
function determinarNota(calificacion) {
    if(calificacion >= 9.1 && calificacion <= 10) return alert("A --> Excelente");
    else if(calificacion >= 8.1 && calificacion <= 9) return alert("A --> Muy bien");
    else if(calificacion >= 7.5 && calificacion <= 8) return alert("A --> Bien");
    else if(calificacion >= 0 && calificacion < 7.5) return alert("NA --> No Aprobado");
    else alert("Valor ingresado no valido...");
}