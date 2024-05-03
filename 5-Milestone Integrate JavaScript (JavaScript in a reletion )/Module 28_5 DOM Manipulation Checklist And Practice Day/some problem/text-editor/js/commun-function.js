// function for get input-field stringVlaue 
function getFieldStringValueById(field_id) {
    const field = document.getElementById(field_id);
    return field.value;
}

//function set class inside element 
function setClass(class_name, classList_tools ) {
        const balnkPage = document.getElementById('balnk-page');
        for (const toolClass of classList_tools){
            if(balnkPage.classList.contains(toolClass) === true){
            balnkPage.classList.remove(toolClass);
            balnkPage.classList.add(class_name);
        }
        else{
            balnkPage.classList.add(class_name);
        }
       }
    };

// remove all classs 
function removeAllClass(element_id, classList_tools){
    const balnkPage = document.getElementById(element_id);
    for(const toolClass of classList_tools){
        if(balnkPage.classList.contains(toolClass) === true){
            balnkPage.classList.remove(toolClass);
        }
    }
    
}
