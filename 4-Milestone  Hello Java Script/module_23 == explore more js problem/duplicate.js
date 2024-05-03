const names = [ 'ablu', 'bablu', 'cablu', 'dablu', 'eblu', 'ablu', 
'cablu', 'feblu', 'geblul', 'bablu', 'heblu', 'eblu', 'ibul', 'jullu', 
'khollu', 'heblu', 'ibul', 'ablu'];


function removeDuplicate (array){
    const uniceqNames = [];
    const chorList = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (uniceqNames.includes(element) === false){
            uniceqNames.push(element);
        }
        else{
            chorList.push(element);
        }
        
    }
    return console.log({uniceqNames, chorList});
}

let uniqueNameList = removeDuplicate(names);
console.log(uniqueNameList);