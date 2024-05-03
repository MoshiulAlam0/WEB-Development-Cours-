var fristSide = 5 ;
var secondSide = 2;
var threadSide = 9;


// if ((fristSide == secondSide) || (secondSide == threadSide) || (fristSide == threadSide)){
// console.log("this is a isosceles");
// }
// else{
//     console.log('this is not a isosceles');
// }

var equal1 = fristSide == secondSide ;
var equal2 = fristSide == threadSide ;
var equal3 = secondSide == threadSide ;

if ((fristSide == secondSide) || (secondSide == threadSide) || (fristSide == threadSide)){
    if(equal1 && equal2 && equal3){
        console.log("this is a not  isosceles");
    }
    else{
        console.log("this is a  isosceles"); 
    }
}
else{
    console.log('all number is unequal');
}