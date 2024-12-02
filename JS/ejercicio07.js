let rentaAnual = parseFloat(prompt("Ingrese su renta anual")); // Solicito al usuario ingresar el valor de su renta anual.

// Por medio de la siguiente funcion determino el porcentaje a pagar dependiendo de la renta declarada.
function declararRenta(dinero) {
    let porcentaje;
    if (dinero <= 10000 && dinero < 20000) porcentaje = 5;
    else if (dinero >= 20000 && dinero < 35000) porcentaje = 10;
    else if (dinero >= 35000 && dinero < 60000) porcentaje = 20;
    else if (dinero >= 60000) porcentaje = 45;
    else porcentaje = 0;
    return porcentaje
}
// Mostrar mensaje dependiendo de lo que retorne la funcion anterior.
if (declararRenta(rentaAnual) === 0) {
    alert("Usted no aplica para pagar impositivo...");
}else{
    let dineroPagar = rentaAnual * (declararRenta(rentaAnual) / 100);
    alert (`La cantidad de dinero de impositivo a pagar es de: $${dineroPagar}`)
}