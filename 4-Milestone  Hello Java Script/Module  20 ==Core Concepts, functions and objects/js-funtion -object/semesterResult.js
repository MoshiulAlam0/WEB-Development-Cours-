function myCgpa(result1, result2, result3, result4, result5, result6, result7, result8) {
    // fristSemestar
    const multiplication1 = result1 * 5;
    const percentage1 = multiplication1 / 100;
    // secondSemestar
    const multiplication2 = result2 * 5;
    const percentage2 = multiplication2 / 100;
    // thirdSemestar
    const multiplication3 = result3 * 5;
    const percentage3 = multiplication3 / 100;
    // fourthSemestar
    const multiplication4 = result4 * 15;
    const percentage4 = multiplication4 / 100;
    // fiveSemestar
    const multiplication5 = result5 * 15;
    const percentage5 = multiplication5 / 100;
    // sixSemestar
    const multiplication6 = result6 * 20;
    const percentage6 = multiplication6 / 100;
    // sevenSemestar
    const multiplication7 = result7 * 25;
    const percentage7 = multiplication7 / 100;
    // eightSemestar
    const multiplication8 = result8 * 10;
    const percentage8 = multiplication8 / 100;
    // finalSemestar/total cgpa
    const sum =
        (percentage1 + percentage2 + percentage3 +
            percentage4 + percentage5 + percentage6 + percentage7 + percentage8);
            const fixed = sum.toFixed(2);
            const convert = parseFloat(fixed);
    return convert;

}

const fristSemestar = 3.98;
const secondSemestar = 3.86;
const thirdSemestar = 3.80;
const fourthSemestar = 3.87;
const fiveSemestar = 3.60;
const sixSemestar = 3.67;
const sevenSemestar = 3.72;
const eightSemestar = 3.90;

const totalCGPA = myCgpa(
    fiveSemestar, secondSemestar, thirdSemestar, fourthSemestar,
    fiveSemestar, sixSemestar, sevenSemestar, eightSemestar);

console.log(totalCGPA);

