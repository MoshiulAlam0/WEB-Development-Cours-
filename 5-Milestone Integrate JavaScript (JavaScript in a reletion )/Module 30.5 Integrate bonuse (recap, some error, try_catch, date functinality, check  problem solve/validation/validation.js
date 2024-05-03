// ----------------------typeof cheke[number, string, bolean]----------------
// const name = 'mamun';
// const name = 55;

// if(typeof(name) === 'string'){
//     console.log('this is a string');
// }
// else {
//     console.log('this is not a string');
// }





// --------------array check--------------
// const arr = [44, 55, 444, 24, 53, 22];
// const obj = {
//     name:'noman',
//     profetion:'student',
//     age: 22
// };

// if(Array.isArray(arr) ===   true){
//     console.log('this is a array');
// }
// else {
//     console.log('this is not a array');
// }






// ------------null check-----------
// const num0 = '33';
// const num1 = 44;
// const num2 = 'noman';

// // console.log(isNaN(num2));

// if(isNaN(num1) === true){
//    console.log('its not a number '); 
// }
// else{
//     console.log('its a number ');
// }



// ---------------------undefined check------------- 
function check (){
    return;
    // return 2+2;
}

 const result = check();
 console.log(result);
 console.log(typeof(result));


 if(typeof(result) === 'undefined'){
    console.log('its a undefiened');
}
else{
    console.log('its a not undefiened'); 
}