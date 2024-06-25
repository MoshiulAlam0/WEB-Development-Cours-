/*you can clone object using 2 way 
1.shallow clone 
    1.0: obj = obj
    1.1 : assign() // togather bettwin frist obj and secound obj 
    1.2 : spread oparetor (...obj)
2.deep clone
    2.1 JSON.prase(stringify string);
*/

let user = {
    name : 'noman',
    age: '20+', 
    frinds: {
        list :['baizit', 'emran', 'selim', 'shazu'],
        bestu: 'selim',
        close : ['baizit', 'emran'], 
    }
}


// ====================1.shallow clone 

// 1.0 obj = obj [node : it's not a good way. becouse it makes a prototypical chaine. ]
let baizit = user // it will change all refarances obj property 
// baizit.name = 'baizit'
// console.log(baizit);
// console.log(user);


// 1.1 assign() :
// good way 
let emran = Object.assign({}, user);
// console.log(emran);
// emran.name = 'emran';
// console.log(emran);
// console.log(user);



// 1.2 using spread oparetor :
// it's not a better way if obj is note nasted than you can use spread oparetor
let sazu = {...user}
// console.log(user);
sazu.name = 'sazu';
sazu.location = 'palicanda'
// console.log(user);
// console.log(sazu);




//=================== 2.deep clone ====

// 2. 1 JSON.parse()
let stringOBJ = JSON.stringify(user);
let kiran = JSON.parse(stringOBJ)
kiran.name = 'kiran khan';
kiran.country = 'bangaldesh'
kiran.city = 'dhaka'
// console.log(kiran);
// console.log(user);

