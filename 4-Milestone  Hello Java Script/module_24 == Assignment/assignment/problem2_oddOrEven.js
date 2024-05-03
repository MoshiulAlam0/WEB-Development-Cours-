const name = 'kingKobra';
function evenOdd(string){
    const length = string.length;
    if (length % 2 === 0){
        return 'even';
    }
    else if( length % 2 === 1){
        return 'odd';
    }
    else{
        return 'plase input the prime number'
    }
}

const isEvenOrOdd = evenOdd(name);
console.log(isEvenOrOdd);