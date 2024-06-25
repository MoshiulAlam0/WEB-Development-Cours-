/* obj methods :
whice is decleared inside the object , whice is called methods
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

console.log(user.saveTime(20, 'minite', 'taking bath'));