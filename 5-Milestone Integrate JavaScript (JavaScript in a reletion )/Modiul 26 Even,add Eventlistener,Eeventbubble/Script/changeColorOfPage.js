// way 3 is here 
const buttonRed = document.getElementById('btn3');
buttonRed.onclick = colorBlue;
function colorBlue(){
    document.body.style.backgroundColor= 'blue';
}
// way 4 is here 
const buttonOrenge = document.getElementById('btn4');
buttonOrenge.onclick = function(){
    document.body.style.backgroundColor = 'orange';
}
// way 5 is here {good}
const buttonGreen = document.getElementById('btn5');
buttonGreen.addEventListener("click", function (){
    document.body.style.backgroundColor = 'green';
});

// final way for add event 
document.getElementById('btn6').addEventListener('click', function(){
    document.body.style.backgroundColor ='yellow';
})