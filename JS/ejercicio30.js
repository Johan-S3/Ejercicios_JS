// Declaro y asigno a una variable la expresion regular para validar la contraseña.
let regEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,12}$/;
// ^:  Significa que la coincidencia debe empezar al incio de la cadena.
// (?=.*...) esto es un lookheady esto asegura que (lo que está dentro del paréntesis) ocurra en alguna parte de la cadena, sin importar dónde.
// [A-Z] signfica letras mayusculas
// [a-z] significa letras minusculas
// \d significa digitos
// [A-Za-z\d] esto indica los caracteres permitidos en la contraseña.
// {8,12} significa que en la cadena debe haber entre 8 y 12 caracteres.

// Solicito ingresar la contraseña.
let contraseña = prompt("Ingrese contraseña: ")
// Si la contraseña cumple con la expresion regular...
if (regEx.test(contraseña)) alert("Contraseña VALIDA");
// Si no cumple con la expresion regular...
else alert("Contraseña NO valida...");