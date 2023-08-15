function christmasGifts (input) {

    let index = 0;
    let command = input[index];
    let childrenCount = 0;
    let adultsCount = 0;

    while(command !== "Christmas") {

        let ageOfEachFamilyMember = Number(command);

        if(ageOfEachFamilyMember <= 16) {
            childrenCount++;
        } else {
            adultsCount++;
        }

        index++;
        command = input[index];

    }

    let toysPrice = childrenCount * 5;
    let sweatersPrice = adultsCount * 15;

    console.log(`Number of adults: ${adultsCount}`);
    console.log(`Number of kids: ${childrenCount}`);
    console.log(`Money for toys: ${toysPrice}`);
    console.log(`Money for sweaters: ${sweatersPrice}`);

}

christmasGifts(["16",
"20",
"46",
"12",
"8",
"20",
"49",
"Christmas"]);
