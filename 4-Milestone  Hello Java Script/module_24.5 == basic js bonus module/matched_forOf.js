// for of is used to get elements (verry simple way)
const numbers = [22, 3, 14, 56, 16, 16, 10, 19];
// frist way for get element 
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i]
    // console.log(number);
}
console.log('for of ::');
// second way is simple for get elemets with for of
for(const number of numbers){
    // console.log(number);
} 


// i am using for of and toLowerCase for find products
 const products = [
    {name:'wallton Phone', price: 19000},
    {name:'xiaomi note 11 Phone', price: 24000},
    {name:'wallton laptop', price: 40000},
    {name:'honor pHone', price: 25000},
    {name:'lenove laptop', price: 40000},
    {name:'lg phone', price: 16000},
    {name:'hp laptoP', price: 50000},

 ]
 const find = 'laptop';
 
 function findProduct (products, find){
    const onlyPhone = [];
    for (const product  of products)
if(product.name.toLowerCase().includes(find.toLowerCase())){
    onlyPhone.push(product);
}
return onlyPhone;
}
    
const totalPhone = findProduct(products, find );
console.log(totalPhone);