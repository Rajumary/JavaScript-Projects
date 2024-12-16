function performAddition() {
    var num1 = 5;
    var num2 = 3;
    var result = num1 + num2;
  
    // Update the HTML with the result of addition
    document.getElementById('Math').innerHTML = "Addition: " + result;
  }
  
  // Function for subtraction operator (-)
  function performSubtraction() {
    var num1 = 10;
    var num2 = 4;
    var result = num1 - num2;
  
    // Update the HTML with the result of subtraction
    document.getElementById('Math').innerHTML = "Subtraction: " + result;
  }
  
  // Function for multiplication operator (*)
  function performMultiplication() {
    var num1 = 6;
    var num2 = 7;
    var result = num1 * num2;
  
    // Update the HTML with the result of multiplication
    document.getElementById('Math').innerHTML = "Multiplication: " + result;
  }
  
  // Function for modulo operator (%)
  function performModulo() {
    var num1 = 10;
    var num2 = 3;
    var result = num1 % num2;
  
    // Update the HTML with the result of modulo operation
    document.getElementById('Math').innerHTML = "Modulo (Remainder): " + result;
  }
  
  // Function for increment operator (++)
  function incrementValue() {
    var num = 5;
    num++;  // Increment the value of num by 1
  
    // Update the HTML with the incremented value
    document.getElementById('Math').innerHTML = "Incremented Value: " + num;
  }
  
  // Function for decrement operator (--)
  function decrementValue() {
    var num = 5;
    num--;  // Decrement the value of num by 1
  
    // Update the HTML with the decremented value
    document.getElementById('Math').innerHTML = "Decremented Value: " + num;
  }
  
  // Function utilizing Math.random()
  function generateRandomNumber() {
    var randomNum = Math.random();  // Generate a random number between 0 and 1
  
    // Update the HTML with the random number
    document.getElementById('Math').innerHTML = "Random Number: " + randomNum;
  }
  