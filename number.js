/** 
 * 
 * Генерира над 1000 уникални 6-символни номера, които може да използвате като поръчков номер за вашия автомобил.
 * Записва се в .txt файл в папката, в която е файла number.js
 * 
 * @param {string} allowedChars - Списък с позволените за България символи за регистрационни номера.
 * @param {number} length - Параметъра, които определя колко номера да се генерират при едно изпълнение на скрипта.
 * 
 */ 

const allowedChars = ['E', 'A', 'B', 'BT', 'BH', 'BP', 'EB', 'TX', 'K', 'KH', 'OB', 'M', 'PA', 'PK', 'EH', 'PB', 'PP', 'P', 'CC', 'CH', 'CM', 'CO', "C", "CA", "CB", 'CT', 'T', 'X', 'H', 'Y', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const generateRandomWords = (allowedChars, length) => {
    let words = [];
    for (let i = 0; i < length; i++) {
        let word = '';
        for (let j = 0; j < 6; j++) {
            word += allowedChars[Math.floor(Math.random() * allowedChars.length)];
        }
        words.push(word);
    }

    /**
     *  
     * Премахва дублираните номера, което означава, че всеки номер записан във файла е уникален. 
     * Ако има номер, който е дълъг повече от 6 символа, го прави с 6 символа 
     * 
     */ 
    words = words.filter((word, index, self) => self.indexOf(word) === index).map(word => word.length > 6 ? word.slice(0, 6) : word);

    return words;
}

const words = generateRandomWords(allowedChars, 1000);

const fs = require('fs');

/** 
 * 
 * Записва генерираните номера във файл, който се намира в папката, в която се намира файла number.js, с име 'номера'. 
 * Ако вече сте изпълнили скрипта веднъж, за да не се създава нов файл, скрипта просто добавя новите номера във вече съществуващия файл.
 * 
 * Форматирано е така, че да се вижда по-добре във файловия редактор.
 * 
 */

fs.appendFile('номера.txt', words.map(word => `[${word}]`).join(' | '), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
