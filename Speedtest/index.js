function checkspeed() {
  const speed = parseFloat(prompt("Enter the car speed:"));

  if (speed <= 70) {
    return message.textContent = 'OK'
  }else if (checkSpeed > 70 && checkSpeed < 130){
    return points }
    
    const demeritpoints = Math.floor((speed - 70) / 5);

    if (demeritpoints >= 12) {
      return message.textContent = 'License suspended'
  }
}

console.log(checkspeed(180))