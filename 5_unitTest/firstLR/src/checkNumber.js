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
