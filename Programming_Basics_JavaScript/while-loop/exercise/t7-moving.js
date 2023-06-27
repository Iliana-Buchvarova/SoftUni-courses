function moving(input) {

    let index = 0;
    let width = input[index];
    index++;
    let length = input[index];
    index++;
    let height = input[index];
    index++;
    let volume = width * length * height;
    let command = input[index];
    index++;

    while(command !== "Done") {
        let numberCartons = Number(command);

        volume -= numberCartons;

        if(volume <= 0) {
            console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
            break;
        }

        command = input[index];
        index++;

    }

    if(command === "Done") {
        console.log(`${volume} Cubic meters left.`);
    }

} 

moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"]);
