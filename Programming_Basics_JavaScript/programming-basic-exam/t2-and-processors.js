function andProcessors (input) {

    let processorsCount = Number(input[0]);
    let employeesCount = Number(input[1]);
    let days = Number(input[2]);
    let workEmployees = employeesCount * days * 8;
    let producedProcessors = Math.floor(workEmployees / 3);

    if(producedProcessors >= processorsCount) {
        let profit = producedProcessors - processorsCount;
        let totalProfit = profit * 110.10;
        console.log(`Profit: -> ${totalProfit.toFixed(2)} BGN`);
    } else {
        let lost = processorsCount - producedProcessors;
        let totalLost = lost * 110.10;
        console.log(`Losses: -> ${totalLost.toFixed(2)} BGN`);
    }

}

andProcessors(["500",
"8",
"20"]);
