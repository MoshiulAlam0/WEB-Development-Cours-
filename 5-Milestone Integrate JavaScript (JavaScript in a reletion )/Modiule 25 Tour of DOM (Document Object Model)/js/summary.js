const body = document.querySelector('body');
body.style.backgroundColor = 'rgba(30, 170, 200, 0.2)';
//  5 way is used to get element 
const allSection = document.getElementsByTagName('section');
console.log(allSection);

const allUl = document.getElementsByClassName('ul');
console.log(allUl);

const fristH1 = document.getElementById('frist-header');
console.log(fristH1);

const fristSectionFristLi = document.querySelector('.section1 ul li');
console.log(fristSectionFristLi);

const allPtag = document.querySelectorAll('p');
console.log(allPtag);
for(const p of allPtag){
    p.style.color = 'red';
    p.style.fontStyle = 'storng';
    p.style.fontSize = '20px';
}

const allClases = fristH1.getAttribute('id');
console.log(allClases);

console.log(fristH1.setAttribute('title', 'HI I am frist header'));
console.log(fristH1.setAttribute('id', 'HI I am frist header'));

// About of node 

// 1.childNodes
const secondHeader = document.getElementById('hello-I-am-secound-section');
console.log(secondHeader.childNodes);

console.log(secondHeader.childNodes[1].style.backgroundColor = 'steelblue');
console.log(secondHeader.childNodes[1].style.color = 'white');
console.log(secondHeader.childNodes[1].nextSibling);
console.log(secondHeader.childNodes[4].previousSibling.style.fontSize = '27px')

// Creat element 2 way 
// 1.frist way by the creatElement & .append
const newSection = document.createElement('section');
const newH1 = document.createElement('h1')
newH1.innerText = 'creat element, appendChild:';
const newUL = document.createElement('ul');
const newLi0 = document.createElement('li');
newLi0.innerText = 'creat element';
const newLi1 = document.createElement('li');
newLi1.innerText = 'innerText';
const newLi2 = document.createElement('li');
newLi2.innerText = 'innerHTML';
const newLi3 = document.createElement('li');
newLi3.innerText = 'append';

newUL.appendChild(newLi0);
newUL.appendChild(newLi1);
newUL.appendChild(newLi2);
newUL.appendChild(newLi3);
newSection.appendChild(newH1);
newSection.appendChild(newUL)

const main = document.getElementById('main');
main.appendChild(newSection);

// second way by the innerHTML
const section = document.createElement('section');
section.innerHTML = `
<h1>Bapero Bap thake:</h1>
<ul>
    <li>.parentNode</li>
    <li>.parentNode.parentNode</li>
    <li>.parentNode.parentNode.parentNode....</li>
</ul>

`;
main.appendChild(section);