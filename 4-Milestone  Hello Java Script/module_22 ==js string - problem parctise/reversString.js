// length sobsomoi endex ar theke 1 beshi hoi ar ki 
// index start hoi 0 theke r length 1 theke gonona kore je koita upadan ace array/string ar vitore 

function reversString(text){
    let textReverse = '';
    for(let i = text.length - 1; i >= 0; i-- ){
        let string = text[i];
        textReverse += string;
        console.log(string, textReverse);
    }
    return textReverse;
}

const lorem ='I am going to be an enginer';
const revers = reversString(lorem);
console.log(revers);
// reversString(lorem);