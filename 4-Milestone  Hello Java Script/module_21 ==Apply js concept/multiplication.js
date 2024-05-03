function multiplicationOfNumbers(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
}
// to how much number do you want to multiplic
let inputYourNumber =9;
let yourResult = multiplicationOfNumbers (inputYourNumber);
console.log(yourResult);