// 1. Declare a global variable
let globalVariable = "I am a global variable";

// 2. Declare a local variable inside a function
function checkEligibility() {
    // Local variable (only accessible inside this function)
    let localVariable = "I am a local variable";

    // Example if statement that checks a condition
    let age = 20;
    if (age >= 18) {
        document.getElementById("eligibilityResult").innerHTML = "You are eligible!";
    } else {
        document.getElementById("eligibilityResult").innerHTML = "You are not eligible.";
    }

    // Display both local and global variables in the console for debugging
    console.log(globalVariable);
    console.log(localVariable);  // This will work because it's within the function scope
}

// 3. Intentional error in a function (for debugging)
function faultyFunction() {
    let result = num1 + num2;  // Error: num1 and num2 are not defined
    console.log(result);
}

// Use console.log to debug the error
try {
    faultyFunction();
} catch (error) {
    console.log("Error in faultyFunction: ", error);
}

// 4. Time_function that logs execution time
function Time_function() {
    // Record the start time
    let startTime = new Date();

    // Example code to simulate some task (e.g., a loop or an API call)
    let counter = 0;
    for (let i = 0; i < 1000000; i++) {
        counter++;
    }

    // Record the end time
    let endTime = new Date();

    // Calculate the time taken for the function execution
    let timeTaken = endTime - startTime;

    // Display the result in the HTML
    document.getElementById("timeFunctionResult").innerHTML = `Time taken for execution: ${timeTaken} milliseconds`;

    // Log the time in the console for debugging
    console.log(`Time taken for execution: ${timeTaken} milliseconds`);
}