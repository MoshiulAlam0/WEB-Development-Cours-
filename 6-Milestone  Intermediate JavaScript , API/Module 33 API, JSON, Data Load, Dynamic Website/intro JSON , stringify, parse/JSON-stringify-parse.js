/* 
JSON: java_Script Object Notation 
1. stringify: kono obj ke string a rupantor kore [JSON.stringify(obj)].
2. parse: ata stringify kora kono obj ke pnorai main obj a convert kore ar ki 
[JSON.parse(stringObj)].
*/ 




const student = {
    id : 44499,
    name: 'sakil',
    look: [
        {color: 'black', hear: 'black', face: 'round'},
        {charecter: 'good', ismarried: false, isHandsome: true},
    ],
    parents:[
        {fother: 'sajid', age: 60, body: 'white'},
        {mother: 'shainu', age: 50, isHomeMaker : true}
    ],
    depertment: 'sivil',
    quality: 'good'
}
console.log('main obj is here---->');
console.log(student);
// JSON.stringify  :
console.log('stringify obj is here---->');
const stringObj = JSON.stringify(student);
console.log(stringObj);

// JSON.parse:
console.log('covert to main obj  is here (JSON.parse)------>>>>');
const mainObj = JSON.parse(stringObj);
console.log(mainObj);
