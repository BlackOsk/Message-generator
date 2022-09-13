import resources from "./function.js";

const {dayToWeekDay,
        luckyItem,
        luckyNumber,
        goodSayings } = resources;

const today = new Date();

//console.log(dayToWeekDay(today.getDay()));

let outPut = '';
function outPutString (){
    outPut = outPut + 'It\'s ' + dayToWeekDay(today.getDay())+' today!';
    outPut = outPut +'<br>';
    outPut = outPut + 'Your luckly item today is ' + luckyItem() + '!';
    outPut = outPut +'<br>';
    const lucklyNum = luckyNumber()
    outPut = outPut + 'Your luckly number today is ' + lucklyNum +', pay attention to thous things appear in your life by '+ lucklyNum + '!';
    outPut = outPut +'<br>';
    outPut = outPut + goodSayings();
    return outPut;
}

let htmlDisplay = document.getElementById('display');
let button = document.getElementById('button')
/* button.addEventListener('click',(){
    htmlDisplay.innerHTML = 'The string';
}); */
let clickNum = 0;
button.addEventListener('click', ()=>{
    if(clickNum === 0){
        htmlDisplay.innerHTML = outPutString();
        clickNum++;
    }
})

