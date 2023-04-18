var a; //declarar
var a = 'b'; //declarar y asignar
b = 'bb'; // reasignacion
var a = 'aa'; //redeclaracion

//Global Scope
var fruit = 'Apple';  // global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'; // si no se declara con var, let, const etc
    console.log(country);
}
countries();
console.log(country);