// arguments is used only in the function, It works to show all parameters 
// it's array like object
function arguments(num,  num1, num2){
    console.log(num, num1, num2);
    console.log(arguments);
    console.log(arguments[5]);
}
arguments(1, 23, 44, 55, 35, 63, 30)