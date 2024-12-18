// Function to append a character to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Add the clicked value to the display
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = ''; // Clear the display
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Use eval to evaluate the expression entered in the display
        display.value = eval(display.value); 
    } catch (e) {
        // If there's an error (e.g., invalid expression), display an error message
        display.value = 'Error';
    }
}