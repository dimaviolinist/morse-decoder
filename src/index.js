const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    var array = [];
    var result = '';
    const bytesNumber = expr.length / 10;
    expr = Array.from(expr);
    for (var i = 0; i < bytesNumber; i++){
        var letter = expr.splice(0, 10);        
        if (letter[0] === '*') {
            result = result + ' ';
            continue;
        }
        var morse = '';
        for (let k = 0; k < 10; k += 2){
            if (letter[k] === '1') {
                if (letter[k + 1] === '1'){
                    morse = morse + '-';
                } else {
                    morse = morse + '.';
                }
            } 
        }
        result = result + MORSE_TABLE[morse];      
    }    
    return result;
}

module.exports = {
    decode
}
