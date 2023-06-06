function cleverLily(input) {

    let age = Number(input[0]);
    let priceWashingmachine = Number(input[1]);
    let pricePerToy = Number(input[2]);
    let moneyWon = 0;
    let evenBirthday = 10;

    for(let i = 1 ; i <= age ; i++) {

        if(i % 2 === 0) {
            moneyWon += evenBirthday;
            moneyWon -= 1;
            evenBirthday += 10;
        } else {
            moneyWon += pricePerToy;
        }
    }

    if(moneyWon >= priceWashingmachine) {
        let moneyLeft = moneyWon - priceWashingmachine;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let neededSum = priceWashingmachine - moneyWon;
        console.log(`No! ${neededSum.toFixed(2)}`);
    }

}

cleverLily(["10",
"170.00",
"6"]);
