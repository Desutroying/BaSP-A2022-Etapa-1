// 5. For
    // a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de
    // JavaScript para mostrar una alerta utilizando cada una de las palabras.
    // b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una
    // alerta por cada palabra modificada.
    // c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto
    // a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable
    // sentence. Al final mostrar una única alerta con la cadena completa.

// Parte a

var arrayOfWords = ['Hello', 'I', 'am', 'a', 'array'];

for (let i = 0; i < arrayOfWords.length; i++) {
    console.log(arrayOfWords[i]);
}