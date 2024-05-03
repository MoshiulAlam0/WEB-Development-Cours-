/* 
1. show number form 1 to 50
2.if number is divisible by 3 than you will output 'foo'
3.if number is divisible by 5 than you will output 'bar'
4.if number is divisible by 3 and 5 together  than you will output 'foobar'

*/


function printNumWithFoobar(number){
    for (let i = 1; i <= number; i++) {
          if( (i % 5 === 0) && (i % 3 === 0)){
            console.log('foobar');
          }  
          else if ( i % 5 === 0){
            console.log('bar');
          }
          else if (i % 3 === 0 ){
            console.log('foo');
          }
          else{
            console.log(i);
          }
        }
        
    }


const howMuchNumber = 50;
printNumWithFoobar(howMuchNumber);