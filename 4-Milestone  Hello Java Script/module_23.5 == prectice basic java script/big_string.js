const names = [ 'noman', 'mamun', 'arif bin habid', 'arif ajad'];
function bestFrind(arrayOfName) {
    let friend = arrayOfName[0];
    // console.log(friend);
    for (let i = 0; i < arrayOfName.length; i++) {
        const element = arrayOfName[i];
        if (element.length > friend.length) {
            friend = element;
        }
    }
    return friend;
}

const frindBestfriend = bestFrind(names);
console.log(frindBestfriend);

