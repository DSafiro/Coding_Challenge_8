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

// Task 5: Loan Payment Calculation
function calculateLoanPayment (principal, rate, time) {
    let totalPayment = principal + (principal * rate * time); // Calculates total payment by subtracting principal from principal * rate * time
    console.log(`Total Payment: $${totalPayment.toFixed(2)}`); // Outputs and rounds total payment
    return totalPayment; // Returns total loan payment
}; // Declares a function that calculates loan payment
calculateLoanPayment(1000, 0.05, 2); // Inputs values and produces expected output of $1100.00
calculateLoanPayment(5000, 0.07, 3); // Inputs values and produces expected output of $6050.00

// Task 6: Identifying Large Transactions
let transactions = [200, 1500, 3200, 800, 2500]; // Initial transactions array
const filterLargeTransactions = (transactions, filterFunction) => { 
    return transactions.filter(filterFunction); // Utilizes filter function to filter transactions above $1000
}; // Declares a function that filters transactions
console.log(filterLargeTransactions(transactions, amount => amount > 1000)); // Produces expected outputs of [1500, 3200, 2500]

// Task 7: Shopping Cart Tracker
function createCartTracker () {
    let totalCartValue = 0; // Declares total cart values and sets it to zero
    return function (item) {
        totalCartValue += item; // Adds item to total cart value
        return totalCartValue; // Returns total cart value
    }; // Declares a function that adds items to total cart value
}; // Declares a function that tracks cart value
let cart = createCartTracker();
console.log(`Total Cart Value: $${cart(20)}`); // Inputs values and produces expected output of $20
console.log(`Total Cart Value: $${cart(35)}`); // Inputs values and produces expected output of $55