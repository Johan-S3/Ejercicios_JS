// Solicitu al usuario ingresar dos números.
let num1 = parseFloat(prompt("Ingrese un número"))
let num2 = parseFloat(prompt("Ingrese otro número"))

// Manejo exepciones para validar que realmente se digiten numeros.
try {
    if (isNaN(num1) && isNaN(num2)  ) throw new Error("Debe ingresar numeros para realizar las operaciones.");
    else{
        alert(`Sumar ${num1} y ${num2} es igual a ${sumar(num1, num2)}`);
        alert(`Restar ${num1} y ${num2} es igual a ${restar(num1, num2)}`);
        alert(`Multiplicar ${num1} y ${num2} es igual a ${multiplicar(num1, num2)}`);
        alert(`Dividir ${num1} y ${num2} es igual a ${dividir(num1, num2)}`);
    }
} catch (error) {
    alert(error);
}

// Creo la funcion donde se realiza la operación de la suma.
function sumar(num1, num2) {
let resultado = num1 + num2;
return resultado;
}

// Creo la función donde se realiza la operación de resta.
function restar(num1, num2) {
    let resultado = num1 - num2;
    return resultado;
}

// Creo la función donde se realiza la operación de multiplicación.
function multiplicar(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
}

// Creo la función donde se realiza la operación de la división.
function dividir(num1, num2) {
    // Manejo exepciones para determinar que el segundo número ingresado (divisor) no sea 0. Ya que esto en las calculadoras genera un error.
    try {
        if (num2 !== 0){
            let resultado = num1 / num2;
            return resultado;
        }
        else throw new Error("No se puede dividir por 0.");
        
    } catch (error) {
        return error;
    }
}