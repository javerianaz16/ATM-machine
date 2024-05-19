#! /usr/bin/env node

 import inquirer from "inquirer";

 let myBalance =7000;
 let myPin = 2468;

 console.log("Welcome to ATM machine");

 let pinAnswer =await inquirer.prompt([
  {
   name : "pin",
   type : "number" ,
   message: "Enter your pin number"
  }
 ])
if(pinAnswer.pin === myPin){
    console.log("Pin is correct , login successfully!");

let operationAns =await inquirer.prompt([
    {
    name :"operation",
    type : "list",
    message : "select an operation",
    choices : ["Withdraw Amount" , "Check Balance"]
 }
])

if(operationAns.operation ==="Withdraw Amount"){
  let amountAns =await inquirer.prompt([
  {
     name :"amount",
     type : "number",
     message : "Enter the amount to withdraw!"
  }
 ])
 if(amountAns.amount > myBalance)[
   console.log("Insufficient Balance")
 ]    
else{
    myBalance -= amountAns.amount;
    console.log(`${amountAns.amount} Withdraw sucessfully` );
    console.log(` Your remaining balance is ${myBalance}`);
}
  }

else if(operationAns.operation === "check balance"){
  console.log(`Your account balance is ${myBalance}`);
}

}

else{
  console.log("pin is incorrect , Try again.")
}















