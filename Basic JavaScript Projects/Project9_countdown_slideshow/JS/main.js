// Countdown Timer Function
function countdown() {
    // Set the target date for the countdown (1 minute from now)
    let targetDate = new Date().getTime() + 60000; // 60 seconds

    // Update the countdown every 1 second
    let countdownInterval = setInterval(function() {
        // Get the current time
        let now = new Date().getTime();

        // Calculate the remaining time
        let timeLeft = targetDate - now;

        // Time calculations for days, hours, minutes, and seconds
        let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        // Display the result in the HTML
        document.getElementById("countdown").textContent = minutes + "m " + seconds + "s ";

        // If the countdown is finished, display a message
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").textContent = "EXPIRED";
        }
    }, 1000);
}

// Slideshow Functionality
let slideIndex = 0; // Initialize slide index to show the first slide

// Function to change the slide
function changeSlide(n) {
    showSlides(slideIndex += n); // Change slide by n
}

// Function to display the current slide
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    // Reset slide index if it goes out of bounds
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides and show the current one
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block"; // Show the current slide
}

// Call the countdown function when the page loads
countdown();

// Start the slideshow by showing the first slide
showSlides(slideIndex);
