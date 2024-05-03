// for set class 
function setClass(class_name, class_list) {
    const page = document.getElementById('text-area');
    for (const toolsClass of class_list) {
        if (page.classList.contains(toolsClass) === true) {
            page.classList.remove(toolsClass);
            page.classList.add(class_name);
            // console.log(page.classList, toolsClass, 'form if option');
        }
        else {
            page.classList.add(class_name);
            // console.log(page.classList, class_name, 'form else option');
        }
    }
}

// // function 2 
// function set(aling){
// const page = document.getElementById('text-area');
// page.style.textAlign = aling;
// }


// font size set function 
function  setFontSize (font_size){
    const element = document.getElementById('text-area');
    element.style.fontSize = font_size+'px'; 
} 

// Font color set function 
function setFontColor (color_name){
    const element = document.getElementById('text-area');
    element.style.color = color_name;
}
// page color set function 
function setPageColor (color_name){
    const element = document.getElementById('text-area');
    element.style.backgroundColor = color_name;
}