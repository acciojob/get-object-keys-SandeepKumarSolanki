// Create the student object
const student = {
  name: "John",  
  age: 25,      
  city: "New York"  
};

Object.prototype.getKeys =  function(){
  return Object.keys(this);  
}


console.log(student.getKeys());  
