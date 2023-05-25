function summerOutfit(input) {

    let degrees = Number(input[0]);
    let timeOfDay = input[1];
    let outfit = "";
    let shoes = "";

    if(timeOfDay === "Morning") {
        if(10 <= degrees && degrees <= 18) {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        }else if(18 < degrees && degrees <= 24) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }else if(degrees >= 25) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
    }else if(timeOfDay === "Afternoon") {
        if(10 <= degrees && degrees <= 18) {
            outfit = "Shirt";
            shoes = "Moccasins";
        }else if(18 < degrees && degrees <= 24) {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if(degrees >= 25) {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
    } else {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);

}

summerOutfit(["28", "Evening"]);
