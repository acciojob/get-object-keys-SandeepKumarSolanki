// Create the student object
class Student{
  getKeys(obj){
	  return Object.keys(obj)
  }
};

let student = {
	name: "dev"
}

let st = new Student()
console.log(st.getKeys(student))