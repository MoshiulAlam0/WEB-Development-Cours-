let phones = [
    {phoneName: 'sumsung', camara: 100, price: 30000, color: 'black'},
    {phoneName: 'Iphone', camara: 60, price: 60000, color: 'black'},
    {phoneName: 'blackBary', camara: 19, price: 70000, color: 'pink'},
    {phoneName: 'oppo', camara: 10, price: 20000, color: 'black'},
    {phoneName: 'xaome', camara: 28, price: 18000, color: 'red'},
    {phoneName: 'wolton', camara: 30, price: 30000, color: 'gray'}
]

function cheapestPhone (arrayWithObj){
    let chipest = arrayWithObj[0];
 for(let i = 0; i < arrayWithObj.length; i++){
    let element = arrayWithObj[i];
    if(element.price < chipest.price){
        chipest = element;
    }
 }
 let hightCamara = arrayWithObj[0];
 for(let i = 0; i < arrayWithObj.length; i++){
    let element = arrayWithObj[i];
    if(element.camera > hightCamara.camera){
        hightCamara = element;
    }
 }
 return {
    chipest,
    hightCamara
 };
}

let mySelection = cheapestPhone(phones);
console.log(mySelection);

