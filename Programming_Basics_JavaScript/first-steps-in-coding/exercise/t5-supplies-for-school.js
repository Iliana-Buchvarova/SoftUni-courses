function suppliesForSchool(input) {

    let packetPen = Number(input[0]);
    let packetMarks = Number(input[1]);
    let cleaningFluidLiters = Number(input[2]);
    let discountPer = Number(input[3]);
    let price = packetPen * 5.80 + packetMarks * 7.20 + cleaningFluidLiters * 1.20;
     
    price = price - (price * (discountPer/100));

    console.log(price);

} 

suppliesForSchool (["2", "3", "4", "25"]);
