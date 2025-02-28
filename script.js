// Create the student object
const student = {
  name: "John",
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj); // Returns an array of keys of the object
}

// Testing the function
console.log(getKeys(student)); // Output: ["name"]
