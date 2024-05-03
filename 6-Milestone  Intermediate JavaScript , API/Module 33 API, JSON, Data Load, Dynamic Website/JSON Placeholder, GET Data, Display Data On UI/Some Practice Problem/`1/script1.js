function commentLode(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => getComment(data))
}

const getComment = comments =>{
    const commentsContainer = document.getElementById('comments-container');
    for(const comment of comments){
        const newDiv = document.createElement('div');
        newDiv.classList.add('comment-box')
        newDiv.innerHTML = `
        <h3>Name: ${comment.name}</h3>
        <p>Id: ${comment.id}</p>
        <h5>Email: ${comment.email}</h5>
        <p>Comment: ${comment.body}</p>
        `;
        commentsContainer.appendChild(newDiv);

    }
}

commentLode();


// for todos 
function lodetodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => gettodos(data))
}

const gettodos = todos => {
    const todosContainer = document.getElementById('todoes-container');
    for(const todo of todos){
        const newDiv = document.createElement('div')
        newDiv.classList.add('todo-box');
        newDiv.innerHTML = `
        <h5>Title: ${todo.title}</h5>
        <p>Id: ${todo.id}</p>
        `;
        console.log(todo.title);
        todosContainer.appendChild(newDiv);

    }
}
lodetodos();