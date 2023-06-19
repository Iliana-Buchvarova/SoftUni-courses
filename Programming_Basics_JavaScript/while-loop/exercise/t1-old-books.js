function oldBooks(input) {

    let index = 0;
    let favouriteBook = input[index];
    index++;
    let command = input[index];
    index++;
    let booksCounter = 0;

    while(command !== "No More Books") {
        if(command === favouriteBook) {
            console.log(`You checked ${booksCounter} books and found it.`);
            break;
        }

        booksCounter++;
        command = input[index];
        index++;

    }

    if(command === "No More Books") {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${booksCounter} books.`);
    }

}

oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"]);
