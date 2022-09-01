/* 
 5 Falsy Values:
 ===============
    0, "", undefined, NaN, null
 */


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Ashiq"));
console.log(Boolean({}));



const money = 0;
if(money) {
    console.log("Don't spend it all.");
} else {
    console.log("You shold get a job!");
}

let height;

if(height){
    console.log("Yay! Height is Defined.");
} else {
    console.log("Height is UNDEFINED!");
}