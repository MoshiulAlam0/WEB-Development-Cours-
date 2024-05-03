const findEven = array => {
    const newArr = [];
    for(element of array){
        if(element.length % 2 === 0){
            newArr.push(element);
        }
    }
    return newArr;
}
const names = ['noman', 'bizit', 'emram', 'nayan', 'mamun', 'shipon vai', 'alen', 'alex', 'kibriya'];
const result = findEven(names);
console.log(result);