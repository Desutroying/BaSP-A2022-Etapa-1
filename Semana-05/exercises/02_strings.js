// 2. Strings
//      a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en
//      mayúscula (utilizar toUpperCase).
//      b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
//      con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar
//      substring).
//      c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
//      con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar
//      substring).
//      d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
//      con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en
//      una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
//      e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
//      Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar
//      indexOf).
//      f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún
//      espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un
//      nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás
//      letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador
//      +)

//Parte a

var words = 'i want to sleep';
var wordsInUpperCase = words.toUpperCase();

console.log(wordsInUpperCase);

//Parte b

var hungry = 'i want to eat';
var subHungry = hungry.substring(0,5);

console.log(subHungry);

//Parte c

var developer = 'i want to drink coffee';
var subDeveloper = developer.substring(17);

console.log(subDeveloper);

//Parte d

var tonyStarkQuote = 'i am Iron Man';
var fixedTonyStarkQuote = tonyStarkQuote.substring(0,1).toUpperCase() + tonyStarkQuote.substring(1).toLowerCase();

console.log(fixedTonyStarkQuote);

//Parte e

var walterWhiteQuote = 'i am the danger';
var firstWhiteSpace = walterWhiteQuote.indexOf(' ');

console.log(firstWhiteSpace);

//Parte f

var regards = 'hello world';
var cleanRegards = regards.substring(0,1).toUpperCase() + regards.substring(1,regards.indexOf(' ') + 1) + regards.substring(regards.indexOf(' ') + 1, regards.indexOf(' ') + 2).toUpperCase() + regards.substring(regards.indexOf(' ') + 2).toLowerCase();

console.log(cleanRegards);