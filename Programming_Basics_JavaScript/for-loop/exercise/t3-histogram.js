function histogram(input) {

    let n = Number(input[0]);

    let p1number = 0;
    let p2number = 0;
    let p3number = 0;
    let p4number = 0;
    let p5number = 0;

    for(let i = 1 ; i <= n; i++) {
        let curNumber = Number(input[i]);

        if(curNumber < 200) {
            p1number++;
        } else if (curNumber <= 399) {
            p2number++;
        } else if (curNumber <= 599) {
            p3number++;
        } else if (curNumber <= 799) {
            p4number++;
        } else {
            p5number++;
        }
    
    }

    let p1numberPercent = (p1number/n) * 100;
    let p2numberPercent = (p2number/n) * 100;
    let p3numberPercent = (p3number/n) * 100;
    let p4numberPercent = (p4number/n) * 100;
    let p5numberPercent = (p5number/n) * 100;

   
    console.log(`${p1numberPercent.toFixed(2)}%`);
    console.log(`${p2numberPercent.toFixed(2)}%`);
    console.log(`${p3numberPercent.toFixed(2)}%`);
    console.log(`${p4numberPercent.toFixed(2)}%`);
    console.log(`${p5numberPercent.toFixed(2)}%`);

}

histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"]);
