//3)    Напишите функцию, которая убирает повторяющиеся значения в массиве.
//      Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

function uniqArr(arr){
    if (!arr || arr.length === 0 || typeof arr !== 'object'){
        return false;
    }
    return Array.from(new Set(arr))

}
console.log(uniqArr([1, 2, 3, 1, 2]))
