function sumNumbers(input) {

    let num = Number(input[0]);
    let sum = 0;
    let index = 1;
     
    while(index < input.length) {
        
        sum += Number(input[index]);

        if(sum >= num) {
            console.log(sum);
        }

        index++; 

    }

}

sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"]);
