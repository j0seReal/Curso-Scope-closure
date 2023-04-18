function greeting() {
    let username = 'Ana'; // variables declaradas aquí solo seran accesibles dentro de esta funcion y en sus funciones anindadas
    console.log(username);

    if (username === 'Ana') {
        console.log(`Hello ${username}!`);
    }
}

greeting();
console.log(username); // error : username not defined

