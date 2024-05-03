
// aling section --------------------
// class add
const alingClases = ['center', 'middel', 'start', 'end', 'top', 'bottom'];
document.getElementById('aling-center').addEventListener('click', function(){
setClass('center', alingClases);
})
document.getElementById('aling-middel').addEventListener('click', function(){
    setClass('middel', alingClases);
})
document.getElementById('aling-start').addEventListener('click', function(){
    setClass('start', alingClases);
})
document.getElementById('aling-end').addEventListener('click', function(){
    setClass('end', alingClases);
})
document.getElementById('aling-top').addEventListener('click', function(){
    setClass('top', alingClases);
})
document.getElementById('aling-bottom').addEventListener('click', function(){
    setClass('bottom', alingClases);
})
// class remove 
document.getElementById('reset-aling').addEventListener('click', function(){
    removeAllClass('balnk-page', alingClases);
})



// size section ----------------------
const sizeClases = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6']
document.getElementById('size-h1').addEventListener('click', function(){
    setClass('H1', sizeClases);
})
document.getElementById('size-h2').addEventListener('click', function(){
    setClass('H2', sizeClases);
})
document.getElementById('size-h3').addEventListener('click', function(){
    setClass('H3', sizeClases);
})
document.getElementById('size-h4').addEventListener('click', function(){
    setClass('H4', sizeClases);
})
document.getElementById('size-h5').addEventListener('click', function(){
    setClass('H5', sizeClases);
})
document.getElementById('size-h6').addEventListener('click', function(){
    setClass('H6', sizeClases);
})
// class remove 
document.getElementById('reset-size').addEventListener('click', function(){
    removeAllClass('balnk-page', sizeClases);
})
// font-input
document.getElementById('ok').addEventListener('click', function(){
    const sizeOfInputSize = getFieldStringValueById('size-input');
    const p = document.getElementById('balnk-page-text');
    p.style.fontSize = sizeOfInputSize+'px';
})

// style section -------------------------
const styleTools = ['italic', 'normal', 'bold']
document.getElementById('italic').addEventListener('click', function(){
    setClass('italic', styleTools);
})
document.getElementById('normal').addEventListener('click', function(){
    setClass('normal', styleTools);
})
document.getElementById('bold').addEventListener('click', function(){
    setClass('bold', styleTools);
})
// class remove 
document.getElementById('reset-style').addEventListener('click', function(){
    removeAllClass('balnk-page', styleTools);
})
