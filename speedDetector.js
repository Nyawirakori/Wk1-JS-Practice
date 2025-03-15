//A function that calculates demerit points
function speedGenerator(){
    //input from the user(driver)
    let speed = prompt("Enter the car's speed:");
    const speedLimit = 70
    let demeritPoints= 5 //km/s
    const excessSpeed = speed - speedLimit;

    //calculating the demerits the drivers will have
     if (speed < speedLimit){
        console.log("Ok")
     } else {
         let driverDemeritPoints = Math.floor((speed - speedLimit) / demeritPoints);
        console.log(`Points: ${driverDemeritPoints}`);

        if (driverDemeritPoints > 12) {
            console.log("License suspended");
     }
}
}

speedGenerator()