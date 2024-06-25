/* to 3 way you can throw loop on obj 
1. for of  
2. for in 
3. entries with for of 

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


// 1. for of :
let keys = Object.keys(user);
for (let key of keys){
    let value = user[key] /// get obj value by the braket notation
    // console.log(key, value); 
}



// 2. for in [you can use "for in" directly on obj ]:
for (const key in user) {
    // console.log(key, user[key]);   
}



// 3. entries with for of and destructuring  :
let pair = Object.entries(user);
for(let[key, value] of pair){ 
    console.log(key, value);
}
