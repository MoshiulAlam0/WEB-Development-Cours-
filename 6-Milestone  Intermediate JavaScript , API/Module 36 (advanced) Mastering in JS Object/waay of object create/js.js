const text = document.getElementById('text')
console.log(text);
document.getElementById('btn').addEventListener('click', function(){
    const body = document.getElementsByTagName('body');
    console.log(body[0]);
    const newEle = document.createElement('p')
    newEle.innerText = text.textContent;
    body[0].appendChild(newEle);
})