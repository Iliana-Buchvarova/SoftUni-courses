function projectsCreation(input) {
    
    let arhitectName = input[0];
    let numberProjects = Number(input[1]);
    let hours = numberProjects * 3;

    console.log(`The architect ${arhitectName} will need ${hours} hours to complete ${numberProjects} project/s."`);

}

projectsCreation(["George", "4"]);
