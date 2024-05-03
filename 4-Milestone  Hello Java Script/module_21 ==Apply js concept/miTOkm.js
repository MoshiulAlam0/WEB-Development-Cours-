function miToKm(mile) {
    const convert = mile * 1.609344;
    const fixed = convert.toFixed(2);
    return parseFloat(fixed);
}
var inputYourMile = 40;
const totalKM = miToKm(inputYourMile);
console.log(totalKM);