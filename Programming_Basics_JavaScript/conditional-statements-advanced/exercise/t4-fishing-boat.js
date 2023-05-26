function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let numberFishermen = Number(input[2]);
    let sumRental = 0;

    switch(season) {
        case "Spring" :
            sumRental = 3000;
            break;
        case "Summer" :
        case "Autumn" :
            sumRental = 4200;
            break;
        case "Winter" :
            sumRental = 2600
    }

    if(numberFishermen <=6) {
        sumRental = sumRental * 0.90;
    }else if(numberFishermen >= 7 && numberFishermen <= 11) {
        sumRental = sumRental * 0.85;
    }else if (numberFishermen > 12) {
        sumRental = sumRental * 0.75;
    }

    if((season === "Spring" || season === "Summer" || season === "Winter") && numberFishermen % 2 ===0) {
        sumRental = sumRental * 0.95;
    } else if (season === "Autumn" && numberFishermen % 2 ===0) {
        sumRental = sumRental;
    }

    //if(season !== "Autumn" && numberFishermen % 2 === 0) {
        // sumRental = sumRental * 0.95
    //}

    if(budget >= sumRental) {
        let sumLeft = budget - sumRental;
        console.log(`Yes! You have ${sumLeft.toFixed(2)} leva left.`);
    } else {
        let neddedSum = sumRental - budget;
        console.log(`Not enough money! You need ${neddedSum.toFixed(2)} leva.`);
    }

} 

fishingBoat(["2000", "Winter", "13"]);
