import resources from "./function.mjs";

const {dayToWeekDay,
        luckyItem,
        luckyNumber,
        goodSayings } = resources;

const today = new Date();

//console.log(dayToWeekDay(today.getDay()));

let outPut = '';
function outPutString (){
    outPut = outPut + 'It\'s ' + dayToWeekDay(today.getDay())+' today!';
    outPut = outPut +'\n';
    outPut = outPut + 'Your luckly item today is ' + luckyItem() + '!';
    outPut = outPut +'\n';
    const lucklyNum = luckyNumber()
    outPut = outPut + 'Your luckly number today is ' + lucklyNum +', pay attention to thous things appear in your life by '+ lucklyNum + '!';
    outPut = outPut +'\n';
    outPut = outPut + goodSayings();
    return outPut;
}

console.log (outPutString());