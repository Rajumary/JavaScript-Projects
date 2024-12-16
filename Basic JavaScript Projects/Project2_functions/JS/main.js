function addToMessage() {
    // Retrieve the current message from the element with the id 'message'
    var currentMessage = document.getElementById('message').innerHTML;
  
    // Define the new text to be added
    var newText = " Welcome to the JavaScript world!";
  
    // Use the += operator to append newText to the currentMessage
    currentMessage += newText;
  
    // Update the content of the 'message' element with the new message
    document.getElementById('message').innerHTML = currentMessage;
  }
  
  // Function to clear the message
  function clearMessage() {
    // Set the content of the 'message' element to an empty string, clearing it
    document.getElementById('message').innerHTML = '';
  }