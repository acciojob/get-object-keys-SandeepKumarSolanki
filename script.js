


// Create the Student class
class Student {
  getKeys(obj) {
    return  Object.keys(obj);
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
myObj.getKeys(student);  
myObj.getKeys(detail);   
