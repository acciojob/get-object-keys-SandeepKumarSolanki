//your JS code here. If required.

// Create the student object
const student = {
  name: "John",
  age: 20,
  city: "New York"
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Exporting getKeys function if needed for your tests (for example, in Cypress testing)
window.getKeys = getKeys;




