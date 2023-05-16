function toyShop(input) {

    let vacantionPrice = Number(input[0]);
    let numberOfPuzzles = Number(input[1]);
    let numberOfTalkingDolls = Number(input[2]);
    let numberOfBears = Number(input[3]);
    let numberOfMinions = Number(input[4]);
    let NumberOfTrucks = Number(input[5]);
    let toysSum = numberOfPuzzles * 2.60 + numberOfTalkingDolls * 3 + numberOfBears * 4.10 + numberOfMinions * 8.20 + NumberOfTrucks * 2;
    let numberOfToys = numberOfPuzzles + numberOfTalkingDolls + numberOfBears + numberOfMinions + NumberOfTrucks;

    if(numberOfToys >= 50) {
       let discount = toysSum * 0.25;
           toysSum = toysSum - discount;
    } 

    let sumRent = toysSum * 0.1;
    toysSum = toysSum - sumRent;

    if(toysSum >= vacantionPrice) {
        let totalSum = toysSum - vacantionPrice;
        console.log(`Yes! ${totalSum.toFixed(2)} lv left.`);
    } else {
        let neededSum = vacantionPrice - toysSum;
        console.log(`Not enough money! ${neededSum.toFixed(2)} lv needed.`);
    }

}
 
toyShop(["40.8", "20", "25", "30", "50", "10"]);
