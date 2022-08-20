let str = `Старший братец ПОНЕДЕЛЬНИК –
работяга, не бездельник.
Он неделю открывает
всех трудиться зазывает.

ВТОРНИК следует за братом
у него идей богато.

А потом СРЕДА-сестрица,
не пристало ей лениться.

Брат ЧЕТВЕРГ и так, и сяк,
он мечтательный чудак.

ПЯТНИЦА-сестра сумела
побыстрей закончить дело.

Предпоследний брат СУББОТА
не выходит на работу.

В гости ходит ВОСКРЕСЕНЬЕ,
очень любит угощенье
`;
let newstr;
newstr=str.replace(/понедельник/i, 'MONDAY');
newstr=newstr.replace(/вторник/i, 'TUESDAY');
newstr=newstr.replace(/среда/i, 'WEDNESDAY');
newstr=newstr.replace(/четверг/i, 'THURSDAY');
newstr=newstr.replace(/пятница/i, 'FRIDAY');
newstr=newstr.replace(/суббота/i, 'SATURDAY');
newstr=newstr.replace(/воскресенье/i, 'SUNDAY');
console.log(newstr);