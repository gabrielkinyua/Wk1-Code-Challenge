function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5

    let demeritPoints;

    if (speed <= speedLimit) {
        console.log("Ok");
        return 0;
    }
    else {
        const excessSpeed = speed - speedLimit;
        demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);
    }

    if (demeritPoints > 12) {
        console.log("License suspended");
    }
    else {
        console.log(`Demerit points: ${demeritPoints}`)
    }
    return demeritPoints;
}

console.log(speedDetector(150));