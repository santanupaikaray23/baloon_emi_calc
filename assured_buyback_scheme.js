// Given Data
const exShowroomPrice = 3569000;
const tcs = exShowroomPrice * 0.01;
const registrationCharges = 548415;
const insurance = 197987;
const fastTag = 600;
const docsAndDelivery = 31500;
const extendedWarranty = 52000;
const onRoadPrice = 4435192;
const vehicleDiscount = 100000;
const insuranceDiscount = 92000;
const finalOnRoadPrice = 4243192;
const loanPercentage = 0.75;
const processingFees = 6400;
const stampDuty = 6364;
const emiAmount = 57626;
const emiCount = 59;
const balloonPercentage = 0.25;
const buybackValue = 2000000;

const loanAmount = finalOnRoadPrice * loanPercentage;

const balloonEMI = loanAmount * balloonPercentage;

const marginMoney = finalOnRoadPrice - loanAmount;
const totalDownPayment = marginMoney + processingFees + stampDuty;

const differenceAfterBuyback = balloonEMI - buybackValue;

console.log("Loan Amount: ₹" + loanAmount.toFixed(2));
console.log("Balloon EMI: ₹" + balloonEMI.toFixed(2));
console.log("Total Down Payment: ₹" + totalDownPayment.toFixed(2));
console.log("Difference after Buyback Value: ₹" + differenceAfterBuyback.toFixed(2));

console.log("Regular EMI (₹" + emiAmount + ") for " + emiCount + " months.");