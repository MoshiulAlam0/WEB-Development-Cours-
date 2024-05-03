// show details function
const phoneDetailsData = async(id) =>{
    try{
        const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
        const data = await res.json();
        showDetails(data.data);

    }
    catch(e){
        console.log(e);
    }
}
function showDetails(detail){
}