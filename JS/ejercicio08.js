// Empiezo manejando exepciones para realizar la validacion de las puntuaciones permitidas
try {
    let nombreEmpleado = prompt("Ingrese el nombre del empleado"); // Almaceno el nombre del empleado en una variable
    if (nombreEmpleado === "") {
        throw "Debe ingresar el nombre del empleado"
    }else{
        let cantPoints = parseFloat(prompt(`Cuantos puntos obtuvo ${nombreEmpleado}`));
        function determinarDinero(cantPoints) {
            let dinero;
            let bono = 2400;
            if (cantPoints === 0.0) dinero = (cantPoints * bono);
            else if (cantPoints === 0.4) dinero = (cantPoints * bono);
            else if (cantPoints === 0.6) dinero = (cantPoints * bono);
            else if (cantPoints > 0.6) dinero = (cantPoints * bono);
            else{
                return false;
            } 
            return dinero;
        }
    
        if (!determinarDinero(cantPoints)) {
            alert("El valor ingresado es invalido...");
        }else{
            alert(`El valor a pagar es de: ${determinarDinero(cantPoints)}`)
        }
    }
} catch (error) {
    alert(error)
}
