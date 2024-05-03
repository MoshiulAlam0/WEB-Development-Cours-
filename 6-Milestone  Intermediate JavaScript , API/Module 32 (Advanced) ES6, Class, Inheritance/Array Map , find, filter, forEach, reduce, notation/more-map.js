const names = ['iran', 'kinam', 'niran', 'piran', 'biran', 'firan', 'viran'];
const lestLetter = names.map( x => x[x.length - 1]);
console.log(lestLetter);


const user = [
    {id: 4948, name: 'riyad', home: 'kahalu',dist: 'bogura',},
    {id: 4644, name: 'mehedi', home: 'janina',dist: 'bogura',},
    {id: 4947, name: 'ojjal', home: 'janina',dist: 'bogura',},
    {id: 4945, name: 'goshai', home: 'unknown',dist: 'bogura',}
]

const userName = user.map( n => n.name);
const userId = user.map( i => i.id);
const userHome = user.map( h => h.home);
const newPorperty = user.map(o => o.gender = 'male')
// console.log(userName);
// console.log(userId);
// console.log(userHome);
// console.log(newPorperty);
// console.log(user);

