// for auto reftes
let oldLeter = 'o';
function GenretLetter() {
    let letter = (Math.round(Math.random() * 18) + 10).toString(36);
    oldLeter = letter;
    mobailDataLoad(letter)
}

document.getElementById('all').addEventListener('click', function () {
    blankSection()
    GenretLetter()
})
// for blank card container 
function blankSection(){
    const cardSection = document.getElementById('card-section');
    cardSection.innerHTML = ''
}

// for search by product icon 
function searchByIconId(iconId){
    const divP = document.getElementById(iconId).childNodes[3];
    mobailDataLoad(`${divP.innerText}`)
}
// all product icon
document.getElementById('phone').addEventListener('click', function () {
    blankSection()
    searchByIconId('phone')
})
document.getElementById('cover').addEventListener('click', function () {
    blankSection()
    searchByIconId('cover')
})
document.getElementById('watch').addEventListener('click', function () {
    blankSection()
    searchByIconId('watch')
})
document.getElementById('laptop').addEventListener('click', function () {
    blankSection()
    searchByIconId('laptop')
})
document.getElementById('head-set').addEventListener('click', function () {
    blankSection()
    searchByIconId('head-set')
})
