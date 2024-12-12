// Declaro variables donde se almacenara la nota mas alta y mas baja ingresada por teclado.
let notaAlta;
let notaBaja;
// Declaro e inicilizo variables que me serviran como contadores para ir adicinando e igualando dentro de las condicionales.
let notaMax = 0;
let notaA = 0;
let notaB = 0;
let notaC = 0;
let notaD = 0;

// Declaro varaible que utilizaré dentro del bucle para que se guarde en ella el valor ingresado por teclado de la nota.
let nota;

// Solicito ingresar la cantidad de alumnnos que se va a registrar notas.
let cantAlum = parseInt(prompt("¿A cuantos estudiantes va a registrar notas?"));

// Cre un bucle que tiene com limite el numero de alumnos ingresados.
for (let i = 0; i < cantAlum; i++) {
    // Solicito que se ingrese la nota del alumno.
    nota = parseFloat(prompt(`Ingrese la nota del estudiante ${i+1}: (1 - 100)`));
    // Valido si el valor ingresa no es un número o está fuera del rango requerido.
    if (isNaN(nota) || nota < 0  || nota > 100) {
        alert("Error: El dato no es valido...");
    }else{ // Si no es así...
        // Le asigno en la primera iteración la nota ingresada a las variables donde se almacena la nota mas baja y alta.
        if (i === 0) {
            notaAlta = nota;
            notaBaja = nota;
        }
        // Luego empiezo a comprar cada valor que se valla ingresando y lo asigno.
        if(nota > notaAlta) notaAlta = nota;
        else if(nota < notaBaja) notaBaja = nota;
        if(nota === 100) notaMax += 1;
        else if(nota < 100 && nota >= 90) notaA += 1;
        else if(nota < 90 && nota >= 80) notaB += 1;
        else if(nota < 80 && nota >= 70) notaC += 1;
        else if(nota < 70 && nota >= 60) notaD += 1;
    }
}

// Por ultimo muestro cual fue la nota mas baja y alta y el rango de notas con su cantidad de estudiantes.
alert(`La nota mas alta fue: ${notaAlta}\nLa nota mas baja fue: ${notaBaja}`);
alert(`Cantidad de alumnos segun su nota: \nNota maxima: ${notaMax}\nNota tipo a: ${notaA}\nNota tipo B: ${notaB}\nNota tipo C: ${notaC}\nNota tipo D: ${notaD}`);