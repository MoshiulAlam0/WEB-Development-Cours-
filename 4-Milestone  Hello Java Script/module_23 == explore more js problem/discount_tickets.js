/* 
1. if ticket number is less than 100, than par tickets price will be 100 tk.

2. if ticket number is more than 100 but less than 200,
 than frist 100 tickets price willl be 100 tk and reste tickets price will be 90 tk.
 #frist 100 price ----> 100,
 #rest tickets price ----> 90.

 3. if  you puschase more than 200 , 
 frist 100 price ----> 100,
 second 100 price ----> 90,
 than rest tickets price will be 70 tk.
*/

function ticketPrice(ticketQuantity){
    const frist100Price = 100;
    const second100Price = 90;
    const restTicketsPrice = 70;

    if (ticketQuantity <= 100){
        const price = ticketQuantity * 100;
        return price;
    }
    else if ( ticketQuantity <= 200){
        const frist100 = 100 * frist100Price;
        const rest = ticketQuantity - 100;
        const restTicketsPrice = rest * second100Price;
        const totalPrice = frist100 + restTicketsPrice;
        return totalPrice; 
    }
    else {
        const frist100 = 100 * frist100Price;
        const second100 = 100 * second100Price;
        const rest = ticketQuantity - 200;
        const restsPrice = rest * restTicketsPrice;
        const totalticketsPrice = frist100 + second100 + restsPrice;
        return totalticketsPrice;
    }
}
let howMuchTicketsDoYouWontToBuy = 2001;
const totalPrice = ticketPrice(howMuchTicketsDoYouWontToBuy);
console.log(totalPrice);