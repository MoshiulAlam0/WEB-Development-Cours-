const loadquote = ( )=>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => getQuote(data))
}

const getQuote= (quote) =>{
    const element = document.getElementById('quote');
    element.innerText = quote.quote;
}

loadquote()