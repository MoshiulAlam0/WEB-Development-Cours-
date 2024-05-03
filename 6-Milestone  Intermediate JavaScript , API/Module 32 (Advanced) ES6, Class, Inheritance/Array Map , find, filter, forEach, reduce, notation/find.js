/* 
find ar filter priye similar 
1.filte array theke  condition onusare khuje khuje  sob gula element re diya dei,
2.find filter er moto khuje khuje frist ar jeita pabe oii tarei diya dibe ar ki 
*/

const someNums = [33, 33, 92, 93, 84, 84, 91, 83, 50, 70];
const divaidedBy2 = someNums.find( n => n % 2 === 0);
const divaidedBy2_2 = someNums.filter( n => n % 2 === 0);
// console.log(divaidedBy2);
// console.log(divaidedBy2_2);

const products = [
    {name: 'phone', price : 45000},
    {name: 'bike', price : 40000},
    {name: 'car', price : 9000000},
    {name: 'watch', price : 4040},
    {name: 't-shart', price : 800}
]
const lowest = products.find( p => p.price < 5000);
const lowest2 = products.filter( p => p.price < 5000);
console.log(lowest);
console.log(lowest2);