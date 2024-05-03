function makeFiboNumber(num){
    let fiboArray = [0, 1];
    for (let i = 2; i <= num; i++) {
        let fiboNumber = fiboArray[i - 1] + fiboArray[i -2];
        // console.log(fiboNumber);
        fiboArray.push(fiboNumber);
    }
    return fiboArray;
}

let howMuchFiboDoYouWont = 10;
let fiboNumber = makeFiboNumber(howMuchFiboDoYouWont);
console.log(fiboNumber);