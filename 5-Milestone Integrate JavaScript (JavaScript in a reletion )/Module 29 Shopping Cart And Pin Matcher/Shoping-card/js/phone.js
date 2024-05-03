const iphonePreviwesPrice = previwesPriceById('iphone-amount');
// for + button
document.getElementById('iphone-plus').addEventListener('click', function () {
    // increaseValueOFField('iphone-field');
    const fieldValue = updateValueOfField('iphone-field', true);
    updateTotalPrice('iphone-amount', fieldValue, iphonePreviwesPrice, true);
    calculetFinalTotalPrice()

})
// for - button
document.getElementById('iphone-mainus').addEventListener('click', function () {
    // decreaseValueOFField('iphone-field');
    const fieldValue = updateValueOfField('iphone-field', false);
    updateTotalPrice('iphone-amount', fieldValue, iphonePreviwesPrice, false);
    calculetFinalTotalPrice()
})