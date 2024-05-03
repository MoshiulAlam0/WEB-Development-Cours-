const datas = [12, -12, 33, 22, -22, 4, 0, -9, -3, 22, 66, 93, 83, -2, -4, 0];
function findBadData(array){
    const badData = [];
    const goodData = [];
    for(let i = 0; i < array.length; i++){
        const element = array[i];
        if(element < 0){
badData.push(element);
        }
        else if (element >= 0){
goodData.push(element);
        }
    }
    return {badData, goodData};

}

const dataList = findBadData(datas);
console.log(dataList);