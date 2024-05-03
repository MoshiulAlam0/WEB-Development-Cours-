// age amra 6 ta jinis sikheci :
// 1: var , let , const 


// 2: defolt peramitar :
function defolt (a, b = 0){
    return a + b ;
}


// 3: templet literal :
const element = `
<div>
<h1>New Heading:</h1>
<p>Hello I am a Developer.</p> 
</div>
`;

// 4: arrow function :
const arrow = (x, y) => x * y;





// 5: spread oparetor:
const arry = [3, 4, 5, 5, 5, 5, 7];
const newArr =[...arry, 9, 8, 0, 1];






// . destucturing:
const object = {  // object destucturing
    car : 'BMW',
    price: 123456,
    ceo : 'unknow',
    color : 'black'
}
const {car, color, ceo, price} = object;
console.log(car, color);
const object2 = {  // object destucturing
    car2 : 'Marcites',
    price2: 123456,
    ceo1 : 'unknow',
    color1 : 'red'
}
const {car2, price2, ...allCarInfo} = object2;
console.log(car2, allCarInfo);






const array = [444, 3, 222, 5, 294, 272]; //array destucturing;
const [frist, second, ...all] = array;
console.log(all);