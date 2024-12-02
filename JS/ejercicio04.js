let num = parseInt(prompt("Ingrese un número")) //Solicito ingresar un número y lo parseo para que sea un entero

//Creo una funcion para determinar si es par
function esPar(num) {
    let resultado = false; //Iniciaizo la variable resultado en falso que es lo que retorna la función
    if (num % 2 == 0) {
        resultado = true; //Si el número es par la variable rsultaso a ahora sera verdadera
    }
    return resultado; //Por ultimo retorna la variable.
}

if(esPar(num)){
    alert("El número ingresado es Par")
}else{
    alert("El número ingresado es Impar")
}