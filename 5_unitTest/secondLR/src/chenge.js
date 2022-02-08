function chenge(x) {

    if(typeof x !== 'number') {
        return false;
    }

    let result = '';

    for (let i = 1; i <= x; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result = result + 'threeFive ';
        } else if (i % 3 === 0) {
            result = result + 'three ';
        } else if (i % 5 === 0) {
            result = result + 'five ';
        } else {
            result = result + [i] + ' ';
        }
    }

    return result;
}
console.log(chenge());

module.exports = chenge;

