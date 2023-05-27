function skiTrip(input) {

    let daysToStay = Number(input[0]);
    let typeOfRoom = input[1];
    let evaluation = input[2];
    let sum = 0;
    let numberNights = daysToStay - 1;
    let totalSum = 0;
    

    switch(typeOfRoom) {
        case "room for one person" :
            sum = numberNights * 18.00;
            totalSum = sum;
            break;
        case "apartment" :
            sum = numberNights * 25.00;

            if(numberNights < 10) {
                totalSum = sum * 0.70;
            } else if(numberNights >= 10 && numberNights <= 15) {
                totalSum = sum * 0.65;
            } else if(numberNights > 15) {
                totalSum = sum * 0.50;
            }
            break;
        case "president apartment" :
            sum = numberNights * 35.00;

            if(numberNights < 10) {
                totalSum = sum * 0.90;
            } else if(numberNights >= 10 && numberNights <= 15) {
                totalSum = sum * 0.85;
            } else if(numberNights > 15) {
                totalSum = sum * 0.80;
            }
            break;
    }

    if(evaluation === "positive") {
        totalSum = totalSum + (totalSum * 0.25);
    } else {
        totalSum = totalSum - (totalSum * 0.10);
    }

    console.log(totalSum.toFixed(2));

} 

skiTrip(["30",
"president apartment",
"negative"]);
