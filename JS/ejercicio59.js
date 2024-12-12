while (true) {
    let edad = parseInt(prompt("Ingrese la edad del postulante: "));
    if (isNaN(edad)) alert("Valor ingresado no valido.");
    else if(edad > 0 && edad <= 19){
            let estatura = parseInt(prompt("Ingrese la estatura del postulante en cm: "));
            if (isNaN(estatura)) alert("Valor ingresado no valido.");
            else if(estatura > 175){
                let peso = parseInt(prompt("Ingrese el peso del postulante: "));
                if (isNaN(peso)) alert("Valor ingresado no valido.");
                else if(peso <= 80 && peso >= 75){
                    alert("El postulante puede ser SELECCIONADO");
                    break;
                }else{
                    alert("El usuario no cumple con el peso permitido.");
                    continue;
                }
            }else{
                alert("El usuario no cumple con la estatura permitida.");
                continue;
            }
    }else{
        alert("El usuario no cumple con la edad permitida.");
        continue;
    }
}