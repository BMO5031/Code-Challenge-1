function calculateDemeritPoints(speed) {
    const speedLimit = 85;
    const kmPerDemeritPoint =5;
 
     if (speed <= 85) asyn{
       console.log("Ok");
     } 
 
     else {
       const demeritPoints = Math.floor((speed - 85) / 5);
       console.log("Points: " + demeritPoints);
 
       if (demeritPoints > 12) {
         console.log("License suspended");
       }
     }
   }