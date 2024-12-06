// Solicito ingresar la base y la altura del triangulo.
let base = parseFloat(prompt("Ingrese la medida de la base del triangulo"));
let altura = parseFloat(prompt("Ingrese la medida de la altura del triangulo"));

// Manejo exepciones para validar que los valores ingresados sean numeros.
try {
    if (isNaN(base) || isNaN(altura)) throw new Error("Alguno de los valores ingresados no es un número");
    else{
        alert(`El area del triangulo es: ${areaTriang(base, altura)} cm^2`)
    }
} catch (error) {
    alert(error)
}

// Creo una función donde se realiza la operación en donde se calcula el area del triangulo.
function areaTriang(base, altura) {
    let area = (base * altura) / 2;
    return area;
}