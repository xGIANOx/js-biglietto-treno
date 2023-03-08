const userKm = prompt("Quanti chilometri percorrerai?");
console.log(userKm);

let chilometers = document.getElementById("km");
chilometers.innerHTML = "Percorrerai " + userKm + " chilometri"

const userAge = prompt("qual è la tua età?");
console.log(userAge);

let yourAge = document.getElementById("user_age");
yourAge.innerHTML = "Hai " + userAge + " anni"

let kmPrice = 0.21;

const price = userKm * kmPrice;

console.log(price);

let normalPrice = document.getElementById("total")

let discountTwenty = (price / 100) * 20;
let finalPrice_twenty = price - discountTwenty;

let final_20 = document.getElementById("total");



let discountFourty = (price / 100) * 40;
let finalPrice_fourty = price - discountFourty;

let final_40 = document.getElementById("total");





if (userAge < 18){
    final_20.innerHTML = "Il costo del tuo biglietto è di: " + finalPrice_twenty + " €"
} else if (userAge > 65){
    final_40.innerHTML = "Il costo del tuo biglietto è di: " + finalPrice_fourty + " €"
} else if (userAge >= 18 && userAge <= 65){
    normalPrice.innerHTML = "Il costo del tuo biglietto è di: " + price + " €"
}
