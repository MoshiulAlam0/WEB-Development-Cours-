var isGraduate = true;
var selary = 50000;
var car = 2;

// use of '&&'
// && a sobgulo condition sotto hote hobe 
if (isGraduate == true && selary > 40000 && car >= 3){
    console.log('you are rich man ');
}
else {
    console.log("you are poor man");
}


if (isGraduate == true && selary > 40000 && car >= 1){
    console.log('you are rich man ');
}
else {
    console.log("you are poor man");
}


// use of 'or'
// 'or' a je kono akta  condition sotto holei  hobe 

if (isGraduate == true || selary > 80000 || car >= 1){
    console.log('you are rich man in your village ');
}
else {
    console.log("you are poor man");
}





// use of "&&" and "or"
if ((isGraduate == true && selary > 80000) || car >= 0){
    console.log('i have something');
}
else {
    console.log("you are poor man");
}


if (isGraduate == true && (selary > 80000 || car >= 3)){
    console.log('i have something');
}
else {
    console.log("you are poor man");
}



