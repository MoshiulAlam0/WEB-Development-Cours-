const searchField = document.getElementById('search-field');
document.getElementById('search-btn').addEventListener('click', function(){
    if(searchField.value !== ''){
        const cardSection = document.getElementById('card-section');
        cardSection.innerHTML = ''
        mobailDataLoad(searchField.value) ;

        const changeBtnContainer = document.getElementById('change-btn-container');
        changeBtnContainer.style.display = 'none';

        const loding = document.getElementById('loding-container') ;
        loding.style.display = 'flex';
    }
})

document.getElementById('search-field').addEventListener('keyup', function(){
    const ex = new RegExp (searchField.value , 'gi');
        const names = document.getElementsByClassName("phoneName");
        for(const name of names){
            const text = name.textContent;
            const replece = text.replace(ex, char => `<span class="heilightText">${char}</span>`);
            name.innerHTML = replece;
        }
})