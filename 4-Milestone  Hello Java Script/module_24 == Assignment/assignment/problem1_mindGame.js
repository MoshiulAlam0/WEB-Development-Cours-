function maindGame(number){
    const multiplication = number * 3 ;
    const sum = multiplication + 10;
    const division = sum / 2;
    const subtaraction = division - 5;
    return subtaraction;

}

const inputYourNum = 5;
const numberGame = maindGame(inputYourNum);
console.log(numberGame);