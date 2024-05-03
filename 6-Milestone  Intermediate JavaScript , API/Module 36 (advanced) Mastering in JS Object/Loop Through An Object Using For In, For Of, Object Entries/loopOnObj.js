// {for of} is used on the array 
let array = [ 22, 22, 1, 34, 22, 41, 53, 4,1]
for (const item of array){
    // console.log(item);
}



// -------------------Object------------------
// {for in } is used on object 

let buttle = {color:'white', isCleaned : true, price: 1200, byeDate: '13/ 03/ 2023', type: 'long', size: 'small'}
/* 
3 way to read object property:
1.buttle.color   // if property name sothik vabe jana thake 
2.buttle['color']
2.buttle[key] // if variable a property name thake 
*/

// 3 way of loop on the object ===========>
// 1.for of 
let property = Object.keys(buttle);
for (const key of property){
    // console.log(key, buttle[key]);
}

// 2. for in 
for (const key in buttle){
    // console.log(key, buttle[key]);
}

// 3.advanced
let Pear = Object.entries(buttle);
// console.log(Pear);
for (const [key, value] of Object.entries(buttle)){  // destructuring kora hoyece `const [key, value ]`
    console.log(key, value);
}