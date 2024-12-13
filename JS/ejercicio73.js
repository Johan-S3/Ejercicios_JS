// Declaro variables donde se almacenará la frase y la palabra a buscar e asigno la entrada de datos de las mismas.
let frase = prompt("Ingrese una frase: ");
let letra = prompt("Ingrese una letra para buscar en la frase:");

// Valido que los valores de los satos ingresados no sea un cadena vacia o que la logitud de la variable letra sea diferente a 1.
if (frase === "" || letra === "" || frase === null || letra === null) alert("Error en el ingreso de datos.");
else {
    if (letra.length != 1) {
        // Si no es asi creo una expresion regular...
        let regEx = new RegExp(letra, "gi"); //Utilizo banderas g y i (busqueda global) y (omisión de mayusculas y minusculas)
        let coincidencias = frase.match(regEx); //Declaro una varaible donde se almacenera las coincidencias encontradas que en este caso será en un array ya que usamos el metodo match-.

        // Por ultimo, muestro la cantidad de coincidencias.
        alert(`La letra ${letra} está en la frase: \n${coincidencias.length} veces.`);
    }
}