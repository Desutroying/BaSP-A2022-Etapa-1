// 3. Arrays
//      a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
//      "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los
//      meses 5 y 11 (utilizar console.log).
//      b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
//      c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
//      d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
//      e. Invertir el orden del array (utilizar reverse).
//      f. Unir todos los elementos del array en un único string donde cada mes este separado por
//      un guión - (utilizar join).
//      g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar
//      slice).

//  Parte a

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]; //Arreglo de meses

console.log(months[4] + ' ' + months[10]); //Salida

//  Parte b

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months.sort(); //Ordena los meses

console.log(months);

//  Parte c

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months.unshift('First element'); //Añade el string al principio
months.push('Last element');    //Añade el string al final

console.log(months);

// Parte d

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months.shift(); //Elimina el primer string
months.pop();   //Elimina el ultimo string

console.log(months);

//  Parte e

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
months.reverse();   //Revierte el orden del array

console.log(months);

//Parte f

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var monthsString = months.join('-');

console.log(monthsString);

//Parte g

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var modifiedMonthsArray = months.slice(4,11);

console.log(modifiedMonthsArray);