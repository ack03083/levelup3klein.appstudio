let i = 0
for (i; i < 10; i++) { 
  
alert("This is the monthly loan payment calculator! Let us help calculate your loans.");
let chooseCalculator = ("Which calculator do you want to use? Car or house?"); 
    if (chooseCalculator == "car") {
      alert("You have chosen the loan calculator for car payments."); 
      
  let carLoanAmount = Number(prompt("Enter loan amount"));
  let carLoanMonths = Number(prompt("Enter how many months your payment lasts"));
  let carInterestRate = Number(prompt("Enter your loan interest rate.")); 
  
  /*1. a function named carLoanPayment that takes 3 arguments and returns 
the monthly payment to the main program. */  
  
function carLoanPayment(carLoanAmount, carLoanMonths, carInterestRate) {
let carPaymentFormula = (carLoanAmount / carLoanMonths) * ((carInterestRate / 100) + 1); 
return carPaymentFormula;
};
  
let carTotal = carLoanPayment (carLoanAmount, carLoanMonths, carInterestRate);
alert("A car loan for $$(carloanAmount) over $(carLoanYears) years at $(carLoanInterest) would have a monthly payment of $$(homeTotal");

let exitCommand = prompt("If you are finished, please type 'done'. Thank you and have a nice day.");
  if exitCommand == "done" {
  break; } 
  
} else if (chooseCalculator == 'house') {
  alert("You have chosen the loan calculator for home payments.");
  
  let homeLoanAmount = Number(prompt("Enter loan amount"));
  let homeLoanYearss = Number(prompt("Enter how many years your payment lasts (please choose either 15 or 30 years)."));
  let homeInterestRate = Number ("Enter your loan interest rate.")); 
  
  /* 2. a function named homeLoanPayment that takes 3 arguments and returns 
  the monthly payment to the main program.  Term can only be 15 or 30 years. */ 
  
  function homeLoanPayment(homeLoanAmount, homeLoanYears, homeInterestRate) {
let carPaymentFormula = (homeLoanAmount / homeLoanYears * 12) * ((homeInterestRate / 100) + 1); 
return homePaymentFormula;
};

/* 4) main program that gets the answer back from the 
function and outputs it to an alert in this format */

let homeTotal = homeLoanPayment (homeLoanAmount, homeLoanYears, homeInterestRate);
alert("A home loan for $$(homeloanAmount) over $(homeLoanYears) years at $(homeLoanInterest) would have a monthly payment of $$(homeTotal");

let exitCommand2 = prompt("If you are done, please type 'done'. Thank you and have a nice day.");
  if exitCommand2 == "done" {
  break; } 

alert("The loan calculator is now shutting down."); 

}};
