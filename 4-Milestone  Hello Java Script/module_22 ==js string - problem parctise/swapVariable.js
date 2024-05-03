// dui variable ar moddhe value gulate odol bodol kora  arki 
let num1 = 3;
let num2 = 5;
// wronk way 
num1 = num2;
num2 = num1;
console.log(num1, num2);

// right way 1 for swap 
let num3 = 7;
let num4 = 9;
console.log(num3, num4);

let storeNum3 = num3; // num3 velue has been stored here 
num3 = num4;
num4 = storeNum3;
console.log(num3, num4);


// right way 2 for swap
let number1 = 55;
let number2 = 66;
console.log(number1, number2);

[number1, number2] = [number2, number1]; //value is being swept with array
console.log(number1, number2); 
