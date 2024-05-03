const resionList = document.getElementById('resion-list');
resionList.addEventListener('click', function(event){
    if (isNaN(event.target.innerText) === true){
        // console.log(event.target.innerText);
        resionDataLoad(event.target.innerText)
    }
})


// for resion data load 
function resionDataLoad(resion){
    const url = `https://restcountries.com/v3.1/region/${resion}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayResionData(data))
}

function displayResionData(data){
    const main = document.getElementById('main-section');
    main.innerHTML = '';
    displayData(data)
}
