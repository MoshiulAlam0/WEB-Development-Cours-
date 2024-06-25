/* what is object immutability (অপরিবর্তনীয়তা) ?
    if we wanna immutable the object . if we don't wanna change the object . 
    
    1. seal()  // property is not add or delete but we can modify / change property value 
    2. freeze() /// propery is not add , delete all allso modify 
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
    

// 1. Object.seal()

Object.seal(user);
// delete user.name; /// it won't working
// user.location = 'bogra'; /// it won't working
// console.log(user);
// user.name = 'baizit'; /// it will  working
// console.log(user);


// 1. Object.freeze()

Object.freeze(user);
delete user.name; /// it won't working
user.location = 'bogra'; /// it won't working
console.log(user);
user.name = 'baizit'; /// it won't working
console.log(user);



