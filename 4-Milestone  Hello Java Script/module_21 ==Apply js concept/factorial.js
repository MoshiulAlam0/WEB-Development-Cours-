// koro sonkhar factorial holo oii sonkha theke 1 porjonto gun arki 
/* 

factorial(!) ke sonkhipto vabe bole = 4 !;
##.4 ar factorial holo 1 theke 4 porjonto gun ar ki 
1.4! ar factorial:   4 * 3 * 2 * 1 ;
2. 3! ar factorial :  3 * 2 * 1 ;
3. 2! ar factorial : 2 * 1 ;
note:[amon vabeo lekhte pari =
    //short hand hishebe likhte pari ar ki:
    1. 4! = 4 * 3!;

    // jodi aro aktu extrim level ar ki :
    2. 4! = 4 * (4-1)!;
]


*/


// how to find factorial for any number 
function findFantorial (number){
    let  result = 1;
     for (let i = 1; i <= number; i++){
  console.log(result *= i);
}
return result;
}

let factorialNumber = 4;
let factorialIs = findFantorial(factorialNumber);
console.log(factorialIs);
//  revers 

function findFantorialRevers (number){
   let  result = 1;
    for (let i = number; i >= 1; i--){
 result *= i;
    }
    return result;
}

let factorialNumber2 = 4;
let factorialReversIs = findFantorialRevers(factorialNumber);
console.log(factorialReversIs);




