// function avg(input){
//     var i = 0;
//     while(i < 5){
//    console.log("its ok" );  
//    i++;   
// }

// // var age  = [11, 23, 22, 33, 44];
// // var totalAvg = avg (age);
// // console.log(totalAvg);

function gor(array){
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];   
    }
    var avg = sum / array.length;
    return avg;
}
var array = [22, 33, 44, 54, 33];
var totalAvg = gor(array);
console.log(totalAvg);