// Coding Challenge 03!

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas) {
    console.log("Dolphins Wins the Trophy! 🏆");
} else if(scoreKoalas > scoreDolphins) {
    console.log("Koalas Wins the Trophy! 🏆");
} else if (scoreDolphins === scoreKoalas) {
    console.log("Both Team Wins the Trophy! 🏆");
}