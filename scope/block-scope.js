/// variables definidas dentro de un bloque, solo pueden ser usadas en este
//m todo lo que este dentro de un par de {} es un bloque
function fruits() {
    if (true) {
        var fruit1 = 'Manzana';
        let fruit2 = 'Kiwi';
        const fruit3 = 'Banana';
        console.log(fruit3); // block scope // si puede acceder
    }
    console.log(fruit1); // si imprime var // funciton scope
    console.log(fruit2); // block scope // error al intentar acceder a let
    //console.log(fruit3); // block scope // error al intentar acceder a const
}
fruits();
