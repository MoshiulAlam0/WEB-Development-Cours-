// for catagory 
document.getElementById("brand_name").addEventListener('click', function(event){
    searchByCatagory(event)
})

function searchByCatagory(event){
    if(typeof (event.target.innerText) === "string"){
        console.log(event.target.innerText);
        blankSection()
        mobailDataLoad(`${event.target.innerText}`)
    }
}


// for all catagory 
document.getElementById("all-catagory").addEventListener('click', function(event){
    searchByCatagory(event)
})