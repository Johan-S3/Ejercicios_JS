let opcion; //Declaro variable para ser utilizada dentro del bucle.
total = 0; //Declaro e inicilizo variable donde se almacenará el valor de las ventas.
// Creo bucle infinito
while (true) { 
    // Solicito que se ingrese una opcion (Agregar venta o cerrar sistema)
    opcion = parseInt(prompt("Menú de opciones:\n1. Agregar venta\n2. Cerrar sistema."))
    if (opcion === 1) { // Si la opcion es 1 (Agregar venta)
    // Pregunto que articulo vendio y la cantidad
        let articulo = parseInt(prompt("¿Que articulo vendiste: \n1. Libros\n2. Cuadernos \n3. Lapiceos"));
        let cant = parseInt(prompt("¿Que cantidad vendiste?:"));
        // Dependiendo de la opcion ingresada se hace el calculo y se agrega a la variable donde se almacena el total de ventas.
        if(articulo === 1) total += cant * 10000;
        else if(articulo === 2) total += cant * 7550;
        else if(articulo === 3) total += 5550;
        else alert("Opcion ingresada NO valida...")
    }else if(opcion === 2){ // Si la opcion es 2 (Cerrar sistema)
        // Se muestro el total de ventas y se rompe el bucle.
        alert(`TOTAL DE VENTAS: $${total}`);
        break;
    }
    else alert("Opcion ingresada NO valida...");
}