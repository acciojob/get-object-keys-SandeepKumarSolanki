// Create the student object with the getKeys method
const student = {
  name: "John",
  age: 20,
  city: "New York",
  getKeys: function() {
    return Object.keys(this);
  }
};

// Now you can use myObj.getKeys()
// In your tests
const myObj = student;  // Assuming myObj is supposed to be the student object
console.log(myObj.getKeys()); // Output: ["name", "age", "city"]

