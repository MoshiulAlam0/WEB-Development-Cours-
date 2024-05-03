// how will i find odd numbers using function form the array
function findOddNumber(array) {
    let oddNumber = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element % 2 !== 0) {
            oddNumber.push(element);
        }
    }
    return oddNumber;
}

let numbers = [12, 21, 13, 14, 15, 57, 19, 29];
let oddNumber = findOddNumber(numbers);
// console.log(oddNumber);


// how will i sum  unsing function of odd nummbers
function findOddSum(array1) {
    let oddSum = 0;
    for (let i = 0; i < array1.length; i++) {
        let element = array1[i];
        if (element % 2 !== 0) {
            oddSum += element;
        }
    }
    return oddSum;
}

let myArray = [12, 21, 13, 14, 15, 57, 19, 29];
let sumOfArrayOdd = findOddSum(numbers);
console.log(sumOfArrayOdd);