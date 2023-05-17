function lunchBreak(input) {

    let nameSeries = input[0];
    let episodeLength = Number(input[1]);
    let pauseLength = Number(input[2]);
    let lunchTime = pauseLength * 1/8;
    let relaxTime = pauseLength * 1/4;
    let timeLeft = pauseLength - lunchTime - relaxTime;

    if(timeLeft >= episodeLength) {
        let time = timeLeft - episodeLength;
        console.log(`You have enough time to watch ${nameSeries} and left with ${Math.ceil(time)} minutes free time.`);
    } else {
        let neededTime = episodeLength - timeLeft;
        console.log(`You don't have enough time to watch ${nameSeries}, you need ${Math.ceil(neededTime)} more minutes.`);
    }

}

lunchBreak(["Game of Thrones", "60", "96"]);
