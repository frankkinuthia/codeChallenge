const prompt = require('prompt-sync')();
//prompt the user to input marks
const marks = prompt("Please Enter Student Marks: ");
// Writing out our program using nested if else:
  function studentGradeGenerator() {
        
      if (marks > 79 && marks < 100) { 
      console.log("A");
    }
    else if (marks >= 60 && marks <=79) {
      console.log ("B");
    }
    else if (marks >=49 && marks <= 59) {
      console.log("C");
    }
    else if (marks >=40 && marks <= 48) {
      console.log ("D");
    }
    else if (marks >= 0 && marks <= 39) {
      console.log ("E");
    }
    else  {
      console.log (`Invalid!`)
    }
  };
  
   
  studentGradeGenerator();

