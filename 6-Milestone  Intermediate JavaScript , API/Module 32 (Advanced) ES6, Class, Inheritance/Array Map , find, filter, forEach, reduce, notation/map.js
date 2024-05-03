/* \
map ta holo onek power full akta jinis ar ki ==>>
map ar kaj holo:
1.only array jonno kaj kore,
2.array vito re loop ar kajta amra sohojei korte pari.
3.arry ar every element ar jonno loop kore je kej ka korta ta [map.(funtion)]
avabe call kore / function write koreo korte pari arki .
4. total hiisb ayta onek power full ar ki 
*/
const array = [1, 2, 3, 4, 5, 6, 7, 8];
// old 
function double (arr){
    const newArr = [];
    for(const element of arr){
        // newArr.push(element*2)
        newArr.push(makeDouble(element))
    }
    return newArr;
} 
const result = double(array);
// console.log(result);

// for double 
function makeDouble (el){
    return el * 2;
}


//you see power of Map :
const makeDouble2 = x => x *2;

const array2 = [2, 4, 6, 8, 10, 12];
// const result2 = array.map( x => x * 2 );
const result3 = array.map(makeDouble)
const result4 = array2.map(makeDouble2)
// console.log(result2);
console.log(result3);
console.log(result4);
