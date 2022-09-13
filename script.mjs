import resources from "./function.mjs";

const {dayToWeekDay,
        luckyItem } = resources;

const today = new Date();

//console.log(dayToWeekDay(today.getDay()));

let outPut = '';
function outPutString (){
    outPut = outPut + 'It\'s ' + dayToWeekDay(today.getDay())+' today!';
    outPut = outPut +'\n'
    outPut = outPut + 'Your luckly item today is' + luckyItem() + '!';
    return outPut;
}

console.log (outPutString());