/* 
recursion ki ?
recursion holo jokhon 1ta function 
ar vitor theke nijei  nijeke call kore kore aii kaj takei recursion bole 
*/
// increment++ loop
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
// console.log(sum);

// decreement-- loop
let sum2 = 0;
for (let i = 5; i >= 1; i--) {
    sum2 += i;
}
// console.log(sum2);

// recursion way with function
function sumNumbers(i){
    if (i === 1){
     return 1;
    }
    console.log(i);
    return i + sumNumbers(i-1);
}
const sum1To5 = sumNumbers(5);
console.log(sum1To5);
