function footballSouvenirs (input) {

    let team = input[0];
    let souvenirs = input[1];
    let boughtSouvenirsCount = Number(input[2]);
    let price = 0;

    if(team === "Argentina") {
        switch(souvenirs) {
            case "flags" :
                price = boughtSouvenirsCount * 3.25;
                break;
            case "caps" :
                price = boughtSouvenirsCount * 7.20;
                break;
            case "posters" :
                price = boughtSouvenirsCount * 5.10;
                break;
            case "stickers" :
                price = boughtSouvenirsCount * 1.25;
                break;
            default : console.log(`Invalid stock!`);
                return;
        }
    }else if (team === "Brazil") {
        switch(souvenirs) {
            case "flags" :
                price = boughtSouvenirsCount * 4.20;
                break;
            case "caps" :
                price = boughtSouvenirsCount * 8.50;
                break;
            case "posters" :
                price = boughtSouvenirsCount * 5.35;
                break;
            case "stickers" :
                price = boughtSouvenirsCount * 1.20;
                break;
            default : console.log(`Invalid stock!`);
                return;
        }
    }else if (team === "Croatia") {
        switch(souvenirs) {
            case "flags" :
                price = boughtSouvenirsCount * 2.75;
                break;
            case "caps" :
                price = boughtSouvenirsCount * 6.90;
                break;
            case "posters" :
                price = boughtSouvenirsCount * 4.95;
                break;
            case "stickers" :
                price = boughtSouvenirsCount * 1.10;
                break;
            default : console.log(`Invalid stock!`);
                return;
        }
    }else if (team === "Denmark") {
        switch(souvenirs) {
            case "flags" :
                price = boughtSouvenirsCount * 3.10;
                break;
            case "caps" :
                price = boughtSouvenirsCount * 6.50;
                break;
            case "posters" :
                price = boughtSouvenirsCount * 4.80;
                break;
            case "stickers" :
                price = boughtSouvenirsCount * 0.90;
                break;
            default : console.log(`Invalid stock!`);
               return;
        }
    }else {
        console.log(`Invalid country!`);
        return;
    }

    console.log(`Pepi bought ${boughtSouvenirsCount} ${souvenirs} of ${team} for ${price.toFixed(2)} lv.`);

}

footballSouvenirs(["Argentina",
"shirts",
"35"]);
