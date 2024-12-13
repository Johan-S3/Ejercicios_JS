// Declaro e asigno a una variable el valor ingresado por teclado.
let pin = prompt("Ingrese el pin de 6 digitos: ");
// Creo una variable e asigno un a expresion regular para validar el pin ingresado.
let regex = /^[0-9]{6,6}$/;

// Valido si el pin es correcto o incorrecto con condicionales.
if(regex.test(pin)) alert("Pin correcto");
else alert("Pin incorrecto");