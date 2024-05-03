const numbers = [ 11, 33, 44, 534, 15, 28, -22, 44, 55, 20];
function onlyPosetive (arrayOfNum){
    const posetiveNum = [];
    for (let i = 0; i < arrayOfNum.length; i++) {
        const element = arrayOfNum[i];
        if(element < 0){
            // continue;
            break;
        }
        else{
            posetiveNum.push(element);
        }
    }
    return posetiveNum;
}
const somePosetive = onlyPosetive(numbers);
console.log('all posetive number list :',somePosetive);