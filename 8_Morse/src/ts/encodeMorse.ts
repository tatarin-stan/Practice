import {mappings, sosMappings} from './MorseSymbol';

function encodeMorse(str: string) {

    str = str.trim().toUpperCase()


    let result = ''
    let word = str.split(' ')

    if (str === 'SOS'){
        return result += sosMappings[0].symbol +  ' :translate as - ' + str;
    }

    for (let i = 0; i < word.length; i++) {
        let wordLater = word[i].split('')
        for (let j = 0; j < wordLater.length; j++) {
            for (let k = 0; k < mappings.length; k++) {
                if (wordLater[j] === mappings[k].translation) {
                    result += mappings[k].symbol
                }
            }
            result += ' '
        }

        result += '   '
    }


    return result +  ' :translate as - ' + str ;

}

console.log(encodeMorse('sos'));
