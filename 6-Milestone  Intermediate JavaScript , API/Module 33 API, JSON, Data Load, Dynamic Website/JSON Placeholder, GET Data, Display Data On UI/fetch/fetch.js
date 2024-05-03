/* 
Fetch :
1. jokhon kono API use korar proyojon hoi tokhon ai Fetch use korte hoi ar 
2. ai fetch function ar paramitter holo akta (url) paramitar nei .
*/

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))



// const url = 'https://jsonplaceholder.typicode.com/users'
// fetch (url)
// .then(res => res.json())
// .then(data => console.log(data));

//   click function------------>>>>      
// for click inside the button 
const getData1 = () => {
const url = 'https://jsonplaceholder.typicode.com/users'
fetch (url)
.then(res => res.json())
.then(data => console.log(data));
}

// btn2
const getData2 = () =>{
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}

// btn 3
const getData3 = () => {
      const url = 'https://jsonplaceholder.typicode.com/users'
      fetch (url)
      .then(res => res.json())
      .then(data => getUser(data));
      }
// function       
const getUser = info => {
      console.log(info);
}
