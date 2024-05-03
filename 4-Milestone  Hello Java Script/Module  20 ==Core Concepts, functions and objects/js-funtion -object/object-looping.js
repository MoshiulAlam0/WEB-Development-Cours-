var ridoy  = {
    neme:'ridoy',
    age: 23,
    skinton: 'choklet',
    hear: 'carly'
    }

// how can i get object poparty name and values using loop
// object theke array ar moto kore amra popartyName gulake  niye nilam ar ki 
var keys = Object.keys(ridoy);
console.log(keys);

for ( var i = 0 ; i < keys.length; i++){
    var findPoparty = keys[i];
    var popartyValues = ridoy[findPoparty];
    console.log(findPoparty, ':', popartyValues);
}

var items = [ 'pen', 'books', 'note', 'rabar'];
console.log(items[1]);
