// Declaro variable e asigno el valor ingresado en ella. 
let num = parseInt(prompt("Ingrese un número: "));

// Utilizo condicionales para validar que el valor ingresado sea un número.
if(isNaN(num)) alert("El valor ingresado no es número.");
else{
    // LLamo función enviando como argumentos el número de celular de la persona que acaba de tocar.
    alert(`El inverso aditivo del número ingresado,\nes ${invAdi(num)}`);
}
// Creo funcion para deerminar el inverso aditivo del número solicitado.
function invAdi(num) {
    if(num < 0) num = Math.abs(num);
    else if (num > 0) num = num * (-1);
    return num;
}