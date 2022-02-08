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