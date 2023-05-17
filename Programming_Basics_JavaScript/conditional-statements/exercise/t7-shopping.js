function shopping(input) {

    let budgetPetar = Number(input[0]);
    let numberVideoCards = Number(input[1]);
    let numberProcessors = Number(input[2]);
    let numberRamMemory = Number(input[3]);
    let sumVideoCards = numberVideoCards * 250;
    let sumProcessors = (sumVideoCards * 0.35) * numberProcessors;
    let sumRamMemory = (sumVideoCards * 0.1) * numberRamMemory;
    let totalSum = sumVideoCards + sumProcessors + sumRamMemory;

    if(numberVideoCards > numberProcessors) {
        totalSum = totalSum - (totalSum * 0.15);
    }

    if(budgetPetar >= totalSum) {
        let budget = budgetPetar - totalSum;
       console.log(`You have ${budget.toFixed(2)} leva left!`);
    } else {
        let neededSum = totalSum - budgetPetar;
        //let neededMoney = Math.abs( budgetPetar - totalSum );
        console.log(`Not enough money! You need ${neededSum.toFixed(2)} leva more!`);
    }

} 

shopping(["900", "2", "1", "3"]);
