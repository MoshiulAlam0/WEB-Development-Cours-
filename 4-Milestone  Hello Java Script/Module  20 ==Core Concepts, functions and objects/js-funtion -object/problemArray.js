function findArray(any) {
    var num = 0;
    for (var i = 0; i < any.lenght; i++) {
        num = num + any[i];
    }
    var gor = num / any.lenght;
    return gor ;
}
var age = [12, 233, 23, 44, 4];
var totalAvg = findArray(age);
// console.log(totalAvg);
console.log(totalAvg);
