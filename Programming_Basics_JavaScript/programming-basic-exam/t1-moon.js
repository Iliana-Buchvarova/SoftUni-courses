function moon(input) {

    let speed = Number(input[0]);
    let fuel100Km = Number(input[1]);
    let totalDistance = 384400 * 2;
    let time = Math.ceil(totalDistance / speed);
    let totalTime = time + 3;
    let fuel = (fuel100Km * totalDistance) / 100;

    console.log(totalTime);
    console.log(fuel);

}

moon(["10000",
"5"]);
