
    const calpitalField = document.getElementById('field-capi');
    calpitalField.addEventListener('keypress', function (e) {
        // console.log(e.target.value);
        if(e.target.value !==  ''){
            capitayCityDataLoad(e.target.value);
        }
        
    })


function capitayCityDataLoad(searchText) {
    // console.log(searchText);
    const url = `https://restcountries.com/v3.1/capital/${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => dispalyCapital(data))
}


function dispalyCapital(data) {
    const main = document.getElementById('main-section');
    if (typeof (data[0]) !== "undefined") {
        main.innerHTML = '';
        // console.log(data);
        displayData(data);
    }
}

function heiliigt(value, element_id){
    const ex = new RegExp(value, 'gid');
    const capitals = document.getElementsByClassName(element_id);
    for (const capital of capitals){
        const text = capital.textContent;
        const replace = text.replace(ex, char => `<i id="heilight">${char}</i>`);
        capital.innerHTML = replace;
        // console.log(capital.innerHTML);
    }
}


// for heiliigt
calpitalField.addEventListener('keyup', function(e){
    heiliigt(e.target.value, 'capital')
})

