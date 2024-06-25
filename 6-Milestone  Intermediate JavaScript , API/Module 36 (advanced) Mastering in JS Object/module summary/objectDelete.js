/* you can delete object property by the 2 way 
1. delete obj.property
2. destrachuring {frist, secound } = obj

 */

let user = {
    name : 'noman',
    age: '20+', 
    frinds: {
        list :['baizit', 'emran', 'selim', 'shazu'],
        bestu: 'selim',
        close : ['baizit', 'emran'], 
    },
    
    saveTime: function(time, hourORmin, forWhat){ /// it's a object methods 
        return `${this.name} wanna to save ${time} ${hourORmin} for ${forWhat}`;
    }
}

// 1. delete keyword:

// delete user.age;
// delete user.name;
// console.log(user);

// 2. destrachuring:

// let { (whice property you wanna delete) , ...(those whose property)} = obj 
let {frinds , ...rest} = user;
// console.log(frinds);
// console.log(rest);
// console.log(user);
