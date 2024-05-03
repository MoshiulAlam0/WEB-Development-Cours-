//(function) page color change by input value 
document.getElementById('text-btn').addEventListener('click', function () {
    const colorName = getFieldStringValueById('text-input');
    const blankPage = document.getElementById('balnk-page');
    if(colorName !== ''){
        blankPage.style.color = colorName;
    }
    else{
        alert('Please Provite The Right Color')
    }
});

// (function) page color change by color box 
function changePageColorById(colorBox_id) {
    document.getElementById(colorBox_id).addEventListener('click', function (event) {
        const blankPage = document.getElementById('balnk-page');
        blankPage.style.color = event.target.innerText;
    })
};
changePageColorById('text-box2');
changePageColorById('text-box3');
changePageColorById('text-box1');
changePageColorById('text-box4');
changePageColorById('text-box5');
changePageColorById('text-box6');
changePageColorById('text-box7');
changePageColorById('text-box8');
changePageColorById('text-box9');
changePageColorById('text-box10');