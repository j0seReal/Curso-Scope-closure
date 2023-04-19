// en JS funciones pueden tener otras funciones dentro (funcion anidada)
//

function saludar() {
    let username = 'Jose';

    function displayUsername() {
        return `Hola ${username}!`;
    }
    return displayUsername;
}

const g = saludar();
console.log(g);
console.log(g());
