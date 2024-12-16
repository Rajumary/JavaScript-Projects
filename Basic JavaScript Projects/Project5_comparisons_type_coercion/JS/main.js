let myVariable = 42;
document.write("The data type of myVariable is: " + typeof myVariable + "<br>");

// 2. Combine a string and a number in an expression
let greeting = "The answer is ";
let number = 42;
document.write(greeting + number + "<br>");  // Output: The answer is 42

// 3. Demonstrating the use of various operators
let a = 5;
let b = 10;

// == (loose equality) - checks if values are equal, ignoring type
document.write("'a' == 5 is " + (a == 5) + "<br>");

// === (strict equality) - checks if values and types are the same
document.write("'a' === 5 is " + (a === 5) + "<br>");

// > (greater than) - checks if 'a' is greater than 'b'
document.write("'a' > 'b' is " + (a > b) + "<br>");

// < (less than) - checks if 'a' is less than 'b'
document.write("'a' < 'b' is " + (a < b) + "<br>");

// && (logical AND) - both conditions need to be true
document.write("(a > 2 && b < 15) is " + (a > 2 && b < 15) + "<br>");

// || (logical OR) - one condition needs to be true
document.write("(a > 10 || b < 15) is " + (a > 10 || b < 15) + "<br>");

// ! (logical NOT) - negates the value
document.write("!(a > 2) is " + !(a > 2) + "<br>");
