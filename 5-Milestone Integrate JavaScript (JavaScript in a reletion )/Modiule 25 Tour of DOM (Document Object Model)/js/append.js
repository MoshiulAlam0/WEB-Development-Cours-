
// append bebohar kore full akta section toire 
// frist way 
const body = document.getElementById('body');
// creat section 
const section = document.createElement('section')
// creat h1 
const h1 = document.createElement('h1');
h1.innerText = 'My Dreas:';
// creat ul 
const ul = document.createElement('ul');
// creat li*3
const li = document.createElement('li')
li.innerText = 'Panjabi';
const li1 = document.createElement('li')
li1.innerText = 'Pajama';
const li2 = document.createElement('li')
li2.innerText = 'Tupi';
// appent li in ul 
ul.appendChild(li);
ul.appendChild(li1);
ul.appendChild(li2);
// append h1 in section 
section.appendChild(h1);
// append ul in section 
section.appendChild(ul);
// final append section in body 
body.appendChild(section);

// second way 
const newSection = document.createElement('section');
newSection.innerHTML = `
    <h1>Color List:</h1>
    <ul>
        <li>Red</li>
        <li>Black</li>
        <li>White</li>
     </ul>
`;

body.appendChild(newSection);

const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '1.5px solid steelblue';
    section.style.backgroundColor = 'gray';
    section.style.color = 'white';
    section.style.marginBottom = '7px';
}