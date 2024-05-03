// :::; at();
let poetry = 'oi deka jai tal gas, oi amader ga, oi khane te bas kore kana bogir cah';
let findByIndex = poetry.at(-1); //to start by the posetive index / to end by the nagetive index 
console.log(findByIndex);

//::: concat 
let text1 = 'hello';
let text2 = 'world';

let concat = text1.concat(' tumi kmn aco ', text2);
console.log(concat); 


///::: trim 
let h1 = '      hello world      ';
let h2 = '      hey  hello world are you good      ';
let removeWhiteIsSpash = h1.trim();
console.log(removeWhiteIsSpash);
let removeEndWhiteIsSpash = h1.trimEnd();
console.log(removeEndWhiteIsSpash);
let removeStartWhiteIsSpash = h1.trimStart();
console.log(removeStartWhiteIsSpash);