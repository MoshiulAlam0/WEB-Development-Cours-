// convert redian to degree

function redianToDegree(redian){
    const convertRedian = redian * 57.2958;
    return convertRedian;
}
const yourRedian = 7;
const degree = redianToDegree(yourRedian);
console.log(degree);
