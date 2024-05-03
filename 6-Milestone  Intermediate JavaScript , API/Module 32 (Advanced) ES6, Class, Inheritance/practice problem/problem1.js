// map , filter , find 
// problem 1 map
const odd = [1, 3, 5, 7, 9, 11, 13, 15, 17 ];

// way 1
const eventNum = [];
for (let i = 0; i < odd.length; i++){
    const element = odd[i];
    eventNum.push(element + 1);
}
console.log(eventNum);

// way2
const eventNumbers = odd.map( e => e + 1);
console.log(eventNumbers);


// problem 2 filter 
const numbers = [18, 50 , 20, 30, 84, 15, 90, 270];
const dividedByTen = numbers.filter( e => e % 10 === 0);
console.log(dividedByTen);

// problem filter 
const fristTen = numbers.find( e => e % 10 === 0);
console.log(fristTen);



