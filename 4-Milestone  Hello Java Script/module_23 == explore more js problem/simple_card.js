// we will sum all product price in array 

const shopping = [
    { name: 'pant', price: 2200 },
    { name: 'shart', price: 3400 },
    { name: 't-shart', price: 800 },
    { name: 'belt', price: 700 },
    { name: 'shows', price: 2400 },
]

function productSum(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum += product.price;
    }

    return sum;
}


const tolatExpant = productSum(shopping);
console.log('Total spent today:',tolatExpant,'$');