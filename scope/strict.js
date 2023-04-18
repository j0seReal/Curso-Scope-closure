// MODO ESTRICTO
//modo altamente compatible con futuras actualizaciones
'use strict'; // no permite autodeclaraciones
pi = 3.1416; // autodeclarado // var pi = undefined;

console.log(pi);

function myFunction(){
    'use strict'; // no permite autodeclaraciones
    return pi = 3.1416;
}
console.log(myFunction);