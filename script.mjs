import resources from "./function.mjs";

const {dayToWeekDay } = resources;

const today = new Date();

//console.log(dayToWeekDay(today.getDay()));

let outPut = '';
function outPutString (){
    outPut = outPut + 'It\'s ' + dayToWeekDay(today.getDay())+' today!';

    return outPut;
}

console.log (outPutString());