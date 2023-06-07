function trekkingMania (input) {

    let numberGroups = Number(input[0]);
    let climbingMusalaGroups = 0;
    let climbingMonblanGroups = 0;
    let climbingKilimandjaroGroups = 0;
    let climbingK2Groups = 0;
    let climbingEverestGroups = 0;
    let sum = 0;

    for(let i = 1 ; i <= numberGroups ; i++) {
        let curNumber = Number(input[i]);

        if(curNumber <= 5) {
           climbingMusalaGroups += curNumber;
        }else if (curNumber <= 12) {
            climbingMonblanGroups += curNumber;
        }else if(curNumber <= 25) {
           climbingKilimandjaroGroups += curNumber;
        }else if (curNumber <= 40) {
          climbingK2Groups += curNumber;
        } else {
            climbingEverestGroups += curNumber;
        }
    }

    sum = climbingMusalaGroups + climbingMonblanGroups + climbingKilimandjaroGroups 
    + climbingK2Groups + climbingEverestGroups;

    let perMusala = (climbingMusalaGroups/sum) * 100;
    let perMonblan = (climbingMonblanGroups/sum) * 100;
    let perKilimandjaro = (climbingKilimandjaroGroups/sum) * 100;
    let perK2 = (climbingK2Groups/sum) * 100;
    let perEverest = (climbingEverestGroups/sum) * 100;

    console.log(`${perMusala.toFixed(2)}%`);
    console.log(`${perMonblan.toFixed(2)}%`);
    console.log(`${perKilimandjaro.toFixed(2)}%`);
    console.log(`${perK2.toFixed(2)}%`);
    console.log(`${perEverest.toFixed(2)}%`);

}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"]);
