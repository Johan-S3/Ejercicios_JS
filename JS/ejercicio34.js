// Solicito ingresar los datos: Radio, altura y el caudal del deposito.
radio = parseFloat(prompt("Ingrese el radio del deposito: "));
altura = parseFloat(prompt("Ingrese la altura del deposito: "));
caudal = parseFloat(prompt("Ingrese el valor del caudal: "));

// Cre función donde se calcula el volumen del deposito.
function calVolumen(r, h) {
    let volumen = Math.PI * Math.pow(r, 2) * h;
    return volumen;
}
// Cre función donde se calcula el tiempo de lleando del deposito, recibiendo como parametros la funcion donde se calcula el vlolumen ya que esta retorna el valor del volumen y el valor del caudal solicitado inicialmente.
function calTiempoLlenado(v = calVolumen(r, t), caudal) {
    let t = v / caudal;
    return t;
}

// Manejo exepciones para validar que los datos ingresados sean digitos.
try {
    if(isNaN(radio) || isNaN(altura) || isNaN(caudal)) throw new Error("El valor ingresado en algún campo no es valido.");
    else alert(`El tiempo de llennado del deposito es: ${calTiempoLlenado(calVolumen(radio, altura) ,caudal)} m^3/s`);
} catch (error) {
    alert(error);
}