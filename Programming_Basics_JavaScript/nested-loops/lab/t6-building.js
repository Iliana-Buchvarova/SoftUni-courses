function building(input) {
    
    let numberOfFloors = Number(input[0]);
    let numberOfRoomsPerFloor = Number(input[1]);

    for(let i = numberOfFloors; i > 0; i--) {
        let result = "";
        for(let i1 = 0; i1 < numberOfRoomsPerFloor; i1++) {
            if(i === numberOfFloors) {
                result += "L" + i + i1 + " ";
            } else if(i % 2 === 0) {
                result += "O" + i + i1 + " ";
            } else {
                result += "A" + i + i1 + " ";
            }
        }

        console.log(result);
    }

}

building(["6", "4"]);
