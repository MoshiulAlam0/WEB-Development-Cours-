function evenCheker(num) {
    let result = true;
    if (num % 2 === 0) {
        result = true;
    }
    else{
        result = false;
    }
    return result;
}

let yourEvenNum = 99;
let thisNumIs = evenCheker(yourEvenNum);
console.log(thisNumIs);
