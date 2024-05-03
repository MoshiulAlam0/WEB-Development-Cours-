const coverPreviwesPrice = previwesPriceById('cover-amount');
// + button 
document.getElementById('cover-plus').addEventListener('click', function(){
//    forIncrease('cover-input');
// increaseValueOFField('cover-input');
const fieldNewValue = updateValueOfField('cover-input', true);
updateTotalPrice('cover-amount',fieldNewValue, coverPreviwesPrice, true);
calculetFinalTotalPrice()
})
// - button 
document.getElementById('cover-mainas').addEventListener('click', function(){
    // decreaseValueOFField('cover-input');
    const fieldNewValue = updateValueOfField('cover-input', false);
    updateTotalPrice('cover-amount',fieldNewValue, coverPreviwesPrice, false);
    calculetFinalTotalPrice()
})
