   // Retrieve the form and input field elements
const form = document.getElementById("myForm");
const inputField = document.getElementById("inputField");

// Function to validate the input field
function validateInput(event) {
  // Retrieve the input value
  const inputValue = inputField.value;

  // Regular expression pattern for alphanumeric input
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;

  // Check if the input value matches the pattern
  if (!alphanumericRegex.test(inputValue)) {
    // Invalid input: display error message
    alert("Error: Please enter an alphanumeric value.");
    event.preventDefault();  
  } else {
    // Valid input: display confirmation and simulate form submission
    alert("Form submitted successfully (simulated).");
  }
}

// Add event listener to the form for submission
form.addEventListener("submit", validateInput);
