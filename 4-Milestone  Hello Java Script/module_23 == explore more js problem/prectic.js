function wordRevers(text) {
    const splite = text.split(' ');
    const result = [];
    // console.log(splite);
    for (let i = splite.length - 1; i >= 0; i--) {
        const element = splite[i];
        // console.log(element);
        result.push(element);

    }
    const fullResult = result.join(' ');
    return fullResult;
}


const text1 = 'i will write a function for reverse word';
const result = wordRevers(text1);
console.log(result);





let name = '       elemili kili chili hili      ';
console.log(name);
console.log(name.trim());