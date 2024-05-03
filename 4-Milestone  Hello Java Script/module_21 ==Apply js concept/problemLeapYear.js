

function whoisLeapYear(array){
    let arrayOfLeapYear = [];
    let arrayOfNotLeapYear = [];
    for(let i = 0; i < array.length; i++){
        const element = array[i];
        // console.log(element);
        if(element >= 1582){
            if (element % 4 === 0 && element % 100 !== 0 || element % 400 === 0){
                // console.log('this', element, 'leap year');
                arrayOfLeapYear.push(element);
            }
            else{
                // console.log('this', element, 'not leap year');
                arrayOfNotLeapYear.push(element);
            }
        }
    }
    return {arrayOfLeapYear, arrayOfNotLeapYear};
}
let year = [2014, 2018, 2019, 1600, 1800, 1900, 2044, 2017, 1500, 1400];
let leapYear = whoisLeapYear(year);
console.log(leapYear);
