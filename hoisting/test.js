

console.log(nameofdog); // se genera automaticamente var nameofdog = undefined;
var nameofdog = 'Elmo';

nameofDog();

function nameofDog() { // funciones si sepueden acceder antes de ser declaradas
    console.log(`el mejor perrito es ${elmo}`);

}
var elmo = 'Elmito'; // el valor de variables no se pueden acceder antes de ser inicializadas
