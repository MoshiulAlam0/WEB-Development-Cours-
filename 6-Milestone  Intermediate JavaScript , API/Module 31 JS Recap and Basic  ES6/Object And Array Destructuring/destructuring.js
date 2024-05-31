// array and object theke amra sohojei ader value / property gulare pete pari 

// ---------------object dectructuring------------->>>>
const fish = {
    name : 'king hilsha',
    age : 1,
    address: 'river',
    price: 1200,
    color: 'silver'
}

// console.log(Object.entries(fish));
// console.log(delete fish.age);
// console.log(fish);

// normal way 
const Fishname = fish.name;
const fishage = fish.age;
// console.log(Fishname, fishage);

// smart way with destructring 
// [note: poperty jei nam ta ace destructring korte hole variable ar name same dite hobe]
const {name} = fish;
// console.log(name);
const {price, age, address, color} = fish;
// console.log(age, price);


// -----------------array destructring-------------------->>
//array ar jonno variable a jekono name doya jabe 
const names = ['noman', 'baizit', 'emran', 'mamun', 'nayan'];
const numbers = [33, 44, 22, 34, 53, 62, 16, 19];

const [first, second] = names;
console.log(second, first);

const [no1, no2, no3, no4, no5] = numbers;
console.log(no5);

function add(){
    return ['alen', 'rokki'];
}
const [name1, name2] = add();
console.log(name2, name1);