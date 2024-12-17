// 1. Function that utilizes a while loop
function whileLoopExample() {
    let result = "";
    let i = 0;

    // While loop to add numbers from 1 to 5 to the result string
    while (i < 5) {
        i++;
        result += "Number: " + i + "<br>"; // Concatenate the current number to the result
    }

    // Display the result in the HTML element with id 'whileResult'
    document.getElementById("whileResult").innerHTML = result;
}

// 2. Function that utilizes a for loop
function forLoopExample() {
    let result = "";

    // For loop to iterate through an array of colors
    let colors = ["red", "blue", "green", "yellow", "purple"];
    for (let i = 0; i < colors.length; i++) {
        result += "Color: " + colors[i] + "<br>"; // Concatenate each color to the result
    }

    // Display the result in the HTML element with id 'forResult'
    document.getElementById("forResult").innerHTML = result;
}

// 3. Function that utilizes an array
function arrayExample() {
    let result = "";

    // Creating an array of numbers
    let numbers = [10, 20, 30, 40, 50];
    result += "Array of numbers: <br>" + numbers.join(", ") + "<br>"; // Join the array elements with commas

    // Adding the sum of the numbers in the array
    let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    result += "Sum of numbers: " + sum;

    // Display the result in the HTML element with id 'arrayResult'
    document.getElementById("arrayResult").innerHTML = result;
}

// 4. Function that creates an object using the 'let' keyword
function objectExample() {
    // Creating an object using 'let'
    let person = {
        name: "John",
        age: 30,
        job: "Developer"
    };

    // Displaying the object's properties
    let result = "Object Details: <br>";
    result += "Name: " + person.name + "<br>";
    result += "Age: " + person.age + "<br>";
    result += "Job: " + person.job;

    // Display the result in the HTML element with id 'objectResult'
    document.getElementById("objectResult").innerHTML = result;
}