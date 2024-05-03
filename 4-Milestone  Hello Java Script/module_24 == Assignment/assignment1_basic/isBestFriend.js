// who is my best Friend 
function isBestFriend(man1, man2){
if (man1.friend === man2.name && man2.friend === man1.name ) {
    return true;
}
return false;
}
const man1 = {name: 'roki', friend: 'noyon'};
const man2 = {name: 'noyon', friend: '?'};
const areTheyFriend = isBestFriend(man1, man2);
console.log(areTheyFriend);