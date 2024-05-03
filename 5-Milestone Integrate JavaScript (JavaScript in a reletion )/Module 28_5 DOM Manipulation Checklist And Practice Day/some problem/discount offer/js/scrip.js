/* 
1.addd event heandelar with the apply btn
2.convert all price to 30%  nad set New Price 
*/
document.getElementById('disc-btn').addEventListener('click', function(){
    const discountCode = inputValueFormFieldByid('discount-field');
    convertPriceAndSetNewPrice(discountCode);
})