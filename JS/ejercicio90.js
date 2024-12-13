// Declaro variable y asigno el valor ingresado por teclado.
let num = parseInt(prompt("Ingrese un numero del 1 al 5: "));
let valor; // Declaro varaible donde se guardará la cadena de texto del número ingresado.
// Utilizo switch case para asignar cadena a valor en los diferentes casos.
switch (num) {
    case 0:
        valor = "Cero";
        break;
    case 1:
        valor = "Uno";
        break;
    case 2:
        valor = "Dos";
        break;
    case 3:
        valor = "Tres";
        break;
    case 4:
        valor = "Cuatro";
        break;
    case 5:
        valor = "Cinco";
        break;
    default:
        valor = "Numero no corresponde al rango";
        break;
}

// Muestro la cadena de texto que contiene el resultao.
alert(valor);