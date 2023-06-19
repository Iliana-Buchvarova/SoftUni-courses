function examPreparation(input) {

    let index = 0;
    let maxBadGrade = Number(input[index]);
    index++;
    let problemName = input[index];
    index++;
    let grade = Number(input[index]);
    index++;
    let numberBadGrades = 0;
    let gradeCounter = 0;
    let totalSumGrades = 0;
    let lastProblem = "";

    while(problemName !== "Enough") {
        lastProblem = problemName;

        if(grade <= 4) {
            numberBadGrades++;
        }

        if(numberBadGrades === maxBadGrade) {
            console.log(`You need a break, ${numberBadGrades} poor grades.`);
            break;
        }

        gradeCounter++;
        totalSumGrades += grade;

        problemName = input[index];
        index++;

        grade = Number(input[index]);
        index++;
        
    }

    if(problemName === "Enough") {
        let avrGrade = totalSumGrades/gradeCounter;
        console.log(`Average score: ${avrGrade.toFixed(2)}`);
        console.log(`Number of problems: ${gradeCounter}`);
        console.log(`Last problem: ${lastProblem}`);
    }
  
}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"]);
