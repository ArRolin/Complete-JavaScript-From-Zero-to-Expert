
const calcAverage = (a, b, c) => (a + b + c) /3;
console.log(calcAverage(3,4,5));

// Tese 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins Win! (${avgDolphins} vs. ${avgKoalas}) `);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas Win! (${avgKoalas} vs. ${avgDolphins}) `);
    } else {
        console.log(`No Team Wins!`);
    }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(576, 111);