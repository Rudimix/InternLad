const readlineSync = require('readline-sync');

let hiddenNumber='',    // Загаданное число
    wrongPlace=0,    //Кол-во цифр не на своём месте
    guessedNumbers=0,    //Кол-во угаданных цифр
    attempts=5,    //Кол-во попыток
    userGuess; //Догадка пользователя
const hiddenNumberLength = getRandomInt(3, 7);  //Длина 

for(let i=0;i<hiddenNumberLength; i++) { // Загадываем число с кол-вом цифр от 3 до 7 (не включая 7)
    let rndNum = Math.floor(Math.random() * 10);
    hiddenNumber+=rndNum;
}

const savedHiddenNum=hiddenNumber; // Сохраняем загаданное число

for(attempts;attempts>0;attempts--){
    userGuess = readlineSync.question('Guess a number: ');
    for(i=0;i<hiddenNumber.length;i++) {    // Пробегаем по числам которые полностью совпадают
        for(let j=0;j<userGuess.length;j++) {
            if (hiddenNumber[i]==userGuess[j]){
                if(i==j){
                    guessedNumbers++;
                    hiddenNumber=hiddenNumber.slice(0,i)+'-'+hiddenNumber.slice(i+1,hiddenNumber.length)
                    userGuess=userGuess.slice(0,j)+'*'+userGuess.slice(j+1,userGuess.length)
                }
            }
        }
    }
    for(i=0;i<hiddenNumber.length;i++) {    // Пробегаем по числам которые стоят не на своих местах
        for(j=0;j<userGuess.length;j++) {
            if (hiddenNumber[i]==userGuess[j]){
                wrongPlace++;
                hiddenNumber=hiddenNumber.slice(0,i)+'-'+hiddenNumber.slice(i+1,hiddenNumber.length)
                userGuess=userGuess.slice(0,j)+'*'+userGuess.slice(j+1,userGuess.length)
            }
        }
    }
    if (hiddenNumberLength==guessedNumbers){    // Если отгадали, получаем поздравление
        console.log("Congratulations!!!");
        break;
    }
    hiddenNumber=savedHiddenNum;
    console.log('Попыток осталось:'+(attempts-1)+' Отгаданных чисел:'+guessedNumbers+' Чисел не на своих местах:'+wrongPlace);
    guessedNumbers=0; // Обнуляем данные с каждой попыткой
    wrongPlace=0;
}

console.log("Попытки закончились, вы проиграли(");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}