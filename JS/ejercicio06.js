let nombre = prompt("Ingrese su nombre").toLowerCase();
let genero = prompt("Ingresa tu genero (M - F)").toUpperCase().trim();


function grupo(nombre, genero) {
    try {
        if (genero != "F" || genero != "M"){
            if ((genero === "F" && nombre[0] < "m") || (genero === "M" && nombre[0] > "n")) alert("Usted pertenece al GRUPO A");
            else alert("Usted pertenece al GRUPO B")
        } else throw "El genero ingresado es incorrecto."
    } catch (error) {
        alert(error);
    }
}
grupo (nombre, genero)