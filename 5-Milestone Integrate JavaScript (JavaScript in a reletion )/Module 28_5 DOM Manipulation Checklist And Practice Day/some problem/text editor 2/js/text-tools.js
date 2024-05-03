
// aling tools section ---------------------
const alingClases = ['aling-left', 'aling-center', 'aling-right'];
document.getElementById('aling-left').addEventListener('click', function(){
setClass('aling-center', alingClases);
// set('left');
})
document.getElementById('aling-center').addEventListener('click', function(){
    setClass('aling-left', alingClases);
    // set('center');
})
document.getElementById('aling-right').addEventListener('click', function(){
    setClass('aling-right', alingClases);
    // set('right');
})
// style tools section -----------------------------
styleClases = ['bold', 'italic', 'underline'];
document.getElementById('style-bold').addEventListener('click', function(){
    setClass('bold', styleClases);
    // set('right');
})
document.getElementById('style-italic').addEventListener('click', function(){
    setClass('italic', styleClases);
    // set('right');
})
document.getElementById('style-underline').addEventListener('click', function(){
    setClass('underline', styleClases);
    // set('right');
})



// size section -------------------------
document.getElementById('size-input').addEventListener('input', function(event){
    if(event.target.value !== ''){
        setFontSize(event.target.value);
    }
})

