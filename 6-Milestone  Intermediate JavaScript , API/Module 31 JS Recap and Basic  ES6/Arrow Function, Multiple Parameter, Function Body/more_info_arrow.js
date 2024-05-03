// for no paramitar 
const getPiValue = () => 3.14;
const noPera = () => 'para nai' + 'chill chill!';

const value = getPiValue();
// console.log(value);



// for one paramitar
const add = (one) => one * 2;
const addV2 = one => one * 3;



// for multiple peramitar 
const multiple = (a, b, c, x, y, z, p) => ( a + b + c + x ) - ( y + z + p ); 
const total = multiple(2, 3, 4, 5, 5, 6, 7);
// console.log(total);



// for multiLine code 
const big = (x, y, z, h) => {
const sum = x + y + z + h;
const total = sum * 3;
const final = total / 2;
const result = total - final;
return result;
}

const totalResult = big(22, 4, 11, 5);
console.log(totalResult);