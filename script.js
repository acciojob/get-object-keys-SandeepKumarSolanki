// Create the student object
const student = {
  name: "John",  
  age: 25,      
  city: "New York"  
};

function getKeys() {
  return Object.keys(this);  
}


console.log(getKeys(student));  
