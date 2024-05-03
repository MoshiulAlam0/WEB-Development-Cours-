// //  for increase value of field 
// // way 1
// function forIncrease(field_id) {
//     const field = document.getElementById(field_id);
//     // console.log(typeof(field.value++)); // (++) use korle ar parseInt/parseFlout a convert kora lage na
//     field.value++
// }
// // way2
// function increaseValueOFField(field_id) {
//     const field = document.getElementById(field_id);
//     const value = parseInt(field.value);
//     field.value = value + 1;
// }

// //  for decrease value of field 
// function decreaseValueOFField(field_id) {
//     const field = document.getElementById(field_id);
//     const value = parseInt(field.value);
//     if (value > 1) {
//         field.value = value - 1;
//     }
// }






// ------------------------------------------Main function-----------------------------------
// for get previwes Price-------------
function previwesPriceById(element_id) {
    const element = document.getElementById(element_id);
    const price = parseFloat(element.innerText);
    return price;
}

// increase and decrease togeter -----------++++++++++++++++++------------
function updateValueOfField(field_id, isIncrease) {
    const field = document.getElementById(field_id);
    const value = parseInt(field.value);
    if (isIncrease === true) {
        const newValue = field.value = value + 1;
        return newValue;

    }
    else {
        if (value > 1) {
            const newValue = field.value = value - 1;
            return newValue;
        }
    }
}



// for increase and decrease total price ---------------------------
function updateTotalPrice(element_id, field_value, previwesPrice, isIncrease) {
    const element = document.getElementById(element_id);
    const price = parseFloat(element.innerText);
    if (isIncrease === true) {
        const totalPrice = field_value * previwesPrice;
        const newTotalPrice = element.innerText = totalPrice;
        return newTotalPrice;
    }
    else {
        if (field_value >= 1) {
            // const newPrice = price - previwesPrice;
            const newPrice = field_value * previwesPrice;
            const newTotalPrice = element.innerText = newPrice;
            return newTotalPrice;
        }
    }
}

// set final total price (function ) 
function setFinalTotalPrice (element_id, value){
    const element = document.getElementById(element_id);
    element.innerText = value;
}


// for calculet main total price and set---------subTotal / tax / totalPrice------------ 
function calculetFinalTotalPrice (){
    console.log('hello i am here');
    const iphoneElement  = document.getElementById('iphone-amount'); //price of iphone total price 
    const newIphonePrice = parseFloat(iphoneElement.innerText);
    const coverPrice = document.getElementById('cover-amount'); // price of cover total price 
    const newCoverPrice = parseFloat(coverPrice.innerText);

    const subtotal = newIphonePrice + newCoverPrice; 
    setFinalTotalPrice('subTotal-pirce', subtotal);

    const taxString = subtotal * 10 /100;
    const tax = parseFloat(taxString.toFixed(2));
    setFinalTotalPrice('tax-pirce', tax);

    const totalPrice = subtotal + tax; 
    setFinalTotalPrice('total-price', totalPrice);
    }
