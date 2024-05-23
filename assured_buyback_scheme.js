function calculateBalloonEMI(principal, annualInterestRate, loanTermMonths, balloonPayment) {
   
    let monthlyInterestRate = annualInterestRate / 12 / 100;
    

    let totalPayments = loanTermMonths;
    
   
    let amortizingPrincipal = principal - balloonPayment;
    let EMI = (amortizingPrincipal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) / 
              (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
    
    return {
        EMI: EMI,
        balloonPayment: balloonPayment,
        totalPayment: (EMI * (totalPayments - 1)) + balloonPayment 
    };
}


let principal = 3182000;
let annualInterestRate = 10; 
let loanTermMonths = 60; 
let balloonPayment = 795500; 

let result = calculateBalloonEMI(principal, annualInterestRate, loanTermMonths, balloonPayment);
console.log(`Monthly EMI for the first 59 months: ${result.EMI.toFixed(2)}`);
console.log(`Balloon Payment in the 60th month: ${result.balloonPayment.toFixed(2)}`);
console.log(`Total Payment over the loan term: ${result.totalPayment.toFixed(2)}`);