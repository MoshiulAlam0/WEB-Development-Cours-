function publicBusFare(passenger){
    const reservedBus = 50;
    const microBus = 11;
    // rest passenger will go by the Public Bus
    const publicFare = 250;

    if (passenger >= reservedBus) {
    const bus = passenger / reservedBus;
    const int = parseInt(bus);
    const restAfterBus = passenger - reservedBus*int;
    console.log('you will reseve:',int,'bus');
    if (restAfterBus >= microBus) {
        const micro = restAfterBus / microBus;
        const int = parseInt(micro);
        console.log('you will reseve microbus:',int);
        const restAfterCar = restAfterBus - microBus*int;
        if(restAfterCar >= 1){
            const fare = restAfterCar * publicFare;
           console.log(restAfterCar,'pessenger will go by public bus, have to pay:',fare);
        }
    }
    else{
        const fare = restAfterBus * publicFare;
        console.log(restAfterBus,'pessenger will go by public bus, have to pay:',fare);
    }

    }
    else if (passenger >= microBus) {
        const micro = passenger / microBus;
        const int = parseInt(micro);
        const restAfterCar = passenger - microBus*int;
        console.log('you will reseve microbus:',int);
        if(restAfterCar >= 1){
            const fare = restAfterCar * publicFare;
           console.log(restAfterCar,'pessenger will go by public bus, have to pay:',fare);
        }
    }
    else{
        if(passenger >= 1){
            const fare = passenger * publicFare;
           console.log(passenger,'pessenger will go by public bus, have to pay:',fare);
        }
    }
}

const passengers = 313;
const BusFare = publicBusFare(passengers);
// console.log(BusFare);