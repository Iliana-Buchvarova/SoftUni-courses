function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let sum = 0;
    let place = "";

    if(budget <= 100) {
        destination = "Bulgaria";
    }else if(budget <= 1000) {
        destination = "Balkans";
    }else if(budget >= 1000) {
        destination = "Europe";
    }

    switch(destination) {
        case "Bulgaria":
            if(season === "summer") {
                sum = budget * 0.30;
                place = "Camp";
            }else if(season === "winter") {
                sum = budget * 0.70;
                place = "Hotel";
            }
            break;
        case "Balkans" :
            if(season === "summer") {
                sum = budget * 0.40;
                place = "Camp";
            }else if(season === "winter") {
                sum = budget * 0.80;
                place = "Hotel";
            }
            break;
        case "Europe" :
            if(season === "summer" || season === "winter") {
                sum = budget * 0.90;
                place = "Hotel";
            }
            break;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(` ${place} - ${sum.toFixed(2)}`);

}

journey(["1500", "summer"]);
