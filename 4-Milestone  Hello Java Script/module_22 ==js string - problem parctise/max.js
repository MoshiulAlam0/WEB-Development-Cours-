function findMax(j, d){
   if (j != d){
    if (j > d ){
        console.log('jimi will get the cacke ');
    }
    else{
        console.log('dela will get the cacke ');
    }
   }
   else{
    console.log('jime and dela have gatten same number ');
   }
}

let jimi = 84;
let dela = 97;

// findMax(jimi, dela);

// find max number by the 3 number 

function maxNumber (j, d, c) {
    if(j > d && j > c ){
console.log('jimi will get the cacke ');

    }
    else if (d > j && d > c ){
console.log('dela will get the cacke');

    }
    else{
        console.log('chinku will get the cacke');
    }
}

let jimi1 = 89;
let dela2 = 69;
let chinku3 = 88;
maxNumber(jimi1, dela2, chinku3);

// let numbers = [ 22, 33, 44, 56, 43, 222, 57, 444, 3333, 22, 555, 776, 333, ];
// console.log(Math.max(...numbers));

function findMaxNumber(r, u, m){
    const max = Math.max(r, u, m);
    return max;
}

const riad = 89;
const ujjjal = 83;
const mahedi = 90;
const maxNumber3 = findMaxNumber(riad, ujjjal, mahedi);
console.log(maxNumber3);