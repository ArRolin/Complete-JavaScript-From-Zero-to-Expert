
const age = 30;

// age > 18 ? console.log("You are allowed to Drink Wine!") : console.log("You are not allowed to Drink Wine!");

const drink = age >= 18 ? "Drink Wine!" : "Drink Water!";
console.log(drink);

let drink2;
if(age >= 18) {
    drink2 = "Wine!";
} else {
    drink2 = "Water";
}

console.log(drink2);


console.log(`I like to Drink ${age>=18?"Wine":"Water"}!`);