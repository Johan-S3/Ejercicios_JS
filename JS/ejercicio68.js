// Creo un bucle para determinar cual número será el de la tabla de multiplicar.
for (let i = 1; i <= 10; i++) {
    console.log(`TABLA DEL ${i}`);
    // Creo otro bucle para determinar por cual número se multiplicará. Se hace la operación correspondiente y se muestra.
    for (let n = 1; n <= 10; n++) {
        console.log(`${i} X ${n} = ${i*n}`);
    }
    console.log("");
}