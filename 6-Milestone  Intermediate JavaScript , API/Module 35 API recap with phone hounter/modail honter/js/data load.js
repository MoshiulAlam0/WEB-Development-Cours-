let searchTextStore;
function mobailDataLoad(searchText, isSeeAll){
    // console.log(searchText);
    searchTextStore = searchText;
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then(res => res.json())
    .then(data => displayPhoneData(data.data, isSeeAll))
    .catch(err => console.log(err))
}


const changeBtnContainer = document.getElementById('change-btn-container');//button see more 
const loding = document.getElementById('loding-container') ; // loding spinar
        
const cardSection = document.getElementById('card-section'); // card section element

// for display card 
let newSpliceData;
function displayPhoneData(mobailDatas, isSeeAll){
    if(mobailDatas.length > 0){
        if(mobailDatas.length > 8){
            const newArray = mobailDatas.splice(0,8);
            if(isSeeAll === true){
                setCad(mobailDatas)
                document.getElementById('see-more').style.display ='none'
                document.getElementById('backward-btn').style.display = 'block'
            }
            else{
                setCad(newArray)
                document.getElementById('backward-btn').style.display = 'none'
                document.getElementById('see-more').style.display ='block'
            }
            changeBtnContainer.style.display ='flex';
        }
        else{
            setCad(mobailDatas);
            document.getElementById('backward-btn').style.display = 'none'
            document.getElementById('see-more').style.display ='none'
        }
    }
    else{
        const newDiv = document.createElement('div');
        newDiv.classList.add('not-found');
        newDiv.innerHTML =
        `
        <img src="logo/5203299-removebg-preview.png" alt="">
        `
        cardSection.appendChild(newDiv)
        changeBtnContainer.style.display = 'none'
    }
    loding.style.display = 'none';   
}

// for set card 
function setCad(array){
    // console.log(array);
    array.forEach(element => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('card-container');
        newDiv.innerHTML = `
        <div class="card-img">
            <img src="${element.image}" alt="">
        </div>
        <div class="card-info">
            <h4>Name: <span class="phoneName">${element.phone_name}</span></h4>
            <p>${element.brand}</p>
            <button onclick=phoneDetailsData("${element.slug}")>Details</button>
        </div>
        `
    cardSection.appendChild(newDiv) 
    }); 
    // console.log(cardSection);
}




// for seee more btn 
document.getElementById('see-more').addEventListener('click', function(){
    mobailDataLoad(searchTextStore, true);
})


// for << btn 
document.getElementById('backward-btn').addEventListener('click', function(){
    const cardSection = document.getElementById('card-section');
    cardSection.innerHTML = ''
    mobailDataLoad(searchTextStore);
})





mobailDataLoad('n')

