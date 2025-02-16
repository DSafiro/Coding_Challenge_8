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

// Task 3: Service Fee Calculation
const calculateServiceFee = (amount, serviceType) => {
    let serviceRate = {"Premium": 0.15, "Standard": 0.10, "Basic": 0.05}; // Identifies service rate depending on selected service type
    let serviceFee = amount * serviceRate[serviceType]; // Calculates service fee by multiplying amount by service rate
    console.log(`Service Fee: $${serviceFee.toFixed(2)}`); // Outputs and rounds service fee
}; // Declares a function that calculates service fee
calculateServiceFee(200, "Premium"); // Inputs values and produces expected output of $30.00
calculateServiceFee(500, "Standard"); // Inputs values and produces expected output of $50.00

// Task 4: Car Rental Cost Calculation
function calculateRentalCost (days, carType, insurance = false) {
    let rentalCost = {"Economy": 40 * days, "Standard": 60 * days, "Luxury": 100 * days}; // Calculates rental cost by mutliplting selected car type by number of days
    if (insurance === true) { // If insurance equals true -> Adds insurance fee onto rental cost 
        rentalCost[carType] = rentalCost[carType] + (20 * days); // Insurance fee is an additional $20 per day
    };
    console.log(`Total Rental Cost: $${rentalCost[carType]}`); // Outputs total rental cost
    return rentalCost[carType]; // Returns rental cost
}; // Declares a function that calculates rental cost
calculateRentalCost(3, "Economy", true); // Inputs values and produces expected output of $180
calculateRentalCost(5, "Luxury", false); // Inputs values and produces expected output of $500