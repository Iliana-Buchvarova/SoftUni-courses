function godzillaVsKong(input) {

    let budgetForTheFilm = Number(input[0]);
    let numberOfExtras = Number(input[1]);
    let priceClothingForOneExtra = Number(input[2]);
    let sumDecor = budgetForTheFilm * 0.1;
    let sumClothing = numberOfExtras * priceClothingForOneExtra;
    
    if(numberOfExtras > 150) {
       sumClothing = sumClothing - (sumClothing * 0.1);
    }

    let totalSum = sumDecor + sumClothing;

    if(totalSum > budgetForTheFilm) {
        let neededSum = totalSum - budgetForTheFilm;
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${neededSum.toFixed(2)} leva more.`);
    } else if(totalSum <= budgetForTheFilm) {
        let remainingMoney = budgetForTheFilm - totalSum;
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${remainingMoney.toFixed(2)} leva left.`);
    }

}

godzillaVsKong(["20000", "120", "55.5"]);
