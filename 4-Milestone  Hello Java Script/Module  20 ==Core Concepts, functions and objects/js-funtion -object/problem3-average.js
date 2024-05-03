function make_avg( num1, num2, num3, num4, num5, num6 ){
    const sum = (num1 + num2 + num3 + num4 + num5 + num6) / 6 ;
    const fixed = sum.toFixed(2);
    const convert = parseFloat(fixed);
    return convert;

}

var age = [23, 24, 34, 21, 20, 30];

const avg = make_avg(age[0], age[1], age[2], age[3], age[4], age[5]);
// console.log(avg);

// altranative
// it's a best way for average  determination 2
function gor(array){
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];   
    }
    var avg = sum / array.length;
    var fixed = avg.toFixed(2);
    var convert = parseFloat(fixed);
    return convert;
}
var markes = [22, 33, 44, 54, 33, 50 ,70 ];
var totalAvg = gor(markes);
console.log('average number is =',totalAvg);