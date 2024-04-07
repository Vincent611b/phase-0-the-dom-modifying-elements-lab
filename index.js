// Write your code here!
const div = document.getElementById(`main`)
div.remove();

// Create a new <div> element with id "victory"
const newHeader = document.createElement("h1");
newHeader.id = "victory";

// Create a new <h1> element
const h1 = document.createElement("h1");
h1.textContent = "Vincent is the champion";

// Append the h1 element to the newHeader element
newHeader.appendChild(h1);

// Append the newHeader element to the document body or any other desired element
document.body.appendChild(newHeader); // Appending to the document body





