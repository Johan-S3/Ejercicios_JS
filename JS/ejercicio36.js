// Declaro y aisgnoa una variabel el valor de la cantidad de cacao con la que se preparará el bizcocho.
let cacao = 20;

// Creo función donde se calcula la cantidad de harina dependiendo de la cantidad de cacao que esta siendo recibido como parametro.
function calHarina(cacao) {
    resultado = (cacao * 100) / 10;
    return resultado;
}

// Muestro la cantidad de harina que se necesita.
alert(`Para prepara el biscocho con 20 Gramos de cacao se necesita:\n${calHarina(cacao)} gramos de harina`);