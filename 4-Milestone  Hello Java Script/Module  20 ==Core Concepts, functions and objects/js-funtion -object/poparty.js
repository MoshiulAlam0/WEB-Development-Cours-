var soppingCard = {
    books: 3,
    sangalass: 2,
    keybord: 4, 
    mouse: 5,
    pen: 4
}

// jokhon poparty name jana thakbe 
// tokhon poparty ar values paoyar jonoo 2 ta system
// 1
var pencount = soppingCard.pen;
console.log(pencount);
// 2
var bookscount = soppingCard['books'];
console.log(bookscount);
// variable use kore 
var popartyName = 'mouse';
console.log(soppingCard[popartyName]);

// jokhon object ar sobgulu popartys ak sathe proyojon 
// popartys gulu array ar moto kore paoya jabe 
var allPopartys = Object.keys(soppingCard);
console.log(allPopartys);

// jokhon object ar sobgulu popartys ar values ak sathe dorkar 
// popartys ar values gulu array ar moto kore paoya jabe 
var allvalues = Object.values(soppingCard);
console.log(allvalues);


// how to set poparty values
soppingCard.pen = 20;
console.log(soppingCard);

soppingCard['books'] = 10;
console.log(soppingCard);

var popartyName2 = 'keybord';
soppingCard[popartyName2] = 30;
console.log(soppingCard);
// add poparty and values
var popartyName2 = 'loson';
soppingCard[popartyName2] = 30;
console.log(soppingCard);

