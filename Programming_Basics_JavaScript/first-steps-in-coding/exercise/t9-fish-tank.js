function fishTank(input) {

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]) / 100;
    let totalVolumeInCm = length * width * height;
    let totalVolumeInL = totalVolumeInCm / 1000;
    let volume = percent * totalVolumeInL;
    let volumeLeft = totalVolumeInL - volume;

    console.log(volumeLeft);

} 

fishTank(["85 ", "75 ", "47 ", "17 "]);
