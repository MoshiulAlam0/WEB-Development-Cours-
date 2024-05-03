/* 
object ke dui vabe chaning kora jai :
1. dot(.)notation system
2.bracket {} notation system 
*/
const student = {
    id: 4948,
    marks:{
        math: 98,
        physics: 58,
        bangla: 97,
        english: 98,
        islam: 99
    },
    name: 'noman',
    friends:[
        {name: 'emran', id:3837, gender: 'male'},
        {name: 'bizit', id:3836, gender: 'male'},
        {name: 'nahid', id:3838, gender: 'male'},
        {name: 'abid', id:3839, gender: 'male'}
    ]
}
// dot (.)notation:
const idOfBaizit = student.friends[1].id;
console.log(idOfBaizit);

// bracket {}notation
const islam = student['marks']['islam'];
const abid = student['friends'][3]['name'];
console.log(islam);
console.log(abid);