// Declaro e asigno a variable el valor ingresado por teclado
let num = parseInt(prompt("Ingrese un número: "));

// Creo función donde se determinar si el número es par o impar
function detParImp(num) {
    if (num % 2 === 0) return "Es par";
    else return "Es impar";
}

// Valido si el valor ingresado es número.
if (isNaN(num)) alert("El valor ingresado no es valido");
else alert(`El número ingresado: ${detParImp(num)}`);