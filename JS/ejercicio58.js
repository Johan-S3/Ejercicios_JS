// Solicito el mes de nacimiento del usuario y lo asigno a una variable.
let mes = parseInt(prompt("Ingrese el mes de nacimiento: "));

// Manejo exepciones para validar que el valor ingresado sea un número.
try {
    if(isNaN(mes)) throw new Error("El valor ingresado no es un número");
    else{
        // Dependiendo del valor ingresado... mostrar los poibles signos sodiales a lso que pertenece.
        if (mes === 1) alert("Puede ser Capricornio o Acuario");
        else if(mes === 2) alert("Pueder ser Acuario o Piscis");
        else if(mes === 3) alert("Pueder ser Piscis o Aries");
        else if(mes === 4) alert("Pueder ser Aries o Tauro");
        else if(mes === 5) alert("Pueder ser Tauro o Géminis");
        else if(mes === 6) alert("Pueder ser Géminis o Cancer");
        else if(mes === 7) alert("Pueder ser Cancer o Leo");
        else if(mes === 8) alert("Pueder ser Leo o Virgo");
        else if(mes === 9) alert("Pueder ser Virgo o Libra");
        else if(mes === 10) alert("Pueder ser Libra o Escorpio");
        else if(mes === 11) alert("Pueder ser Escorpio o Sagitario");
        else if(mes === 12) alert("Pueder ser Sagitario o Capricornio");
        else alert("El mes ingresado no es valido.");
    }
} catch (error) {
    alert(error);
}
