const url = '	https://api.adviceslip.com/advice';
fetch(url)
.then(res => res.json())
.then(data => displayAdvice(data))


function displayAdvice(adviceInfo) {
    console.log(adviceInfo.slip.advice);
    const qutetion = document.getElementById('qutetion');
    qutetion.innerText = `${adviceInfo.slip.advice}`
}