//PAYE 10% 24000 
const prompt = require('prompt-sync')();
//prompt the user to input salary for the calculator:
const basicSalary = parseInt(prompt("Please Enter Your Salary: "));
const totalBenefits = parseInt(prompt("Please Enter Your Benefits: "));
let totalSalary = parseInt(basicSalary + totalBenefits);
function grossSalary (){
  console.log(totalSalary);
}
grossSalary();

function pAYE () {
      if (totalSalary >0 && totalSalary <= 24000) {
      tax = totalSalary * 0.1;
      return tax;
    } else if (totalSalary <= 32333) {
      tax = totalSalary * 0.25;
      return tax;
    } else if (totalSalary > 32333) {
      tax = totalSalary * 0.3;
      return tax;
    } else {
      return `Invalid input`;
    }
  
}
console.log(pAYE());

function nssf () {
  const nssf = 200;
  console.log(nssf);
}

nssf();

function nhifRate() {
  if (totalSalary <= 5999) {
    return 150;
  } else if (totalSalary <= 7999) {
    return 300;
  } else if (totalSalary <= 11999) {
    return 400;
  } else if (totalSalary <= 14999) {
    return 500;
  } else if (totalSalary <= 19999) {
    return 600;
  } else if (totalSalary <= 24999) {
    return 750;
  } else if (totalSalary <= 29999) {
    return 850;
  } else if (totalSalary <= 34999) {
    return 900;
  } else if (totalSalary <= 39999) {
    return 950;
  } else if (totalSalary <= 44999) {
    return 1000;
  } else if (totalSalary <= 49999) {
    return 1100;
  } else if (totalSalary <= 59999) {
    return 1200;
  } else if (totalSalary <= 69999) {
    return 1300;
  } else if (totalSalary <= 79999) {
    return 1400;
  } else if (totalSalary <= 89999) {
    return 1500;
  } else if (totalSalary <= 99999) {
    return 1600;
  } else if (totalSalary > 100000) {
    return 1700;
  }
}
console.log(nhifRate());





