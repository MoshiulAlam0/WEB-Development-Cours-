var side1 = 6;
var side2 = 9;
var side3 = 5;
var isosceles = 'this tringle is isosceles';
var equilateral = 'this trangle is equilateral';
var notequilateral = 'this trangle is not equilateral';
if (side1 == side2 || side1 == side3 || side2 == side3) {
    if(side1 == side2 && side1 == side3 && side2 == side3){
        console.log(equilateral);
    }
    else{
        console.log(isosceles);
    }
}
else{
    console.log(notequilateral);
}



