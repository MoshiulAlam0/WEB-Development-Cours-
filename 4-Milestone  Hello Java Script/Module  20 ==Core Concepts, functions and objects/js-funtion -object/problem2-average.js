function make_avg(num, num1, num2){
    var sum = num + num1 + num2;
    var avg = sum / 3;
    return avg;
}

var  fristNum = 10 ;
var secondNum = 20;
var thirdNum = 30;

const totalAvg = make_avg(fristNum, secondNum,thirdNum);
console.log(totalAvg);

