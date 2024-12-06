let num1 = parseFloat(prompt("Ingrese el primer número"));
let num2 = parseFloat(prompt("Ingrese el segundo número"));
let num3 = parseFloat(prompt("Ingrese el tercer número"));
let num4 = parseFloat(prompt("Ingrese el cuarto número"));

try {
    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) throw new Error("Uno de los datos ingresado no es un número.");
    else {
        alert(`La media de los números ingresados es: ${calcularMedia(num1, num2, num3, num4)}`)
    }
} catch (error) {
    alert(error);
}

function calcularMedia(num1, num2, num3, num4) {
    let array = [num1, num2, num3, num4]
    let acumulador = 0;
    for (let i in array) {
        acumulador += i;
    }
    let media = acumulador / array.length;
    return media;
}