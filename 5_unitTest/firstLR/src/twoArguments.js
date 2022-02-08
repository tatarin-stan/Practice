// Создайте функцию, которая принимает два аргумента
function twoArguments(a, b){
    b = b + ''; // в строку
    if(a%3===0 || a%5===0 || a%15===0){
        a = a * (-1);
    }

    let arg = a + +b;

    return arg;
}

module.exports = twoArguments;