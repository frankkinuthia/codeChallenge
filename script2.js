const prompt = require('prompt-sync')();
//prompt the user for input
const speed = prompt("Please Enter Car Speed: ");
let points = (speed - 70) / 5;

function speedDetector() {
    if (speed < 70) {
      console.log ("Ok");
    } 
    else if (points > 12) {
        console.log("License suspended");
      } 
    else {
        console.log(`Points: ${points}`);
      } 
}

speedDetector();
