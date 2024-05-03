let name2 = 'baizit';
name2 = 'selim';

const student ={
    id : 837, 
    name: 'selim',
    marks:[
        {sub:'bangla', marks: 98, code: 9383},
        {sub:'english', marks: 99, code: 9384},
        {sub:'islam', marks: 99, code: 9385}
    ],
    department: 'since',
}

const myFriend = `my school friend ${name2} , he has gotten mark ${student.marks[0].marks} in the bangla`
console.log(myFriend);