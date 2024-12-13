// Declaro e asigno a variables los números ingresados.
let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));

// Valido que los valos ingresados sean validos. Es decir, números.
if(isNaN(num1) || isNaN(num2)) alert("Error al ingresar los datos.");
else alert(`El número mayor es el: ${CalMayor(num1, num2)}`);

// Creo función donde se calcula el número mayor.
function CalMayor(num1, num2) {
    if(num1 > num2) return num1;
    else if(num2 > num1) return num2;
}