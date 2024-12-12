// Declaro varaibles donde se almacenará los datos ingresados de la inversión, el interes anual y los años de inversion.
let capital = parseFloat(prompt("Ingrese la cantidad de dinero a invertir: "));
let interes  = parseInt(prompt("¿De cuanto es el interes anual que se obtendrá?"));
let anios = parseInt(prompt("¿A cuantos años será la inversión?"));

// Declaro e inicilizo varaible en 0 donde se asignara el capital sumando su interes anual.
let total = 0;

// Creo bucle para iterar la cantidad de años ingresados y mostrar el total de capital anual dependiendo de la inversion y del interes anual ingresado.
for (let i = 1; i <= anios; i++) {
    alert(`En el año ${i} el capital será de: \n$${calCapital(capital, (interes / 100))}`);
    capital = calCapital(capital, (interes / 100));
}

// Creo función donde se calcula el capital recibiendo como parametros el capital ingresado y el interes anual.
function calCapital(capital, interes) {
    total = capital + (capital * interes);
    return total;
}