//A function that calculates Net Salary
  function netSalaryCalculator() {
  // Prompting the user for salary and benefits
  const basicSalaryInput = prompt("Enter your basic salary:");
  const benefitsInput = prompt("Enter your total benefits:");

  // Convert input strings to numbers:
  const basicSalary = parseFloat(basicSalaryInput);
  const benefits = parseFloat(benefitsInput);

  // Input Validation
  if (isNaN(basicSalary) || isNaN(benefits)) {
    console.log("Invalid input. Please enter numeric values.");
    return null; 
  }

  const grossSalary = basicSalary + benefits;

  // KRA PAYE Calculation 
  let paye = 0;
  let taxableIncome = grossSalary;

  if (taxableIncome <= 24000) {
    paye = 2400; // 10% of 24000
  } else if (taxableIncome <= 32333) {
    paye = 2400 + (taxableIncome - 24000) * 0.25;
  } else if (taxableIncome > 32333) {
    paye = 4483.25 + (taxableIncome - 32333) * 0.30;
  }

  // Personal Relief 
  const personalRelief = 2400;
  paye = Math.max(0, paye - personalRelief); // Ensures paye is not negative

  // NHIF Deductions (
  let nhif = 0;
  if (grossSalary <= 5999) {
    nhif = 150;
  } else if (grossSalary <= 7999) {
    nhif = 300;
  } else if (grossSalary <= 11999) {
    nhif = 400;
  } else if (grossSalary <= 14999) {
    nhif = 500;
  } else if (grossSalary <= 19999) {
    nhif = 600;
  } else if (grossSalary <= 24999) {
    nhif = 750;
  } else if (grossSalary <= 29999) {
    nhif = 850;
  } else if (grossSalary <= 34999) {
    nhif = 900;
  } else if (grossSalary <= 39999) {
    nhif = 950;
  } else if (grossSalary <= 44999) {
    nhif = 1000;
  } else if (grossSalary <= 49999) {
    nhif = 1100;
  } else if (grossSalary <= 59999) {
    nhif = 1200;
  } else if (grossSalary <= 69999) {
    nhif = 1300;
  } else if (grossSalary <= 79999) {
    nhif = 1400;
  } else if (grossSalary <= 89999) {
    nhif = 1500;
  } else if (grossSalary <= 99999) {
    nhif = 1600;
  } else {
    nhif = 1700;
  }

  // NSSF deductions
  let nssf = Math.min(400, grossSalary * 0.06); // Tier I and II combined, employee contribution only.
  if (grossSalary <= 6000) {
    nssf = 0;
  }

  const netSalary = grossSalary - paye - nhif - nssf;

  return {
    grossSalary: grossSalary,
    paye: paye,
    nhif: nhif,
    nssf: nssf,
    netSalary: netSalary,
  };
}

// Calling the function and displaying the results
const salaryDetails = netSalaryCalculator();

if (salaryDetails) { 
  console.log("Gross Salary:", salaryDetails.grossSalary);
  console.log("PAYE (Tax):", salaryDetails.paye);
  console.log("NHIF Deduction:", salaryDetails.nhif);
  console.log("NSSF Deduction:", salaryDetails.nssf);
  console.log("Net Salary:", salaryDetails.netSalary);
}
