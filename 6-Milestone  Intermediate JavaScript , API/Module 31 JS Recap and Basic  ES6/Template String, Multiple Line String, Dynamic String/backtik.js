/* 
(``) Symbol name is backtik
1, multeLine esely create kora jai 
2, string ke sohojei dainamic kora jai 
etc aro kicu power ace ar ki 
*/


// old sytem for multeline 
const multeLine = 'hello i am ridoy \n'+
'i going to be a developer in sha allah \n'+
'its a verrry heard system';
// console.log(multeLine);


// new sytem for multeLine (power of backtik)
const newLine = `hello!
ridoy is here 
i am going to be a developer`;
// console.log(newLine);


// dinamic string old system 
const a = 10;
const b = 20;
const sum = a + b;

const result = 'value of a: '+ a + ' value of b: ' + 'total is : '+ sum;
// console.log(result);


// dinamic string new system (power of ``)
const arr = [33, 5, 33, 29, 49, 20, 22];
const j = 10;
const k = 20;
const total = j + k;
const info = `value of ${a} and value of ${b}, than total is ${sum} and substac ${a-b} leangth of arr is ${arr.length}`;
console.log(info);
