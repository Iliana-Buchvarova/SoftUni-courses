function timePlus15Minutes(input) {

    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    let hour1 = hour * 60;
    let totalTime = hour1 + minutes +15;
    let hour2 = Math.floor(totalTime/60);
    let minutes1 = totalTime % 60;

    if (hour2 === 24) {
       hour2 = 0;
    }

    if (minutes1 < 10) {
        console.log(`${hour2}:0${minutes1}`);
    }else {
        console.log(`${hour2}:${minutes1}`);
    }
   
}

timePlus15Minutes(["0", "01"]);
