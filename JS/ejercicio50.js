// Solicito ingresar la temperatura y la presión.
let temperatura = parseFloat(prompt("Ingrese la temperatura: "));
let presion = parseFloat(prompt("Ingrese el valor de la presion: "));

// Manejo exepciones para validar que los datos ingresados sean números.
try {
    if(isNaN(temperatura) || isNaN(presion)) throw new Error("Algún dato ingresado no es un número.");
    else{
        if (presion > 200 || temperatura > 100) alert("ALARMA");
        else alert("Normal");
    }
} catch (error) {
    alert(error);
}