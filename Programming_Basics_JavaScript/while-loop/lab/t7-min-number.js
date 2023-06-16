function minNumber(input) {

    let index = 0;
    let command = input[index];
    index++;
    let minnNumber = Number.MAX_SAFE_INTEGER;

    while(command !== "Stop") {

        let num = Number(command);

        if(minnNumber > num) {
            minnNumber = num;
        }

        command = input[index];
        index++;

    }

    console.log(minnNumber);

}

minNumber(["100",
"99",
"80",
"70",
"Stop"]);
