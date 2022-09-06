const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years!`);
        return retirement;
    } else {
        console.log(`${firstName} alredy Retired`);
        return -1;
    }
    // return  `${firstName} retires in ${retirement} years!`;
}

console.log(yearsUntilRetirement(1990, "Ashiq"));