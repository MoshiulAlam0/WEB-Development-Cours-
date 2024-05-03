// step2
const allH2 = document.getElementsByTagName('h2');
for (const h2 of allH2) {
    h2.style.color = 'Lightblue';
}
// step 3
const backPack = document.getElementById('backpack');
backPack.style.backgroundColor = 'tomato';
//  step 4 
const allCard = document.getElementsByClassName('card');
for (const card of allCard) {
    card.style.borderRadius = '30px';
}
// step 5
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function () {
    console.log('hello submit-button is clicked by user');
})
// step 6
// option 1:
const divOfBuyButtons = document.getElementsByClassName('col');
for (const divOfBuyButton of divOfBuyButtons) {
    divOfBuyButton.addEventListener('click', function (event) {
        if (event.target.innerText.toLowerCase() === 'buy now') {
            divOfBuyButton.parentNode.removeChild(divOfBuyButton);
        }
    })
};
// step 7
const inputFeald = document.getElementById('exampleInputEmail1');
inputFeald.addEventListener('keyup', function (event) {
    if (event.target.value.toLowerCase() === 'email') {
        const submitButton = document.getElementById('submit-button');
        submitButton.removeAttribute('disabled');
    }
    else {
        submitButton.setAttribute('disabled', true)
    }
});

// step 8 
// to change image by mouseenter event 
const itemImages = document.getElementsByClassName('card-img-top');
const newImgTag = document.createElement('img');
for (const itemImage of itemImages) {
    itemImage.addEventListener('mouseenter', function () {
        itemImage.setAttribute('src', 'images/bags/bag-2.png');
    })
};

// step 9 to change the backgroundColor 
const footer_section = document.getElementById('subscribe');
footer_section.addEventListener('dblclick', function (event) {
    const div = footer_section.children[0];
    footer_section.style.backgroundColor = 'steelblue';
});


