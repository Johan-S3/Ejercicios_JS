// Se solicita dos numeros alamacenandolo en diferentes variables.
let num1 = parseFloat(prompt("Ingrese un número"));
let num2 = parseFloat(prompt("Ingrese otro número"));
 // Manejo exepciones para validar los números ingresados
try {
    if (num1 != 0 && num2 != 0) { //Los dos números ingresados deben ser diferentes de 0
        let division = num1 / num2
        alert(`El resultado de la división (${num1} / ${num2}) es igual a ${division}`)
    }else{
        throw "No puedes ingresar 0 para realizar una división" //Creo el mensaje personalizado
    }
} catch (error) { //En caso de algún número sea igual 0 entonces mostrar el mensaje
    alert(error)
}