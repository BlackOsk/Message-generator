function dayToWeekDay(dayNum){
    if(dayNum === 1){
        return 'Monday';
    }else if(dayNum === 2){
        return 'Tuesday';
    }else if(dayNum === 3){
        return 'Wednesday';
    }else if(dayNum === 4){
        return 'Thursday';
    }else if(dayNum === 5){
        return 'Friday';
    }else if(dayNum === 6){
        return 'Saturday';
    }else if(dayNum === 0){
        return 'Sunday';
    }
}



const resources = {
    dayToWeekDay,
}

export default resources;
