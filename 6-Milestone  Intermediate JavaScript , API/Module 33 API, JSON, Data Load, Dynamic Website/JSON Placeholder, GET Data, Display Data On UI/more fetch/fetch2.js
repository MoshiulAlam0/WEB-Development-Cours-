const userName = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => getUser(data))
}


// for get users name 
const getUser = users =>{
    const ul = document.getElementById('user_id');
    for(const user of users){
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}