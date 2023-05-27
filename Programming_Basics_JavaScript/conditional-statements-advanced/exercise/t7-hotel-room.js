function hotelRoom(input) {

    let month = input[0];
    let numberNights = Number(input[1]);
    let sumStudio = 0;
    let sumApartment = 0;
    let totalSumS = 0;
    let totalSumA = 0;

    if(month === "May" || month === "October") {
        sumStudio = numberNights * 50;
        sumApartment = numberNights * 65;

       
        if(numberNights > 14) {
            totalSumS = sumStudio * 0.70;
            totalSumA = sumApartment * 0.90;
        } else if(numberNights > 7) {
            totalSumS = sumStudio * 0.95;
            totalSumA = sumApartment;
        } else {
            totalSumA = sumApartment;
            totalSumS = sumStudio;
        }
    }else if(month === "June" || month === "September") {
       sumStudio= numberNights * 75.20;
       sumApartment = numberNights * 68.70;

        if(numberNights > 14) {
            totalSumS = sumStudio * 0.80;
            totalSumA = sumApartment * 0.90;
        }else {
            totalSumS = sumStudio;
            totalSumA = sumApartment;
        }
    }else if(month === "July" || month === "August") {
        sumStudio = numberNights * 76;
        sumApartment = numberNights * 77;

        if(numberNights > 14) {
           totalSumA = sumApartment * 0.90;
           totalSumS = sumStudio;
        } else {
           totalSumA = sumApartment;
           totalSumS = sumStudio;
        }
    }

    console.log(`Apartment: ${totalSumA.toFixed(2)} lv.`);
    console.log(`Studio: ${totalSumS.toFixed(2)} lv.`);

} 

hotelRoom(["May", "13"]);
