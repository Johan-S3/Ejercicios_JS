// Creo bucle donde se hace una iteración 3 veces.
for (let i = 0; i < 3; i++) {
    // Solicito ingresar un número.
    let num = parseInt(prompt("Ingrese un número: "));
    // En la primera iteración le asigno a la variable mayor y menor el número ingresado.
    if(i  === 0){
        menor = num;
        mayor = num;
    }
    // En las otras iteraciones si hago la comparacion con las variables y asigno dependiendo si se cumple alguna condición.
    else if(num < menor) menor = num;
    else if (num > mayor) mayor = num;
}
// Si las variables de mayor menor son iguales entonces quiere decir que los números son iguales.
if (mayor === menor) alert("Números iguales");
// Si no es asi entonces que muestre el número mayor y el número menor.
else alert(`Número mayor: ${mayor} \nNúmero menor: ${menor}`)