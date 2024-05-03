/*
--------------
CONDITIONAL
--------------
1.meaning of : >, <, >=, <=, ==, !=, ===, !==
2.meaning of:  &&, ||
3.let's say , you have "x" amount of money. 
if you have more than 88,000, than you will buy the "mac book",
if more then 60,000 then you will buy the "laptop",
if more then 40,000 then you will buy the "lenovo Yogo",
if mone than 20,000 than you will buy the "used laptop",
otherwise, you will use you "mobail phone".

*/

// problem solve ::::::
var myMoney = 100000;
var macBook = 80000;
var laptop = 60000;
var lenovoYoga = 40000;
var useLaptop = 20000;

if(myMoney > macBook){
    console.log('you will buy the mac book');
}
else if(myMoney > laptop){
    console.log('you will buy the laptop');
}
else if(myMoney > lenovoYoga){
    console.log('you will buy the lenovo yoga');
}
else if(myMoney > useLaptop){
    console.log('you will buy the use laptop');
}
else{
    console.log('you will buy the mobail Phone');
}