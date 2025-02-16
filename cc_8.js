// Task 1: Employee Salary Calculation
function calculateSalary (baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); // Calculates net salary by subtracting base salary + bonus and base salary * tax rate
    console.log(`Net Salary: $${netSalary.toFixed(2)}`); // Outputs and rounds net salary
    return netSalary; // Returns net salary
}; // Declares a function that calculates salary
calculateSalary(5000, 500, 0.1); // Inputs values and produces expected output of $5000.00
calculateSalary(7000, 1000, 0.15); // Inputs values and produces expected output of $6950.00

// Task 2: Product Price After Discount
function calculateDiscount (price, discountRate) {
    let finalPrice = price - (price * discountRate); // Calculates final price by subtracting price from price * discount rate
    console.log(`Final Price: $${finalPrice.toFixed(2)}`); // Outputs and rounds final price
    return finalPrice; // Returns final price
}; // Declares function that calulates final price after discount
calculateDiscount(100, 0.2); // Inputs values and produces expected output of $80.00
calculateDiscount(250, 0.15); // Inputs values and produces expected output of $212.50