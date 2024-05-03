// for get value form the input field 
function inputValueFormFieldByid(field_id) {
    const field = document.getElementById(field_id);
    return field.value;

}


//  for convert and set inside the element 
function convertPriceAndSetNewPrice(field_value) {
    if (field_value === 'DISC30') {
        const Elements = document.getElementsByClassName('dolar');
        for (const Element of Elements) {

            const ElementValue = parseFloat(Element.innerText);
            const cal = ElementValue / 100;
            const disc = cal * 30; // convert all price to 30% 
            const result = ElementValue - disc;
            Element.innerText = result.toFixed(2);

            const field = document.getElementById('discount-field');
            field.value = '';
            // field.style.boxShadow = '4px 9px 80px 29px rgba(0,252,71,0.88)';
        }
    }
    else{
        alert('please provite the right code');
        return;
    }
}
