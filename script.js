// Create the student object
class Student{
  getKeys(obj){
	  return Object.keys(obj)
  }
};

let student = {
	name: "dev"
}

let myObj = new Student()
console.log(myObj.getKeys(student))