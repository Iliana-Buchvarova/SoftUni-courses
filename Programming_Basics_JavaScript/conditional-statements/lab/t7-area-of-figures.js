function areaOfFigures(input) {

    let type = input[0];

    if(type === "square") {
        let side = Number(input[1]);
        let squareArea = side * side;
        console.log(squareArea.toFixed(3));

    } else if(type === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        let rectangleArea = sideA * sideB;
        console.log(rectangleArea.toFixed(3));

    } else if(type === "circle") {
        let radius = Number(input[1]);
        let circleArea = Math.PI * (radius*radius);
        console.log(circleArea.toFixed(3));

    } else {
        let side = Number(input[1]);
        let h = Number(input[2]);
        let triangleArea = side * h/2;
        console.log(triangleArea.toFixed(3));
    }

}

areaOfFigures(["circle", "6"]);
