// 1.array ar seshe (end) element [add] korar jonno {push} bebohar hoi
var numbers = [12, 33, 55, 66, 89, 33]
numbers.push(58);
console.log(numbers);

var friends = [ 'bala', 'mala', 'khala', 'pola'];
friends.push('hala');
console.log(friends);

// 2.  array ar seshe (end) element [sorate/kete fle deoyar] jonno {pop} bebohar hoi


numbers.pop();
console.log(numbers);

// 3. pop kora element ke veriable a rakha 
// var popElement = numbers.pop();
// console.log(popElement);



// 4. array ar shurute (start) a element (add) korar jonno {(unshift)} bebohar hoi 
var age = [ 12, 23, 32, 11, 16, 22];
age.unshift(100);
console.log(age);

//5.rray ar shurute (start) a element [sorate/kete fele deoyar ]  jonno {shift} bebohar hoi
var froods = ['banana', 'mango', 'goyava'];
froods.shift();
console.log(froods); 