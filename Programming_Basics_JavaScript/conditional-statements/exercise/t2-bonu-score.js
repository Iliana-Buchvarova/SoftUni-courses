function bonusScore(input) {

    let startingNumberPoints = Number(input[0]);
    let bonus = 0;

    if (startingNumberPoints <= 100) {
        bonus = 5;
    } else if (startingNumberPoints <= 1000) {
        bonus = 0.20 * startingNumberPoints;
    } else {
        bonus = 0.10 * startingNumberPoints;
    }   
    
    if (startingNumberPoints % 2 === 0) {
        bonus = bonus + 1;
    } else if (startingNumberPoints % 10 === 5) {
        bonus = bonus + 2;
    }

    console.log(bonus);
    console.log(startingNumberPoints + bonus);

}

bonusScore(["20"]);
