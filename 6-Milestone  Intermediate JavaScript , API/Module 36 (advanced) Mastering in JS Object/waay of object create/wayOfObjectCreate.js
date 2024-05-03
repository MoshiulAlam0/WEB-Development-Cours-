/*object ke koyek vabe create kora jai
1.objcet litaral syntex ***
2. object contructor 
3. contructor funtion 
5. Object.create()
*/

// 1. 1.objcet litaral syntex ***
const parson = {
name : 'noman',
age: '22',
}
parson.city = 'Bogura'
parson.study = 'at bogura'
// console.log(parson);


// 2. object contructor 
const user = new Object();
user.name = 'emran'
user.home = 'bogura'
// console.log(user);


// 3. contructor funtion 
function Developer(name, age, skill){
this.name = name;
this.age = age;
this.skill = skill;
}
const developer2 = new Developer('noman', 22, 'genaral');
// console.log(developer2);



// 5. Object.create()     chaining toiri kore 
const newObj = Object.create(parson)
console.log(newObj);
console.log(newObj.name);