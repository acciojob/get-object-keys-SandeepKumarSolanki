// Create the student object
class Student{
  getKeys(obj){
	  return Object.keys(obj)
  }
};

let obj = {
	name: "dev"
}

let st = new Student("Dev")
console.log(st.getKeys(obj))