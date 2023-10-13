//push(): Agrega uno o más elementos al final del array.
/*let numeros = [1,2,3];
numeros.push(4,5);
console.log(numeros);*/

//pop(): Elimina y devuelve el último elemento del array.
/*let frutas = ["manzana","banana", "uva"];
let ultimaF = frutas.pop();
console.log(ultimaF);
console.log(frutas);*/

//unshift(): Agrega uno o más elementos al inicio del array
/*let colores = ["verde","amarrillo"];
colores.unshift("azul", "blanco");
console.log(colores);*/

//shift(): Elimina y devuelve el primer elemento del array
/*let paises = ["El salvador", "Peru","Mexico"];
let primerP = paises.shift();
console.log(primerP);
console.log(paises);*/

//concat(): Combina dos o más arrays para crear un nuevo array.
/*let arra1 = [1, 2];
let arra2 = [3, 4];
let combinarArray = arra1.concat(arra2);
console.log(combinarArray);*/

//slice(): Crea una copia superficial (shallow copy) del array con los elementos seleccionados
/*let ArrayOriginal = [1,2,3,4,5];
let copiaArray = ArrayOriginal.slice(1, 4);
console.log(copiaArray);*/

//splice(): Cambia el contenido de un array eliminando, reemplazando o agregando elementos
/*let Frutas = ['banana','naranja','kiwi','pera','manzana'];
let removerFruta = Frutas.splice(2,1, 'uva');
console.log(Frutas);
console.log(removerFruta);*/

//forEach(): Ejecuta una función para cada elemento del array.
//EJERCICIO 1
/*let numbers = [1, 2, 3]
numbers.forEach(function(number){
    console.log(number * 2);
});

//EJERCIO 2
const products = [
    {name: 'Camisa', precio: 20},
    {name: 'Jeans', precio: 25},
    {name: 'Zapatos', precio: 80},
    {name: 'Sombrero', precio: 10}
]

let precioTotal = 0;

products.forEach(function(producto){
    precioTotal += producto.precio;
});

console.log('Precio total a pagar: $', precioTotal);*/

//map(): Crea un nuevo array aplicando una función a cada elemento del array original.
//EJERCICIO 1
/*let numbers1 = [1, 2, 3];
let nuevoArreglo = numbers1.map(function(number){
    return number * 2
})
console.log(nuevoArreglo)*/

//EJERCICIO 2
/*const Gcelcius = [0, 15, 30, 5, 10];
const Gfarenheith = Gcelcius.map(function(celcius){
    //Formula °F = (°C * 9/5) + 32
    return (celcius * 9/5) + 32;
});
console.log('Grados celcius: ', Gcelcius);
console.log('Grados Farenheith:', Gfarenheith)*/

//filter(): Crea un nuevo array con todos los elementos que pasan una prueba (funciónproporcionada).
//EJERCICIO 1
/*const nums = [2, 8, 3, 6, 10, 4, 7]

const nums2 = nums.filter(function(number){
    return number > 5
});
console.log(nums2);*/

//EJERCICIO 2
/*const personas = [
    {nombre: 'Yancy', edad: 24},
    {nombre: 'Jose', edad: 17},
    {nombre: 'Litzy', edad: 30},
    {nombre: 'Kevin', edad: 15},
    {nombre: 'Ivan', edad: 20}
]

const adultos = personas.filter(function(person){
    return person.edad > 18
})
console.log(adultos)*/

//reduce(): Aplica una función a un acumulador y a cada elemento de un arreglo (deizquierda a derecha) para reducirlo a un solo valor
/*let num = [1, 2, 3, 4,];
let sum = num.reduce(function(acumulador, valorActual){
    return acumulador + valorActual
}, 0)
console.log(sum)*/

//every(): Comprueba si todos los elementos de un arreglo cumplen una condición dada y devuelve true o false
/*let number = [1, 2, 3, 4, 5]
let mayorCero = number.every(function(number){
    return number > 0
});
console.log(mayorCero)*/

//sort(): Ordena los elementos de un arreglo en orden alfabetico (sin crear un nuevo arreglo).
/*let nombres = ['Paola','Kenia','Ariana', 'Aurora','Cristofer']
nombres.sort();
console.log(nombres)*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//DESARROLLAR 4 EJERCICIOS USANDO DIFERENTES METODOS DE LOS ANTERIORES VISTOS
//EJERCICIO 1
// METODO push(): se usa para agregar un elemento al final de un arreglo.
/*let animales = ['Perro','Gato','Conejo'];
animales.push('Conejo', 'Perro');
console.log(animales);*/




//EJERCICIO 2
//METODO forEach(): Se utiliza para rrecorrer un arreglo
/*let letras = ['a', 'b', 'c'];

letras.forEach(function(letters){
console.log(letters)
});*/




//EJERCICIO 3
/*METODO map(): crea un nuevo array con los resultados de la llamada a la función indicada aplicados 
a cada uno de sus elementos.*/
/*{
let datosUsuarios = [
    {nombre: "Steven", contra:"12345"},
    {nombre: "Thiago", contra:"Thiaguitto"},
    {nombre: "Damara", contra:"damaly"},
    {nombre: "Stefany", contra:"fany23"}
];
    let otroElemento = datosUsuarios.map(function(a){
        return a.contra;
    });
    console.log(otroElemento);
}*/




//EJERCICIO 4
//METODO pop(): elimina el último elemento de un array y lo devuelve.
let verduras = ["zanahoria", "elote", "papa", "guisquil","yuca"];
let ultimaV = verduras.pop();
console.log(ultimaV);
console.log(verduras);
