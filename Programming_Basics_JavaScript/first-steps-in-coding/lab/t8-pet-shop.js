function petShop(input) {
  
    let eatDogs = Number(input[0]);
    let eatCats = Number(input[1]);
    let dogs = eatDogs * 2.50;
    let cats = eatCats * 4;
    let eatDogsCats = dogs + cats;

    console.log(eatDogsCats + " lv");

}

petShop(["5","4"]);
