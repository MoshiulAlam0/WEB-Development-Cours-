// spread oparator:------>>(...array)
/* 
1.kono array theke jodi sob gula opadan nite chai tobe array ar age (...array) bosaite hobe 
*/

const numbers = [33, 5, 22, 5534, 6678, 999, 209484, 4, 5];
const numbers1 = [33, 5, 22, 5534, 6678, 999, 209484, 4, 5];
const names = ['mamun', 'nayan', 'emran', 'baizit', 'noman'];

const mxNumber = Math.max(33, 44, 100, 345, 666, 7);
// console.log(mxNumber);

// for take form array 
const minNum = Math.min(...numbers);
// console.log(minNum);
const maxNum = Math.max(...numbers1);
// console.log(maxNum);
// console.log(...names);


// if you want to make a variable by array ----
const numbers3 = numbers;    // it is wrong way 
// numbers.pop();
// numbers.push(5555555)
// numbers3.pop();
// numbers3.push(66666666999)
// console.log(numbers); 
// console.log(numbers3); 

// right way 
const numbers5 = [numbers];
numbers.pop();
numbers.push(44);
numbers5.push(55555)
console.log(numbers);
// console.log(numbers5);


const numbers4 = [...numbers];
numbers.push(177);
numbers4.push(9000);
// console.log(numbers);
// console.log(numbers4);
const numbers8 = [100,...numbers, 404];
// console.log(numbers8);