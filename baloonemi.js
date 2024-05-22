function calculateBalloonEMI(principal, annualInterestRate, tenureMonths, balloonPayment) {
    const monthlyInterestRate = annualInterestRate / 12 / 100;


    const adjustedPrincipal = principal - balloonPayment;
    const numerator = adjustedPrincipal * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), tenureMonths);
    const denominator = Math.pow((1 + monthlyInterestRate), tenureMonths) - 1;
    const emi = numerator / denominator;

    const totalPayment = emi * (tenureMonths - 1); 

    const totalPaymentWithBalloon = totalPayment + balloonPayment;

    return {
        monthlyEMI: emi.toFixed(2),
        balloonEMI: balloonPayment.toFixed(2),
        totalPayment: totalPaymentWithBalloon.toFixed(2)
    };
}

// Given Data
const principal = 2743192;
const annualInterestRate = 7.5; 
const tenureMonths = 60; 
const balloonPayment = 685798;

const result = calculateBalloonEMI(principal, annualInterestRate, tenureMonths, balloonPayment);

console.log(`Monthly EMI: $${result.monthlyEMI}`);
console.log(`Balloon EMI: $${result.balloonEMI}`);
console.log(`Total Payment (Including Balloon Payment): $${result.totalPayment}`);