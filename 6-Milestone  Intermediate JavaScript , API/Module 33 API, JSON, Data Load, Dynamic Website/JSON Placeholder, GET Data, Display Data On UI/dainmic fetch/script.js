function getPost (){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( res => res.json())
    .then( data => addPost(data));
}

const addPost = posts => {
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        console.log(post);
        const newDiv = document.createElement('div');
        newDiv.classList.add('post')
        newDiv.innerHTML = `
        <h4 class="h4">Title: ${post.title}!</h4>
        <p class="p">Post: ${post.body}.</p>
        <p class="p"> User id: <span class="id">${post.userId}</span></p>
        `;
        postContainer.appendChild(newDiv);
    }
}

getPost()