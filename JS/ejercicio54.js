// Solicito ingresar los dos números inicialmente.
let num1 = parent(prompt("Ingrese el pimer número: "));
let num2 = parent(prompt("Ingrese el segundo número: "));

// Valido que los datos ingresados sean números.
if (isNaN(num1) || isNaN(num2)) throw new Error("Algun dato ingresado no es valido...");
// Si es asi...
else{
    // Valido que el numero 1 sea mayor al número 2 y se realiza y muestra la resta
    if(num1 >= num2) alert(`Resta: ${num1 - num2}`);
    // Si no es asi muestra mensaje.
    else alert("No es posible realizar la operación.")
}