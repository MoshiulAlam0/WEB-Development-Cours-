// rediuce
const array = [2, 4, 5, 6, 7, 8, 10];
// frist way 
let sum = 0;
for(let i = 0; i < array.length; i++){
    const num = array[i];
    sum += num;
}
console.log(sum);
// way 2
let sum2 = 0;
for(const num of array){
    sum2 += num;
}
console.log(sum2);

// way of rediuce 
const total = array.reduce((claculetion , element) => claculetion + element , 0);
console.log(total);



// problem chalanging of rediuce: 
const pepole =[
    {name:'noman', age: 23},
    {name:'baizit', age: 21},
    {name:'emran', age: 22},
    {name:'moshiul', age: 23},
    {name:'mamun', age: 22}
];
const sumTotal = pepole.reduce((sum, element) => sum + element.age, 0 );
console.log(sumTotal);
