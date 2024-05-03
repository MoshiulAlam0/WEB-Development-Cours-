const languageField = document.getElementById('field-lang');
languageField.addEventListener('keypress', function(event){
    if(event.target.value !== ''){
        languageData(event.target.value);
    }
})

function languageData(search){
    const url = `https://restcountries.com/v3.1/lang/${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => dispalyLanguage(data))
}
function dispalyLanguage(data){
    const main = document.getElementById('main-section');
    main.innerHTML = '';
    displayData(data);
}

// for heilight
document.getElementById('field-lang').addEventListener('keyup', function(event){
    heiliigt(event.target.value, 'language');
})