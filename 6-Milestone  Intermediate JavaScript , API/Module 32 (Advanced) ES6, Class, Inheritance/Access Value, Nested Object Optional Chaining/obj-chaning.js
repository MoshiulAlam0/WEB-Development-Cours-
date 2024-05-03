/* 
chaning ta ho obj theke ar value ta access korar system ar ki, 
ai ta dui rokomer hoi:
1. nested chaning.
2.optional nested chaning.

*/

// 1.nested chaning
const student = [
    {
        user_id: 4473,
        name: 'noman',
        profetion: 'student',
        address: {
            city: 'bogura',
            thana: 'shibgonj',
            post: 'pirob bazar',
            village: 'palikanda',
            home: 'block: B/23'
        },
        fother: 'abdul kalam',
        mother: 'unknown',
        friend: [
            'baizit', 'emran', 'moshiul', 'abid', 'nahid',
            {
                neme: 'selim',
                isbestu: true,
                currenAddrs: 'abvrod'
            }
        ]
    }
]

// console.log(student[0].address.home);
// console.log(student[0].friend[2]);
// console.log(student[0].friend[5].isbestu);

// 2.nested Option chaning:
const user = {
user_id: 570,
friendList:['kibriya', 'kobra', 'mobra', 'anathuya', 'thungthung'],
address:{
    current: 'africa',
    fixAdrss: 'noth-koria',
},
property:{
    car: 2,
    home: 4,
    current_monney: 846487467637,
    gold: 89,
}
}

/* 
jokhon kono property thakteo pare abar nao pare akhete, (error theke bachte) >-->
akhetre amra optional chaning korte pari,
use korte hobe (?).
*/
// console.log(user.property.company?.shop);  
console.log(user.address?.home?.post);