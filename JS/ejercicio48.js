// Solicito al usuario que ingrese una opcion.
let opcion = parseInt(prompt("Ingrese la figura geometrica a calcular el area: \n1. Triangulo \n2. Circulo"));
// Valido las opciones.
if (opcion === 1) alert(`El area es: ${areaTriang()} cm^2`);    
else if (opcion === 2) alert(`El area es: ${areaCircu()} cm^2`);
else alert("La opción ingresada no es valida.")

// Creo función para calcular el area de un triangulo.
function areaTriang() {
    let base = parseFloat(prompt("Ingrese la medida de la base del triangulo: "));
    let altura = parseFloat(prompt("Ingrese la medida de la altura del triangulo: "));
    let area = (base * altura) / 2;
    return area;
}

// Creo funcion pra calcular el area de un circulo.
function areaCircu() {
    let radio = parseFloat(prompt("Ingrese el radio del circulo: "));
    area = Math.PI * Math.pow(radio, 2);
    return area;
}

