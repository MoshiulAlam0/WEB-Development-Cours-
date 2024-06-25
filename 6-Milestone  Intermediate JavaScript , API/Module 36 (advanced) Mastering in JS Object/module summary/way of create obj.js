/* 5 way to create obj
1.object literal syntax.
2.object constractor
3.constractor function
4.ES6 class
5.Object.create
 */  

// 1. object literal syntax 
const user = {
    name: 'baizit',
    age:'20+',
    money : 3000,
}

// 2.object constractor 
let user1 = new Object();
user1.name = 'baizit koraish'
user1.age = '18+'

// 3. object constractor function 
// you have to call by new key word 
function user3 (name, age ){
    this.name = name;
    this.age = age;
}
let noman = new user3('noman', '19+');
console.log(noman);
let emran = new user3('emaran', '20+');
console.log(emran);

// 4. class {ES6} to get more details you can chack {module 32}
class Parsone {
    name;
    age = '20+';
    constructor(name, location, money){
        this.name = name;
        this.location = location;
        this.money = money;
    }
}

let shipon = new Parsone('shipon', 'bogura', 3000);
console.log(shipon);

// object create  
/*
note : as a prototype chaine you have to write (null) or (any obj)
 */
// prototype null
let emranVai = Object.create(null);
console.log(emranVai);
// prototype Object [it'll make a prototripical cahaine with shipon obj]
let boroVai = Object.create(shipon);
console.log(boroVai.name);