//1)    Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
//      Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }

/*
function crossedObj (){
    let obj1 = { a: 1, b: 2 };
    let obj2 = { c: 2, b: 4 };
    let result = 'false';



    let arr1 = Object.values(obj1);
    let arr2 = Object.values(obj2);

    console.log(arr1)
    console.log(arr2)

    for (let i=0;i<arr1.length;i++){
        for (let j=0;j<arr2.length;j++){
            if (arr1[i] === arr2[j]){
                result = arr1[i]
                console.log(arr1[i]);
            }
        }
    }


    return result;
}
console.log(crossedObj());*/ // Через Массив
