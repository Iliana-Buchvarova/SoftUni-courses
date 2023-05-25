function cinema(input) {

    let type = input[0];
    let lines = Number(input[1]);
    let columns = Number(input[2]);
    let sum = 0;

    if(type === "Premiere") {
        sum = lines * columns * 12;
    } else if (type === "Normal") {
        sum = lines * columns * 7.50;
    } else if (type === "Discount") {
        sum = lines * columns * 5.00;
    }

    console.log(sum.toFixed(2) + " leva");

}

cinema(["Premiere", "10", "12"]);
