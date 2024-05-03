
//(function) page color change by input value 
document.getElementById('Page-apply-btn').addEventListener('click', function () {
    const colorName = getFieldStringValueById('Page-input');
    const blankPage = document.getElementById('balnk-page');
    if(colorName !== ''){
        blankPage.style.backgroundColor = colorName;
    }
    else{
        alert('Please Provite The Right Color')
    }
})

// (function) page color change by color box 
function changePageColorById(colorBox_id) {
    document.getElementById(colorBox_id).addEventListener('click', function (event) {
        const blankPage = document.getElementById('balnk-page');
        blankPage.style.backgroundColor = event.target.innerText;
    })
};
changePageColorById('page-box2');
changePageColorById('page-box3');
changePageColorById('page-box1');
changePageColorById('page-box4');
changePageColorById('page-box5');
changePageColorById('page-box6');
changePageColorById('page-box7');
changePageColorById('page-box8');
changePageColorById('page-box9');
changePageColorById('page-box10');

