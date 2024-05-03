function hourToMin(hour){
    const convertHourToMin = hour * 60;
    const convertMinToSec = convertHourToMin * 60;
    return ['minite:', convertHourToMin,"second is:", convertMinToSec];
} 

let inputYourHour = 23;
let timeCalculetor = hourToMin(inputYourHour);
console.log(timeCalculetor);
