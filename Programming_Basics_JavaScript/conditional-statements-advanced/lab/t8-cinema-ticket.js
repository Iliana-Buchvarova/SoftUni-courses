function cinemaTicket(input) {
    
    let weekDay = input[0];

    if(weekDay === "Monday" || weekDay === "Tuesday" || weekDay === "Friday") {
        console.log("12");
    } else if (weekDay === "Wednesday" || weekDay === "Thursday") {
        console.log("14");
    } else {
        console.log("16");
    }
        
} 

cinemaTicket(["Monday"]);
