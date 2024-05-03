const findMx = (arr1, arr2) =>{
    const newArr = [...arr1, ...arr2];
    return Math.max(...newArr);
}
const arr1 = [22, 22, 33, 44, 555, 29, 2982, 982];
const arr2 = [33, 108, 81, 92, 823, 99999];
const result = findMx(arr1, arr2);
console.log(result);