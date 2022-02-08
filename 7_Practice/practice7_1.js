/*1)Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
    который параметром принимает строку, а возвращает ее в перевернутом виде, метод
ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее
первую букву заглавной и метод ucWords, который принимает строку и делает заглавной
первую букву каждого слова этой строки

Наш класс должен работать так:
    var str = new MyString();
console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'*/

class MyString {

    reverse(string) {
        if (!string || typeof string !== 'string') {
            return false;
        }
        return string.split("").reverse().join("");
    }

    ucFirst(string) {
        if (!string || typeof string !== 'string') {
            return false;
        }
        let arr = string.split('')
        let firstLat = arr[0].toUpperCase()
        return firstLat + string.slice(1)

        /*return string[0].toUpperCase() + string.slice(1);*/
    }

    ucWords(string) {

        let words = string.split(' ')
        let result = '';

        for (let i = 0; i < words.length; i++) {
            let word = words[i].split('')
            let firstLetter = word[0].toUpperCase()
            let restLetters = words[i].slice(1) + ' '
            result = result + firstLetter + restLetters;
        }

        return result;
        /*return string.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ')*/
    }

}

let str = new MyString();
console.log(str.reverse('abcde')) //выведет 'edcba'
console.log(str.ucFirst('abcde')) //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'