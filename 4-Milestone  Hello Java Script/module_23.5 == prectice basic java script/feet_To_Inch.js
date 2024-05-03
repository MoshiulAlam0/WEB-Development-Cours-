function feetToInch(number){
    const convertInch = number * 12;
    return convertInch;
}
const inputYourFeet = 10;
const totalInch = feetToInch(inputYourFeet);
console.log(totalInch,'Inch');