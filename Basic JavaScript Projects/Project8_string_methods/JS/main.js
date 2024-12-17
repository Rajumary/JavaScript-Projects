// Function to demonstrate the concat() method
function concatStrings() {
    // Create two strings
    let string1 = "Hello, ";
    let string2 = "world!";

    // Use concat() to combine them
    let result = string1.concat(string2);

    // Display the result in the HTML
    document.getElementById("concatResult").textContent = "Concatenated String: " + result;
}

// Function to demonstrate the slice() method
function sliceString() {
    // Create a string to slice
    let originalString = "JavaScript is awesome!";

    // Slice the string from position 0 to 10 (inclusive)
    let result = originalString.slice(0, 10);

    // Display the result in the HTML
    document.getElementById("sliceResult").textContent = "Sliced String: " + result;
}

// Function to demonstrate the toString() method
function convertToString() {
    // Create a number to convert to a string
    let number = 12345;

    // Use toString() to convert the number to a string
    let result = number.toString();

    // Display the result in the HTML
    document.getElementById("toStringResult").textContent = "Converted to String: " + result;
}

// Function to demonstrate the toPrecision() method
function toPrecisionExample() {
    // Create a number
    let number = 123.456789;

    // Use toPrecision() to round the number to 4 significant digits
    let result = number.toPrecision(4);

    // Display the result in the HTML
    document.getElementById("toPrecisionResult").textContent = "To Precision: " + result;
}