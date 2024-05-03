// how to sum form an array
// program1
function sumFormArray(array){
    let sum = 0;
    for (var i = 0; i < array.length; i++){
        const element = array[i];
        sum += element;
        // console.log(i, element, sum);
    }
    return sum;
}
let myNum = [20, 22, 44, 59, 39, 40, 30, 39, 30];
const sumOfArray = sumFormArray(myNum);
console.log(sumOfArray);


// how to sum odd number form an array 
// program2
 function sumOddFormArray(numbers){
    let oddNumber = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
   if(element % 2 !== 0){
    oddNumber.push(element);
   }
}
return oddNumber;
 }



 const myArray = [22, 33, 44, 55, 33, 27, 29, 20, 10, 22, 13, 89, 98, 33, 31, 91];
 const myOddArrayIs = sumOddFormArray(myArray);
 const myOddSumIs = sumFormArray(myOddArrayIs)
 console.log(myOddArrayIs, 'my Odd number sum is =', myOddSumIs);