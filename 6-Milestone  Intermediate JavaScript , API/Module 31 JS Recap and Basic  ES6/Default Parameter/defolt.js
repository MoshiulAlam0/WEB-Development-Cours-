// paramitar ar value na diye defolt hisabeo value set kora jai:

// old version
// function add(first, second) {
//     second = second || 0;         /// way 1: short hand
//     // if (second === undefined) {   /// way 2: if else
//     //     second = 0
//     // }
//     return first + second;
// }

// const result = add(1);
// console.log(result);




// new version 
function newAdd (first = 0, second = 0){    /// paramitarei amra defolt value set kore dite pari
    return first + second;
}
const sum = newAdd(22, 33);
console.log(sum);




function fullName(first, last = '$khan'){
    return first + " " + last;
}
const name = fullName('noman');
console.log(name);