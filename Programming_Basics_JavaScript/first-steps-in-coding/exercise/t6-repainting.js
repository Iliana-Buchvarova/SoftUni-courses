function repainting(input) {

    let amountNylon = Number(input[0]);
    let amountPaint = Number(input[1]);
    let amountOfThinner = Number(input[2]);
    let hour = Number(input[3]);
    let sumNylon  = (amountNylon + 2) * 1.50;
    let sumPaint = amountPaint * 14.50 + ((amountPaint * 14.50) * 0.1 );
    // let sumPaint2 = (amountPaint * 14.50) * 1.1
    let sumThinner = amountOfThinner * 5.00;
    let sumMaterials = sumNylon + sumPaint + sumThinner + 0.40;
    let sumBuilders = (sumMaterials * 0.3) * hour;
    let total = sumMaterials + sumBuilders;

    console.log(total);

}

repainting(["10", "11", "4", "8"]);
