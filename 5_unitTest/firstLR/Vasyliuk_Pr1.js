//Написать функцию, которая проверяет является ли строка палиндромом;
function isPalindrome(str) {
    let strLen = str.length;
    let result = '';
    for (let i = 0; i < strLen; i++) {
        if (str[i] === str[strLen - 1 - i]){
            result = 'yes';
        } else {
            result = 'no';
            return result;
        }
    }
    return result;
}

module.exports = isPalindrome;


// Написать функцию, которая принимает аргумент и валидирует его по правилам
function IsValidPass(pass) {
    //Проверка на длинну
    if (pass.length <= 2 || pass.length >= 20) {
        return false;
    }
    //Проверка на спец.сим.
    let spChar = "/[!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?]+/";
    for (let i = 0; i < pass.length; i++){
        if (spChar.indexOf(pass.charAt(i)) != -1){
            return false;
        }
    }
    // проверка на загл букву
    function startsWithCapital(pass){
        return pass.charAt(0) === pass.charAt(0).toUpperCase();
    }

    return true;
}

module.exports = IsValidPass;


// Создайте функцию, которая принимает два аргумента
/*let a = 15; b = 12;*/
function twoArguments(a, b){
    b = b + ''; // в строку
    if(a%3==0 || a%5==0 || a%15==0){
        a = a * (-1);
    }

    let sum = a + +b;

   return sum
}


module.exports = twoArguments;

// Создайте функцию, которая проверяет число на соответствие трем различным требованиям
function checkNumber(nmb){

    let check = [0, 0, 2];
    // Простота числа
    for( let i = 2; i <nmb ;i++){
        if (nmb % i === 0){
            flag = false;
        }else {
            flag = true;
        }

        if(flag) {
            check[0] = true;
        }else
        {
            check[0] = false;
        }

    }

    //Четность числа
    if(nmb % 2 === 0){
        check[1] = true;
    }else{
        check[1] = false;
    }
    // Кратность 10
    if(nmb % 10 === 0){
        check[2] = true;
    }else{
        check[2] = false;
    }

    //Число негативное
    if(nmb<0){
        check[0] = false;
    }

    return check;


}

module.exports = checkNumber;
//console.log(checkNumber(-10));