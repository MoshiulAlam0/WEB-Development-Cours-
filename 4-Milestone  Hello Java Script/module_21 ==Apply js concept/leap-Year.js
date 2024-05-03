/* 
leap year ::
0.leap year comes every 4th year leater
1.4 dara jodi vag jai and vag sesh jodi 0 hoi tobe seti leap year 
2.vag sesh thakle seti leap year hobe na 
*/



function isleapYear(year) {
    if (year % 4 === 0) {
        return year, 'is a leap year ';
    }
    else {
        return year, 'is not a leap year ';
    }
}
let yourYear = 2020;
let leapYear = isleapYear(yourYear);
console.log(leapYear);



let myYear = 1952;
let leapYear2 = isleapYear(myYear);
// console.log(leapYear2);

// alternative way
function leapYearCalculetor(year){
    if ((year % 4 === 0) && (year % 100 !== 0 )){
        
        return 'Yes!';
    }
    else if (year % 400 === 0){
        return 'Yes!';

    }
    else{

        return 'No!';
    }
}
let inputYear = 1600;
let calculetor = isleapYear(inputYear);
// console.log('is', inputYear, 'Leap year?',calculetor);

console.log(1582 % 400);
