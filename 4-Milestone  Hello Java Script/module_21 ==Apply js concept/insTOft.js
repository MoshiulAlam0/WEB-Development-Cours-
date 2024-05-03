function insToFt (inschis){
    var convert = inschis / 12;
    var fixed = convert.toFixed(2);
    return parseFloat(fixed);

}



var myinschis = 500;
var totalFT = insToFt(myinschis);
console.log(totalFT,'FT');


