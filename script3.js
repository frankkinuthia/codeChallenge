//PAYE 10% 24000 
const prompt = require('prompt-sync')();
const netSalaryCalculator = (grossSalary) => {
    grossSalary = grossSalary - 200;
  
    if (grossSalary < 0) return "Invalid input";
    var tax = 0;
    let nhif = nhifRate(grossSalary);
  
    if (grossSalary <= 24000) {
      tax = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
      tax = grossSalary * 0.25;
    } else if (grossSalary > 32333) {
      tax = grossSalary * 0.3;
    }
  
    return grossSalary - tax - 200 - nhif;
  };
  
  console.log(netSalaryCalculator(23000));
  
  function nhifRate(grossSalary) {
    if (grossSalary <= 5999) {
      return 150;
    } else if (grossSalary <= 7999) {
      return 300;
    } else if (grossSalary <= 11999) {
      return 400;
    } else if (grossSalary <= 14999) {
      return 500;
    } else if (grossSalary <= 19999) {
      return 600;
    } else if (grossSalary <= 24999) {
      return 750;
    } else if (grossSalary <= 29999) {
      return 850;
    } else if (grossSalary <= 34999) {
      return 900;
    } else if (grossSalary <= 39999) {
      return 950;
    } else if (grossSalary <= 44999) {
      return 1000;
    } else if (grossSalary <= 49999) {
      return 1100;
    } else if (grossSalary <= 59999) {
      return 1200;
    } else if (grossSalary <= 69999) {
      return 1300;
    } else if (grossSalary <= 79999) {
      return 1400;
    } else if (grossSalary <= 89999) {
      return 1500;
    } else if (grossSalary <= 99999) {
      return 1600;
    } else if (grossSalary > 100000) {
      return 1700;
    }
  }