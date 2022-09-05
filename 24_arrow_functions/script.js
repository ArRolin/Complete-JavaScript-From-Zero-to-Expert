
const calcAge = birthYear => birthYear - 1990;
const age = calcAge(2022)
console.log(age);

const yearsUntilRetirement = (birthYear, firstName) => {
    const ageOrigin = 2022 - birthYear;
    const retirement = 65 - ageOrigin;
    // return retirement;
    return  `${firstName} retires in ${retirement} years!`;
}

console.log(yearsUntilRetirement(1990, "Ashiq"));