// car loan 

  let carLoanAmount = Number(prompt("Enter loan amount"));
  let carLoanMonths = Number(prompt("Enter how many months your payment lasts"));
  let carInterestRate = Number(prompt("Enter your loan interest rate.")); 
  
function carLoanPayment(carLoanAmount, carLoanMonths, carInterestRate) {
let carPaymentFormula = (carLoanAmount / carLoanMonths) * ((carInterestRate / 100) + 1); 
return carPaymentFormula;
};
  
let carTotal = carLoanPayment (carLoanAmount, carLoanMonths, carInterestRate);
alert("A car loan for $$(carloanAmount) over $(carLoanYears) years at $(carLoanInterest) would have a monthly payment of $$(homeTotal");


//house loan 

  let homeLoanAmount = Number(prompt("Enter loan amount"));
  let homeLoanYearss = Number(prompt("Enter how many years your payment lasts (please choose either 15 or 30 years)."));
  let homeInterestRate = Number ("Enter your loan interest rate.")); 
  
    function homeLoanPayment(homeLoanAmount, homeLoanYears, homeInterestRate) {
let carPaymentFormula = (homeLoanAmount / homeLoanYears * 12) * ((homeInterestRate / 100) + 1); 
return homePaymentFormula;
};

let homeTotal = homeLoanPayment (homeLoanAmount, homeLoanYears, homeInterestRate);
alert("A home loan for $$(homeloanAmount) over $(homeLoanYears) years at $(homeLoanInterest) would have a monthly payment of $$(homeTotal"); 