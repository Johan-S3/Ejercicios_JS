// Solicito que se ingrese una cantidad de cursos y el valor se lo asigno a una variable.
let cantCursos = parseInt(prompt("Ingrese la cantidad de cursos que lleva: "));
// Muestro el valor total a pagar llamando la funcion que lo calcula enviando como argumentos la cantidad de cursos ingresada.
alert(`La cantidad total a pagar por todos \nlos cursos es: $${calcPago(cantCursos)}`);

// Cre función donde se calcula el pago por todos los curso.
function calcPago(cantCursos) {
    // Declaro una variable que se utilizará para guardar el valor a pagar de los cursos
    let total;
    // Utilizo condicionales para determinar el valor que tomará la varaible total y retornar o para retornar error en el ingreso de datos.
    if (cantCursos > 0 && cantCursos < 6){
        total = cantCursos * 2000000;
        return total;
    }if (cantCursos >= 6) {
        total = cantCursos * 1200000;
        return total;
    }else return "Error: Valor ingresado no valido."
}