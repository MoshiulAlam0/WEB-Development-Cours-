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
const color = products[0].size?.name?.type;
console.log(color);