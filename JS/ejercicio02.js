let contrasena = prompt("Ingrese una contraseña").toUpperCase(); //Almacenar los datos inresados por el usuario en una variable y pasar esta cadena de texto a minuscula.

let contraIngresada = prompt("Ingrese la contraseña asignada").toUpperCase(); //Almacenar los nuevos datos inresados por el usuario en una variable y pasar esta cadena de texto a minuscula.

//Validar que los datos almacenados en las dos variables sean iguales
if (contrasena == contraIngresada){ 
    alert("La contraseña ingresada es correcta")  //Mostrar mensaje si es asi.
}else{
    alert("La contraseña ingresada es INCORRECTA")  //Si no, mostrar mensaje incorrecto.
}

