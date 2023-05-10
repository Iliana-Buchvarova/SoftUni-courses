function vacationBooksList(input) {

    let numberOfPages = Number(input[0]);
    let pagesForOneHour = Number(input[1]);
    let numberDays = Number(input[2]);
    let sumHour = numberOfPages / pagesForOneHour;
    let numberHour = sumHour / numberDays;

    console.log(numberHour);

} 

vacationBooksList(["212","20","2"]);
