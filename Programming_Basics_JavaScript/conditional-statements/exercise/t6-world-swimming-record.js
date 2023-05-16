function worldSwimmingRecord(input) {

    let recordSec = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let timeInSecFor1m = Number(input[2]);
    let swim = distanceMeters * timeInSecFor1m;
    let delay = Math.floor(distanceMeters / 15);
    let delayTime = delay * 12.5;
    let totalTime = swim + delayTime;

    if(totalTime < recordSec) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else if(totalTime >= recordSec) {
        let neededSec = totalTime - recordSec;
        console.log(`No, he failed! He was ${neededSec.toFixed(2)} seconds slower.`);
    }

}

worldSwimmingRecord(["10464", "1500", "20"]);
