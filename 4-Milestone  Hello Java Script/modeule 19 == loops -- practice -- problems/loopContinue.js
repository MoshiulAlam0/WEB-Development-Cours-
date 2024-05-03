
// skip kora
var numbers = [44, 444, 70, 55, 22, 12, 40];
for (let index = 0; index < numbers.length; index++) {
    var element = numbers[index];
    if(element > 50){
        continue;
    }
    console.log(element);
    
}