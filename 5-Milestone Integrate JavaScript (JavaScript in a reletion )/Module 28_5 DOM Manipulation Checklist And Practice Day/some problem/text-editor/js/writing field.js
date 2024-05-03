// 1.find balnk page using getElementById
// 2.set user text inside the blank page 

document.getElementById('text-area').addEventListener('keyup', function(event){
    const page = document.getElementById('balnk-page');
    const p = page.childNodes[1] ;
    p.innerText = event.target.value;
    const blank = document.getElementById('balnk-page');
    blank.style.border = '1.5px solid rgba(255, 72, 0, 0.6)';
    blank.style.boxShadow = '0 0 11px -2px rgba(255, 72, 0, 0.6)';
})