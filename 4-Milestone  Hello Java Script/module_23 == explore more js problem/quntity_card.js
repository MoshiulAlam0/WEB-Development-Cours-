// we will sum all product price in array 

const shopping = [
    { name: 'pant', price: 3100 ,quntity: 4},
    { name: 'shart', price: 3400 ,quntity: 3},
    { name: 'shows', price: 3300 ,quntity: 2},
    { name: 't-shart', price: 1200 ,quntity: 5},
    { name: 'belt', price: 970 ,quntity: 2},
]

function productSum(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const totalcost = product.price * product.quntity;
        sum += totalcost;
    }

    return sum;
}


const tolatExpant = productSum(shopping);
console.log('Total spent today:',tolatExpant,'$');