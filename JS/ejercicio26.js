// Solicito al usuario ingresar la remperatura en grados celcius y la almaceno en la variable temperaturaC.
let temperaturaC = parseInt(prompt("Ingrese la temperatura en °C:"));

// Creo una función donde se hace la conversion de °C y °F.
function converTemp(gradosC) {
    resultado = (gradosC * (9/5)) + 32;
    return resultado;
}
// Manejo exepciones para validar que el dato ingresado sea un número.
try {
    if (isNaN(temperaturaC)) throw new Error("El vlor ingresado no es un número");
    else alert(`${temperaturaC} °C   =    ${converTemp(temperaturaC)} °F`);
} catch (error) {
    alert(error);
}