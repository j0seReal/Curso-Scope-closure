function moneyBox(coins) {
    let savecoins = 0;
    savecoins += coins;

    console.log(`MoneyBox: $${savecoins}`);
}
moneyBox(5);//5 
moneyBox(5);//5 no recuerda lo guardado anteriormente

function moneyBox() {
    let savecoins = 0;

    function countCoins(coins) {
        savecoins += coins;
        console.log(`MoneyBox: $${savecoins}`);
    }
    return countCoins;
}
const mymoneybox = moneyBox(); // se crea instancia de moneyBox
mymoneybox(5); // 5 // se llama a función dentro de moneyBox con acceso a constande de moneyBox
mymoneybox(5); // 10
mymoneybox(15); // 25
 // SI RECUERDA LAS EJECUCIONES ANTERIORES
const moneyboxAna = moneyBox();
moneyboxAna(10);
moneyboxAna(20);
moneyboxAna(5);