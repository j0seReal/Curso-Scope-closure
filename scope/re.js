//asignación, declaración, reasignación y redeclaración

var firstName; // declaración // undefined

firstName = 'Jose'; //declaración

console.log(firstName);

var lastName = 'David'; // declarar y asignar
lastName = 'Ana'; //reasignar
console.log(lastName); // Ana

var secondName = 'David'; //declarar y asignar
var secondName = 'Ana'; //reasiganción
console.log(secondName); //Ana

//let
let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi'; // reasignar
console.log(fruit);
let fruit = 'Banana'; // ERROR // no se puede redeclarar

//const
const animal = 'Dog'; // // declarar y asignar

animal = 'Cat'; // no permite reasignar

console.log(animal); // ERROR AL EJECUTAR // no permite reasignar

const animal = 'bird'; // ERROR // no se puede redeclarar

const vehicles = [];
vehicles.push('car'); // permitido
console.log(vehicles); // ['car']

vehicles.pop(); //permitido
console.log(vehicles); // []


