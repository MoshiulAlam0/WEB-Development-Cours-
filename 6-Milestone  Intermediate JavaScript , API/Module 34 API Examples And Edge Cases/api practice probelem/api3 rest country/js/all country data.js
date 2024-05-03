// all country data load 
function countryDataLoad() {
    const url = "https://restcountries.com/v3.1/all"
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
        .catch(error => {
            console.log(`error khaiche`);
            console.log(error)
        })
}
function displayData(data) {
    // console.log(data);
    const main = document.getElementById('main-section');
    data.forEach(info => {
        // console.log(info.cca2);
        const fristLanguge = Object.values(info.languages);
        const newDiv = document.createElement('div');
        newDiv.classList.add('country-container');
        newDiv.innerHTML = `
<div class="flag-img">
<img src="${info.flags.png}" alt="">
</div>
<hr>
<div class="country-info">
<h4>Name: <span class="country-name">${info.name.common}</span></h4>
<p>Capital: <span class="capital">${info.capital? info.capital[0] :''}</span></p>
<p>Languge: <span class="language" >${fristLanguge[0]}</span></p>
<button class="details singUp-btn" onclick="setModal('${info.cca2}')">Details</button>
</div>
`;
main.appendChild(newDiv);
});
}



// for modal 
function setModal(data){
    fetch(`https://restcountries.com/v3.1/alpha/${data}`)
    .then(res => res.json())
    .then(data => displayMealsDetails(data[0]))
}
function displayMealsDetails(data) {
    // console.log(modatContainer);
    // console.log(data.maps);
    const modalSection = document.getElementById('modal-section');
    modalSection.innerHTML ="";
    modalSection.style.display = 'flex';

    const modatContainer = document.createElement('div');
    modatContainer.classList.add('modal-container');
    modatContainer.innerHTML = `
    <div class="modal-head">
            <h4>${data.name.common}</h4>
            <i onclick="hideModal()" class="fa-solid fa-xmark"></i>
        </div>
        <hr>
        <div class="modal-img">
            <img src="${data.flags.png}" alt="">
            </div>
            <div class="modal-info">
            <p><span class="m-info">Capital city:</span><span id="capital">${data.capital[0]}</span></p>
            <p><span class="m-info">Region:</span><span id="continents">${data.region}</span></p>
            <p><span class="m-info">Area:</span><span id="area">${data.area}</span></p>
            <p><span class="m-info">Population:</span><span id="area">${data.population}</span></p>
            <p><span class="m-info">Lenguage:</span><span id="area">${getLanguage(data.languages)}</span></p>
            <p><a href="${data.maps.googleMaps}" class="m-info source" target="_blank">G-Map</a></p>
            <p><a href="${data.maps.openStreetMaps}" class="m-info source" target="_blank">OpenStreetMap</a></p>  
            </div>
        <button class="d-e-btn x-btn" onclick="hideModal()" >Close</button>
        `;
    modalSection.appendChild(modatContainer);
}

function hideModal(){
    const modalSection = document.getElementById('modal-section');
    console.log(modalSection);
    modalSection.style.display = 'none';
}






// for getLenguage
 function getLanguage(lengObj){
    let allLenguages =``;
const lengArry = Object.values(lengObj);
for(const leng of lengArry){
    allLenguages += `${leng}, `
}
 return allLenguages.slice(0, -2)+'.'
 }




// all country show korte 
document.getElementById('all-tag').addEventListener('click', function(){
    countryDataLoad();
})

countryDataLoad()