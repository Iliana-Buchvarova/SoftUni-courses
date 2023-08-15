function goldMine (input) {

    let index = 0;
    let locationCount = Number(input[index]);
   
    for(let i = 0; i < locationCount; i++) {
        index++;
        let avrDaysGold = Number(input[index]);
        index++;
        let daysMinedLocation = Number(input[index])
        let goldMined = 0;
        
        for(let j = 0; j < daysMinedLocation; j++) {
            index++;
            let currNum = Number(input[index]);
            goldMined += currNum;
        }

        let avrGold = (goldMined / daysMinedLocation);

        if(avrGold >= avrDaysGold) {
            console.log(`Good job! Average gold per day: ${avrGold.toFixed(2)}.`);
        }else {
            let need = avrDaysGold - avrGold;
            console.log(`You need ${need.toFixed(2)} gold.`);
        }
        
    }

}

goldMine(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"]);
