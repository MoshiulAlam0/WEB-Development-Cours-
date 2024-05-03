function centimeterToMeter(cm){
    const cmToMeter = cm *  0.01; 
    return cmToMeter;
}

const yourCM = 1860;
const totalMeter = centimeterToMeter(yourCM);
console.log(totalMeter,'m');