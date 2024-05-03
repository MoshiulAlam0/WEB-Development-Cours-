function reversWord(text) {
    let word = text.split(' ');
    console.log(word);
    let result = [];
    for (let i = word.length - 1; i >= 0; i--) {
        let element = word[i];
        result.push(element);
    }
    let joinResult = result.join(' ');
    return joinResult;
}


let reversResult = reversWord('i am going to be an enginer ');
console.log(reversResult);