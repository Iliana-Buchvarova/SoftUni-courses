function graduation(input) {

    let index = 0;
    let name = input[index];
    index++;
    let grade = Number(input[index]);
    index++;
    let clas = 1;
    let sum = 0;
    let badGrade = 0;
    let hasBeenExcluded = false;

    while(clas <= 12) {
        if(grade < 4.00) {
            badGrade++;
            if(badGrade === 2) {
                hasBeenExcluded = true;
                break;
            }

            grade = Number(input[index]);
            index++;
            continue;

        }

        clas++;
        sum += grade;
        grade = Number(input[index]);
        index++;
       
    }

   if(hasBeenExcluded) {
    console.log(`${name} has been excluded at ${clas} grade`);
   }else {
    console.log(`${name} graduated. Average grade: ${(sum / 12).toFixed(2)}`);
   }

}

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"]);
