// Declaro e asigno a una variable el valor ingresado por teclado.
let palabra = prompt("Ingrese una palabra: ");

// Creo un bucle para iterar 10 veces el mensaje ingresado.
for (let i = 0; i < 10; i++) {
    alert(`Mensaje N° ${i+1}\n${palabra.toUpperCase()}`);
}