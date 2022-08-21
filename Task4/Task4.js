const readlineSync = require('readline-sync');

const monster = {
    maxHealth: 10,
    name: "Лютый",
    moves: [
        {
            "name": "Удар когтистой лапой",
            "physicalDmg": 3, // физический урон
            "magicDmg": 0,    // магический урон
            "physicArmorPercents": 20, // физическая броня
            "magicArmorPercents": 20,  // магическая броня
            "cooldown": 0,  // ходов на восстановление
            "currentCooldown":0    // текущий кулдаун
        },
        {
            "name": "Огненное дыхание",
            "physicalDmg": 0,
            "magicDmg": 4,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 3,
            "currentCooldown":0
        },
        {
            "name": "Удар хвостом",
            "physicalDmg": 2,
            "magicDmg": 0,
            "physicArmorPercents": 50,
            "magicArmorPercents": 0,
            "cooldown": 2,
            "currentCooldown":0
        },
    ]
}
const human = {
    maxHealth: 10,
    moves: [
        {
            "name": "Удар боевым кадилом",
            "physicalDmg": 2,
            "magicDmg": 0,
            "physicArmorPercents": 0,
            "magicArmorPercents": 50,
            "cooldown": 0,
            "currentCooldown": 0
        },
        {
            "name": "Вертушка левой пяткой",
            "physicalDmg": 4,
            "magicDmg": 0,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 4,
            "currentCooldown": 0
        },
        {
            "name": "Каноничный фаербол",
            "physicalDmg": 0,
            "magicDmg": 5,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 3,
            "currentCooldown": 0
        },
        {
            "name": "Магический блок",
            "physicalDmg": 0,
            "magicDmg": 0,
            "physicArmorPercents": 100,
            "magicArmorPercents": 100,
            "cooldown": 4,
            "currentCooldown": 0
        },
    ]
}
do{
    human.maxHealth = readlineSync.question('Enter dificulty (max health of your hero): ');
}while(human.maxHealth<=0)

while(human.maxHealth>=0 && monster.maxHealth>=0) {
    let indexMove = getRandomInt(0,3);
    while(monster.moves[indexMove].currentCooldown!=0){
        indexMove = getRandomInt(0,3);
    }
    monster.moves[indexMove].currentCooldown=monster.moves[indexMove].cooldown;
    console.log("Монстер хочет: "+ monster.moves[indexMove].name);
    for(let i=0;i<4;i++)
    {
        if(human.moves[i].currentCooldown==0){
            console.log((i+1)+". "+human.moves[i].name);
        }
    }
    userMoveIndex = readlineSync.question('Your choice: ')-1;
    while(human.moves[userMoveIndex].currentCooldown!=0){
        console.log("Выберите из списка доступного");
        userMoveIndex = readlineSync.question('Your choice: ')-1;
    }
    human.moves[userMoveIndex].currentCooldown=human.moves[userMoveIndex].cooldown;
    console.log("Вы выбрали "+human.moves[userMoveIndex].name);
    let damageToHuman = damageDealed(monster.moves[indexMove].physicalDmg,
        monster.moves[indexMove].magicDmg,
        human.moves[userMoveIndex].physicArmorPercents,
        human.moves[userMoveIndex].magicArmorPercents)
    let damageToMonster = damageDealed(human.moves[userMoveIndex].physicalDmg,
        human.moves[userMoveIndex].magicDmg,
        monster.moves[indexMove].physicArmorPercents,
        monster.moves[indexMove].magicArmorPercents)
    human.maxHealth-=damageToHuman;
    monster.maxHealth-=damageToMonster;
    console.log("Вам нанесли "+damageToHuman+" урона У вас осталось "+ human.maxHealth+" здоровья...");
    console.log("Вы нанесли "+damageToMonster+" урона У него осталось "+ monster.maxHealth+" здоровья...");
    for(i=0;i<4;i++)
    {
        if(i<3){
            if(monster.moves[i].currentCooldown!=0)
                monster.moves[i].currentCooldown--;
        }
        if(human.moves[i].currentCooldown!=0)
            human.moves[i].currentCooldown--;
    }
}
if(human.maxHealth<=0){
    console.log("Вы проиграли...");
}
else console.log("Вы выйграли!!!");

function damageDealed(physicalDmg,magicDmg,physicArmorPercents,magicArmorPercents) {
    return(Math.round((physicalDmg-(physicalDmg*physicArmorPercents)/100)+(magicDmg-(magicDmg*magicArmorPercents)/100)))
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}