// Solicito al usuario ingresar la opcion de pizza que quiere.
tipoPizza = parseInt(prompt("Ingrese la opción de pizza: \n1. Vegetariana \n2. No vegetariana"));
ingreVeg = ["Pimiento", "tofu"]; //Almaceno en un array los ingredientes opcionales que llevan las pizzas vegetarianas.
ingreNoVeg = ["Pepperoni", "Jamón", "Salchicha"]; //Almaceno en un array los ingredientes opcionales que llevan las pizzas no vegetarianas.
ingreElegidos = ["mozzarella", "tomate"]; //Creo un array donde se almacenaran los ingredientes escogidos por el usuario.

// Creo funcion donde se retorna el array de los ingredientes depediendo de la opción ingresada por el usuario.
function mostrarIngredientes(tipoPizza) {
    if (tipoPizza === 1) return ingreVeg;
    else if (tipoPizza === 2) return ingreNoVeg;
    else return false;
}

// Creo función donde le solicito al usuario escoger uno de los ingredientes mostrado anteriormente para añadirlo posteriormente al array que contiene los ingredientes de la pizza a realizar.
function escogerIngredientes(pizza) {
    cantIng = pizza.length;
    if(cantIng == 2){
        ingre = parseInt(prompt(`Escoge un solo ingrediente: \n1. ${pizza[0]} \n2. ${pizza[1]}`));
        if (ingre === 1) ingreElegidos.push(pizza[0]);
        else if (ingre === 2) ingreElegidos.push(pizza[1]);
        else alert("El ingrediente ingresado no existe.");
    }else if (cantIng == 3){
        ingre = parseInt(prompt(`Escoge un solo ingrediente: \n1. ${pizza[0]} \n2. ${pizza[1]} \n3. ${pizza[2]}`));
        if (ingre === 1) ingreElegidos.push(pizza[0]);
        else if (ingre === 2) ingreElegidos.push(pizza[1]);
        else if (ingre === 3) ingreElegidos.push(pizza[2]);
        else alert("El ingrediente ingresado no existe.");
    }
}

if (mostrarIngredientes(tipoPizza) == false) {
    alert("No se puede escoger un ingrediente para la pizza."); // Mostrar mensaje si el valor ingresado al tipo de pizza no coincide.
}else{
    alert(`Los ingredientes son: \n${mostrarIngredientes(tipoPizza)}`);
    escogerIngredientes(mostrarIngredientes(tipoPizza));
    alert(`Los ingredientes escogidos por el usuario son: \n${ingreElegidos}`);
}