// Solicito ingresar número.
let numero = parseInt(prompt("Ingrese un número: "));

// Creo función para determinar si el número ingresado es el esperado. Es decir si es positivo y menor que 100.
function determinar(num) {
    if (num > 0 && num < 100) {
        return true;
    }else return false;
}

// Manejo exepciones para validar que el valor ingresado sea un número.
try {
    if (isNaN(numero))throw new Error("El valor ingresado no es valido.");
    else{
        if (determinar(numero)) alert("El numero ingresado es positivo y menor que 100");
        else alert("El número no es lo esperado... >_<");
    }
} catch (error) {
    alert(error);
}