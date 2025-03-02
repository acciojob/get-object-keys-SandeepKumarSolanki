// Create the Student class
class Student {
  getKeys(obj) {
    return  Object.keys(obj);  // Get keys of the passed object
     // Return the keys as an array
  }
}


const detail = {
  name: "dev",
  age: 21,
  city: "Lucknow"
};

const student = {
  name: "John",
};

let myObj = new Student();

console.log(myObj.getKeys(student));  
console.log(myObj.getKeys(detail));   
