// user km input
const userKm = prompt("Quanti chilometri percorrerai?");
console.log(userKm);

// km on screen print

let chilometers = document.getElementById("km");
chilometers.innerHTML = "Percorrerai " + userKm + " chilometri"

// user age input

const userAge = prompt("qual è la tua età?");
console.log(userAge);

// age on screen print

let yourAge = document.getElementById("user_age");
yourAge.innerHTML = "Hai " + userAge + " anni"

// €/Km

let kmPrice = 0.21;

// price per km calculator

const price = userKm * kmPrice;

console.log(price);

let normalPrice = document.getElementById("total")

// discount section

let discountTwenty = (price / 100) * 20;
let finalPrice_twenty = price - discountTwenty;

let final_20 = document.getElementById("total");



let discountFourty = (price / 100) * 40;
let finalPrice_fourty = price - discountFourty;

let final_40 = document.getElementById("total");


// Print total price discounted on age


if (userAge < 18){
    final_20.innerHTML = "Il costo del tuo biglietto è di: " + finalPrice_twenty + " €"
} else if (userAge > 65){
    final_40.innerHTML = "Il costo del tuo biglietto è di: " + finalPrice_fourty + " €"
} else if (userAge >= 18 && userAge <= 65){
    normalPrice.innerHTML = "Il costo del tuo biglietto è di: " + price + " €"
}
