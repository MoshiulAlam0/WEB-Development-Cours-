// access value of object 
// 1. 
const student = {
    name: 'fredre',
    age: 60
}
console.log(student.name);

// 2.
const user = [
    {
        laretute: '199.44, 173.109',
        logitute: '398.3, 283.93',
        contry: 'balngladesh',
        city: 'bogura'
    }
]
console.log(user[0].city);

// 3.
const user2 = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
    }
}

console.log(user2.email);
console.log(user2.address);
console.log(user2.address.city);
console.log(user2.address.geo.lat);
console.log(user2.company.name);