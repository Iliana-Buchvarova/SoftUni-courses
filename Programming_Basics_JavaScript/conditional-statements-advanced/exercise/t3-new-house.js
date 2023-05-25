function newHouse(input) {

    let kindOfFlowers = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let totalPrice = 0;

    switch(kindOfFlowers) {
        case "Roses" :
            totalPrice = flowersCount * 5;
            break;
        case "Dahlias" :
            totalPrice = flowersCount * 3.80;
            break;
        case "Tulips" :
            totalPrice = flowersCount * 2.80;
            break;
        case "Narcissus" :
            totalPrice = flowersCount * 3;
            break;
        case "Gladiolus" :
            totalPrice = flowersCount * 2.50;
            break;
    }

    if(kindOfFlowers ==="Roses" && flowersCount > 80) {
        totalPrice = totalPrice - (totalPrice * 0.10);
    }else if(kindOfFlowers === "Dahlias" && flowersCount > 90) {
        totalPrice = totalPrice - (totalPrice * 0.15);
    }else if(kindOfFlowers === "Tulips" && flowersCount >80) {
        totalPrice = totalPrice - (totalPrice * 0.15);
    }else if(kindOfFlowers === "Narcissus" && flowersCount < 120) {
        totalPrice = totalPrice + (totalPrice * 0.15);
    }else if(kindOfFlowers === "Gladiolus" && flowersCount < 80) {
        totalPrice = totalPrice + (totalPrice * 0.20);
    }

    if(budget >= totalPrice) {
        let sumLeft = budget - totalPrice;
        console.log(`Hey, you have a great garden with ${flowersCount} ${kindOfFlowers} and ${sumLeft.toFixed(2)} leva left.`);
    } else {
        let neededSum = totalPrice - budget;
        console.log(`Not enough money, you need ${neededSum.toFixed(2)} leva more.`);
    }

}

newHouse(["Roses","55","250"]);
