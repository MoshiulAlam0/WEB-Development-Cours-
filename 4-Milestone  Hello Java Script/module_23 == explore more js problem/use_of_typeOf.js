// using typeof
function chack(num, num1) {
    if (typeof(num) !== "number" || typeof(num1) !== "number" ){
        return 'plase type only number'
    }
return num + num1;

}

const result = chack( 23, '45');
console.log(result);

// 1 peramitar by the 2 values 
function chack2(num, num1) {
    console.log(num , num1);
    if (typeof(num && num1) !== "number" || typeof(num1) !== "number" ){
        return 'plase type only number'
    }
return num * num1;

}

const result1 = chack2( 12+2);
console.log(result1);

  

