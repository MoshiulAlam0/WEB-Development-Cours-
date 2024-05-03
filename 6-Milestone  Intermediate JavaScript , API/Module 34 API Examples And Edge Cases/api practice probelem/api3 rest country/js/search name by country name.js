const countryField = document.getElementById('field-country');
countryField.addEventListener('keypress', function(event){
    if(event.target.value !== ''){
        countryData(event.target.value);
    }
})
// for resion data load 
function countryData(resion){
    const url = `https://restcountries.com/v3.1/name/${resion}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryData(data))
}

function displayCountryData(data){
    const main = document.getElementById('main-section');
    main.innerHTML = '';
    displayData(data)
}

// for heilight 
document.getElementById('field-country').addEventListener('keyup', function(event){
    heiliigt(event.target.value, 'country-name');
})