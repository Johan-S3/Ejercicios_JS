// Primero creo la expresion regular
let regEx = /^"(\\.|[^"\\])+"$/;

// "...." : Debe empezar y terminar en comillas dobles.
// ( )* : Significa que este grupo se puede repetir una o mas veces.
// \\. : Cualquier carácter precedido por una barra invertida.
//  | : O(or)
// [^"\\"] : Cualquier carácter que no sea ni una comilla doble (") ni una barra invertida (\)

// Solicito ingresar una palabra
let palabra = prompt("Ingrese una palabra para validar la regex: ")

// Valido que la palabra cumpla con la expresion regular o no y muestro mensaje de confirmacion.
if (regEx.test(palabra)) {
    alert("VALIDO")
}else alert("NO VALIDO")