// function summary 
/*
function functionName(){
    functionBody
    return;
}
var returnValue = functionName(paramitar values);
*/


// example 1
function getAvarage(exam1, exam2, exam3){
    var sum = exam1 + exam2 + exam3;
    var avarage = sum / 3 ;
    var converFIxed = avarage.toFixed(2);
    var convart = parseFloat(converFIxed);
    return convart;
}

var ex1Mark = 3.90;
var ex2Mark = 3.86;
var ex3Mark = 3.78;

var totalAvarage = getAvarage(ex1Mark, ex2Mark, ex3Mark);
console.log(totalAvarage);


// example 2
