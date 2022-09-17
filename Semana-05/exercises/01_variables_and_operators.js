// 1 - Variables y Operadores
//     a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
//     b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
//     c) Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).

// Parte a)

var a = 5;
var b = 3;
var sumOfNumbers = a + b;

console.log('The sum of ' + a + ' + ' + b + ' es ' + sumOfNumbers);

// Parte b)

var a = 'Hola ';
var b = 'cómo estás ?';
var sumOfStrings = a + b; //Concatenación de strings

console.log(sumOfStrings);

// Parte c)

var a = 'Buen ';
var b = 'día';
var lengthOfChars = (a+b).length;

console.log(lengthOfChars);