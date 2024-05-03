// forword 
function factorialForword(num) {
    let result = 1;
    let i = 1;
    while (i <= num) {
        result *= i;
        i++;
    }
    return result;
}
let myNumber = 7;
let myFactorial = factorialForword(myNumber);
console.log(myFactorial);

// revers way 
function factorilaRevers ( number){
    let calculetion = 1;
    let i = number;
    while ( i >= 1){
        calculetion *= i;
        i--;
    }
    return calculetion;
}
let myNumber2 = 10;
let myFactorial2 = factorilaRevers(myNumber2)
console.log(myFactorial2);