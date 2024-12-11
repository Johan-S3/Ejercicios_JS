// Solicito ingresar el valor del deposito y lo asigno a una varaible declarada.
let deposito = parseFloat(prompt("Ingrese el valor del deposito:"));
// Creo una función donde se calcula el interes anual del deposito.
let interes = function(deposito) {
    // Se hace la validación correspondiente para determinar si el interes será del 3% o del 4%.
    if (deposito > 0 && deposito <= 100000) return deposito * 0.03;
    else if(deposito > 100000) return deposito *0.04;
}

// Manejo exepciones para validar que el dato ingresado sea un número,
try {
    if(isNaN(deposito)) throw("El valor ingresado no es valido.");
    else alert(`Interes anual: $${interes(deposito)}\nTotal saldo: $${deposito + interes(deposito)}`);
} catch (error) {
    alert(error);
}

