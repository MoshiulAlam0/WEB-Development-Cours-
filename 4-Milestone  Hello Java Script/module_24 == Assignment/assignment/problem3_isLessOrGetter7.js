function isLessOrGreateThan7(num) {
    const subtraction = num - 7;
    if (subtraction < 7) {
        return subtraction;
    }
    else {
        return num * 2;
    }

}
const inputNumber = 15;
const isLessOrGreater = isLessOrGreateThan7(inputNumber);
console.log(isLessOrGreater);