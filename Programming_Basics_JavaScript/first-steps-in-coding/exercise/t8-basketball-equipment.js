function basketballEquipment(input) {

    let annualFeeBasketball = Number(input[0]);
    let basketballSneakers = annualFeeBasketball -(annualFeeBasketball * 0.4);
    let basketballTeam = basketballSneakers-(basketballSneakers * 0.2);
    let basketball = basketballTeam * 1/4;
    let basketballAccessories = basketball * 1/5;
    let totalSum = annualFeeBasketball + basketballSneakers + basketballTeam + basketball + basketballAccessories;

    console.log(totalSum);

}

basketballEquipment(["365"]);
