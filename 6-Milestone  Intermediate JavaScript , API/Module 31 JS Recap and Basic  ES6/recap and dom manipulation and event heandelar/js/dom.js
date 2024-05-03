document.getElementById('btn-1').addEventListener('click', function(){
    const friends = document.getElementsByClassName('firend');
    for(const firend of friends){
        firend.style.backgroundColor = 'tomato';
    }
})


document.getElementById('btn-2').addEventListener('click', function(){
    document.getElementById('friend-3rd').style.textAlign = 'center';
})
    


document.getElementById('btn-3').addEventListener('click', function(){
    const friendContainer = document.getElementById('Friends-container');
    const newElement = document.createElement('div');
    newElement.classList.add('firend')
    newElement.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
    <p class="friend-info"> My Friend Is Verry Smart</p>
    `;
    friendContainer.appendChild(newElement);
})