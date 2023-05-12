function foodDelivery(input) {

    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu = Number(input[2]);
    let sumChikenMenu = chickenMenu * 10.35;
    let sumFishMenu = fishMenu * 12.40;
    let sumVeganMenu = veganMenu * 8.15;
    let sum = sumChikenMenu + sumFishMenu + sumVeganMenu;
    let sumDesert = sum * 0.2;
    let totalSum = sum + sumDesert + 2.50;

    console.log(totalSum);

}

foodDelivery(["2 ", "4 ", "3 "]);