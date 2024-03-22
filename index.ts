#! /usr/bin/env node
//SHABANG

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter firstNumber", type: "number", name: "firstNumber" },
  { message: "Enter secondNumber", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//Conditional Statement

if (answer.Operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
}
else if(answer.Operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
}
else if(answer.Operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
}
else if(answer.Operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
}

else {
 console.log("Please Select Valid operator ");
}