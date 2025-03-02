// Create the student object
class Student{
  getKeys(obj){
	  return Object.keys(obj)
  }
};

const detail = {
	name : "dev",
	age : 21,
	city : "Lucknow"
}

// Create the student object
const student = {
  name: "John",
};

let myObj = new Student()
console.log(myObj.getKeys(student))
console.log(myObj.getKeys(detail));
