/*
------------
VARIABLE
------------
1.what is javascript ?
2.how does js works?
3.what is variable ?
4.declare a variable
5.types of variable? how can you find out types of variable
6.primitive and non-primitive data types
7.naming about of variable
8.math oparation +, -, /, %.
9.shorthand +=, -=, *=,  /=, ++, --
10.parseInt , parseFloat
11. tofixed
*/


// problem solve:::::::::::::
/*
1. java script is a problaming language for basically web and other .
2.the java script source code is converted to bytecode and executed at runtime.
3.variable is conteainer/sorege.
*/
// 4.declare a variable
var price = 1440;
var name = 'noman';
var isDo = true;

// 5.------------
var tomaro = 30;
var type = typeof tomaro;
console.log(type);

//6. data types=====
/* primitive:
1.string 2.number 3.bolean 4.nul 5.symble 6.infinity 
*non primitive :
1.object 


7. naming about of variable =====
#Reserve  key is not use
#not start with number 
#not use (-)
#( _ ) is use 
# spach not use 
#you won't be able to use  quotation (" ")
#you will be able to use snake case and camel case 
#js is case sencitive 
*/


// 8============
var greneChili = 10;
var redChili = 23;
var sum = greneChili + redChili
console.log(sum);

var momGive = 1000;
var totalExpand = 400;
var nowMyCash = momGive - totalExpand;
console.log(nowMyCash);

var tomato = 12;
var quntity = 3;
var multipication = tomaro * quntity;
console.log(multipication);

var taka = 2000;
var man = 8;
var divition = taka / man;
console.log(divition);

var number = 33;
var divideBy = 4;
var remainder = number % divideBy;
console.log(remainder);


// 9.======
var num = 33;
num = num + 1;
console.log(num);
num += 5;
console.log(num);

var num1 = 10;
num1 -= 6;
console.log(num1);


var num2 = 10;
num2 *= 2;
console.log(num2);

var num3 = 20;
num3 /= 4;
console.log(num3);

var i = 30;
i++;
console.log(i);

var r = 40;
r --;
console.log(r);

var age = '13';
var convert = parseInt(age);
console.log(convert);


var gpa = "3.55";
var convertStof = parseFloat (gpa);
console.log(convertStof);


var number = 3 ;
var number2 = 0.1;
var multipications = number * number2;
var fixed = multipications.toFixed(2);
var convertStringToFlote = parseFloat (fixed);
console.log(multipications);
console.log(fixed);
console.log(convertStringToFlote);

