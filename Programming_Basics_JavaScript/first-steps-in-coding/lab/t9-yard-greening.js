function yardGreening (input) {
    
    let sqMetersGreening = Number(input[0]);
    let sqMeters = sqMetersGreening * 7.61;
    let finalPrice = sqMeters - (sqMeters * 0.18);
    let discount = sqMeters * 0.18;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}

yardGreening(["550"]);
