const buttle = {name:"round-buttle", color:'golden', price: 200, isCleaned : true, byeDate: '12/1/2023'}
// for get all keys of object =====>
const all_keys = Object.keys(buttle);
// console.log(all_keys);

// for get all values of obj propertys ====>
const all_values = Object.values(buttle);
// console.log(all_values);


// for get values and keys tugether pear by pear ====>
const all_keysAndValues = Object.entries(buttle);
// console.log(all_keysAndValues);

// const twoDaimantionalArry = [
//     [ 'name', 'round-buttle' ],
//     [ 'color', 'golden' ],      /// mane array ar vitore array 
//     [ 'price', 200 ],
//     [ 'isCleaned', true ],
//     [ 'byeDate', '12/1/2023' ]
// ]



// for delete any array of object =====>
// delete buttle.color;
// console.log(buttle);



/* 
Object.seal(buttle) ==> ke seal korle object theke kono property ke add , remove/ delete kora jabe na but 
modefy kora jabe  
 ==================..>>*/
// Object.seal(buttle);
// delete buttle.isCleaned;
// console.log(buttle);

// buttle.heaight = 12;
// console.log(buttle);

// buttle.price = 1200;
// console.log(buttle);




/* 
Object.freeze(buttle) ==> ke freeze korle object theke kono property ke add , remove/ delete , mudefy kicui kora 
jabe na 
  ===================>>> */
Object.freeze(buttle)
delete buttle.isCleaned;
console.log(buttle);

buttle.heaight = 12;
console.log(buttle);

buttle.price = 1200;
console.log(buttle);
