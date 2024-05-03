const rendomUser = () => {
    fetch('https://randomuser.me/api/?gender=male')
        .then(res => res.json())
        .then(data => getUserInfo(data))
}

const getUserInfo = info => {
    console.log(info.results[0]);
    const element = document.getElementById('user-info');
    const div = document.createElement('div');
    div.classList.add('user')
    div.innerHTML = `
    <img src="${info.results[0].picture.medium}" alt="" class="img">
    <h4>Name: ${info.results[0].name.title} ${info.results[0].name.frist} ${info.results[0].name.last} </h4>
    <p>Location:
     <span>city: ${info.results[0].location.city}</span> 
     <span>country: ${info.results[0].location.country}</span></p>
    <p>Gender: ${info.results[0].gender}</p> 
    <p>Id: ${info.results[0].id.value}</p> 
    <p>Cell: ${info.results[0].cell}</p> 
    <p>Email: ${info.results[0].email}</p> 
    <p>Phone: ${info.results[0].phone}</p> 
    `;
    element.appendChild(div)

}

rendomUser();

// for click btn 
const btn = document.getElementById('btn')
btn.addEventListener('click', function(){
    const element = document.getElementById('user-info');
    element.removeChild(element.childNodes[1]);
    rendomUser();
})