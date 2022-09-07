
const friends = ["Jamal", "Kamal", "Joshim"];

const newList = friends.push("Atik");

console.log(friends);
console.log(newList);

friends.unshift("Milon");

console.log(friends);

friends.pop();

console.log(friends);

friends.shift();

console.log(friends);


console.log(friends.indexOf("Kamal"));

// ES6
console.log(friends.includes("Kamal")); // includes methods good for conditionals operations

if (friends.includes("Milon")) {

} else {
    console.log("Your Mentioned Friend is not available in the list");
}


