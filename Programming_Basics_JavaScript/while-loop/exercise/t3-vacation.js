function vacation(input) {

    let index = 0;
    let vacationSum = Number(input[index]);
    index++;
    let moneyHand = Number(input[index]);
    index++;
    let daysCounter = 0;
    let totalDays = 0;

    while(moneyHand < vacationSum) {
        let command = input[index];
        index++;
        let sum = Number(input[index]);
        index++;

        if(command === "save") {
            moneyHand += sum;
            daysCounter = 0;
        } else if (command === "spend") {
            if(sum > moneyHand) {
                moneyHand = 0;
            }else {
                moneyHand -= sum;
            }
           
            daysCounter++;

        }

        totalDays++;

        if(daysCounter === 5) {
            console.log(`You can't save the money.`);
            console.log(`${totalDays}`);
            break;
        }

    }

    if(moneyHand >= vacationSum) {
        console.log(`You saved the money for ${totalDays} days.`);
    }
    
}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"]);
