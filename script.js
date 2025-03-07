// Create the student object
const student = {
  name: "John",
};

// Function to get all keys from the object
function getKeys(obj) {
  return Object.keys(obj);
}

// Testing the function
console.log(getKeys(student));



// // Create the Student class
// class Student {
//   getKeys(obj) {
//     return  Object.keys(obj);
//   }
// }
// const detail = {
//   name: "dev",
//   age: 21,
//   city: "Lucknow"
// };
// const student = {
//   name: "John",
// };
// let myObj = new Student();
// console.log(myObj.getKeys(student));  
// console.log(myObj.getKeys(detail));   
