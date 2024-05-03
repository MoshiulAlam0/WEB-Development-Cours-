let array = [11, 4, 43, 53, 332, 53, 254, 64, 74, 74, 73, 63, 832, 54];
console.log(array.length);
let sliceNum =[];
function sliceArray(array, num){
    let oldNum = 0;
    let newNum = 3;
    
    let slice = array.slice(oldNum, newNum);
    console.log(slice);
}