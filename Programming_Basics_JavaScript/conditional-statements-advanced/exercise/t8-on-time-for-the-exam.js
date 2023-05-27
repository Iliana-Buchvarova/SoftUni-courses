function onTimeForTheExam(input) {

    let timeExam = Number(input[0]);
    let minuteExam = Number(input[1]);
    let hourOfArrival = Number(input[2]);
    let minuteOfArrival = Number(input[3]);

    if(hourOfArrival > timeExam) {
        console.log("Late");
    }else if(hourOfArrival === timeExam || hourOfArrival <= minuteOfArrival) {
        console.log("On time");
    }else if(minuteOfArrival < timeExam) {
        console.log("Early");
    }

    if(minuteOfArrival > timeExam) {
        console.log();
    }

} 

onTimeForTheExam(["9", "30", "9", "50"]);
