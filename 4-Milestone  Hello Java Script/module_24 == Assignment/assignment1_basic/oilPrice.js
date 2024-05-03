// calculate oil price 
function oilPrice (pectrolQuantity, octenQuantity, digelQuantity){
    if (typeof(pectrolQuantity||octenQuantity||digelQuantity) === 'number') {
        const parLitterPectrol = 114;
    const parLitterOcten = 130;
    const parLitterDigel = 135;
    const totalPectrolPrice = parLitterPectrol * pectrolQuantity;
    const totalOctenlPrice = parLitterOcten * octenQuantity;
    const totalDigelPrice = parLitterDigel * digelQuantity;
const totalPriceOfOil = totalPectrolPrice + totalOctenlPrice + totalDigelPrice;
return totalPriceOfOil;
    }
    return 'plase input only number';
}

const pectrolQuantity = 'h';
const octenQuantity = 1;
const digelQuantity = 1;
const totalOilPrice = oilPrice(pectrolQuantity, octenQuantity, digelQuantity) ;
console.log(totalOilPrice);
