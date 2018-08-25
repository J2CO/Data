let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 18;
if(registeredEarly && runnerAge > 18) {
  raceNumber += 1000;
}

if(registeredEarly && runnerAge > "18"){
  console.log(`Your Race begins at 9:30am and your Number is: ${raceNumber}.`);
}
else if(!registeredEarly && runnerAge > "18"){
  console.log(`Your Race begins at 11:00am and your Number is: ${raceNumber}.`);
}
else if(runnerAge < "18"){
  console.log(`Your Race begins at 12:30pm and your Number is: ${raceNumber}.`);
}
else {
  console.log('Please check-in at the Registration desk - thanks!');
}
