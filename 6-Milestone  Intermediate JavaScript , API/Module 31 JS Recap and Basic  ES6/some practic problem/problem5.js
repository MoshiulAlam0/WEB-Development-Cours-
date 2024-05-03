const avg = (arr) =>{
    let sum = 0;
    for(const element of arr){
        const square = Math.pow(element, 2);
        sum += square;
    }  
    return sum / arr.length;
}
const array = [2, 2, 55, 55, 44, 29, 39, 283, 4, 219, 1038]
const result = avg(array);
console.log(result);