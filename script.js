


// Create the Student class
class Student {
  getKeys(obj) {
	let arr = [...Object.keys(obj)]
    console.log(arr);
	return arr;
  }
}

const student = {
  name: "John",
};
const detail = {
  name: "dev",
  age: 21,
  city: "Lucknow"
};


let myObj = new Student();
myObj.getKeys(student);  
myObj.getKeys(detail);   
