function depositCalculator(input) {

    let depositSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let annualInterestPercent = Number(input[2]) / 100;

    console.log(sum = depositSum + depositTerm * ((depositSum * annualInterestPercent ) / 12));

} 

depositCalculator(["200","3","5.7"]);
