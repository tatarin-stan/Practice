//4)    Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
//      Ожидаемый результат: ({}) => true,
//      ({ a: undefined }) => true,
//      ({ a: 1 }) => false

function emptCheck(obj) {

    const elements = Object.getOwnPropertyNames(obj);

    for (let i=0;i<elements.length;i++){
        if (obj[elements[i]] === undefined){
            return true;
        }
    }

    if (Object.keys(obj).length === 0 ){
        return true;
    }else{
        return false;
    }
}


console.log(emptCheck({})); // true
console.log(emptCheck({ a: undefined })); // true
console.log(emptCheck({ a: 1 })); // false;


