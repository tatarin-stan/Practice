import {mappings, sosMappings} from './MorseSymbol';

function decodeMorse(str: string){

    str = str.trim()

    let result = ''
    let word = str.split('   ')

    if (str === '... --- ...'){
        return result += sosMappings[0].translation +  ' :translate as: ' + str;
    }

    for (let i = 0; i < word.length; i++) {
        let wordLater = word[i].split(' ')
        for (let j = 0; j < wordLater.length; j++) {
            for (let k = 0; k < mappings.length; k++) {
                if (wordLater[j] === mappings[k].symbol) {
                    result += mappings[k].translation
                }
            }
        }

        result += ' '
    }


    return result +  ' :translate as: ' + str ;


}

console.log(decodeMorse('.... . -.--    .--- ..- -.. .'))