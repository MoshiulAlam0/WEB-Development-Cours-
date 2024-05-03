/* 
filter: filter holo je kono array ar vitor theke condition diye element gulare cakni 
diye ber kore niye asa 

*/

const someNums = [33, 33, 92, 93, 84, 84, 91, 83, 50, 70];
const getterThan50 = someNums.filter( n => n > 50);
console.log(getterThan50);


const products = [
    {name: 'phone', price : 45000},
    {name: 'bike', price : 40000},
    {name: 'car', price : 9000000},
    {name: 'watch', price : 4040},
    {name: 't-shart', price : 800}
]
const chipest = products.filter( p => p.price < 5000);
console.log(chipest);