// for data load 
const dataLoad  = (searchText = 'f') =>{
fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
.then(res => res.json())
.then(data => displayMeal(data.meals))
}


const displayMeal = mealsData => {
const mealsContainer = document.getElementById('meals-container');
mealsContainer.innerHTML = '';
for (const meal of mealsData){
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
            <div class="card-img-container">
                <img src='${meal.strMealThumb}' alt="" class="card-img">
            </div>
            <div class="card-info">
                <h3 class="card-h3">Name: ${meal.strMeal}</h3>
                <p class="card-p">mekes steps: ${meal.strInstructions}</p>
            </div>
            <button id="details-btn" onclick="displayMealsDetails(${meal.idMeal})">Details</button>
    `;
    mealsContainer.appendChild(div);
    // console.log(meal.idMeal);
}
}




// for search btn 
document.getElementById('search-btn').addEventListener('click', function(){
    const searchText = document.getElementById('search-field').value;
    dataLoad(searchText);
})

// for ender key 
document.getElementById('search-field').addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        dataLoad(e.target.value)
    }
})


// for Variety
document.getElementById('ul-list').addEventListener('click', function(event){
    // console.log(typeof(event.target.innerText));
    const Variety = document.getElementById('Variety');
    const list_p = document.getElementById('list-p');
    if (typeof(event.target.innerText) === 'string'){
        if(event.target.innerText !== Variety.innerText){
            list_p.innerText = event.target.innerText;
            dataLoad(event.target.innerText);
        }
    }
})



// for meals details
const displayMealsDetails = mealId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const modalSection  = document.getElementById('modal-section');
        modalSection.style.display = 'flex';

        document.getElementById('modal-name').innerText = data.meals[0].strMeal;
        document.getElementById('modal-category').innerText = data.meals[0].strCategory;
        document.getElementById('modal-area').innerText = data.meals[0].strArea;
        document.getElementById('Step').innerText = data.meals[0].strInstructions;
        document.getElementById('modal-yt').setAttribute('href', `${data.meals[0].strSource}`);
        document.getElementById('modal-ins').setAttribute('href',`${data.meals[0].strYoutube}`);

        const img = document.getElementById('modal-img');
        img.setAttribute("src",`${data.meals[0].strMealThumb}`);
    })
}
// for x btn 
const xButton = document.getElementById('modal-btn');
xButton.addEventListener('click', function(){
    const modalSection  = document.getElementById('modal-section');
        modalSection.style.display = 'none';
})

dataLoad()


