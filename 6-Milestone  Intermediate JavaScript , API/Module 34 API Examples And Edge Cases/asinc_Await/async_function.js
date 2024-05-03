// const dataLoad = async() =>{
//     const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
// }
// dataLoad();

const dataLoad2 = () =>{
    const url = 'hps://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata' ;// wrong url
    try{
        const res =  await(fetch(url));
        const data = await(res.json());
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
dataLoad2();