// check file name with function 

function isJavaScriptFile (string){
    const check = string.endsWith('.js');
    if (check === true){
        return true;
    }
    return check;
}

const file = 'array.txt';
const isJsFile = isJavaScriptFile(file);
console.log(isJsFile);

