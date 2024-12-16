// 1. Ternary Operation Function - Check if a user is eligible based on age
function checkEligibility() {
    // Get the value from the input field
    let age = document.getElementById("age").value;

    // Ternary operator: check if age is 18 or above
    let result = (age >= 18) ? "You are eligible!" : "You are not eligible.";

    // Display the result in the HTML element with id 'eligibilityResult'
    document.getElementById("eligibilityResult").innerHTML = result;
}

// 2. Constructor Function using 'new' and 'this' keywords
function Person(name, age) {
    // 'this' is used to assign properties to the object
    this.name = name;
    this.age = age;

    // Method to display information about the person
    this.describe = function() {
        return `${this.name} is ${this.age} years old.`;
    };
}

// 3. Function to create a new Person object and display its result
function createPerson() {
    // Create a new Person object using the 'new' keyword
    let person1 = new Person("John Doe", 30);

    // Display the result of the describe method in the HTML element
    document.getElementById("personResult").innerHTML = person1.describe();
}

// 4. Nested Function Example
function outerFunction() {
    let outerVar = "This is the outer function.";

    // Nested function
    function innerFunction() {
        let innerVar = "This is the inner function.";
        // Display both variables together
        document.getElementById("nestedFunctionResult").innerHTML = outerVar + " " + innerVar;
    }

    // Call the inner function from the outer function
    innerFunction();
}