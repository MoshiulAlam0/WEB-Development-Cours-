var ridoy  = {
    neme:'ridoy',
    age: 23,
    skinton: 'choklet',
    hear: 'carly'
    }

// output poparty value
var value = ridoy.name;
console.log(ridoy);

var value2 = ridoy['age'];
console.log(ridoy);

var popartyName = 'hear';
console.log(ridoy[popartyName]);

// values set 
ridoy.name = 'moshiul';
console.log(ridoy);

ridoy['hera'] = 'balck';
console.log(ridoy);

var popartyNM = 'skinton';
ridoy[popartyNM] = 'balck';
console.log(ridoy);

// value add
ridoy['hight'] = '5FT';
console.log(ridoy);

// output all poparty

var allPoparty = Object.keys(ridoy);
console.log(ridoy);

// output all poparty values 

var allValues = Object.values(ridoy)
console.log(ridoy);