// map 
const numbers = [1, 2, 3, 4, 5, 6, 7];
const multiple = numbers.map(n => n * 5);
console.log(multiple);

// filter 
const numbers2 = [33, 4, 44, 29, 83, 84, 92, 74, 67];
const onlyEven = numbers2.filter(x => x % 2 === 0);
console.log(onlyEven);

// find 
const products = [
    {
        name: 't-shart',
        size: {
            type: 'x', price: 6000
        },
    },
    {
        name: 'pent',
        size: {
            type: 'm', price: 4000
        },
    },
    {
        name: 'hudi',
        size: {
            type: 'xl', price: 5050
        },
    },

]
const expensive = product.find(x => x.size.price >= 5000);
console.log(expensive);