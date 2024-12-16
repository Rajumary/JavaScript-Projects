let dictionary = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Function to display a key-value pair from the dictionary
  function displayKeyValue() {
    // Select the paragraph with id 'output' to display the result
    let output = document.getElementById('output');
    
    // Define the key to display its value
    let key = "age";  // You can change this key to any key in the dictionary
  
    // Check if the key exists in the dictionary
    if (dictionary.hasOwnProperty(key)) {
      // Display the key and its value
      output.innerHTML = key + ": " + dictionary[key];
    } else {
      // If the key doesn't exist, display a message
      output.innerHTML = "Key not found!";
    }
  }
  
  // Function to delete a key from the dictionary
  function deleteKey() {
    // Define the key to delete from the dictionary
    let keyToDelete = "name";  // You can change this to any key in the dictionary
  
    // Check if the key exists before deleting it
    if (dictionary.hasOwnProperty(keyToDelete)) {
      delete dictionary[keyToDelete];  // Delete the key-value pair from the dictionary
      alert(keyToDelete + " has been deleted!");  // Alert the user
    } else {
      alert("Key not found to delete!");  // If the key doesn't exist
    }
  }
  