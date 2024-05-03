// let sum = 0;
// for (let i = 1; i <= 7; i++) {
//     sum += i;
//     console.log(sum);
// }


function sumOfNumbers(numbers) {
    let sum = 0;
    for (let i = 1; i <= numbers; i++) {
        sum += i;
    }
     return sum;
}

let howMuchNumber = 9;
let yourResult = sumOfNumbers(howMuchNumber);
console.log('Sum :',yourResult);