// load data form another server 
//https://restcountries.com/v3.1/all

// for country load data 
const loadData = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => getInfo(data))
}

const getInfo = countries => {
    const maindiv = document.getElementById('country-list');
    for(const country of countries){
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <div class="img-div">
        <img src="${country.flags.png}" alt="" class="size">
        </div>
        <h4 class="h4">Name: ${country.name.common}</h4>
        <p>Capital: ${country.capital? country.capital[0] : 'No Capital'}</p>
        <button class="btn" onclick="singleCountryDataLoad('${country. cca2}')">Details</button>
        `;
        // console.log(country.cca2);
        maindiv.appendChild(div);
    }
}

// for single country deltails data load 
const singleCountryDataLoad = (code) =>{
    const deltailsContainer = document.getElementById('country-details-container');
    deltailsContainer.style.display = 'block';
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => countryInfo(data[0]))
}

const countryInfo = info => {
    const countryInfo = document.getElementById('country-info');
    countryInfo.innerHTML = `
    <img src="${info.flags.png}" class="flag-img2">
    <h4>Name: ${info.name.common}</h4>
    <p>Capital: ${info.capital}</p>
    <p>Code: ${info.cca2}</p>
    <p>Area Code: ${info.area}</p>
    <p>Population: ${info.population}</p>
    <p>Is Independent: ${info.independent? info.independent = 'Yes' : 'No'}</p>
    <p>is UnMember: ${info.unMember? info.unMember = 'Yes' : 'No'}</p>
    <p>G-map: <a href="${info.maps.googleMaps}" target="_blank" class="a-tag">${info.maps.googleMaps}</a></p>
    `;
    console.log(info);
    
}
loadData();