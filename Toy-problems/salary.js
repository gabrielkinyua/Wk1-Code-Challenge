// TAX PAYEE
function calculateTax(salary) {
    if (salary < 0) {
        return 0; // Negative salaries
    } 

    let tax = 0;
    const taxBrackets = [
        { limit: 24000, rate: 0.10 },
        { limit: 32334, rate: 0.25 },
        { limit: 500000, rate: 0.30 },
        { limit: 800000, rate: 0.325 },
    ];

    let previousLimit = 0;
    for (let i = 0; i < taxBrackets.length; i++) {
        if (salary > taxBrackets[i].limit) {
            let taxableIncome = taxBrackets[i].limit - previousLimit;
            tax += taxableIncome * taxBrackets[i].rate;
            previousLimit = taxBrackets[i].limit;
        } else {
            let taxableIncome = salary - previousLimit;
            tax += taxableIncome * taxBrackets[i].rate;
            break;
        }
    }

    if (salary > taxBrackets[taxBrackets.length - 1].limit) {
        tax += (salary - taxBrackets[taxBrackets.length - 1].limit) * 0.35;
    }

    return tax; // Add this to return the calculated tax
}

// NHIF
function calculateNHIF(salary) {
    if (salary < 0) {
        return 0; // Handling negative salaries
    }
    const nhifBrackets = {
        7999: 150,
        11999: 300,
        14999: 400,
        19999: 500,
        24999: 600,
    };

    for (let upperLimit in nhifBrackets) {
        if (salary <= upperLimit) {
            return nhifBrackets[upperLimit];
        }
    }

    return 1700; // Fallback for salaries exceeding all NHIF brackets
}

// NSSF
function calculateNSSF(salary) {
    const nssfRate = 0.06;
    const nssfCap = 1800;

    const nssfDeduction = salary * nssfRate;
    return Math.min(nssfCap, nssfDeduction); // Check whether deduction exceeds the cap
}

// Net Salary Calculation
function calculateNetSalary(salary, benefits) {
    const grossSalary = salary + benefits;
    const tax = calculateTax(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);

    const netSalary = grossSalary - tax - nhif - nssf;
    return netSalary;
}

