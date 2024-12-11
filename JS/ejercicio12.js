
// Solicito al usuario ingresar el largo y el ancho del rectangulo.
let largo = parseFloat(prompt("Ingrese el largo del rectangulo en cm"));
let ancho = parseFloat(prompt("Ingrese el ancho del rectangulo en cm"));

// Aqui manejo exepciones para validar que las medidas no sean iguales porque en ese caso seria un cuadrado y que los valores ingresados sean números.
try {
    if (largo === ancho) throw new Error("Las medidas son iguales (CUADRADO)");
    else if (isNaN(largo) || isNaN(ancho)) throw new Error("Alguno de los valores ingresados no es un número.");
    else alert(`El area del rectangulo es: ${areaRectan(largo, ancho)} cm^2`);
    
} catch (error) {
    alert(error)
}
// Creo la función donde se realiza la operación para calcular el area del rectangulo.
export function areaRectan(largo, ancho) {
    let area = largo * ancho;
    return area;
}

