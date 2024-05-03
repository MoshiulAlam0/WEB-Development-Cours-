// i will style like of css in js file 
const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '4px solid steelblue';
    section.style.borderRadius = '17px';
    // section.style.backgroundColor = 'grey';
    section.style.color = 'white';
    section.style.fontSize = 'bould';
    section.style.paddingLeft = '19px';
    section.style.marginBottom = '7px';
}

// add class using classList
// class add by the classList 
for(const section of sections){
    section.classList.add('bg');
    section.classList.add('text-learge');
}

// remove class by the classList with getElementsByClassName
const section3 = document.getElementsByClassName('text-align');
section3[0].classList.remove('text-align');