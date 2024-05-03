// is it array or not array for chake Array.isArray(arrayName)is used
let age =[12, 33,43 , 35, 33, 55, 25, 51];
console.log(Array.isArray(age));

// put to array for together 
let age3 = [33, 53, 24, 53, 52, 52, 25];
const megaArray = age.concat(age3);
console.log(megaArray);

// includes is used to check if there is something in the array

let check = age3.includes(24);
console.log(check);