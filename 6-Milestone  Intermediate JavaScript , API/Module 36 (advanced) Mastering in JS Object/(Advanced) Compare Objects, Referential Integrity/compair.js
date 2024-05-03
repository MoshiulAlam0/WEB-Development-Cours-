/*genarel compaire ar object and arry compair ar moddhe parthkko ace:

#. sora sori ary ba obj ke compair kora jabe na 
karon ara reefarence dhore rakhe , arry ba obj aky holeo jehete ata akoi jaigate nai jai sothik 
compair hoi na 
 
arry and obj ar compair koyek vabe kora jete pare ar ki :
1.stringify kore [ata use kora uchid na ] 
2.advanced [aktu pechaila ace but gooogle ar help niye korte paro / famework use korte paro ]
*/
const obj1 = { a: 2, b: 4, c: 6 }
const obj2 = { a: 2, c: 6, b: 4 }

// 1.stringify  /// aktu problem ace obj / arry ar path pori borton hole compair a problem hoi 
const fristObj = JSON.stringify(obj1)
const secoudtObj = JSON.stringify(obj2)
// console.log(fristObj, secoudtObj);

// if(fristObj === secoudtObj){
// console.log(true);
// }else{
// console.log(false); 
// }

// 2. advanced
function compair(frist, second) {
    const fristObjKeys = Object.keys(frist)
    const secondObjKeys = Object.keys(second)
    console.log(fristObjKeys,secondObjKeys);
    if (fristObjKeys.length === secondObjKeys.length) {
        for (const key of fristObjKeys) {
            if (frist[key] !== second[key]) {
                return false;
            } else {
                return true;
            }
        }
    } else {
        return false;
    }
}
const result = compair(obj1, obj2)
console.log(result);