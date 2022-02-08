//1 Написать функцию, выводящую в консоль числа от 1 до n.......
function chenge(n){

    for(let i = 0;i <= n ;i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log ("threeFive");
        }else if (i % 3 === 0){
            console.log ("three");
        }else if (i % 5 === 0){
            console.log ("five");
        }else{
            console.log(i);
        }
    }

}

//2 Нужно выйти из цикла, изменив только две отмеченные строки.
function exit() {
    for (let i = 0; i < 16; i++) { //! Эту строку можно изменить
        for (let j = 0; j < 20; j++) {
            if (i === 15 && j === 15 ){   //! Эту строку можно изменить
                break;
            }

            console.log(i, j);
        }

    }
}

//3. Нужно написать функцию, которая проверяет, являются ли две строки анаграммами/
function annagramCheck(arr) {
    if (arr.length <= 1){
         let result = 'Не подходит';
         return result;
    }
    let str = arr[0].split("").sort().join("");

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].split("").sort().join("") !== str) {
             result = 'Не аннограма';
            return result;
        }else {
             result = 'Аннограма';
            return result;
        }
    }
    return true;
}
