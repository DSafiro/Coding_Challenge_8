// Task 1: Employee Salary Calculation
function calculateSalary (baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); // Calculates net salary by subtracting base salary + bonus and base salary * tax rate
    console.log(`Net Salary: $${netSalary.toFixed(2)}`); // Outputs and rounds net salary
    return netSalary; // Returns net salary
}; // Declares a function that calculates salary
calculateSalary(5000, 500, 0.1); // Inputs values and produces expected output of $5000.00
calculateSalary(7000, 1000, 0.15); // Inputs values and produces expected output of $6950.00