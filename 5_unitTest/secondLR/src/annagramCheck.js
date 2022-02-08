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


module.exports = annagramCheck;