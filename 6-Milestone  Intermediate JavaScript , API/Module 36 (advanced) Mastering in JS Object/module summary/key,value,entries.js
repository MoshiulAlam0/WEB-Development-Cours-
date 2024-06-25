/* 3 way we can use for getting values or propertys 
    1.keys [will give only propertys] 
    2.values [will give only values]
    3.eantries [will give propery and value as a arry ]
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


// 1. object.keys(obj) 
console.log('for keys()------------------:');
let keys = Object.keys(user);
console.log(keys);


// 2. object.values(obj)
console.log('for values()------------------:');
let values = Object.values(user);
console.log(values);

// 3. object.entries(obj)
console.log('for entries()-----------------:');
let both = Object.entries(user);
console.log(both);