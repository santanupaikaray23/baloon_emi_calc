function calculateBalloonEMI(principal, annualInterestRate, tenureMonths, balloonPayment) {
    const monthlyInterestRate = annualInterestRate / 12 / 100;

    // Calculate the EMI for the principal amount excluding the balloon payment
    const adjustedPrincipal = principal - balloonPayment;
    const numerator = adjustedPrincipal * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), tenureMonths);
    const denominator = Math.pow((1 + monthlyInterestRate), tenureMonths) - 1;
    const emi = numerator / denominator;

    // Total payment to be made till the tenure ends (excluding balloon payment)
    const totalPayment = emi * (tenureMonths - 1); // Only 59 EMIs for regular installments

    // The remaining balloon payment to be added at the end
    const totalPaymentWithBalloon = totalPayment + balloonPayment;

    return {
        monthlyEMI: emi.toFixed(2),
        balloonEMI: balloonPayment.toFixed(2),
        totalPayment: totalPaymentWithBalloon.toFixed(2)
    };
}

// Given Data
const principal = 2743192; // Loan amount
const annualInterestRate = 7.5; // Assuming an interest rate of 7.5% per annum
const tenureMonths = 60; // Loan tenure in months
const balloonPayment = 685798; // Balloon payment at the end of the loan term

const result = calculateBalloonEMI(principal, annualInterestRate, tenureMonths, balloonPayment);

console.log(`Monthly EMI: $${result.monthlyEMI}`);
console.log(`Balloon EMI: $${result.balloonEMI}`);
console.log(`Total Payment (Including Balloon Payment): $${result.totalPayment}`);