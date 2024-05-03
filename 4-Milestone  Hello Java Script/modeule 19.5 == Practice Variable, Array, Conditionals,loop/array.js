/*
--------------
ARRAY
--------------
1.what is the purpose of array?
2.how to declare an array in JS?
3.array.langht
4.what is the index ?
5.find the value of an elemant by the index?
6.change an element by the index?
7.get the index of an element by the value ?
8.what dose it mean undefined whon you find out value of an element by the index?
9.push
10.pop
11.unshift
12.shift
*/



// problem solve::::::::::::::
/*
1. problem
array stores more values togeder 
*/
// 2. problem
var name = ['noman', 'abid', 'baizit', 'emran'];
var age = [ 22, 33, 44, 55, 44, 66];

//3.problem
var marks = [33, 50, 44, 30, 39];
console.log(marks.length);

//4.problem
/*index is a number of element in array
*/

//5.problem
var rulls = [11, 10, 4, 56, 40];
var findValues = rulls[1];
console.log(findValues);

//6.problem
var man = [2, 3, 4, 8, 6, 7];
man[3] = 5;
console.log(man);


//7.problem 
var price = [20, 23, 33, 40];
var findIndex = price.indexOf(33);
console.log(findIndex);


// 8.problem
var number = [ 55, 44, 33, 22, 66, 22,];
console.log(number[9]);


//9.problem 
var vegtable = ['tomato', 'chili', 'onion'];
var addValue = vegtable.push('carrot');
console.log(vegtable);


//10.problem 
var items = ['pen', 'sunglass', 'notes', 'vage']
var removeLast = items.pop();
console.log(items);


//11.problem
var addFrist = items.unshift('cup');
console.log(items);


//12.problem
var removeFrist = items.shift();
console.log(items);