/* what is the brow consept ?
    kono akta object ara method ke nonno akta object ar opor use kora jonno .
1. call ()
[call will take  pramitars. 1st will be for value of this, rest will be paramitar of method]    

2.apply() 
[call or apply are simular . but apply will take and arry for methods paramitar]

3. bind ()
[bind can make a function , you can use any time with the paramitar]

*/

let user = {
    name : 'noman',
    age: '20+', 
    frinds: {
        list :['baizit', 'emran', 'selim', 'shazu'],
        bestu: 'selim',
        close : ['baizit', 'emran'], 
    },
    
    saveTime: function(time, forWhat){ /// it's a object methods 
        console.log(`${this.name} wanna to save ${time} minite for ${forWhat}`);
        console.log(`${this.name}s frieds names are ${this.frinds.list} `);
    }
}


let emran = {
    name : 'emaran',
    frinds: {
        list :['kiran', 'iran', 'norel', 'nishad'],
        bestu: 'norel',
        close : ['iran', 'kiran'], 
    },
}
console.log('for user object:');
user.saveTime(30,  'taking');

// 1. call ()
console.log('for call():');
user.saveTime.call(emran, 20, 'playing' )

// 2. apply()
console.log('for apply():');
user.saveTime.apply(emran, [40, 'driving'])

// 3. bind()
console.log('for  bind():')
let saveTimeForEmran = user.saveTime.bind(emran);
saveTimeForEmran(50, ' stading on js')