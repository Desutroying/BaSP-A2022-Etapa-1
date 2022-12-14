// 6. Funciones
    // a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar
    // la función y guardar el resultado en una variable, mostrando el valor de dicha variable en
    // la consola del navegador.
    // b. A la función suma anterior, agregarle una validación para controlar si alguno de los
    // parámetros no es un número; de no ser un número, mostrar una alerta aclarando que
    // uno de los parámetros tiene error y retornar el valor NaN como resultado.
    // c. Aparte, crear una función validate Integer que reciba un número como parámetro y
    // devuelva verdadero si es un número entero.
    // d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y
    // que valide que los números sean enteros. En caso que haya decimales mostrar un alerta
    // con el error y retornar el número convertido a entero (redondeado).
    // e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la
    // función suma probando que todo siga funcionando igual.

//  Parte a 

function sum(a, b)  {
    return sum3(a,b);
}

var sumTest = sum(10, 2);

console.log(sumTest);

//  Parte b

function sum2(a,b) {
    if (typeof a == 'number' && typeof b == 'number')   {
        return a + b;
    }

    alert('error: a parameter is not a number');
    return NaN;
} //Si son ambos de tipo number retorna a + b y sale de la función sino, lanza la alerta

console.log(sum2(10,'c')) //Prueba

//  Parte c

function validateError(num) {
    return Number.isInteger(num);
}

console.log(validateError(0.5));
console.log(validateError(2)); //Pruebas y muestras

//  Parte d

function sum3(a,b)  {
    if (typeof a == 'number' && typeof b == 'number')   {
        if (validateError(a) && validateError(b))   {
            return a + b;
        }
        else    {
            alert('error: a number is not integer');
            if (!validateError(a))  {
                return Math.floor(a);
            } else {
                return Math.floor(b);
            }

        }
    } else  {
        alert('error: a parameter is not a number');
        return NaN;
    }
}

console.log(sum3(2,5));
sum3(2, 'a');
console.log(sum3(2,2.5)); //Prueba de la función
