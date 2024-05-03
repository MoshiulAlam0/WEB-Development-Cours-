// frist 
function even_odd(num){
    if((num % 2) === 0){
        console.log('it is a even number =',num);
    }
    else{
        console.log('it is a odd number =', num);
    }
    
}
var yourNumber = 45;
// even_odd(yourNumber);


// second way with return
function findEven_Odd(num){
var  number = 0;
var text = '';
if (num % 2 === 0) {
    number = num ;
    var even = 'this is a even number = ';
    text = even;
    
} else {
    number = num;
    var odd = 'this is a odd number = ';
    text = odd;
    
}
var thisNumberIs =  text + number;
return  thisNumberIs;
}
var myNumber = 9;
var evenORodd = findEven_Odd(myNumber);
console.log(evenORodd);
