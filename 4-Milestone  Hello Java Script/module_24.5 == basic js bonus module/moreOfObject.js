// object ar vitore Array, object, function and etc thakte pare 

const studert ={
    name: 'emran',
    id: 121,
    address: 'bogura',
    isMarried: false,
    friend:['noman', 'baizit', 'moshiul', 'selim'],
    bike:{
        brand: 'discover',
        price: '120000',
    },

    isBoy: function (num, num1){
if (num + num1 === 3) {
    console.log("boy");
    
}
    },
    charectar:[{sele: 'valo', color: 'whait'}, {isthink: 'mideam', hear: 'black'}]
}
// let values = studert.charectar[0];
// let change = values.color = 'black';
// console.log(studert.charectar);
studert.isBoy(1, 2)