// string ar vitore kono text/charecter ace ki na dekhte 
let text = 'i am going to be an ENginar. will you Be an enginar together';

// find text using includes
// frist way 
let convertLower1 = text.toLowerCase();
// console.log(convertLower1);
let inputYourText = 'enginar';
let convertLower2 = inputYourText.toLowerCase();
let doesExiest = convertLower1.includes(convertLower2);
console.log(doesExiest);

//find text using includes with toLowerCase() in one line 
// sceond way 
let doesExiestOneLine = text.toLowerCase().includes(inputYourText.toLowerCase());
console.log(doesExiestOneLine);


// find text/charectar with indexOf in string 
let newText = 'kEla bela mela kela chela mela dhela lola tola kobla mobla mola';
let convertLower = newText.toLowerCase();
let inputText3 = 'lala';
let findTextWhitIndexOf = convertLower.indexOf (inputText3.toLowerCase());
console.log(findTextWhitIndexOf);
if (findTextWhitIndexOf !== -1) {
    console.log(inputText3,'exists inside the string');

}
else{
    console.log(inputText3,'can not find in string');
}

// shurute kono text ace na ki dethte startWith bebohar korte pari
let toStart = newText.startsWith('kEla');
console.log(toStart);

// sheshe kono text ace na ki dethte endtWith bebohar korte pari
let toEnd = newText.endsWith('mola ');
console.log(toEnd);