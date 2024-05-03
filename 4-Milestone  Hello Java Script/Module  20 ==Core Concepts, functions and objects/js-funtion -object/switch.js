// switch ke  if else ar altarnetive bolte pari ar ki 
// switch is the frister version then if else

// if else 
// ati switch ar theke aktu sollow kaj kore 
var color = 'black';
if (color === 'red') {
    console.log('you are my red frind');
    console.log('you are my red frind');
}
else if (color === 'white') {
    console.log('you are my red frind');
}
else if (color === 'green') {
    console.log('you are my green frind');
}
else if (color === 'parpol') {
    console.log('you are my parpol frind');
}
else if (color === 'yellow') {
    console.log('you are my yellow frind');
}
else if (color === 'black') {
    console.log('you are my black frind');
}
else {
    console.log('you are my defolt frind');
}

// switch 

// switch lekhar niyom holo onekta if else ar moto ar ki 
// 1. switch 
// 2.variable name //{switch(variableName)}
// // 3.{switch boddy} *.case // case 'red':
//                     *. body 
//                     *.brack;

switch (color) {
    case 'red':
        console.log('you are my red frind');
        break;

    case 'white':
        console.log('you are my white frind');
        break;

    case 'green':
        console.log('you are my green frind');
        break;

    case 'black':
        console.log('you are my balck frind');
        break;

    case 'parpol':
        console.log('you are my parpol frind');
        break;

    case 'yeallow':
        console.log('you are my yeallow frind');
        break;
    default:
        console.log('you are my any frind');

}

